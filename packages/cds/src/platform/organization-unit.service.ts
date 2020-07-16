import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { OrganizationUnitDto,UserInfo,IMContactGroupDto,ContactUserDto,OrganizationUnitUserDto,MoveOrganizationUnitInput, } from './platform.types';

//@BaseUrl('/platform/OrganizationUnit')
@Injectable({ providedIn: 'root' })
@BaseUrl('http://192.168.1.5:8002/platform/OrganizationUnit')
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQ4NjUzNDIsImV4cCI6MTU5NDg2ODk0MiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NSIsImF1dGhfdGltZSI6MTU5NDg2MTc4MiwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjUiLCJyb2xlX25hbWVzIjoiU2hpcHBlciIsInRlbmFuY3lfbmFtZSI6IkNpdHkgT2NlYW4iLCJuYW1lIjoibWFpblRlc3QiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiRXh0ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjM1YzI2YjQ1LWY0MDgtNGVjMS1iM2EwLWE4MDExYTE1NDE1OCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.aFPReAeepDvlfiOwJlik0ki250CiQNR6Fdz4A4EJqVeAGbK0T74p4UUfmNQ1_iNrvdR25xAn8rDUFuMVGNO3QtFHQpsMweu4BS7APn1N--RH_ATfwyywDH1n5kYhC1zGbCYOAO2-fsjohhiirOlIpKIl0Kv2BcOcdzfyrS_qjMc4hrLsIrabcJC8U9NpOnZTHfTPYsoV-5BbUiQCCeJ6ygq9ijOsh1kY0beC3QFt4UPs3XF_Tep-v-lZq_BXfBuLQCMUDONLW8LfpVVMyRz-cPS6nMHTp-YdXA3eJhMYxNWe8_MKuGGeh8H7K1D4_aVDYYNtpzPdDNolmAv8K9p0Xw"})

export class OrganizationUnitService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /Platform/OrganizationUnit/GetByUserId
     * 获取用户所在组织机构
     */

    @GET('getByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number}

    ): Observable<ListResultDto<OrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetGroupOrganizationUnits
     *
     */

    @GET('getGroupOrganizationUnits')
    getGroupOrganizationUnits(
        @Payload
        _req: {}

    ): Observable<ListResultDto<OrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByOrganizationUnitId
     * 获取组织机构下的用户
     */

    @GET('getUsersByOrganizationUnitId')
    getUsersByOrganizationUnitId(
        @Payload
        _req: {searchText?:string,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<UserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetSaleUsers
     *
     */

    @GET('getSaleUsers')
    getSaleUsers(
        @Payload
        _req: {searchText?:string,isOwnDepartment?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<UserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersAndOrganizationUnit
     *
     */

    @GET('getUsersAndOrganizationUnit')
    getUsersAndOrganizationUnit(
        @Payload
        _req: {input?:object}

    ): Observable<ListResultDto<IMContactGroupDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUserDetail
     *
     */

    @GET('getUserDetail')
    getUserDetail(
        @Payload
        _req: {userId?:number}

    ): Observable<ContactUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitUsers
     *
     */

    @GET('getOrganizationUnitUsers')
    getOrganizationUnitUsers(
        @Payload
        _req: {organizationUnitId?:string,organizationUnitName?:string}

    ): Observable<ListResultDto<OrganizationUnitUserDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetPositionUserDetail
     *
     */

    @GET('getPositionUserDetail')
    getPositionUserDetail(
        @Payload
        _req: {userId?:number}

    ): Observable<OrganizationUnitUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAll
     * 获取组织节点集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean,type?:number}

    ): Observable<ListResultDto<OrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/CreateOrUpdate
     * 保存菜单项
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:OrganizationUnitDto

    ): Observable<OrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Move
     * 移动组织节点
     */

    @POST('move')
    move(
        @Payload
        _req:MoveOrganizationUnitInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Delete
     * 删除组织节点
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }



  }
