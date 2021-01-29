import { ComponentFactoryResolver, Injector, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinIconDirective } from './nz-spin-icon.directive';
import { CoSpinTemplateComponent } from './co-spin-template.component';
import { NzConfigService } from 'ng-zorro-antd';

const directive = [NzSpinIconDirective]

@NgModule({
  declarations: [...directive, CoSpinTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [...directive],
  entryComponents: [CoSpinTemplateComponent,],
})
export class NzSpinIconModule {
  constructor(private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver,
              @Optional() private nzConfigService: NzConfigService,
  ) {
    if (!this.nzConfigService) return;
    try {

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CoSpinTemplateComponent);
      const component = componentFactory.create(this.injector);
      component.changeDetectorRef.detectChanges()
      const template = component.instance.template;
      const map = {
        spin: `nzIndicator`,
        table: `nzLoadingIndicator`,
      }
      for (const componentName in map) {
        const property = map[componentName];
        if (this.nzConfigService.getConfigForComponent(componentName as any)?.[property]) continue;
        this.nzConfigService.set(componentName as any, { [property]: template })
      }
    } catch (e) {
      console.error(e);
    }
  }
}
