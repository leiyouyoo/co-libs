import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { STComponent } from './st.component';
import { PlatformSettingService } from '@co/cds';
import { STColumn, STColumnSetting } from './st.interfaces';
import { cloneDeep } from 'lodash';
import { UserCustomConfigService } from '@co/common';
import { TranslateService } from '@ngx-translate/core';
import { mergeSorted } from '@co/core';

@Component({
  selector: 'column-config',
  template: `
    <div *ngIf="configName">
      <i nz-icon nzType="setting" nzTheme="outline"
         class="icon-setting"
         #columnSettingPopover="nzPopover"
         nz-popover
         nzPopoverTrigger="click"
         nzPopoverPlacement="bottomRight"
         [nzPopoverTitle]="'stSetting' | internalI18n"
         [nzPopoverContent]="columnSettingTpl"
         nzPopoverOverlayClassName="st-column-setting-popover"
         (nzPopoverVisibleChange)="$event && process()"
      ></i>
      <ng-template #columnSettingTpl>
        <div class="container">
          <div class="container_header">
            <label nz-checkbox
                   [nzIndeterminate]="getIndeterminate()"
                   [ngModel]="getCheckAll()"
                   (ngModelChange)="onCheckAllChange($event)" >
            {{ getCountByStatus(true) }}/{{ listData?.length || 0 }} {{ 'Columns' | internalI18n }}
            </label>
          </div>
          <div class="container_main">
            <div cdkDropList (cdkDropListDropped)="drop($event)">
              <div *ngFor="let i of listData" class="container_main_item" cdkDrag style="cursor: move;">
                <label nz-checkbox [(ngModel)]="i.columnShow">
                {{i.title | translate}}
                  </label>
              </div>
            </div>
          </div>
          <div class="container_btn">
            <button nz-button [nzSize]="'small'" nzType="primary" [nzLoading]="loading" (click)="save(columnSettingPopover)" style="margin-right: 5px;">{{ 'Save' | internalI18n }}</button>
            <button nz-button [nzSize]="'small'" nzType="default" (click)="columnSettingPopover.hide()" style="margin-right: 5px;">{{ 'Cancel'|internalI18n }}</button>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: [`./column-config.component.less`],
})
export class ColumnConfigComponent implements OnInit {
  @Input() configName;
  listData: STColumn[] = [];
  @Output() closed = new EventEmitter();

  loading = false;

  constructor(private stComponent: STComponent,
              private userCustomConfigService: UserCustomConfigService,
              private translateService: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  process() {
    const settingColumns = this.userCustomConfigService.getByPath([this.stComponent.columnSettingName, 'columns'])
    let columns =
      cloneDeep(this.stComponent.columns)
        .filter(o => !!o.index)
        .map(o => {
          o.columnShow = true;
          return o;
        });
    this.listData = mergeSorted(columns, settingColumns, 'index');
  }

  save(popover) {
    this.loading = true;
    const cols = this.listData.map(o => ({ index: o.index, columnShow: o.columnShow, }));
    this.userCustomConfigService.setCurrentUserSetting([this.stComponent.columnSettingName, 'columns'], cols)
      .finally(() => this.loading = false)
      .then(() => {
        popover?.hide();
        this.stComponent.resortColumns();
        this.closed.emit(true);
      })
  }

  cancel() {
    this.closed.emit(false);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listData, event.previousIndex, event.currentIndex);
  }

  onCheckAllChange(e: boolean) {
    this.listData?.forEach(o => o.columnShow = e)
  }

  getCountByStatus(e: boolean): number {
    return this.listData?.filter(o => o.columnShow === e).length;
  }

  getCheckAll(): boolean {
    return this.getCountByStatus(true) === this.listData?.length;
  }

  getIndeterminate(): boolean {
    return !this.getCheckAll() && this.getCountByStatus(false) !== 0;
  }
}
