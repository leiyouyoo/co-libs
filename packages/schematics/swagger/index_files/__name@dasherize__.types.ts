<% for (var item of entity) { %> 
    /**
     * <% if (item.value.description){%><%= item.value.description %><% } 
    else {%> No Remark <% } %>
     */
    export class <%= item.name %> {
        <% for (var detail in item.value.properties) { %> 
            <% if(item.value.properties[detail].description){ %>/* <%= item.value.properties[detail].description %> */ <% } %>
            <%= detail %>: <%= item.value.properties[detail].type %>;
        <% } %>
    }
<% } %>

