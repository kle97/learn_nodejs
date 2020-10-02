(this.webpackJsonplearn_react=this.webpackJsonplearn_react||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),u=(n(22),n(1)),l=n.n(u),i=n(3),s=n(6),p=n(4),f=function(e){var t=e.note,n=e.toggleImportance,a=e.deleteFunc,o=t.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},o),r.a.createElement("button",{value:t.content,onClick:a},"delete"))},m=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},v=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},d=n(5),b=n.n(d),g=null,h={getAll:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,b.a.post("/api/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.put("".concat("/api/notes","/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,b.a.delete("".concat("/api/notes","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)}},E={login:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),u=Object(p.a)(c,2),d=u[0],b=u[1],g=Object(a.useState)(!0),O=Object(p.a)(g,2),w=O[0],j=O[1],k=Object(a.useState)(null),x=Object(p.a)(k,2),S=x[0],y=x[1],N=Object(a.useState)(""),T=Object(p.a)(N,2),C=T[0],I=T[1],A=Object(a.useState)(""),U=Object(p.a)(A,2),z=U[0],D=U[1],J=Object(a.useState)(null),F=Object(p.a)(J,2),_=F[0],B=F[1],H=Object(a.useState)(!1),M=Object(p.a)(H,2),P=(M[0],M[1],function(e){e.preventDefault();var t={content:d,important:Math.random()<.5};h.create(t).then((function(e){o(n.concat(e)),b("")}))}),W=function(e){console.log(e.target.value),b(e.target.value)},q=w?n:n.filter((function(e){return e.important}));Object(a.useEffect)((function(){h.getAll().then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);B(t),h.setToken(t.token)}}),[]);var G=function(e){return function(){var t=Object(s.a)(Object(s.a)({},e),{},{important:!e.important});h.update(e.id,t).then((function(t){o(n.map((function(n){return e.id!==n.id?n:t})))})).catch((function(e){y(e.response.statusText),console.log(e.message),console.log(e.response),setTimeout((function(){y(null)}),5e3)}))}},K=function(e){if(window.confirm("Delete "+e.target.value+"?")){var t=n.findIndex((function(t){return t.content===e.target.value})),a=n[t].id;h.remove(a).then((function(){o(n.filter((function(e){return e.id!==a})))})).catch((function(e){y(e.response.statusText),console.log(e.message),console.log(e.response),setTimeout((function(){y(null)}),5e3)}))}},L=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E.login({username:C,password:z});case 4:n=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),h.setToken(n.token),B(n),I(""),D(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),y("Wrong credentials"),setTimeout((function(){y(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:S}),null===_?r.a.createElement("form",{onSubmit:L},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:C,name:"Username",onChange:function(e){return I(e.target.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:z,name:"Password",onChange:function(e){return D(e.target.value)}})),r.a.createElement("button",{type:"submit"},"login")):r.a.createElement("div",null,r.a.createElement("p",null,_.name," logged-in"),r.a.createElement("form",{onSubmit:P},r.a.createElement("input",{value:d,onChange:W}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedNoteappUser"),h.setToken(""),B(null)}},"log out")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!w)}},"show ",w?"important":"all")),r.a.createElement("ul",null,q.map((function(e){return r.a.createElement(f,{key:e.id,note:e,toggleImportance:G(e),deleteFunc:K})}))),r.a.createElement(v,null))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.56bf10b5.chunk.js.map