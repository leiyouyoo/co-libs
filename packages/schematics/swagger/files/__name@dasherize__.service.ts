import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { <% for (var entityName of serveSelectedEntityList) {%><%= entityName %>,<% } %> } from './<%= pageName %>.types';

@BaseUrl('/<%= pageName %>/<%= name %>')
@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service extends BaseApi {

  <% for (var item of data) { %> 
    /**
     * @param url <%= item.url %>
     * <%= item.api[item.type].summary %>
     */

    @<%= item.type.toUpperCase() %>('<%= item.api[item.type].operationId.replace(item.api[item.type].operationId[0],item.api[item.type].operationId[0].toLowerCase()) %>')
    <%= item.api[item.type].operationId.replace(item.api[item.type].operationId[0],item.api[item.type].operationId[0].toLowerCase()) %>(
        @Payload
        _req:<% if (item.reqEntity){%><%= item.reqEntity %><% } 
    else {%> <%= JSON.stringify(item.reqJson).replace(/\"/g,"") %> <% } %>

    ): Observable<<%= item.resEntity %>> {
        return null as any
    }

<% } %>

  }
