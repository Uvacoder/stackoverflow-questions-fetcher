(this["webpackJsonpstackoverflow-task"]=this["webpackJsonpstackoverflow-task"]||[]).push([[6],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(191),s=a(6),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(s.jsx)(n.a,{children:Object(s.jsx)("title",{children:"".concat(e)})})}},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(248),s=a.n(n).a;s.defaults.baseURL="https://api.stackexchange.com/2.3";var c={questions:{get:function(e){var t="".concat("/questions");return s.get(t,{params:e})}}}},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(0),s=a.n(n),c=a(705),r=a(398),o=a(703),l=a(397),i=a(679),d=a(138),j=a(261),u=a(262),b=a(242),h=a.n(b),O=a(6),x=c.a.Paragraph,f=Object(O.jsx)(r.a,{children:"Click here to open the question on the stack overflow website."}),v=s.a.memo((function(e){var t=e.open,a=void 0!==t&&t,n=e.onClose,s=void 0===n?void 0:n,c=e.data,r=void 0===c?void 0:c,b=function(){s&&s()};return Object(O.jsx)("div",{className:"modal-container",children:Object(O.jsxs)(o.a,{full:!0,open:a,onClose:b,children:[Object(O.jsx)(o.a.Header,{children:Object(O.jsxs)(o.a.Title,{className:"mb-0",children:[Object(O.jsx)(l.a,{placement:"bottomStart",controlId:"control-id-hover",trigger:"hover",speaker:f,children:Object(O.jsxs)("span",{className:"text-xl font-semibold text-gray-900 cursor-pointer hover:opacity-70 hover:underline flex flex-row justify-start items-center",onClick:function(){window.open(null===r||void 0===r?void 0:r.link)},children:[Object(O.jsx)(h.a,{className:"mr-2"}),null===r||void 0===r?void 0:r.title]})}),Object(O.jsxs)("div",{className:"flex flex-row justify-start items-center mt-2",children:[Object(O.jsx)("span",{className:"text-xs",children:"Question ID: ".concat(null===r||void 0===r?void 0:r.question_id," | View count: ").concat(null===r||void 0===r?void 0:r.view_count," | Up vote count: ").concat(null===r||void 0===r?void 0:r.up_vote_count," | Is answered?")}),"\xa0",Object(O.jsx)("span",{className:"text-xs font-semibold ".concat((null===r||void 0===r?void 0:r.is_answered)?"text-green-600":"text-red-600"),children:(null===r||void 0===r?void 0:r.is_answered)?" YES":" NO"})]})]})}),Object(O.jsx)(i.a,{}),Object(O.jsxs)(o.a.Body,{children:[!(null===r||void 0===r?void 0:r.body_markdown)&&Object(O.jsx)(x,{rows:8}),(null===r||void 0===r?void 0:r.body_markdown)&&Object(O.jsx)(j.a,{children:null===r||void 0===r?void 0:r.body_markdown,remarkPlugins:[u.a]})]}),Object(O.jsx)(o.a.Footer,{className:"mx-6 my-2",children:Object(O.jsx)(d.a,{onClick:b,className:"w-24",appearance:"primary",children:"Close"})})]})})}))},247:function(e,t,a){"use strict";a.d(t,"a",(function(){return D}));var n=a(194),s=a.n(n),c=a(195),r=a(112),o=a(0),l=a.n(o),i=a(705),d=a(707),j=a(701),u=a(677),b=a(702),h=a(708),O=a(679),x=a(706),f=a(136),v=a(201),m=a(198),p=a.n(m),w=a(371),g=a(162),Y=a(6);p.a.updateLocale("en",{week:{dow:0}});var y={"This Week":[p()().startOf("week").toDate(),p()().endOf("week").toDate()],"Last Week":[p()().startOf("week").subtract(7,"days").toDate(),p()().endOf("week").subtract(7,"days").toDate()],today:[p()().startOf("day").toDate(),p()().endOf("day").toDate()]},k=i.a.Paragraph,D=l.a.memo((function(e){var t=e.onClick,a=e.autoHeight,n=void 0!==a&&a,l=Object(o.useState)(!1),i=Object(r.a)(l,2),m=i[0],D=i[1],M=Object(o.useState)(!1),C=Object(r.a)(M,2),L=(C[0],C[1]),S=Object(o.useState)([]),T=Object(r.a)(S,2),N=T[0],W=T[1],_=Object(o.useState)(y["Last Week"]),G=Object(r.a)(_,2),z=G[0],P=G[1],H=Object(o.useState)(1),q=Object(r.a)(H,2),I=q[0],B=q[1],E=Object(o.useState)(10),F=Object(r.a)(E,2),R=F[0],U=F[1],V=Object(o.useState)("creation"),J=Object(r.a)(V,2),K=J[0],Q=(J[1],Object(o.useState)("desc")),A=Object(r.a)(Q,2),X=A[0],Z=A[1],$=Object(o.useState)(["android"]),ee=Object(r.a)($,2),te=ee[0],ae=ee[1];Object(o.useEffect)((function(){ne()}),[I,R,K,X,te,z]);var ne=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.prev=1,t="Today"===se()?p()(y.today[0]).unix():p()(z[0]).unix(),a="Today"===se()?p()(y.today[1]).unix():p()(z[1]).unix(),e.next=6,f.a.questions.get({page:I,pagesize:R,sort:K,order:X,tagged:te.join(";"),site:"stackoverflow",fromdate:t,todate:a,filter:"!6VvPDzO8siz87"});case 6:n=e.sent,c=n.data,console.log("res",c),W(c.items),L(c.has_more),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:return e.prev=15,D(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,13,15,18]])})));return function(){return e.apply(this,arguments)}}(),se=function(){if(!z)return"-";var e=[w.a(new Date,6),new Date],t=p()(y["This Week"][0]).format("DDMMYYYY"),a=p()(y["This Week"][1]).format("DDMMYYYY"),n=p()(y["Last Week"][0]).format("DDMMYYYY"),s=p()(y["Last Week"][1]).format("DDMMYYYY"),c=p()(e[0]).format("DDMMYYYY"),r=p()(e[1]).format("DDMMYYYY"),o=p()(y.today[0]).format("DDMMYYYY"),l=p()(y.today[0]).format("DDMMYYYY"),i=p()(z[0]).format("DDMMYYYY"),d=p()(z[1]).format("DDMMYYYY");return i===n&&d===s?"Last week":i===t&&d===a?"This week":i===c&&d===r?"Last 7 days":i===o&&d===l?"Today":"Custom"};return Object(Y.jsx)("div",{children:Object(Y.jsxs)(d.a,{header:Object(Y.jsx)("div",{className:"text-xl font-bold",children:"Newest ".concat(te.length>0?"[ ".concat(te.join(" & ")," ] related"):"all"," questions")}),shaded:!0,defaultExpanded:!0,children:[Object(Y.jsx)(d.a,{bordered:!0,className:"mb-4 bg-gray-50",children:Object(Y.jsxs)(j.a,{layout:"inline",children:[Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Items:"}),Object(Y.jsx)(u.a,{cleanable:!1,searchable:!1,value:R,onChange:function(e){U(Number.parseInt(e.toString())),B(1)},data:[{label:"10 per page",value:10},{label:"20 per page",value:20},{label:"30 per page",value:30}],style:{width:120}})]}),Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Sort:"}),Object(Y.jsx)(u.a,{cleanable:!1,searchable:!1,value:X,onChange:function(e){Z(e),B(1)},data:[{label:"Newest",value:"desc"},{label:"Oldest",value:"asc"}],style:{width:120}})]}),Object(Y.jsx)(j.a.ControlLabel,{children:"Search:"}),Object(Y.jsx)(j.a.Group,{style:{width:350},children:Object(Y.jsx)(v.a,{tags:te,onChange:function(e){ae(e),B(1)},placeholder:"Type and press enter",maxTags:4,removeOnBackspace:!0})}),Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Date (".concat(se(),"):")}),Object(Y.jsx)(b.a,{cleanable:!1,className:"",value:z,onChange:function(e){P(e),B(1)},showOneCalendar:!1,locale:{sunday:"Su",monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",ok:"Confirm"},ranges:[{label:"Last week",value:y["Last Week"]},{label:"Last 7 days",value:[w.a(new Date,6),new Date]},{label:"Today",value:y.today},{label:"This week",value:y["This Week"]}]})]})]})}),m?Object(Y.jsx)(k,{style:{marginTop:30},rows:5,active:!0}):Object(Y.jsxs)(Y.Fragment,{children:[N.length>0&&Object(Y.jsxs)(h.a,{height:n?void 0:520,autoHeight:n,wordWrap:!0,loading:m,affixHorizontalScrollbar:!0,rowClassName:"cursor-pointer",data:N,onRowClick:function(e){t&&t(e)},children:[Object(Y.jsxs)(g.b,{width:50,align:"center",fixed:!0,children:[Object(Y.jsx)(g.d,{children:"#"}),Object(Y.jsx)(g.a,{children:function(e,t){return t+R*(I-1)+1}})]}),Object(Y.jsxs)(g.b,{flexGrow:1,children:[Object(Y.jsx)(g.d,{children:"Title"}),Object(Y.jsx)(g.a,{dataKey:"title"})]}),Object(Y.jsxs)(g.b,{flexGrow:2,children:[Object(Y.jsx)(g.d,{children:"Created at"}),Object(Y.jsx)(g.a,{children:function(e){return Object(Y.jsx)("span",{className:"text-pink-700",children:p.a.unix(e.creation_date).format("LLL")})}})]})]}),0===N.length&&Object(Y.jsx)("div",{className:"w-full flex flex-row justify-center items-center font-semibold text-lg",children:"There is no more data"}),Object(Y.jsx)(O.a,{}),Object(Y.jsx)(x.a,{prev:!0,last:!0,next:!0,first:!0,size:"sm",total:1e3,limit:R,maxButtons:5,activePage:I,onChangePage:B})]})]})})}))},260:function(e,t,a){"use strict";a.d(t,"a",(function(){return D}));var n=a(194),s=a.n(n),c=a(195),r=a(112),o=a(0),l=a.n(o),i=a(705),d=a(707),j=a(701),u=a(677),b=a(702),h=a(708),O=a(679),x=a(706),f=a(136),v=a(201),m=a(198),p=a.n(m),w=a(371),g=a(162),Y=a(6);p.a.updateLocale("en",{week:{dow:0}});var y={"This Week":[p()().startOf("week").toDate(),p()().endOf("week").toDate()],"Last Week":[p()().startOf("week").subtract(7,"days").toDate(),p()().endOf("week").subtract(7,"days").toDate()],today:[p()().startOf("day").toDate(),p()().endOf("day").toDate()]},k=i.a.Paragraph,D=l.a.memo((function(e){var t=e.onClick,a=e.autoHeight,n=void 0!==a&&a,l=Object(o.useState)(!1),i=Object(r.a)(l,2),m=i[0],D=i[1],M=Object(o.useState)(!1),C=Object(r.a)(M,2),L=(C[0],C[1]),S=Object(o.useState)([]),T=Object(r.a)(S,2),N=T[0],W=T[1],_=Object(o.useState)(y["Last Week"]),G=Object(r.a)(_,2),z=G[0],P=G[1],H=Object(o.useState)(1),q=Object(r.a)(H,2),I=q[0],B=q[1],E=Object(o.useState)(10),F=Object(r.a)(E,2),R=F[0],U=F[1],V=Object(o.useState)("votes"),J=Object(r.a)(V,2),K=J[0],Q=(J[1],Object(o.useState)("desc")),A=Object(r.a)(Q,2),X=A[0],Z=A[1],$=Object(o.useState)(["android"]),ee=Object(r.a)($,2),te=ee[0],ae=ee[1];Object(o.useEffect)((function(){ne()}),[I,R,K,X,te,z]);var ne=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.prev=1,t="Today"===se()?p()(y.today[0]).unix():p()(z[0]).unix(),a="Today"===se()?p()(y.today[1]).unix():p()(z[1]).unix(),e.next=6,f.a.questions.get({page:I,pagesize:R,sort:K,order:X,tagged:te.join(";"),site:"stackoverflow",fromdate:t,todate:a,filter:"!6VvPDzO8siz87"});case 6:n=e.sent,c=n.data,console.log("res",c),W(c.items),L(c.has_more),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:return e.prev=15,D(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,13,15,18]])})));return function(){return e.apply(this,arguments)}}(),se=function(){if(!z)return"-";var e=[w.a(new Date,6),new Date],t=p()(y["This Week"][0]).format("DDMMYYYY"),a=p()(y["This Week"][1]).format("DDMMYYYY"),n=p()(y["Last Week"][0]).format("DDMMYYYY"),s=p()(y["Last Week"][1]).format("DDMMYYYY"),c=p()(e[0]).format("DDMMYYYY"),r=p()(e[1]).format("DDMMYYYY"),o=p()(y.today[0]).format("DDMMYYYY"),l=p()(y.today[0]).format("DDMMYYYY"),i=p()(z[0]).format("DDMMYYYY"),d=p()(z[1]).format("DDMMYYYY");return i===n&&d===s?"Last week":i===t&&d===a?"This week":i===c&&d===r?"Last 7 days":i===o&&d===l?"Today":"Custom"};return Object(Y.jsx)("div",{children:Object(Y.jsxs)(d.a,{header:Object(Y.jsx)("div",{className:"text-xl font-bold",children:"Most voted ".concat(te.length>0?"[ ".concat(te.join(" & ")," ] related"):"all"," questions")}),shaded:!0,defaultExpanded:!0,children:[Object(Y.jsx)(d.a,{bordered:!0,className:"mb-4 bg-gray-50",children:Object(Y.jsxs)(j.a,{layout:"inline",children:[Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Items:"}),Object(Y.jsx)(u.a,{cleanable:!1,searchable:!1,value:R,onChange:function(e){U(Number.parseInt(e.toString())),B(1)},data:[{label:"10 per page",value:10},{label:"20 per page",value:20},{label:"30 per page",value:30}],style:{width:120}})]}),Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Sort:"}),Object(Y.jsx)(u.a,{cleanable:!1,searchable:!1,value:X,onChange:function(e){Z(e),B(1)},data:[{label:"Higher",value:"desc"},{label:"Lower",value:"asc"}],style:{width:120}})]}),Object(Y.jsx)(j.a.ControlLabel,{children:"Search:"}),Object(Y.jsx)(j.a.Group,{style:{width:350},children:Object(Y.jsx)(v.a,{tags:te,onChange:function(e){ae(e),B(1)},placeholder:"Type and press enter",maxTags:4,removeOnBackspace:!0})}),Object(Y.jsxs)(j.a.Group,{children:[Object(Y.jsx)(j.a.ControlLabel,{children:"Date (".concat(se(),"):")}),Object(Y.jsx)(b.a,{cleanable:!1,className:"",value:z,onChange:function(e){P(e),B(1)},showOneCalendar:!1,locale:{sunday:"Su",monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",ok:"Confirm"},ranges:[{label:"Last week",value:y["Last Week"]},{label:"Last 7 days",value:[w.a(new Date,6),new Date]},{label:"Today",value:y.today},{label:"This week",value:y["This Week"]}]})]})]})}),m?Object(Y.jsx)(k,{style:{marginTop:30},rows:5,active:!0}):Object(Y.jsxs)(Y.Fragment,{children:[N.length>0&&Object(Y.jsxs)(h.a,{height:n?void 0:520,autoHeight:n,wordWrap:!0,loading:m,affixHorizontalScrollbar:!0,rowClassName:"cursor-pointer",data:N,onRowClick:function(e){t&&t(e)},children:[Object(Y.jsxs)(g.b,{width:50,align:"center",fixed:!0,children:[Object(Y.jsx)(g.d,{children:"#"}),Object(Y.jsx)(g.a,{children:function(e,t){return t+R*(I-1)+1}})]}),Object(Y.jsxs)(g.b,{flexGrow:1,children:[Object(Y.jsx)(g.d,{children:"Title"}),Object(Y.jsx)(g.a,{dataKey:"title"})]}),Object(Y.jsxs)(g.b,{width:100,align:"center",fixed:!0,children:[Object(Y.jsx)(g.d,{children:"Up vote count"}),Object(Y.jsx)(g.a,{children:function(e){return Object(Y.jsx)("span",{className:"text-green-800 font-semibold",children:null===e||void 0===e?void 0:e.up_vote_count})}})]}),Object(Y.jsxs)(g.b,{flexGrow:2,children:[Object(Y.jsx)(g.d,{children:"Created at"}),Object(Y.jsx)(g.a,{children:function(e){return Object(Y.jsx)("span",{className:"text-pink-700",children:p.a.unix(e.creation_date).format("LLL")})}})]})]}),0===N.length&&Object(Y.jsx)("div",{className:"w-full flex flex-row justify-center items-center font-semibold text-lg",children:"There is no more data"}),Object(Y.jsx)(O.a,{}),Object(Y.jsx)(x.a,{prev:!0,last:!0,next:!0,first:!0,size:"sm",total:1e3,limit:R,maxButtons:5,activePage:I,onChangePage:B})]})]})})}))},556:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(112),s=a(124),c=a(0),r=a.n(c),o=a(679),l=a(121),i=a(156),d=a(247),j=a(260),u=a(6),b=r.a.memo((function(e){Object(s.a)(e);var t=Object(l.a)("Stack overflow explorer - Hamed task"),a=Object(c.useState)(!1),r=Object(n.a)(a,2),b=r[0],h=r[1],O=Object(c.useState)(void 0),x=Object(n.a)(O,2),f=x[0],v=x[1];return Object(u.jsxs)("div",{children:[t,Object(u.jsx)(d.a,{onClick:function(e){v(e),h(!0)}}),Object(u.jsx)(o.a,{}),Object(u.jsx)(j.a,{onClick:function(e){v(e),h(!0)}}),Object(u.jsx)(i.a,{open:b,onClose:function(){h(!1)},data:f})]})}))}}]);
//# sourceMappingURL=6.a8a20a1b.chunk.js.map