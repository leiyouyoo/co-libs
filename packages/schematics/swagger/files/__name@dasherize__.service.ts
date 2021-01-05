import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { <%= itemExportEntityName.toString() %> } from './<%= fileName.toLowerCase() %>.types';

@BaseUrl('/<%= fileName %>/<%= baseName %>')
@Injectable({ providedIn: 'root' })
export class <%= fileName %><% if (baseName.includes('Service')){%><%= classify(baseName) %><% } else {%><%= classify(baseName) %>Service<% } %> extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  <% for (var item of entityList) { %>
    /**
     * @param url <%= item.url %>
     * <%= item.api[item.type]?.summary || '暂无备注' %>
     */

    @<%= item.type.toUpperCase() %>('<%= item.url.substring(item.url.lastIndexOf('/')+1) %>')
    <%=  item.url.substring(item.url.lastIndexOf('/')+1).replace(item.url.substring(item.url.lastIndexOf('/')+1)[0],item.url.substring(item.url.lastIndexOf('/')+1)[0].toLowerCase()) %>(
        @Payload
        _req:<% if (item.reqEntity){%><%= fileName + item.reqEntity %><% }
    else {%> <%= JSON.stringify(item.reqJson)?.replace(/\"/g,"") %> <% } %>

    ): Observable<<%= item.resEntity %>> {
        return null as any
    }

<% } %>

  }
