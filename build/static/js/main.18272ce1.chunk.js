(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(2),l=n(1),o=n(3),i=n.n(o),m=n(6),v=n(7),f=(n(14),function(){return r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),d=function(e){var t=e.firstName,n=e.lastName,a="".concat(t," ").concat(n);return r.a.createElement("li",null,a)},E=(n(15),function(e){var t=e.users;return r.a.createElement("ul",{className:"users-list"},t.map((function(e){var t=e.id,n=e.firstName,a=e.lastName;return r.a.createElement(d,{firstName:n,lastName:a,key:t})})))});n(16);var p=function(e){var t,n=e.month,a=e.monthName,c=e.users,s=e.isMousOver,u=e.onMouseOver;return r.a.createElement("div",{style:{backgroundColor:(t=c.length,t>=0&&t<=2?"gray":t>=3&&t<=6?"blue":t>=7&&t<=10?"green":t>=11?"red":void 0)},onMouseOver:function(){return u(n,!0)},onMouseLeave:function(){return u(n,!1)},className:"month"},a,s&&r.a.createElement(E,{users:c}))},b=(n(17),function(e){var t=e.months,n=e.onMouseOver;return Object.keys(t).sort().map((function(e){return r.a.createElement(p,{month:e,users:t[e].users,isMousOver:t[e].isMousOver,monthName:t[e].monthName,key:e,onMouseOver:n})}))}),h={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September",10:"October",11:"November",12:"December"};n(18);var O=function(){var e=Object(a.useState)(null),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,a=t.reduce((function(e,t){var n=t.dob.slice(5,7);return e[n]?e[n].users=e[n].users.concat(t):e[n]={users:[t],isMousOver:!1,monthName:h[n]},e}),{}),c(a),console.log(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"wrapper"},n?r.a.createElement(b,{months:n,onMouseOver:function(e,t){c(Object(l.a)(Object(l.a)({},n),{},Object(u.a)({},e,Object(l.a)(Object(l.a)({},n[e]),{},{isMousOver:t}))))}}):r.a.createElement(f,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.18272ce1.chunk.js.map