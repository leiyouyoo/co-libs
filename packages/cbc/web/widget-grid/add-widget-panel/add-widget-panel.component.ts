import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoWidgetItemSource } from '../widget-item.directive';
import { getBottomEmptyRow } from '../utils';
import { NgxWidgetGridComponent } from '@co/cbc/web/ngx-widget-grid';

interface Size {
  w?: number, h?: number, height: number, width: number,
}

interface AddWidget {
  rect: {
    top: number,
    left: number,
    width: number,
    height: number,
  },
  index: string,
}

@Component({
  selector: 'add-widget-panel',
  templateUrl: './add-widget-panel.component.html',
  styleUrls: ['./add-widget-panel.component.less']
})
export class AddWidgetPanelComponent implements OnInit {
  get sizeList(): Size[] {
    if (this.selectedItem.sizeList) {
      return this.selectedItem.sizeList.map(o => {
        o.w = 115 * o.width;
        o.h = 118 * o.height;
        return o;
      })
    }
    return this._defaultSizeList.map(o => {
      o.w = 115 * o.width;
      o.h = 118 * o.height;
      return o;
    })
  }

  @Input() items: any[] = []
  @Input() ngxWidgetGrid: NgxWidgetGridComponent;
  @Output() addWidget = new EventEmitter<AddWidget>();
  selectedIndex = 0;
  get selectedItem() {
    return this.items?.[this.selectedIndex];
  }

  private _defaultSizeList: Size[] = [
    { w: 460, h: 236, height: 2, width: 4, },
    { w: 460, h: 118, height: 1, width: 4, },
    { height: 2, width: 3, },
  ]

  constructor(public coWidgetItemSource: CoWidgetItemSource,
              ) { }

  ngOnInit(): void {

  }

  onAddWidget(size: Size) {
    const rect = this.ngxWidgetGrid.getNextPosition()

    if ((rect?.width || 0) < size.width || (rect?.height || 0) < size.height) {
      /* last space not fill needs */
      const emptyRows = getBottomEmptyRow(this.ngxWidgetGrid);
      if (emptyRows < 2 ) {
        this.ngxWidgetGrid.rows = this.ngxWidgetGrid.rows + 2;
      }
      const top = this.ngxWidgetGrid.rows - getBottomEmptyRow(this.ngxWidgetGrid) + 1;
      this.addWidget.emit({ rect: { top, left: 1, width: size.width, height: size.height }, index: this.selectedItem.index, })
    } else {
      /* use pos */
      this.addWidget.emit({ rect: { ...rect, width: size.width, height: size.height } as any, index: this.selectedItem.index, })
    }
    console.log(rect);
  }

  onItemClick(index: number, e) {
    this.selectedIndex = index
  }
}
