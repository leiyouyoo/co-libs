<% for (var item of entity) { %> 
    /**
     * <% if (item.value && item.value.description){%><%= item.value.description %><% } 
    else {%> No Remark <% } %>
     */
    export class <%= item.name %> {
        <% if (item.value && item.value.properties){%>
        <% for (var detail in item.value.properties) { %> 
            <% if(item.value.properties[detail] && item.value.properties[detail].description ){ %>/* <%= item.value.properties[detail].description %> */ <% } %>
            <%= detail %>: <%= item.value.properties[detail].type %>;
        <% } %>
        <% } %>
    }
<% } %>

