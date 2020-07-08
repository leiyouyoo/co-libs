import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, BaseHeaders, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { FlightDto, FlightCheckInputDto, GetAllFlightForUiPickerInput, FlightUiPickerDto } from './pub.types';

@BaseUrl('http://192.168.1.5:8002/pub/Flight')
@Injectable({ providedIn: 'root' })
@BaseHeaders({
  Authorization:
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQxMTIyNDcsImV4cCI6MTU5NDExNTg0NywiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NyIsImF1dGhfdGltZSI6MTU5NDEwODY4NywiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjEwIiwicm9sZV9uYW1lcyI6IkJpbGxpbmciLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6IuWxseWnhue9lyIsInN1cl9uYW1lIjoiUlIiLCJwbGF0Zm9ybSI6IiIsInBhcmVudF91c2VyaWQiOiIiLCJjcmVhdG9yX3VzZXJJZCI6IiIsImF1dGhvcml6YXRpb25fdHlwZSI6IkV4dGVybmFsIiwiY3VzdG9tZXJfaWQiOiIzNWMyNmI0NS1mNDA4LTRlYzEtYjNhMC1hODAxMWExNTQxNTgiLCJzY29wZSI6WyJpZHM0LWFwaSIsIlBsYXRmb3JtQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.IaCIWwVbViDDPindjC79unkBs9Tmgjrg3IsWqJ0nJXyav9xEWyubmv8XDmU48-EtHxDUnKKpSiwaDQYyBDDN3bdYa1QBa_TcN7QwBvlnR1GckdG40NhSJ_7dmBweS3NhrOu-ATimsuaUX3I3g0w_yTVjQ73ra80BgESWobBxsKdqKhUaTWPjy7Nc1fhwhRz87_G0SEd8x46bP-8m2tCfwWcKliqx-HsSDxPna9CqyfbgambZUXcJH3VfLCx2gVMtsBJQSJ4I-aOm_cpbiZXfUpZA3FjiPV-B-gQyKkmfGrxBnE5222XGF6d6sqWu5kPCKnzq00vFyrn0PxlaVnSrKw',
})
export class FlightService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /PUB/Flight/GetAll
   * 分页获取航班列表
   */

  @GET('getAll')
  getAll(
    @Payload
    _req: {
      isValid?: boolean;
      airlineId?: string;
      no?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<FlightDto>> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/Get
   * 获取航班详情
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<FlightDto> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/Check
   * 航班重复校验
   */

  @POST('check')
  check(
    @Payload
    _req: FlightCheckInputDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/Create
   * 创建航班
   */

  @POST('create')
  create(
    @Payload
    _req: FlightDto,
  ): Observable<FlightDto> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/Update
   * 编辑航班
   */

  @PUT('update')
  update(
    @Payload
    _req: FlightDto,
  ): Observable<FlightDto> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/Delete
   * 删除航班
   */

  @DELETE('delete')
  delete(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/GetAllForUiPicker
   * 提供给UI航班选择器的服务接口
   */

  @POST('getAllForUiPicker')
  getAllForUiPicker(
    @Payload
    _req: GetAllFlightForUiPickerInput,
  ): Observable<PagedResultDto<FlightUiPickerDto>> {
    return null as any;
  }

  /**
   * @param url /PUB/Flight/CreateOrUpdate
   * 创建或更新
   */

  @POST('createOrUpdate')
  createOrUpdate(
    @Payload
    _req: FlightDto,
  ): Observable<FlightDto> {
    return null as any;
  }
}
