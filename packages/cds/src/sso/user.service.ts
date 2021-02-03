import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import {
  SsoBindExternalUserDto,
  SsoCreateOrUpdateUserInput,
  SsoCreateOrUpdateUserOutput,
  SsoEntityDto,
  SsoGetUserForEditOutput,
  SsoListResultDto,
  SsoPagedResultDto,
  SsoResetUserPasswordByOldInput,
  SsoResetUserPasswordInput,
  SsoSearchUserInput,
  SsoUpdateUserInfoInput,
  SsoUserDetailDto,
  SsoUserListDto,
} from './sso.types';

@BaseUrl('/sso/User')
@Injectable({ providedIn: 'root' })
export class SSOUserService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/User/GetUserByCustomerId
   * 获取客户下的用户
   */

  @GET('getUserByCustomerId')
  getUserByCustomerId(
    @Payload
    _req: {
      customerId?: string;
      isParent?: boolean;
      type?: number;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<SsoPagedResultDto> {
    return null as any;
  }

  /**
   * @param url /SSO/User/UpdateUserInfo
   * 更新昵称名称和头像
   */

  @PUT('updateUserInfo')
  updateUserInfo(
    @Payload
    _req: SsoUpdateUserInfoInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetAll
   * 用户列表
   */

  @GET('getAll')
  getAll(
    @Payload
    _req: {
      filter?: string;
      permission?: string;
      role?: number;
      onlyLockedUsers?: boolean;
      status?: number;
      tenantId?: number;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<SsoPagedResultDto> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetUserDetail
   * 获取用户详情
   */

  @GET('getUserDetail')
  getUserDetail(
    @Payload
    _req: {
      userId?: number;
    },
  ): Observable<SsoUserDetailDto> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetCityOceanUsers
   * 获取鹏城海下的所有用户
   */

  @POST('getCityOceanUsers')
  getCityOceanUsers(
    @Payload
    _req: SsoSearchUserInput,
  ): Observable<SsoPagedResultDto[]> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetAllByIds
   * 根据id数组获取用户集合
   */

  @GET('getAllByIds')
  getAllByIds(
    @Payload
    _req: {
      userIds?: any[];
    },
  ): Observable<SsoListResultDto[]> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetByEmail
   * 根据email获取用户
   */

  @GET('getByEmail')
  getByEmail(
    @Payload
    _req: {
      email?: string;
    },
  ): Observable<SsoUserListDto> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetAllActiveUser
   * 获取所有激活的所有用户
   */

  @GET('getAllActiveUser')
  getAllActiveUser(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/Get
   *
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<SsoGetUserForEditOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/Delete
   * 删除用户
   */

  @DELETE('delete')
  delete(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/DeleteByCustomerIds
   * 根据客户Id删除账号
   */

  @DELETE('deleteByCustomerIds')
  deleteByCustomerIds(
    @Payload
    _req: {
      customerIds?: any[];
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/Unlock
   *
   */

  @POST('unlock')
  unlock(
    @Payload
    _req: SsoEntityDto[],
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/ResetUserPassword
   * 修改密码，ICP用。
   */

  @POST('resetUserPassword')
  resetUserPassword(
    @Payload
    _req: SsoResetUserPasswordInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/ResetUserPasswordByOld
   * 修改密码
   */

  @POST('resetUserPasswordByOld')
  resetUserPasswordByOld(
    @Payload
    _req: SsoResetUserPasswordByOldInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetExternalNames
   * 获取用户的外部登录信息
   */

  @GET('getExternalNames')
  getExternalNames(
    @Payload
    _req: {},
  ): Observable<SsoListResultDto[]> {
    return null as any;
  }

  /**
   * @param url /SSO/User/BindExternalUser
   * 绑定第三方登录
   */

  @POST('bindExternalUser')
  bindExternalUser(
    @Payload
    _req: SsoBindExternalUserDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/UnbBindExternalUser
   * 解绑第三方登录
   */

  @POST('unbBindExternalUser')
  unbBindExternalUser(
    @Payload
    _req: SsoBindExternalUserDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/CreateOrUpdate
   * 创建或更新用户
   */

  @POST('createOrUpdate')
  createOrUpdate(
    @Payload
    _req: SsoCreateOrUpdateUserInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/Update
   *
   */

  @PUT('update')
  update(
    @Payload
    _req: SsoCreateOrUpdateUserInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/UpdateForExternal
   * 更新外部用户
   */

  @PUT('updateForExternal')
  updateForExternal(
    @Payload
    _req: SsoCreateOrUpdateUserInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/CreateForExternal
   * 创建联系人用户
   */

  @POST('createForExternal')
  createForExternal(
    @Payload
    _req: SsoCreateOrUpdateUserInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/DeleteContactUsers
   * 删除联系人用户
   */

  @DELETE('deleteContactUsers')
  deleteContactUsers(
    @Payload
    _req: {
      userIds?: any[];
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/Create
   *
   */

  @POST('create')
  create(
    @Payload
    _req: SsoCreateOrUpdateUserInput,
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/SetValid
   *
   */
  @POST('setValid')
  setValid(@Payload _req: { isValid: boolean; id: number }): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/SetRoles
   *
   */
  @POST('setRoles')
  setRoles(@Payload _req: { assignedRoleNames: string[]; id: number }): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetDetail
   *
   */

  @GET('getDetail')
  getDetail(
    @Payload
    _req: {
      userId?: number;
    },
  ): Observable<SsoCreateOrUpdateUserOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/User/GetUsersWithFAMExamine
   *
   */

  @GET('getUsersWithFAMExamine')
  getUsersWithFAMExamine(
    @Payload
    _req: {
      maxResultCount?: number;
      skipCount?: number;
      sorting?: string;
    },
  ): Observable<any> {
    return null as any;
  }
}
