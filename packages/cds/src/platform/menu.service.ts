import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformListResultDto1,PlatformMenuItemDto,PlatformEntityDto1,PlatformMoveMenuItemInput,PlatformAddToFavoritesInput,PlatformChangeStateInput } from './platform.types';

@BaseUrl('/Platform/Menu')
@Injectable({ providedIn: 'root' })
export class PlatformMenuService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Menu/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {searchText?:string} 

    ): Observable<PlatformListResultDto1<PlatformMenuItemDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/GetAllIncludeChildrenAsync
     * 暂无备注
     */

    @GET('GetAllIncludeChildrenAsync')
    getAllIncludeChildrenAsync(
        @Payload
        _req: {} 

    ): Observable<PlatformListResultDto1<PlatformMenuItemDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformMenuItemDto

    ): Observable<PlatformMenuItemDto> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Delete
     * 暂无备注
     */

    @DELETE('Delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Recover
     * 暂无备注
     */

    @POST('Recover')
    recover(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Cancel
     * 暂无备注
     */

    @POST('Cancel')
    cancel(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Move
     * 暂无备注
     */

    @POST('Move')
    move(
        @Payload
        _req:PlatformMoveMenuItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddToMyFavorites
     * 暂无备注
     */

    @POST('AddToMyFavorites')
    addToMyFavorites(
        @Payload
        _req:PlatformAddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddBatchToMyFavorites
     * 暂无备注
     */

    @POST('AddBatchToMyFavorites')
    addBatchToMyFavorites(
        @Payload
        _req:PlatformAddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/RemoveFromMyFavorites
     * 暂无备注
     */

    @DELETE('RemoveFromMyFavorites')
    removeFromMyFavorites(
        @Payload
        _req: {menuIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/GetMyFavorites
     * 暂无备注
     */

    @GET('GetMyFavorites')
    getMyFavorites(
        @Payload
        _req: {input?:object} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/ChangeState
     * 暂无备注
     */

    @POST('ChangeState')
    changeState(
        @Payload
        _req:PlatformChangeStateInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/UpdateUserMenuSetting
     * 暂无备注
     */

    @PUT('UpdateUserMenuSetting')
    updateUserMenuSetting(
        @Payload
        _req: {moduleName?:string} 

    ): Observable<any> {
        return null as any
    }



  }
