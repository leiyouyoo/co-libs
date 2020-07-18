import {
  ComponentFactoryResolver, ComponentRef,
  Directive, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { CoSTWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';
import { ControlValueAccessor } from '@angular/forms';

@Directive({ selector: '[co-st-va-widget-host]' })
export class CoSTWidgetHostDirective implements OnInit, OnChanges {
  @Input() column: STColumn;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  componentRef: ComponentRef<any>;
  onValueAccessorChange = (value: any) => {
    this.valueChange.emit(value);
  }
  onValueAccessorTouched = () => {

  };

  constructor(
    private stWidgetRegistry: CoSTWidgetRegistry,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    const widget = this.column.filter!.widget!;
    const componentType = typeof widget.type === 'string' ? this.stWidgetRegistry.get((widget as any).type) : widget.type;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType as any);

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const componentInstance = componentRef.instance as ControlValueAccessor;
    const data: { [key: string]: any } = widget.params ?? {};
    Object.keys(data).forEach(key => {
      componentInstance[key] = data[key];
    });
    componentInstance.writeValue(null);
    componentInstance.registerOnChange(this.onValueAccessorChange);
    componentInstance.registerOnTouched(this.onValueAccessorTouched);
    this.componentRef = componentRef;
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
