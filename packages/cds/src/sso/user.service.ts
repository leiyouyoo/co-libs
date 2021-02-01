import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/PagedResultDto[UserListDto],v1#/definitions/UpdateUserInfoInput,v1#/definitions/CreateOrUpdateUserOutput,v1#/definitions/UserDetailDto,v1#/definitions/ListResultDto[UserDetailDto],v1#/definitions/SearchUserInput,v1#/definitions/PagedAndSortedInputDto,v1#/definitions/ListResultDto[UserListDto],v1#/definitions/GetUsersByIdsInput,v1#/definitions/UserListDto,v1#/definitions/GetUserForEditOutput,v1#/definitions/GetUserDetailDto,v1#/definitions/EntityDto[Int64],v1#/definitions/ResetUserPasswordInput,v1#/definitions/ResetUserPasswordByOldInput,v1#/definitions/ListResultDto[String],v1#/definitions/BindExternalUserDto,v1#/definitions/CreateOrUpdateUserDto,v1#/definitions/CreateOrUpdateUserInput,v1#/definitions/SetValidDto,v1#/definitions/SetRoleDto, } from './sso.types';

@BaseUrl('/SSO/User')
@Injectable({ providedIn: 'root' })
export class v1UserService extends BaseApi {
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
        _req: {customerId?:string,isParent?:boolean,type?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<v1#/definitions/PagedResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/UpdateUserInfo
     * 更新昵称名称和头像
     */

    @PUT('updateUserInfo')
    updateUserInfo(
        @Payload
        _req:v1#/definitions/UpdateUserInfoInput

    ): Observable<v1#/definitions/CreateOrUpdateUserOutput> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetAll
     * 用户列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {filter?:string,permission?:string,role?:number,onlyLockedUsers?:boolean,status?:number,tenantId?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<v1#/definitions/PagedResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetUserByIcpUserId
     * 根据ICPUserId查找用户信息
     */

    @GET('getUserByIcpUserId')
    getUserByIcpUserId(
        @Payload
        _req: {icpUserId?:string} 

    ): Observable<v1#/definitions/UserDetailDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetUsersByIcpUserIds
     * 
     */

    @POST('getUsersByIcpUserIds')
    getUsersByIcpUserIds(
        @Payload
        _req: {} 

    ): Observable<v1#/definitions/ListResultDto[UserDetailDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetUserDetail
     * 获取用户详情
     */

    @GET('getUserDetail')
    getUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<v1#/definitions/UserDetailDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetCityOceanUsers
     * 获取鹏城海下的所有用户
     */

    @POST('getCityOceanUsers')
    getCityOceanUsers(
        @Payload
        _req:v1#/definitions/SearchUserInput

    ): Observable<v1#/definitions/PagedResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetUsersWithFAMExamine
     * 获取拥有财务审批权限的用户集合
     */

    @POST('getUsersWithFAMExamine')
    getUsersWithFAMExamine(
        @Payload
        _req:v1#/definitions/PagedAndSortedInputDto

    ): Observable<v1#/definitions/PagedResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetAllByIds
     * 根据id数组获取用户集合
     */

    @GET('getAllByIds')
    getAllByIds(
        @Payload
        _req: {userIds?:any[]} 

    ): Observable<v1#/definitions/ListResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetUsersByIds
     * 根据id集合获取用户
     */

    @POST('getUsersByIds')
    getUsersByIds(
        @Payload
        _req:v1#/definitions/GetUsersByIdsInput

    ): Observable<v1#/definitions/ListResultDto[UserListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetByEmail
     * 根据email获取用户
     */

    @GET('getByEmail')
    getByEmail(
        @Payload
        _req: {email?:string} 

    ): Observable<v1#/definitions/UserListDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetAllActiveUser
     * 获取所有激活的所有用户
     */

    @GET('getAllActiveUser')
    getAllActiveUser(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:number} 

    ): Observable<v1#/definitions/GetUserForEditOutput> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetDetail
     * 获取用户详情
     */

    @GET('getDetail')
    getDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<v1#/definitions/GetUserDetailDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/Delete
     * 删除用户
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/HardDelete
     * 硬删除，一般用于事务补偿
     */

    @POST('hardDelete')
    hardDelete(
        @Payload
        _req: {txId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/DeleteByCustomerIds
     * 根据客户Id删除账号
     */

    @DELETE('deleteByCustomerIds')
    deleteByCustomerIds(
        @Payload
        _req: {customerIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/Unlock
     * 
     */

    @POST('unlock')
    unlock(
        @Payload
        _req:v1#/definitions/EntityDto[Int64]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/ResetUserPassword
     * 修改密码，ICP用。
     */

    @POST('resetUserPassword')
    resetUserPassword(
        @Payload
        _req:v1#/definitions/ResetUserPasswordInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/ResetUserPasswordByOld
     * 修改密码
     */

    @POST('resetUserPasswordByOld')
    resetUserPasswordByOld(
        @Payload
        _req:v1#/definitions/ResetUserPasswordByOldInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/GetExternalNames
     * 获取用户的外部登录信息
     */

    @GET('getExternalNames')
    getExternalNames(
        @Payload
        _req: {} 

    ): Observable<v1#/definitions/ListResultDto[String]> {
        return null as any
    }


    /**
     * @param url /SSO/User/BindExternalUser
     * 绑定第三方登录
     */

    @POST('bindExternalUser')
    bindExternalUser(
        @Payload
        _req:v1#/definitions/BindExternalUserDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/UnbBindExternalUser
     * 解绑第三方登录
     */

    @POST('unbBindExternalUser')
    unbBindExternalUser(
        @Payload
        _req:v1#/definitions/BindExternalUserDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/CreateOrUpdate
     * 创建或更新用户
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:v1#/definitions/CreateOrUpdateUserDto

    ): Observable<v1#/definitions/UserListDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/Create
     * 创建用户
     */

    @POST('create')
    create(
        @Payload
        _req:v1#/definitions/CreateOrUpdateUserDto

    ): Observable<v1#/definitions/UserListDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/Update
     * 更新用户
     */

    @PUT('update')
    update(
        @Payload
        _req:v1#/definitions/CreateOrUpdateUserDto

    ): Observable<v1#/definitions/UserListDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/UpdateForExternal
     * 更新外部用户
     */

    @PUT('updateForExternal')
    updateForExternal(
        @Payload
        _req:v1#/definitions/CreateOrUpdateUserInput

    ): Observable<v1#/definitions/CreateOrUpdateUserOutput> {
        return null as any
    }


    /**
     * @param url /SSO/User/CreateForExternal
     * 创建联系人用户
     */

    @POST('createForExternal')
    createForExternal(
        @Payload
        _req:v1#/definitions/CreateOrUpdateUserInput

    ): Observable<v1#/definitions/CreateOrUpdateUserOutput> {
        return null as any
    }


    /**
     * @param url /SSO/User/DeleteContactUsers
     * 删除联系人用户
     */

    @DELETE('deleteContactUsers')
    deleteContactUsers(
        @Payload
        _req: {userIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/User/SetValid
     * 设置是否有效
     */

    @POST('setValid')
    setValid(
        @Payload
        _req:v1#/definitions/SetValidDto

    ): Observable<v1#/definitions/SetValidDto> {
        return null as any
    }


    /**
     * @param url /SSO/User/SetRoles
     * 关联角色
     */

    @POST('setRoles')
    setRoles(
        @Payload
        _req:v1#/definitions/SetRoleDto

    ): Observable<any> {
        return null as any
    }



  }
