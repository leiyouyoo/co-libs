import { NgxWidgetGridComponent } from '@co/cbc/web/ngx-widget-grid';

export function getBottomEmptyRow(ngxWidgetGridComponent: NgxWidgetGridComponent): number {
  const obstructions = ngxWidgetGridComponent.gridRenderer.obstructions;
  let count = 0;
  for (let i = obstructions.length - 1; i >= 0; i--) {
    const obstruction = obstructions[i];
    if (obstruction) break;
    count++;
  }
  return Math.floor(count / ngxWidgetGridComponent.columns)
}
