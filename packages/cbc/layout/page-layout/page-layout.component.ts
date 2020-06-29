import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ToolbarComponent } from '@co/cbc/layout/toolbar/toolbar.component';

@Component({
  selector: 'co-page-layout',
  templateUrl: './page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent implements OnInit {

  @Input() coToolbar: TemplateRef<void> | null = null;
  @Input() coSearchArea: TemplateRef<void> | null = null;
  @Input() coFooter: TemplateRef<void> | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
