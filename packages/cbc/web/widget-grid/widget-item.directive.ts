import { Directive, Host, Injectable, Input, OnInit, TemplateRef } from '@angular/core';

@Injectable()
export class CoWidgetItemSource {
  private items: { [key: string]: TemplateRef<void> } = {};

  add(path: string, ref: TemplateRef<void>) {
    this.items[path] = ref;
  }

  getItem(path: string) {
    return this.items[path];
  }
}

@Directive({ selector: '[co-widget-item]' })
export class CoWidgetItemDirective implements OnInit {
  @Input('co-widget-item') id: string;

  constructor(private ref: TemplateRef<void>, @Host() private source: CoWidgetItemSource) {}

  ngOnInit(): void {
    this.source.add(this.id, this.ref);
  }
}
