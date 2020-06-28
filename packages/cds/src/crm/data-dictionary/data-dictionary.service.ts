import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResultDto } from '@co/core';
import { BaseApi, BaseUrl, GET, Payload } from '@co/common';

import { DataDictionaryDto } from './data-dictionary.types';

@BaseUrl('/PUB/DataDictionary')
@Injectable({ providedIn: 'root' })
export class DataDictionaryService extends BaseApi {
  @GET('GetAll')
  getAll(
    @Payload
    _req: {
      TypeCode?: string;
      IsValid?: boolean;
      type?: DataDictionaryDto;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<DataDictionaryDto>> {
    return null as any;
  }
}
