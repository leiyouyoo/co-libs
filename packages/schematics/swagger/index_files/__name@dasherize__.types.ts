<% for (var item of entity) { %> 
    /**
     * <% if (item && item.description){%><%= item.description %><% } 
    else {%> No Remark <% } %>
     */
    export class <%= fileName + item.name %> {
        [key:string]: any;
        <% if (item.properties){%>
        <% for (var detail in item.properties) { %> 
            <% if(item.properties[detail] && item.properties[detail].description ){ %>/* <%= item.properties[detail].description %> */ <% } %>
            <%= detail %>: <%= item.properties[detail].type %>;
        <% } %>
        <% } %>
    }
<% } %>

