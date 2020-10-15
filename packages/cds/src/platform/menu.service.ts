import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformMenuItemDto,PlatformListResultDto,PlatformEntityDto,PlatformMoveMenuItemInput,PlatformAddToFavoritesInput,PlatformChangeStateInput, } from './platform.types';

@BaseUrl('/platform/Menu')
@Injectable({ providedIn: 'root' })
export class PlatformMenuService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Menu/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string} 

    ): Observable<PlatformListResultDto<PlatformMenuItemDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/GetAllIncludeChildrenAsync
     * 
     */

    @GET('getAllIncludeChildrenAsync')
    getAllIncludeChildrenAsync(
        @Payload
        _req: {} 

    ): Observable<PlatformListResultDto<PlatformMenuItemDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformMenuItemDto

    ): Observable<PlatformMenuItemDto> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Recover
     * 
     */

    @POST('recover')
    recover(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Cancel
     * 
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Move
     * 
     */

    @POST('move')
    move(
        @Payload
        _req:PlatformMoveMenuItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddToMyFavorites
     * 
     */

    @POST('addToMyFavorites')
    addToMyFavorites(
        @Payload
        _req:PlatformAddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddBatchToMyFavorites
     * 
     */

    @POST('addBatchToMyFavorites')
    addBatchToMyFavorites(
        @Payload
        _req:PlatformAddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/RemoveFromMyFavorites
     * 
     */

    @DELETE('removeFromMyFavorites')
    removeFromMyFavorites(
        @Payload
        _req: {menuIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/GetMyFavorites
     * 
     */

    @GET('getMyFavorites')
    getMyFavorites(
        @Payload
        _req: {input?:object} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/ChangeState
     * 
     */

    @POST('changeState')
    changeState(
        @Payload
        _req:PlatformChangeStateInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/UpdateUserMenuSetting
     * 
     */

    @PUT('updateUserMenuSetting')
    updateUserMenuSetting(
        @Payload
        _req: {moduleName?:string} 

    ): Observable<any> {
        return null as any
    }



  }
