(this.webpackJsonplearn_react=this.webpackJsonplearn_react||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),u=(n(22),n(1)),l=n.n(u),s=n(3),i=n(6),p=n(4),f=function(e){var t=e.note,n=e.toggleImportance,a=e.deleteFunc,o=t.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},o),r.a.createElement("button",{value:t.content,onClick:a},"delete"))},m=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},d=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},v=n(5),g=n.n(v),b=null,h={getAll:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,g.a.post("/api/notes",t,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.next=3,g.a.put("".concat("/api/notes","/").concat(t),n,a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,g.a.delete("".concat("/api/notes","/").concat(t),n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){b="bearer ".concat(e)}},E={login:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),u=Object(p.a)(c,2),v=u[0],g=u[1],b=Object(a.useState)(!0),O=Object(p.a)(b,2),w=O[0],j=O[1],k=Object(a.useState)(null),S=Object(p.a)(k,2),x=S[0],y=S[1],N=Object(a.useState)(""),C=Object(p.a)(N,2),I=C[0],T=C[1],U=Object(a.useState)(""),z=Object(p.a)(U,2),J=z[0],A=z[1],D=Object(a.useState)(null),F=Object(p.a)(D,2),_=F[0],B=F[1],H=function(e){e.preventDefault();var t={content:v,important:Math.random()<.5};h.create(t).then((function(e){o(n.concat(e)),g("")}))},M=function(e){console.log(e.target.value),g(e.target.value)},P=w?n:n.filter((function(e){return e.important}));Object(a.useEffect)((function(){h.getAll().then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);B(t),h.setToken(t.token)}}),[]);var W=function(e){return function(){var t=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});h.update(e.id,t).then((function(t){o(n.map((function(n){return e.id!==n.id?n:t})))})).catch((function(e){y("401 Unauthorized"),console.log(e.message,"-----front end"),console.log(e),console.log(e.response.data.toJSON()),console.log(e.response.status),console.log(e.response.headers),setTimeout((function(){y(null)}),5e3)}))}},q=function(e){if(window.confirm("Delete "+e.target.value+"?")){var t=n.findIndex((function(t){return t.content===e.target.value})),a=n[t].id;h.remove(a).then((function(){o(n.filter((function(e){return e.id!==a})))})).catch((function(e){y("401 Unauthorized"),console.log(e.message,"-----front end"),console.log(e),console.log(e.response.data.toJSON()),console.log(e.response.status),console.log(e.response.headers),setTimeout((function(){y(null)}),5e3)}))}},G=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E.login({username:I,password:J});case 4:n=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),h.setToken(n.token),B(n),T(""),A(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),y("Wrong credentials"),setTimeout((function(){y(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:x}),null===_?r.a.createElement("form",{onSubmit:G},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:I,name:"Username",onChange:function(e){var t=e.target;return T(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:J,name:"Password",onChange:function(e){var t=e.target;return A(t.value)}})),r.a.createElement("button",{type:"submit"},"login")):r.a.createElement("div",null,r.a.createElement("p",null,_.name," logged-in"),r.a.createElement("form",{onSubmit:H},r.a.createElement("input",{value:v,onChange:M}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedNoteappUser"),h.setToken(""),B(null)}},"log out")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!w)}},"show ",w?"important":"all")),r.a.createElement("ul",null,P.map((function(e){return r.a.createElement(f,{key:e.id,note:e,toggleImportance:W(e),deleteFunc:q})}))),r.a.createElement(d,null))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0d185d9f.chunk.js.map