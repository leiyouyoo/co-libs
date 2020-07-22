import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { ListResultDto, PagedResultDto } from '../platform/platform.types';
import {
  ChangeTransportClauseStateInput,
  GetAllTransportClauseForUiPickerInput,
  TransportClauseCheckDto,
  TransportClauseDto,
  TransportClauseUiPickerDto,
} from './pub.types';

@BaseUrl('/pub/TransportClause')
@Injectable({ providedIn: 'root' })
export class TransportClauseService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /PUB/TransportClause/Get
   * 获取运输条款明细
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<TransportClauseDto> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/GetAll
   * 获取运输条款列表
   */

  @GET('getAll')
  getAll(
    @Payload
    _req: {
      originalId?: string;
      destinationId?: string;
      isValid?: boolean;
    },
  ): Observable<PagedResultDto<TransportClauseDto>> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/Check
   * 校验重复性数据
   */

  @POST('check')
  check(
    @Payload
    _req: TransportClauseCheckDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/CreateOrUpdate
   * 新建或更新运输条款
   */

  @POST('createOrUpdate')
  createOrUpdate(
    @Payload
    _req: TransportClauseDto,
  ): Observable<TransportClauseDto> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/Create
   * 创建运输条款
   */

  @POST('create')
  create(
    @Payload
    _req: TransportClauseDto,
  ): Observable<TransportClauseDto> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/Update
   * 更新运输条款
   */

  @PUT('update')
  update(
    @Payload
    _req: TransportClauseDto,
  ): Observable<TransportClauseDto> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/Delete
   * 删除运输条款
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
   * @param url /PUB/TransportClause/ChangeTransportClauseState
   * 修改运输条款状态
   */

  @POST('changeTransportClauseState')
  changeTransportClauseState(
    @Payload
    _req: ChangeTransportClauseStateInput,
  ): Observable<TransportClauseDto> {
    return null as any;
  }

  /**
   * @param url /PUB/TransportClause/GetAllForUiPicker
   * 提供给UI运输条款选择器的服务接口
   */

  @POST('getAllForUiPicker')
  getAllForUiPicker(
    @Payload
    _req: GetAllTransportClauseForUiPickerInput,
  ): Observable<PagedResultDto<TransportClauseUiPickerDto>> {
    return null as any;
  }
}
