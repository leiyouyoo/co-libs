import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { ACLIfDirective } from './acl-if.directive';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';

const COMPONENTS = [ACLDirective, ACLIfDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoACLModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoACLModule,
      providers: [ACLService],
    };
  }
}
