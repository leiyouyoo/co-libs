import { ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { CoWidgetItemSource } from './widget-item.directive';
import { NgxWidgetGridComponent } from '@co/cbc/web/ngx-widget-grid';
import { PlatformSettingService } from '@co/cds';
import { J } from '@angular/cdk/keycodes';
import { finalize } from 'rxjs/operators';
import { UserCustomConfigService } from '@co/common';
import { flattenTreeData } from 'ng-zorro-antd';

@Component({
  selector: 'co-widget-grid',
  templateUrl: './widget-grid.component.html',
  styleUrls: ['./widget-grid.component.less'],
  providers: [CoWidgetItemSource],
})
export class WidgetGridComponent implements OnInit {
  @ViewChild('ngxWidgetGrid', { static: true }) ngxWidgetGrid: NgxWidgetGridComponent;
  @Input() items: any[] = []
  @Input() configName = 'widget-grid'
  editable = false;
  widgets = [
    { rect: {top: 2,left: 2,height: 1,width: 1}, index: ``},
    { rect: {top: 3,left: 1,height: 1,width: 2}, index: ``},
  ]
  loading = false;

  constructor(public coWidgetItemSource: CoWidgetItemSource,
              private platformSettingService: PlatformSettingService,
              private userCustomConfigService: UserCustomConfigService,
              private zone: NgZone,
              private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.widgets = this.userCustomConfigService.getByPath([this.configName,], [])
    setTimeout(() => {
      this.ngxWidgetGrid.rows = this.widgets.reduce((previousValue: any, currentValue) => {
        const rows = currentValue.rect.top + currentValue.rect.height - 1
        return rows > previousValue ? rows : previousValue;
      }, 0);
    })
  }

  onWidgetChange(e) {

  }

  onAddWidget(e) {
    this.widgets.push(e)
  }

  onDelete(item, index: number) {
    this.widgets.splice(index, 1)
  }

  setEditable(val: boolean) {
    this.editable = val;
    if (this.editable) {
      this.ngxWidgetGrid.rows = this.ngxWidgetGrid.rows < 2 ? 2 : this.ngxWidgetGrid.rows;
    } else {
      this.save();
    }
  }

  save() {
    this.loading = true;
    this.userCustomConfigService.setCurrentUserSetting([this.configName,], this.widgets)
      .finally(() => {
        this.loading = false;
        this.cdr.detectChanges();

      })
      .then(() => {
      })
  }
}
