import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Payload, GET } from '@co/common';
import { Observable } from 'rxjs';
import { ProductDto } from './product.type';

import { PagedResultDto } from '@co/core';

//商品服务
@BaseUrl('/CSP/Product')
@Injectable({ providedIn: 'root' })
export class ProductService extends BaseApi {
  @GET('GetAll')
  GetAll(
    @Payload
    _req: {
      RegionId?: string;
      SearchText?: string;
      Sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<ProductDto>> {
    return null as any;
  }
}
