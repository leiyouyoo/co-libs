import { ComponentFactoryResolver, Directive, Host, Injector, OnInit } from '@angular/core';
import { NzSpinComponent } from 'ng-zorro-antd';
import { CoSpinTemplateComponent } from './co-spin-template.component';

@Directive({
  selector: 'nz-spinxxxxxx'
})
export class NzSpinIconDirective implements OnInit {

  constructor(@Host() private nzSpinComponent: NzSpinComponent,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              ) { }

  ngOnInit(): void {
    if (this.nzSpinComponent?.nzIndicator) return;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CoSpinTemplateComponent);
    const component = componentFactory.create(this.injector);
    component.changeDetectorRef.detectChanges()
    this.nzSpinComponent.nzIndicator = component.instance.template;
  }

}
