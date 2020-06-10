import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CmsEmptyComponent } from './empty/cms-empty.component';
import { CmsApplication, CMS_APPLICATIONS } from './cms-options';

@NgModule({
  declarations: [CmsEmptyComponent],
  entryComponents: [CmsEmptyComponent],
  imports: [HttpClientModule],
  providers: [],
  exports: [HttpClientModule, CmsEmptyComponent]
})
export class CmsModule {
  static forRoot(apps: CmsApplication[]): ModuleWithProviders {
    return {
      ngModule: CmsModule,
      providers: [
        {
          provide: CMS_APPLICATIONS,
          useValue: apps
        }
      ]
    };
  }
}
