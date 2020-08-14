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
         [nzPopoverTitle]="'设置列表内容'"
         [nzPopoverContent]="columnSettingTpl"
         nzPopoverOverlayClassName="st-column-setting-popover"
         (nzPopoverVisibleChange)="$event && process()"
      ></i>
      <ng-template #columnSettingTpl>
        <div class="container">
          <div class="container_main">
            <div cdkDropList (cdkDropListDropped)="drop($event)">
              <div *ngFor="let i of listData" class="container_main_item" cdkDrag style="cursor: move;">
                <input type="checkbox" [(ngModel)]="i.columnShow">
                {{i.title}}
              </div>
            </div>
          </div>
          <div class="container_btn">
            <button nz-button [nzSize]="'small'" nzType="primary" [nzLoading]="loading" (click)="save(columnSettingPopover)" style="margin-right: 5px;">保存</button>
            <button nz-button [nzSize]="'small'" nzType="default" (click)="columnSettingPopover.hide()" style="margin-right: 5px;">取消</button>
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
}
