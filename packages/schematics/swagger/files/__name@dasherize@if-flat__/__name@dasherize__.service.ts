import { Injectable } from '@angular/core';
import { HttpService } from "@cityocean/common-library";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service {

  constructor(private http: HttpService) {

  }

  <% for (var item of data) { %> 
    /**
     * @param url <%= item.url %>
     * <%= item.api[item.type].summary %>
     */
    <%= item.api[item.type].operationId.replace(item.api[item.type].operationId[0],item.api[item.type].operationId[0].toLowerCase()) %>(<% if (item.reqEntity){%>data:<%= item.reqEntity %><% } else {%> data:<%= JSON.stringify(item.reqJson).replace(/\"/g,"") %><% } %>):Observable<<%= item.resEntity %>> {
        return this.http.<% if(item.type == 'post') { %>postJson<% } else {%><%= item.type %><% } %>('<%= item.url %>',data) as Observable<<%= item.resEntity %>>
    }
<% } %>
}

<% for (var item of entity) { %> 
    export class <%= item.name %> {
        <% for (var detail in item.value.properties) { %> 
            <% if(item.value.properties[detail].description){ %>/* <%= item.value.properties[detail].description %> */ <% } %>
            <%= detail %>: <% if (item.value.properties[detail].type) { %><%= item.value.properties[detail].type %><% } else { %><%= item.value.properties[detail].$ref.substring(item.value.properties[detail].$ref.lastIndexOf(".") + 1 ) %> <% } %>;
        <% } %>
    }
<% } %>