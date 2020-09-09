import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { STComponent } from './st.component';
import { PlatformSettingService } from '@co/cds';
import { STColumn, STColumnSetting } from './st.interfaces';
import { cloneDeep } from 'lodash';
import { UserCustomConfigService } from '@co/common';
import { TranslateService } from '@ngx-translate/core';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
import { mergeSorted } from './utils';

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
            {{ getCountByStatus(true) }}/{{ nodes?.length || 0 }} {{ 'Columns' | internalI18n }}
            </label>
          </div>
          <div class="container_main">
            <!--<div cdkDropList (cdkDropListDropped)="drop($event)">
              <div *ngFor="let i of listData" class="container_main_item" cdkDrag style="cursor: move;">
                <label nz-checkbox [(ngModel)]="i.columnShow">
                {{i.title | translate}}
                  </label>
              </div>
            </div>-->
            <nz-tree [nzData]="nodes"
                     nzDraggable
                     nzBlockNode
                     [nzBeforeDrop]="nzBeforeDrop"
                     (nzOnDrop)="nzOnDrop($event)"
                     nzCheckable></nz-tree>
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
  @Output() closed = new EventEmitter();
  nodes: NzTreeNodeOptions[] = [];

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
    const listData = mergeSorted(columns, settingColumns, 'index');
    const buildNodes = (cols: any[]) => {
      return cols?.map(col => {
        if (!col) return col;
        return {
          title: col.title,
          key: col.index,
          checked: col.columnShow,
          isLeaf: !col?.children?.length,
          children: buildNodes(col.children),
        } as NzTreeNodeOptions;
      })
    };
    this.nodes = buildNodes(listData);
  }

  save(popover) {
    this.loading = true;
    const buildParam = (oo: NzTreeNodeOptions[]) => {
      return oo?.map(o => {
        const param = { index: o.key, columnShow: o.checked, };
        if (o.children?.length) {
          (<any>param).children = buildParam(o.children);
        }
        return param;
      });
    }
    const cols = buildParam(this.nodes);
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

 /* drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listData, event.previousIndex, event.currentIndex);
  }*/

  onCheckAllChange(e: boolean) {
    this.nodes?.forEach(o => o.checked = e)
    this.nodes = [...this.nodes]
  }

  getCountByStatus(e: boolean): number {
    const count = this.nodes?.filter(o => o.checked === e).length
    // console.log(count);
    return count;
  }

  getCheckAll(): boolean {
    const isCheckAll = this.getCountByStatus(true) === this.nodes?.length
    // console.log(isCheckAll);
    return isCheckAll;
  }

  getIndeterminate(): boolean {
    // console.log(this.getCheckAll());
    // console.log(this.getCountByStatus(false));
    const isIndeterminate = !this.getCheckAll() && this.getCountByStatus(true) !== 0;
    // console.log(isIndeterminate);
    return isIndeterminate;
  }

  nzBeforeDrop({ dragNode, node, pos }: NzFormatBeforeDropEvent): Observable<boolean> {
    if (dragNode.level !== node.level) {
      return of(false);
    }
    return of(true);
  }

  nzOnDrop(event: NzFormatEmitEvent): void {
    const { dragNode, node  } = event;
    if (dragNode?.level === 0) {
      const dragIndex = this.nodes.findIndex(o => o.key === dragNode.key);
      const index = this.nodes.findIndex(o => o.key === node!.key);
      this.nodes.splice(index, 0, this.nodes.splice(dragIndex, 1)[0])
    }
  }
}
