import { ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { CoWidgetItemSource } from './widget-item.directive';
import { NgxWidgetGridComponent, Rectangle } from '@co/cbc/web/ngx-widget-grid';
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
      }, 0) || 2;
    })
  }

  onWidgetChange(e) {

  }

  onAddWidget(e) {
    if (this.widgets.find(widget => widget.index === e.index)) {
      return;
    }
    this.widgets.push(e)
  }

  onDelete(item, index: number) {
    this.widgets.splice(index, 1);
    setTimeout(() => {
      const obstructions = this.ngxWidgetGrid.gridRenderer.obstructions;
      // all empty, return
      if (!obstructions.some(o => !!o)) return;
      const columns = this.ngxWidgetGrid.columns;
      const rows = this.ngxWidgetGrid.rows;
      for (let i = 0; i < rows; i++) {
        let hasWidget = false;
        for (let j = 0; j < columns; j++) {
          hasWidget = hasWidget || !!obstructions[i * columns + j];
        }
        if (!hasWidget) {
          this.ngxWidgetGrid.widgetComponents.forEach(widget => {
            if (widget.position.top <= i + 1) return;
            widget.position = new Rectangle({ ...widget.position, top: widget.position.top -1, });
            this.ngxWidgetGrid.updateWidget(widget, false);
          })
        }
      }
    })
  }

  setEditable(val: boolean) {
    this.editable = val;
    if (this.editable) {
      this.ngxWidgetGrid.rows = this.ngxWidgetGrid.rows < 2 ? 2 : this.ngxWidgetGrid.rows;
    } else {
      this.save();
    }
  }

  removeAll() {
    this.widgets = []
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
