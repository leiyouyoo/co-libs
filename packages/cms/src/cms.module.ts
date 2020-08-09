import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { EmptyComponent } from './empty/empty.component';
import { PlanetApplication, PLANET_APPLICATIONS } from './planet.types';
import { ReuseTabModule } from './reuse-tab';
/**
 * 微服务模块
 */
@NgModule({
  declarations: [EmptyComponent],
  entryComponents: [EmptyComponent],
  imports: [HttpClientModule],
  providers: [],
  exports: [ReuseTabModule, EmptyComponent],
})
export class CoCmsModule {
  static forRoot(apps: PlanetApplication[]): ModuleWithProviders<CoCmsModule> {
    return {
      ngModule: CoCmsModule,
      providers: [
        {
          provide: PLANET_APPLICATIONS,
          useValue: apps,
        },
      ],
    };
  }
}
