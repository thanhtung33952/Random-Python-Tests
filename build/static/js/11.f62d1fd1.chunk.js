(this["webpackJsonpvietmap-ecevn"]=this["webpackJsonpvietmap-ecevn"]||[]).push([[11],{203:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c}));n(206),n(207);function i(t){if(!t)return!1;return!!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t).toLowerCase())}function r(t){return!t||void 0===t||""===t||0===t.length}function c(t){return!t||void 0===t}},219:function(t,e,n){"use strict";var i=n(204),r=n(140),c=n(45);e.a=Object(r.a)((function(t){return{root:{},titleForm:{fontWeight:600,margin:"20px 20px 20px 40px",fontSize:"1rem"},formContent:{padding:40,position:"relative"},formGroup:{display:"flex",marginBottom:20,alignItems:"center","& label":{width:"25%","& em":{color:"red",fontStyle:"inherit"}}},inputControl:{width:"80%","& p":{margin:"5px 0 0",fontSize:10}},rootInput:{"& fieldset":{}},thisInputError:{"& fieldset":{}},thisInput:{padding:10},rowInline:{display:"flex",width:"80%"},formControlSelect:{flex:"1 auto","& select":{padding:10},"& fieldset":{}},chip:{color:"#fff"},btnOpen:{marginLeft:20,minWidth:200,fontSize:"1rem"},rowSubmit:Object(i.a)({},c.c),btnCance:Object(i.a)({},c.a),boxLoading:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255, 0.3)",zIndex:99999},iconProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},msgError:{paddingRight:50,paddingTop:15},msgSuc:{paddingRight:50,paddingTop:15},bGround:{backgroundColor:"yellow",margin:"20px 40px 20px 20px"},headFormGroup:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},marginIcon:{marginLeft:-22},selectErro:{color:"red",marginLeft:"20%",marginTop:-15,fontSize:10,marginBottom:20},scrollPage:{overflowY:"auto",height:"calc(100vh - 220px)"}}}))},316:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var i=n(8),r=n(204),c=n(23),o=n(0),a=n(84),s=n.n(a),l=n(6),b=n(13),j=n(203),d=n(76),u=n(324),m=n(300),p=n(301),h=n(219),O=n(3);function f(){var t,e=Object(h.a)(),n=(Object(b.f)().device_id,Object(o.useState)(!0)),a=Object(c.a)(n,2),f=a[0],x=(a[1],Object(o.useState)("")),v=Object(c.a)(x,2),S=v[0],C=(v[1],g(Object(j.c)(S)||Object(j.b)(S)?"":S,!0)),I=g(Object(j.c)(S)||Object(j.b)(S)?"":S,!0),w=g(Object(j.c)(S)||Object(j.b)(S)?"":S,!0),y=Object(o.useState)({status:0,isLoading:!1,isLoading2:!1,msg:""}),N=Object(c.a)(y,2),L=N[0];N[1];return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)("div",{className:e.headFormGroup,children:Object(O.jsx)(d.a,{className:e.titleForm,children:f?"Th\xeam thi\u1ebft b\u1ecb m\u1edbi":"Ch\u1ec9nh s\u1eeda th\xf4ng tin thi\u1ebft b\u1ecb"})}),Object(O.jsxs)("div",{className:Object(l.a)(e.formContent,e.scrollPage),children:[Object(O.jsxs)("div",{className:e.formGroup,children:[Object(O.jsxs)("label",{children:["Id lo\u1ea1i thi\u1ebft b\u1ecb ",Object(O.jsx)("em",{children:"\uff08B\u1eaft Bu\u1ed9c\uff09"})]}),Object(O.jsx)(u.a,Object(r.a)({},C))]}),Object(O.jsxs)("div",{className:e.formGroup,children:[Object(O.jsxs)("label",{children:["Code ",Object(O.jsx)("em",{children:"\uff08B\u1eaft Bu\u1ed9c\uff09"})]}),Object(O.jsx)(u.a,Object(r.a)({},I))]}),Object(O.jsxs)("div",{className:e.formGroup,children:[Object(O.jsxs)("label",{children:["Imei ",Object(O.jsx)("em",{children:"\uff08B\u1eaft Bu\u1ed9c\uff09"})]}),Object(O.jsx)(u.a,Object(r.a)({},w))]}),Object(O.jsxs)("div",{className:e.rowSubmit,children:[Object(O.jsx)(d.a,{className:s()((t={},Object(i.a)(t,e.msgError,-1===L.status),Object(i.a)(t,e.msgSuc,1===L.status),t)),children:L.msg}),Object(O.jsxs)("div",{style:{position:"relative"},children:[Object(O.jsx)(m.a,{variant:"contained",color:"primary",children:f?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda"}),L.isLoading&&Object(O.jsx)(p.a,{size:24,className:e.iconProgress})]})]})]})]})}function g(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Object(h.a)(),r=Object(o.useState)(t),a=Object(c.a)(r,2),s=a[0],l=a[1],b=Object(o.useState)(!0),d=Object(c.a)(b,2),u=d[0],m=d[1];function p(t){l(t.target.value),u&&m(!u)}Object(o.useEffect)((function(){Object(j.b)(t)||l(t)}),[t]);var O=!(!e||!Object(j.b)(s)||u),f=e&&Object(j.b)(s)&&!u?"\u0110\xe2y l\xe0 m\u1ed9t m\u1ee5c b\u1eaft bu\u1ed9c.":null;return u||Object(j.b)(s)||!n||Object(j.a)(s)||(O=!0,f="\u0110\u1ecba ch\u1ec9 email kh\xf4ng h\u1ee3p l\u1ec7."),{value:s,error:O,helperText:f,onChange:p,variant:"outlined",className:i.inputControl,InputProps:{classes:{root:i.rootInput,input:i.thisInput,error:i.thisInputError}}}}}}]);
//# sourceMappingURL=11.f62d1fd1.chunk.js.map