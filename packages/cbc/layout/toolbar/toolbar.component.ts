import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { LifeCycleComponent } from '@co/cbc/core';
import { ToolbarItemComponent } from './toolbar-item.component';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'co-toolbar',
  template: `
    <ng-content select="co-toolbar-item"></ng-content> `,
  host: {
    '[class.co-toolbar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent extends LifeCycleComponent {

  @HostBinding('class.co-toolbar__alignRight') @Input() @InputBoolean() alignRight: boolean = false;
  @Input() coMarginRight: number = 12;
  @Input() coWidth: number | 'auto' = 'auto';

  @ContentChildren(ToolbarItemComponent) toolbarItems!: QueryList<ToolbarItemComponent>;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const changes = this.onChanges$.pipe(takeUntil(this.onDestroy$));
    const styleChanges = changes.pipe(filter(({ coMarginRight, coWidth }) =>
      coMarginRight !== undefined || coWidth !== undefined));
    styleChanges.subscribe(() => {
      this.updateItems();
    });
    this.toolbarItems.changes.pipe(startWith(null), takeUntil(this.onDestroy$)).subscribe(() => {
      this.updateItems();
    });
  }

  private updateItems() {
    this.toolbarItems.forEach(item => {
      item.setWidthAndMargin(this.coWidth, this.coMarginRight);
    });
  }

}
