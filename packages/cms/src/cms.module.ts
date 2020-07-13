import { NgModule, ModuleWithProviders } from '@angular/core';
import { PlanetApplication, PLANET_APPLICATIONS } from './planet.types';

import { HttpClientModule } from '@angular/common/http';
import { EmptyComponent } from './empty/empty.component';

/**
 * 微服务模块
 */
@NgModule({
    declarations: [EmptyComponent],
    entryComponents: [EmptyComponent],
    imports: [HttpClientModule],
    providers: [],
    exports: [HttpClientModule, EmptyComponent]
})
export class CoCmsModule {
    static forRoot(apps: PlanetApplication[]): ModuleWithProviders<CoCmsModule> {
        return {
            ngModule: CoCmsModule,
            providers: [
                {
                    provide: PLANET_APPLICATIONS,
                    useValue: apps
                }
            ]
        };
    }
}
