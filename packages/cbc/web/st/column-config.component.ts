import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { STComponent } from './st.component';
import { PlatformSettingService } from '@co/cds';
import { STColumn, STColumnSetting } from './st.interfaces';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'column-config',
  template: `
    <div class="container">
      <div class="container_main">
        <div cdkDropList (cdkDropListDropped)="drop($event)">
          <div *ngFor="let i of listData" class="container_main_item" cdkDrag style="cursor: move;">
              <input type="checkbox" [(ngModel)]="i.checked">
              {{ '2' }}
          </div>
        </div>
      </div>
      <div class="container_btn">
        <button nz-button [nzSize]="'small'" nzType="primary" [nzLoading]="loading" (click)="save()" style="margin-right: 5px;">保存</button>
        <button nz-button [nzSize]="'small'" nzType="default" (click)="cancel()" style="margin-right: 5px;">取消</button>
      </div>
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
              private platformSettingService: PlatformSettingService,
  ) {
    this.platformSettingService.getCurrentUserSetting(this.configName)
      .subscribe(data => {
        let setting: STColumnSetting;
        try {
          setting = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
        const columns =
          cloneDeep(this.stComponent.columns)
            .map(o => {
              o._checked = true;
              o._disabled = !o.index;
              return o;
            });
      });
  }

  ngOnInit(): void {
  }

  save() {
    this.closed.emit(true);
  }

  cancel() {
    this.closed.emit(false);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listData, event.previousIndex, event.currentIndex);
  }
}
