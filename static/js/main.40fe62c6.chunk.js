(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t){},137:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(62),i=c.n(a),o=(c(79),function(e){var t=e.children,c=e.hero;return Object(n.jsx)("header",{className:c,children:t})});o.defaultProps={hero:"defaultHero"};var l=o,j=function(e){var t=e.title,c=e.subtitle,s=e.children;return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("div",{}),Object(n.jsx)("p",{children:c}),s]})},m=c(3),b=c(9),d=c(10),u=c(12),h=c(11),O=function(e){var t=e.title;return Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("div",{})]})},x=c(14),p=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={services:[{icon:Object(n.jsx)(x.c,{}),title:"free cocktails",info:"Lorem magna fugiat nostrud commodo id ea commodo nulla anim esse esse."},{icon:Object(n.jsx)(x.d,{}),title:"endless hiking",info:"Lorem magna fugiat nostrud commodo id ea commodo nulla anim esse esse."},{icon:Object(n.jsx)(x.e,{}),title:"free shuttle",info:"Lorem magna fugiat nostrud commodo id ea commodo nulla anim esse esse."},{icon:Object(n.jsx)(x.b,{}),title:"strongest beer",info:"Lorem magna fugiat nostrud commodo id ea commodo nulla anim esse esse."}]},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("section",{className:"services",children:[Object(n.jsx)(O,{title:"services"}),Object(n.jsx)("div",{class:"services-center",children:this.state.services.map((function(e,t){return Object(n.jsxs)("article",{className:"service",children:[Object(n.jsx)("span",{children:e.icon}),Object(n.jsx)("h6",{children:e.title}),Object(n.jsx)("p",{children:e.info})]},t)}))})]})}}]),c}(s.Component),f=c(15),g=c(25),v=c(16),y=c.n(v),N=c(13),k=c(63),z=c(64),C=Object(z.createClient)({space:"pspfrk0hiuv0",accessToken:"XOJCkToVojwhwEz0nih2NUR393RorfYJ6bkpt4bZ6IA"}),R=r.a.createContext(),S=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1},e.getData=Object(k.a)(y.a.mark((function t(){var c,n,s,r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.getEntries({content_type:"beachResortSite",order:"sys.createdAt"});case 3:c=t.sent,n=e.formatData(c.items),s=n.filter((function(e){return!0===e.featured})),r=Math.max.apply(Math,Object(N.a)(n.map((function(e){return e.price})))),a=Math.max.apply(Math,Object(N.a)(n.map((function(e){return e.size})))),e.setState({rooms:n,featuredRooms:s,sortedRooms:n,loading:!1,price:r,maxPrice:r,maxSize:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.getRoom=function(t){return Object(N.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var c=t.target,n=c.name,s="checkbox"===c.type?c.checked:c.value;e.setState(Object(g.a)({},n,s),e.filterRooms)},e.filterRooms=function(){var t=e.state,c=t.rooms,n=t.type,s=t.capacity,r=t.price,a=t.minSize,i=t.maxSize,o=t.breakfast,l=t.pets,j=Object(N.a)(c);s=parseInt(s),r=parseInt(r),"all"!==n&&(j=j.filter((function(e){return e.type===n}))),1!==s&&(j=j.filter((function(e){return e.capacity>=s}))),j=(j=j.filter((function(e){return e.price<=r}))).filter((function(e){return e.size>=a&&e.size<=i})),o&&(j=j.filter((function(e){return!0===e.breakfast}))),l&&(j=j.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:j})},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,c=e.fields.images.map((function(e){return e.fields.file.url}));return Object(f.a)(Object(f.a)({},e.fields),{},{images:c,id:t})}))}},{key:"render",value:function(){return Object(n.jsx)(R.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),c}(s.Component),w=R.Consumer;var F=c.p+"static/media/loading-arrow.dd29210f.gif",P=function(){return Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("h4",{children:"rooms data loading..."}),Object(n.jsx)("img",{src:F,alt:"Loading..."})]})},T=c.p+"static/media/room-9.18aabe9f.jpeg",D=function(e){var t=e.room,c=t.name,s=t.slug,r=t.images,a=t.price;return Object(n.jsxs)("article",{className:"room",children:[Object(n.jsxs)("div",{className:"img-container",children:[Object(n.jsx)("img",{src:r[0]||T,alt:"single-room"}),Object(n.jsxs)("div",{className:"price-top",children:[Object(n.jsxs)("h6",{children:["$",a]}),Object(n.jsx)("p",{children:"per night"})]}),Object(n.jsx)(m.b,{to:"/rooms/".concat(s),className:"btn-primary room-link",children:"features"})]}),Object(n.jsx)("p",{className:"room-info",children:c})]})},A=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=this.context,t=e.loading,c=e.featuredRooms;return c=c.map((function(e){return Object(n.jsx)(D,{room:e},e.id)})),Object(n.jsxs)("section",{className:"featured-rooms",children:[Object(n.jsx)(O,{title:"Featured Rooms"}),Object(n.jsx)("div",{className:"featured-rooms-center",children:t?Object(n.jsx)(P,{}):c})]})}}]),c}(s.Component);A.contextType=R;var I=c(68);function L(){var e=Object(I.a)(["\n    min-height: 60vh;\n    background: url(",") center/cover no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return L=function(){return e},e}var M,B=c(69).a.header(L(),(function(e){return e.img})),H=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{children:Object(n.jsx)(j,{title:"luxurious rooms",subtitle:"deluxe rooms starting at $299",children:Object(n.jsx)(m.b,{to:"/rooms",className:"btn-primary",children:"Our Rooms"})})}),Object(n.jsx)(p,{}),Object(n.jsx)(A,{})]})},J=function(e,t){return Object(N.a)(new Set(e.map((function(e){return e[t]}))))},$=function(e){var t=e.rooms,c=Object(s.useContext)(R),r=c.handleChange,a=c.type,i=c.capacity,o=c.price,l=c.minPrice,j=c.maxPrice,m=c.minSize,b=c.maxSize,d=c.breakfast,u=c.pets,h=J(t,"type");h=(h=["all"].concat(Object(N.a)(h))).map((function(e,t){return Object(n.jsx)("option",{children:e},t)}));var x=J(t,"capacity");return x=x.map((function(e,t){return Object(n.jsx)("option",{children:e},t)})),Object(n.jsxs)("section",{className:"filter-container",children:[Object(n.jsx)(O,{title:"Search Rooms"}),Object(n.jsxs)("form",{className:"filter-form",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"type",children:"room type"}),Object(n.jsx)("select",{name:"type",id:"type",value:a,className:"form-control",onChange:r,children:h})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"capacity",children:"capacity"}),Object(n.jsx)("select",{name:"capacity",id:"capacity",value:i,className:"form-control",onChange:r,children:x})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("label",{htmlFor:"price",children:["room price $",o]}),Object(n.jsx)("input",{type:"range",name:"price",min:l,max:j,id:"price",value:o,onChange:r,className:"form-control"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"size",children:"room size"}),Object(n.jsxs)("div",{className:"size-inputs",children:[Object(n.jsx)("input",{type:"number",name:"minSize",id:"size",value:m,onChange:r,className:"size-input"}),Object(n.jsx)("input",{type:"number",name:"maxSize",id:"size",value:b,onChange:r,className:"size-input"})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("div",{className:"single-extra",children:[Object(n.jsx)("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:d,onChange:r}),Object(n.jsx)("label",{htmlFor:"breakfast",children:"breakfast"})]}),Object(n.jsxs)("div",{className:"single-extra",children:[Object(n.jsx)("input",{type:"checkbox",name:"pets",id:"pets",checked:u,onChange:r}),Object(n.jsx)("label",{htmlFor:"pets",children:"pets"})]})]})]})]})},E=function(e){var t=e.rooms;return 0===t.length?Object(n.jsx)("div",{className:"empty-search",children:Object(n.jsx)("h3",{children:"unfortunately no rooms match your search parameters"})}):Object(n.jsx)("section",{className:"roomslist",children:Object(n.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(n.jsx)(D,{room:e},e.id)}))})})},Q=(M=function(e){var t=e.context,c=t.loading,s=t.sortedRooms,r=t.rooms;return c?Object(n.jsx)(P,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($,{rooms:r}),Object(n.jsx)(E,{rooms:s})]})},function(e){return Object(n.jsx)(w,{children:function(t){return Object(n.jsx)(M,Object(f.a)(Object(f.a)({},e),{},{context:t}))}})}),U=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{hero:"roomsHero",children:Object(n.jsx)(j,{title:"our rooms",children:Object(n.jsx)(m.b,{to:"/",className:"btn-primary",children:"Return Home"})})}),Object(n.jsx)(Q,{})]})},V=c(73),X=c.p+"static/media/room-1.05b90599.jpeg",Y=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={slug:n.props.match.params.slug,defaultBcg:X},n}return Object(d.a)(c,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)("h3",{children:"no such room could be found..."}),Object(n.jsx)(m.b,{to:"/rooms",className:"btn-primary",children:"back to rooms"})]});var t=e.name,c=e.description,s=e.capacity,r=e.size,a=e.price,i=e.extras,o=e.breakfast,l=e.pets,b=e.images,d=Object(V.a)(b),u=(d[0],d.slice(1));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,{img:b[0]||this.state.defaultBcg,children:Object(n.jsx)(j,{title:"".concat(t," room"),children:Object(n.jsx)(m.b,{to:"/rooms/",className:"btn-primary",children:"back to rooms"})})}),Object(n.jsxs)("section",{className:"single-room",children:[Object(n.jsx)("div",{className:"single-room-images",children:u.map((function(e,c){return Object(n.jsx)("img",{src:e,alt:t},c)}))}),Object(n.jsxs)("div",{className:"single-room-info",children:[Object(n.jsxs)("article",{className:"desc",children:[Object(n.jsx)("h3",{children:"Details"}),Object(n.jsx)("p",{children:c})]}),Object(n.jsxs)("article",{className:"info",children:[Object(n.jsx)("h3",{children:"Info"}),Object(n.jsxs)("h6",{children:["price: $",a]}),Object(n.jsxs)("h6",{children:["size: ",r,"SQFT"]}),Object(n.jsxs)("h6",{children:["max capacity: ",s," ",s<2?"person":"people"]}),Object(n.jsx)("h6",{children:l?"pets are allowed":"No pets allowed"}),Object(n.jsx)("h6",{children:o&&"free breakfast included"})]})]})]}),Object(n.jsxs)("section",{className:"room-extras",children:[Object(n.jsx)("h6",{children:"extras"}),Object(n.jsx)("ul",{className:"extras",children:i.map((function(e,t){return Object(n.jsxs)("li",{children:["- ",e]},t)}))})]})]})}}]),c}(s.Component);function Z(){return Object(n.jsx)(l,{children:Object(n.jsx)(j,{title:"404",subtitle:"page not found",children:Object(n.jsx)(m.b,{to:"/",className:"btn-primary",children:"go to home"})})})}Y.contextType=R;var _=c(2),q=c.p+"static/media/logo.bcd67a42.png",G=function(e){Object(u.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(b.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("div",{className:"nav-center",children:[Object(n.jsxs)("div",{className:"nav-header",children:[Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)("img",{src:q,alt:"Beach Resort"})}),Object(n.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(n.jsx)(x.a,{className:"nav-icon"})})]}),Object(n.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/rooms/",children:"Rooms"})})]})]})})}}]),c}(s.Component);var K=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(G,{}),Object(n.jsxs)(_.c,{children:[Object(n.jsx)(_.a,{exact:!0,path:"/",component:H}),Object(n.jsx)(_.a,{exact:!0,path:"/rooms/",component:U}),Object(n.jsx)(_.a,{exact:!0,path:"/rooms/:slug",component:Y}),Object(n.jsx)(_.a,{component:Z})]})]})};i.a.render(Object(n.jsx)(S,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(K,{})})}),document.getElementById("root"))},36:function(e,t){},79:function(e,t,c){}},[[137,1,2]]]);
//# sourceMappingURL=main.40fe62c6.chunk.js.map