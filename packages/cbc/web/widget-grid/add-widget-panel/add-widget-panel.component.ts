import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoWidgetItemSource } from '../widget-item.directive';
import { getBottomEmptyRow } from '../utils';
import { NgxWidgetGridComponent, Rectangle } from '@co/cbc/web/ngx-widget-grid';

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
        if (o.width === 1 && o.height === 1) {
          o.w *= 2;
          o.h *= 2;
        }

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
    const obstructions = this.ngxWidgetGrid.gridRenderer.obstructions;

    const column = this.ngxWidgetGrid.columns;
    const columnPos = ((): any => {
      for (let i = 0; i < column; i++) {
        let hasSpace = true;
        for (let j = 0; j < size.width; j++) {
          for (let k = 0; k < size.height; k++) {
            hasSpace = obstructions[i + j + k * column] === null;
            if (!hasSpace) {
              break;
            }
          }
          if (!hasSpace) {
            break;
          }
        }
        if (hasSpace) return i;
      }
    })();
    if (typeof columnPos === 'number') {
      // has space
      this.addWidget.emit({ rect: { top: 1, left: columnPos + 1, width: size.width, height: size.height } as any, index: this.selectedItem.index, })
    } else {
      // no left space
      this.ngxWidgetGrid.widgetComponents.forEach(widget => {
        widget.position = new Rectangle({ ...widget.position, top: widget.position.top + size.height, });
        this.ngxWidgetGrid.updateWidget(widget, false);
      })
      this.addWidget.emit({ rect: { top: 1, left: 1, width: size.width, height: size.height } as any, index: this.selectedItem.index, })
    }


    return;

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
