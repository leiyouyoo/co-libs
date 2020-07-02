import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JWTInterceptor } from '..';

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }],
})
export class CoAuthModule {}
