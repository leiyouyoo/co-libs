import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { <% for (var entityName of serveSelectedEntityList) {%><%= entityTitle + entityName %>,<% } %> } from './<%= pageName.toLowerCase() %>.types';

@BaseUrl('/<%= pageName %>/<%= name %>')
@Injectable({ providedIn: 'root' })
export class <%= entityTitle %><% if (name.includes('Service')){%><%= classify(name) %><% } else {%><%= classify(name) %>Service<% } %> extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  <% for (var item of data) { %>
    /**
     * @param url <%= item.url %>
     * <%= item.api[item.type].summary %>
     */

    @<%= item.newType.toUpperCase() %>('<%= item.api[item.type].operationId.replace(item.api[item.type].operationId[0],item.api[item.type].operationId[0].toLowerCase()) %>')
    <%= item.api[item.type].operationId.replace(item.api[item.type].operationId[0],item.api[item.type].operationId[0].toLowerCase()) %>(
        @Payload
        _req:<% if (item.reqEntity){%><%= entityTitle + item.reqEntity %><% }
    else {%> <%= JSON.stringify(item.reqJson).replace(/\"/g,"") %> <% } %>

    ): Observable<<%= item.resEntity %>> {
        return null as any
    }

<% } %>

  }
