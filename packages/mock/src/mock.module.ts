import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockInterceptor } from './mock.interceptor';

@NgModule({})
export class CoMockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: CoMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }
}
