import{s as Q,i as Ae,c as G,n as U,a as pe,e as _e,b as Be,u as Te,g as He,d as Se,r as Ze,H as ne,p as ae,G as ge,t as Ne}from"../chunks/scheduler.y4uHs2UB.js";import{S as X,i as Y,e as y,c as N,f as A,g as $,a as P,h as c,j as u,k as M,m as q,l as ee,t as w,b as F,d as z,u as R,v as J,y as _,w as W,s as H,n as S,B as te,E as B,F as T,D as ve,p as se,q as ie,J as be,o as fe,r as De,I as Pe}from"../chunks/index.Cysm1UDV.js";import{t as oe}from"../chunks/translations.C2mFf6Kf.js";import{v as $e}from"../chunks/env.C2bSzLpJ.js";import{p as qe}from"../chunks/stores.DNNG7SXZ.js";import{g as ze}from"../chunks/meowbalt.CFk2ZICV.js";import{c as re,d as de,b as Ue}from"../chunks/download.CxS0IV93.js";import{link as le}from"../chunks/omnibox.C56TUS5r.js";import{u as Oe}from"../chunks/settings.RqfMgPN1.js";import{b as Ke,t as je,c as Re}from"../chunks/turnstile.ehXC8yNq.js";import{X as Je}from"../chunks/x.BN7WJZWw.js";import Ce from"../chunks/api.Bpu_nEUt.js";import{S as We,a as he}from"../chunks/SettingsButton.Cu9uZFbP.js";import{L as Ge}from"../chunks/link.C32hBJay.js";import{I as Qe,g as Xe,a as Ye,e as ce}from"../chunks/Icon.NybfZExb.js";import{A as xe}from"../chunks/ActionButton.DTUw35pQ.js";import{M as et}from"../chunks/Meowbalt.BU5a0tFD.js";import{getServerInfo as tt}from"../chunks/server-info.CbjJofgo.js";import{S as lt}from"../chunks/Skeleton.iepKNwL3.js";import{P as nt}from"../chunks/plus.DrVkQ65T.js";function rt(i){let e,r,t,l,a,n;return r=new Je({}),{c(){e=y("button"),N(r.$$.fragment),this.h()},l(s){e=A(s,"BUTTON",{id:!0,"aria-label":!0,class:!0});var o=$(e);P(r.$$.fragment,o),o.forEach(c),this.h()},h(){u(e,"id","clear-button"),u(e,"aria-label",t=i[1]("a11y.save.clear_input")),u(e,"class","svelte-13zbj0a")},m(s,o){M(s,e,o),q(r,e,null),l=!0,a||(n=ee(e,"click",function(){Ae(i[0])&&i[0].apply(this,arguments)}),a=!0)},p(s,[o]){i=s,(!l||o&2&&t!==(t=i[1]("a11y.save.clear_input")))&&u(e,"aria-label",t)},i(s){l||(w(r.$$.fragment,s),l=!0)},o(s){F(r.$$.fragment,s),l=!1},d(s){s&&c(e),z(r),a=!1,n()}}}function at(i,e,r){let t;G(i,oe,a=>r(1,t=a));let{click:l}=e;return i.$$set=a=>{"click"in a&&r(0,l=a.click)},[l,t]}class st extends X{constructor(e){super(),Y(this,e,at,rt,Q,{click:0})}}function it(i){let e,r,t,l,a;return{c(){e=y("button"),r=y("span"),t=R(i[4]),this.h()},l(n){e=A(n,"BUTTON",{id:!0,"aria-label":!0,class:!0});var s=$(e);r=A(s,"SPAN",{id:!0,class:!0});var o=$(r);t=J(o,i[4]),o.forEach(c),s.forEach(c),this.h()},h(){u(r,"id","download-state"),u(r,"class","svelte-m5le8h"),u(e,"id","download-button"),e.disabled=i[0],u(e,"aria-label",i[3]),u(e,"class","svelte-m5le8h")},m(n,s){M(n,e,s),_(e,r),_(r,t),l||(a=ee(e,"click",i[7]),l=!0)},p(n,[s]){s&16&&W(t,n[4]),s&1&&(e.disabled=n[0]),s&8&&u(e,"aria-label",n[3])},i:U,o:U,d(n){n&&c(e),l=!1,a()}}}function ot(i,e,r){let t,l,a;G(i,oe,p=>r(6,a=p));let{url:n}=e,{disabled:s=!1}=e,{loading:o=!1}=e,h={id:"save-error",type:"small",meowbalt:"error",buttons:[{text:a("button.gotit"),main:!0,action:()=>{}}]};const m=p=>{r(0,s=p!=="idle"),r(5,o=p==="think"||p==="check"),r(4,t={idle:">>",think:"...",check:"..?",done:">>>",error:"!!"}[p]),r(3,l=a({idle:"a11y.save.download",think:"a11y.save.download.think",check:"a11y.save.download.check",done:"a11y.save.download.done",error:"a11y.save.download.error"}[p])),["done","error"].includes(p)&&setTimeout(()=>m("idle"),1500)},d=async p=>{var b;m("think");const f=await Ce.request(p);if(!f)return m("error"),re({...h,bodyText:a("error.api.unreachable")});if(f.status==="error")return m("error"),re({...h,bodyText:a(f.error.code,(b=f==null?void 0:f.error)==null?void 0:b.context)});if(f.status==="redirect")return m("done"),de({url:f.url,urlType:"redirect"});if(f.status==="tunnel")return m("check"),await Ce.probeCobaltTunnel(f.url)===200?(m("done"),de({url:f.url})):(m("error"),re({...h,bodyText:a("error.tunnel.probe")}));if(f.status==="picker"){m("done");const L=[{text:a("button.done"),main:!0,action:()=>{}}];if(f.audio){const D=f.audio;L.unshift({text:a("button.download.audio"),main:!1,action:()=>{de({url:D})}})}return re({id:"download-picker",type:"picker",items:f.picker,buttons:L})}return m("error"),re({...h,bodyText:a("error.api.unknown_response")})},v=()=>d(n);return i.$$set=p=>{"url"in p&&r(1,n=p.url),"disabled"in p&&r(0,s=p.disabled),"loading"in p&&r(5,o=p.loading)},i.$$.update=()=>{i.$$.dirty&64&&r(3,l=a("a11y.save.download"))},r(4,t=">>"),[s,n,d,l,t,o,a,v]}class ut extends X{constructor(e){super(),Y(this,e,ot,it,Q,{url:1,disabled:0,loading:5,download:2})}get download(){return this.$$.ctx[2]}}function ft(i){let e;const r=i[2].default,t=Be(r,i,i[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&Te(t,r,l,l[3],e?Se(r,l[3],a,null):He(l[3]),null)},i(l){e||(w(t,l),e=!0)},o(l){F(t,l),e=!1},d(l){t&&t.d(l)}}}function ct(i){let e,r;const t=[{type:"outline"},{name:"loader-2"},i[1],{iconNode:i[0]}];let l={$$slots:{default:[ft]},$$scope:{ctx:i}};for(let a=0;a<t.length;a+=1)l=pe(l,t[a]);return e=new Qe({props:l}),{c(){N(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,n){q(e,a,n),r=!0},p(a,[n]){const s=n&3?Xe(t,[t[0],t[1],n&2&&Ye(a[1]),n&1&&{iconNode:a[0]}]):{};n&8&&(s.$$scope={dirty:n,ctx:a}),e.$set(s)},i(a){r||(w(e.$$.fragment,a),r=!0)},o(a){F(e.$$.fragment,a),r=!1},d(a){z(e,a)}}}function dt(i,e,r){let{$$slots:t={},$$scope:l}=e;const a=[["path",{d:"M12 3a9 9 0 1 0 9 9"}]];return i.$$set=n=>{r(1,e=pe(pe({},e),_e(n))),"$$scope"in n&&r(3,l=n.$$scope)},e=_e(e),[a,e,t,l]}class ht extends X{constructor(e){super(),Y(this,e,dt,ct,Q,{})}}function pt(i){let e,r,t,l,a,n,s;return t=new ht({}),n=new Ge({}),{c(){e=y("div"),r=y("div"),N(t.$$.fragment),l=H(),a=y("div"),N(n.$$.fragment),this.h()},l(o){e=A(o,"DIV",{id:!0,class:!0});var h=$(e);r=A(h,"DIV",{class:!0});var m=$(r);P(t.$$.fragment,m),m.forEach(c),l=S(h),a=A(h,"DIV",{class:!0});var d=$(a);P(n.$$.fragment,d),d.forEach(c),h.forEach(c),this.h()},h(){u(r,"class","input-icon spinner-icon svelte-1288r1r"),u(a,"class","input-icon link-icon svelte-1288r1r"),u(e,"id","input-icons"),u(e,"class","svelte-1288r1r"),te(e,"loading",i[0])},m(o,h){M(o,e,h),_(e,r),q(t,r,null),_(e,l),_(e,a),q(n,a,null),s=!0},p(o,[h]){(!s||h&1)&&te(e,"loading",o[0])},i(o){s||(w(t.$$.fragment,o),w(n.$$.fragment,o),s=!0)},o(o){F(t.$$.fragment,o),F(n.$$.fragment,o),s=!1},d(o){o&&c(e),z(t),z(n)}}}function mt(i,e,r){let{loading:t}=e;return i.$$set=l=>{"loading"in l&&r(0,t=l.loading)},[t]}class _t extends X{constructor(e){super(),Y(this,e,mt,pt,Q,{loading:0})}}function gt(i){let e,r,t,l;return{c(){e=B("svg"),r=B("path"),t=B("path"),l=B("path"),this.h()},l(a){e=T(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var n=$(e);r=T(n,"path",{d:!0,fill:!0}),$(r).forEach(c),t=T(n,"path",{d:!0,fill:!0}),$(t).forEach(c),l=T(n,"path",{d:!0,fill:!0}),$(l).forEach(c),n.forEach(c),this.h()},h(){u(r,"d","M7.80282 23H12.0122L13.0122 16L12.0122 9H7.80282C6.80707 9 6 9.84705 6 10.8921V21.1079C6 22.153 6.80707 23 7.80282 23ZM26 16.0232C26 17.7104 24.6322 19.0781 22.945 19.0781C21.2579 19.0781 19.8901 17.7104 19.8901 16.0232C19.8901 14.336 21.2579 12.9683 22.945 12.9683C24.6322 12.9683 26 14.336 26 16.0232Z"),u(r,"fill","#8C8C8C"),u(t,"d","M20.6106 26.8309L11.9976 23.0011L11.9976 9.01942L20.0474 5.23153C21.1704 4.70349 23.0356 5.2552 23.0356 6.49651V25.3045C23.0356 26.5512 21.7343 27.3705 20.6106 26.8309Z"),u(t,"fill","#C8C8C8"),u(l,"d","M24.9692 26.6519L5.1497 6.83167C4.68545 6.36742 4.68545 5.61418 5.1497 5.14994C5.61394 4.6857 6.36718 4.6857 6.83142 5.14994L26.6509 24.9694C27.1151 25.4337 27.1151 26.1869 26.6509 26.6511C26.1866 27.1161 25.4342 27.1161 24.9692 26.6519Z"),u(l,"fill","#F8312F"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 32 32"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(a,n){M(a,e,n),_(e,r),_(e,t),_(e,l)},p:U,i:U,o:U,d(a){a&&c(e)}}}class vt extends X{constructor(e){super(),Y(this,e,null,gt,Q,{})}}function bt(i){let e,r,t,l;return{c(){e=B("svg"),r=B("path"),t=B("path"),l=B("path"),this.h()},l(a){e=T(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var n=$(e);r=T(n,"path",{d:!0,fill:!0}),$(r).forEach(c),t=T(n,"path",{d:!0,fill:!0}),$(t).forEach(c),l=T(n,"path",{d:!0,fill:!0}),$(l).forEach(c),n.forEach(c),this.h()},h(){u(r,"d","M14.3599 3.00421L8.21995 3.80421C7.89995 3.84421 7.65995 4.12421 7.65995 4.44421V12.0642C7.08995 11.8642 6.45995 11.7842 5.79995 11.8542C3.74995 12.0742 2.12995 13.7742 1.99995 15.8342C1.83995 18.3242 3.80995 20.3842 6.26995 20.3842C8.62995 20.3842 10.5499 18.4742 10.5499 16.1042C10.5499 16.0142 10.5499 15.9242 10.5399 15.8342V8.00421C10.5399 7.72421 10.7499 7.48421 11.0299 7.44421L14.4899 6.99421C14.7499 6.96421 14.9499 6.73421 14.9499 6.46421V3.53421C14.9599 3.21421 14.6799 2.96421 14.3599 3.00421Z"),u(r,"fill","#7941A5"),u(t,"d","M29.4 5.37423L23.26 6.17423C22.94 6.21423 22.7 6.48423 22.7 6.80423V16.8142C22.13 16.6142 21.5 16.5342 20.84 16.6042C18.79 16.8242 17.17 18.5242 17.04 20.5842C16.88 23.0742 18.85 25.1342 21.31 25.1342C23.67 25.1342 25.59 23.2242 25.59 20.8542C25.59 20.7642 25.59 20.6742 25.58 20.5842V10.3742C25.58 10.0942 25.79 9.85423 26.07 9.81423L29.53 9.36423C29.8 9.32423 30 9.10424 30 8.83424V5.89423C30 5.57423 29.72 5.33423 29.4 5.37423Z"),u(t,"fill","#7941A5"),u(l,"d","M13.09 10.6543L19.23 9.85429C19.55 9.80429 19.83 10.0543 19.83 10.3743V13.3043C19.83 13.5743 19.63 13.8043 19.37 13.8343L15.91 14.2843C15.63 14.3243 15.42 14.5643 15.42 14.8443V25.0643C15.43 25.1543 15.43 25.2443 15.43 25.3343C15.43 27.7043 13.51 29.6143 11.15 29.6143C8.68995 29.6143 6.71995 27.5543 6.87995 25.0643C6.99995 23.0043 8.61995 21.3143 10.67 21.0943C11.33 21.0243 11.96 21.1043 12.53 21.3043V11.2943C12.53 10.9643 12.77 10.6943 13.09 10.6543Z"),u(l,"fill","#7941A5"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 32 32"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(a,n){M(a,e,n),_(e,r),_(e,t),_(e,l)},p:U,i:U,o:U,d(a){a&&c(e)}}}class $t extends X{constructor(e){super(),Y(this,e,null,bt,Q,{})}}function Ct(i){let e,r,t,l;return{c(){e=B("svg"),r=B("path"),t=B("path"),l=B("path"),this.h()},l(a){e=T(a,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var n=$(e);r=T(n,"path",{d:!0,fill:!0}),$(r).forEach(c),t=T(n,"path",{d:!0,fill:!0}),$(t).forEach(c),l=T(n,"path",{d:!0,fill:!0}),$(l).forEach(c),n.forEach(c),this.h()},h(){u(r,"d","M10.5194 7.0517C10.2265 6.93064 9.99626 6.69861 9.88117 6.41614L8.929 4.25725C8.75112 3.91425 8.23842 3.91425 8.071 4.25725L7.11883 6.41614C6.99327 6.69861 6.76308 6.92055 6.48057 7.0517L5.26682 7.57629C4.91106 7.74779 4.91106 8.24212 5.26682 8.41362L6.48057 8.93821C6.77354 9.05927 7.00374 9.2913 7.11883 9.57377L8.071 11.7427C8.24888 12.0858 8.76158 12.0858 8.929 11.7427L9.88117 9.57377C10.0067 9.2913 10.2369 9.06936 10.5194 8.93821L11.7332 8.41362C12.0889 8.24212 12.0889 7.74779 11.7332 7.57629L10.5194 7.0517Z"),u(r,"fill","#FFA514"),u(t,"d","M25.5744 13.5546C24.7045 13.1673 24.0166 12.4539 23.6525 11.5775L20.7897 4.81023C20.2637 3.72992 18.7363 3.72992 18.2103 4.81023L15.3475 11.5775C14.9733 12.4539 14.2854 13.1673 13.4256 13.5546L9.80419 15.1955C8.73194 15.7254 8.73194 17.2746 9.80419 17.8045L13.4256 19.4454C14.2955 19.8327 14.9834 20.5461 15.3475 21.4225L18.2103 28.1898C18.7363 29.2701 20.2637 29.2701 20.7897 28.1898L23.6525 21.4225C24.0267 20.5461 24.7146 19.8327 25.5744 19.4454L29.1958 17.8045C30.2681 17.2746 30.2681 15.7254 29.1958 15.1955L25.5744 13.5546Z"),u(t,"fill","#FFA514"),u(l,"d","M8.2811 20.3304C8.44173 20.7222 8.73465 21.0258 9.10315 21.2021L10.6528 21.927C11.1157 22.1621 11.1157 22.8379 10.6528 23.073L9.10315 23.7979C8.73465 23.9742 8.44173 24.2876 8.2811 24.6696L7.05276 27.6474C6.82598 28.1175 6.17402 28.1175 5.94724 27.6474L4.7189 24.6696C4.55827 24.2778 4.26535 23.9742 3.89685 23.7979L2.34724 23.073C1.88425 22.8379 1.88425 22.1621 2.34724 21.927L3.89685 21.2021C4.26535 21.0258 4.55827 20.7124 4.7189 20.3304L5.94724 17.3526C6.17402 16.8825 6.82598 16.8825 7.05276 17.3526L8.2811 20.3304Z"),u(l,"fill","#FFA514"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 32 32"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(a,n){M(a,e,n),_(e,r),_(e,t),_(e,l)},p:U,i:U,o:U,d(a){a&&c(e)}}}class wt extends X{constructor(e){super(),Y(this,e,null,Ct,Q,{})}}function kt(i){let e,r,t,l,a,n,s,o,h,m;return{c(){e=B("svg"),r=B("path"),t=B("rect"),l=B("path"),a=B("path"),n=B("path"),s=B("path"),o=B("path"),h=B("path"),m=B("path"),this.h()},l(d){e=T(d,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var v=$(e);r=T(v,"path",{d:!0,fill:!0}),$(r).forEach(c),t=T(v,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,fill:!0}),$(t).forEach(c),l=T(v,"path",{d:!0,fill:!0}),$(l).forEach(c),a=T(v,"path",{d:!0,fill:!0}),$(a).forEach(c),n=T(v,"path",{d:!0,fill:!0}),$(n).forEach(c),s=T(v,"path",{d:!0,fill:!0}),$(s).forEach(c),o=T(v,"path",{d:!0,fill:!0}),$(o).forEach(c),h=T(v,"path",{d:!0,fill:!0}),$(h).forEach(c),m=T(v,"path",{d:!0,fill:!0}),$(m).forEach(c),v.forEach(c),this.h()},h(){u(r,"d","M25.5 2H6.5C5.67157 2 5 2.67157 5 3.5V27.5C5 28.3284 5.67157 29 6.5 29H16.4244C16.795 29 17.1524 28.8628 17.4278 28.6149L26.5034 20.4469C26.8195 20.1624 27 19.7572 27 19.332V3.5C27 2.67157 26.3284 2 25.5 2Z"),u(r,"fill","#DA882F"),u(t,"x","7"),u(t,"y","4"),u(t,"width","18"),u(t,"height","23"),u(t,"rx","1"),u(t,"fill","#F5F5F5"),u(l,"d","M18 3C18 1.89543 17.1046 1 16 1C14.8954 1 14 1.89543 14 3H13C11.8954 3 11 3.89543 11 5V6.5C11 6.77614 11.2239 7 11.5 7H20.5C20.7761 7 21 6.77614 21 6.5V5C21 3.89543 20.1046 3 19 3H18ZM17 3C17 3.55228 16.5523 4 16 4C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3Z"),u(l,"fill","#8F8F8F"),u(a,"d","M28 11C28.5523 11 29 11.4477 29 12V26L28.5 26.5L24 31H14C13.4477 31 13 30.5523 13 30V12C13 11.4477 13.4477 11 14 11H28Z"),u(a,"fill","#D9D9D9"),u(n,"d","M29 26H24.846C24.3788 26 24 26.3788 24 26.846V31C24.0914 30.9584 24.1755 30.9005 24.2478 30.8282L28.8282 26.2478C28.9005 26.1755 28.9584 26.0914 29 26Z"),u(n,"fill","#BDBDBD"),u(s,"d","M15 15.5C15 15.2239 15.1919 15 15.4286 15H26.5714C26.8081 15 27 15.2239 27 15.5C27 15.7761 26.8081 16 26.5714 16H15.4286C15.1919 16 15 15.7761 15 15.5Z"),u(s,"fill","#8F8F8F"),u(o,"d","M15 18.5C15 18.2239 15.1919 18 15.4286 18H26.5714C26.8081 18 27 18.2239 27 18.5C27 18.7761 26.8081 19 26.5714 19H15.4286C15.1919 19 15 18.7761 15 18.5Z"),u(o,"fill","#8F8F8F"),u(h,"d","M15.4286 21C15.1919 21 15 21.2239 15 21.5C15 21.7761 15.1919 22 15.4286 22H26.5714C26.8081 22 27 21.7761 27 21.5C27 21.2239 26.8081 21 26.5714 21H15.4286Z"),u(h,"fill","#8F8F8F"),u(m,"d","M15 24.5C15 24.2239 15.199 24 15.4444 24H22.5556C22.801 24 23 24.2239 23 24.5C23 24.7761 22.801 25 22.5556 25H15.4444C15.199 25 15 24.7761 15 24.5Z"),u(m,"fill","#8F8F8F"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 32 32"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(d,v){M(d,e,v),_(e,r),_(e,t),_(e,l),_(e,a),_(e,n),_(e,s),_(e,o),_(e,h),_(e,m)},p:U,i:U,o:U,d(d){d&&c(e)}}}class Et extends X{constructor(e){super(),Y(this,e,null,kt,Q,{})}}function we(i){let e,r=i[8]("save.label.community_instance")+"",t;return{c(){e=y("div"),t=R(r),this.h()},l(l){e=A(l,"DIV",{id:!0,class:!0});var a=$(e);t=J(a,r),a.forEach(c),this.h()},h(){u(e,"id","instance-label"),u(e,"class","svelte-1kokkg7")},m(l,a){M(l,e,a),_(e,t)},p(l,a){a&256&&r!==(r=l[8]("save.label.community_instance")+"")&&W(t,r)},d(l){l&&c(e)}}}function ke(i){let e,r;return e=new st({props:{click:i[21]}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){q(e,t,l),r=!0},p(t,l){const a={};l&128&&(a.click=t[21]),e.$set(a)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){z(e,t)}}}function Ee(i){let e,r,t,l;function a(o){i[23](o)}function n(o){i[24](o)}let s={url:i[7]};return i[4]!==void 0&&(s.disabled=i[4]),i[5]!==void 0&&(s.loading=i[5]),e=new ut({props:s}),i[22](e),ae.push(()=>be(e,"disabled",a)),ae.push(()=>be(e,"loading",n)),{c(){N(e.$$.fragment)},l(o){P(e.$$.fragment,o)},m(o,h){q(e,o,h),l=!0},p(o,h){const m={};h&128&&(m.url=o[7]),!r&&h&16&&(r=!0,m.disabled=o[4],ge(()=>r=!1)),!t&&h&32&&(t=!0,m.loading=o[5],ge(()=>t=!1)),e.$set(m)},i(o){l||(w(e.$$.fragment,o),l=!0)},o(o){F(e.$$.fragment,o),l=!1},d(o){i[22](null),z(e,o)}}}function Lt(i){let e,r,t=i[8]("save.auto")+"",l,a;return e=new wt({}),{c(){N(e.$$.fragment),r=H(),l=R(t)},l(n){P(e.$$.fragment,n),r=S(n),l=J(n,t)},m(n,s){q(e,n,s),M(n,r,s),M(n,l,s),a=!0},p(n,s){(!a||s&256)&&t!==(t=n[8]("save.auto")+"")&&W(l,t)},i(n){a||(w(e.$$.fragment,n),a=!0)},o(n){F(e.$$.fragment,n),a=!1},d(n){n&&(c(r),c(l)),z(e,n)}}}function Vt(i){let e,r,t=i[8]("save.audio")+"",l,a;return e=new $t({}),{c(){N(e.$$.fragment),r=H(),l=R(t)},l(n){P(e.$$.fragment,n),r=S(n),l=J(n,t)},m(n,s){q(e,n,s),M(n,r,s),M(n,l,s),a=!0},p(n,s){(!a||s&256)&&t!==(t=n[8]("save.audio")+"")&&W(l,t)},i(n){a||(w(e.$$.fragment,n),a=!0)},o(n){F(e.$$.fragment,n),a=!1},d(n){n&&(c(r),c(l)),z(e,n)}}}function Ft(i){let e,r,t=i[8]("save.mute")+"",l,a;return e=new vt({}),{c(){N(e.$$.fragment),r=H(),l=R(t)},l(n){P(e.$$.fragment,n),r=S(n),l=J(n,t)},m(n,s){q(e,n,s),M(n,r,s),M(n,l,s),a=!0},p(n,s){(!a||s&256)&&t!==(t=n[8]("save.mute")+"")&&W(l,t)},i(n){a||(w(e.$$.fragment,n),a=!0)},o(n){F(e.$$.fragment,n),a=!1},d(n){n&&(c(r),c(l)),z(e,n)}}}function It(i){let e,r,t,l,a,n;return e=new he({props:{settingContext:"save",settingId:"downloadMode",settingValue:"auto",$$slots:{default:[Lt]},$$scope:{ctx:i}}}),t=new he({props:{settingContext:"save",settingId:"downloadMode",settingValue:"audio",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),a=new he({props:{settingContext:"save",settingId:"downloadMode",settingValue:"mute",$$slots:{default:[Ft]},$$scope:{ctx:i}}}),{c(){N(e.$$.fragment),r=H(),N(t.$$.fragment),l=H(),N(a.$$.fragment)},l(s){P(e.$$.fragment,s),r=S(s),P(t.$$.fragment,s),l=S(s),P(a.$$.fragment,s)},m(s,o){q(e,s,o),M(s,r,o),q(t,s,o),M(s,l,o),q(a,s,o),n=!0},p(s,o){const h={};o&134217984&&(h.$$scope={dirty:o,ctx:s}),e.$set(h);const m={};o&134217984&&(m.$$scope={dirty:o,ctx:s}),t.$set(m);const d={};o&134217984&&(d.$$scope={dirty:o,ctx:s}),a.$set(d)},i(s){n||(w(e.$$.fragment,s),w(t.$$.fragment,s),w(a.$$.fragment,s),n=!0)},o(s){F(e.$$.fragment,s),F(t.$$.fragment,s),F(a.$$.fragment,s),n=!1},d(s){s&&(c(r),c(l)),z(e,s),z(t,s),z(a,s)}}}function Mt(i){let e,r,t,l=i[8]("save.paste")+"",a,n,s,o=i[8]("save.paste.long")+"",h,m;return e=new Et({}),{c(){N(e.$$.fragment),r=H(),t=y("span"),a=R(l),n=H(),s=y("span"),h=R(o),this.h()},l(d){P(e.$$.fragment,d),r=S(d),t=A(d,"SPAN",{id:!0,class:!0});var v=$(t);a=J(v,l),v.forEach(c),n=S(d),s=A(d,"SPAN",{id:!0,class:!0});var p=$(s);h=J(p,o),p.forEach(c),this.h()},h(){u(t,"id","paste-desktop-text"),u(t,"class","svelte-1kokkg7"),u(s,"id","paste-mobile-text"),u(s,"class","svelte-1kokkg7")},m(d,v){q(e,d,v),M(d,r,v),M(d,t,v),_(t,a),M(d,n,v),M(d,s,v),_(s,h),m=!0},p(d,v){(!m||v&256)&&l!==(l=d[8]("save.paste")+"")&&W(a,l),(!m||v&256)&&o!==(o=d[8]("save.paste.long")+"")&&W(h,o)},i(d){m||(w(e.$$.fragment,d),m=!0)},o(d){F(e.$$.fragment,d),m=!1},d(d){d&&(c(r),c(t),c(n),c(s)),z(e,d)}}}function Dt(i){let e=$e.DEFAULT_API||!i[0].url.host.endsWith(".cobalt.tools")&&i[0].url.host!=="cobalt.tools",r,t,l,a,n,s,o,h,m,d,v=i[9](i[7]),p,f,b,L,D,Z,K,j,C=e&&we(i);a=new _t({props:{loading:i[5]||i[6]}});let V=i[7]&&!i[5]&&ke(i),I=v&&Ee(i);return b=new We({props:{$$slots:{default:[It]},$$scope:{ctx:i}}}),D=new xe({props:{id:"paste",click:i[10],$$slots:{default:[Mt]},$$scope:{ctx:i}}}),{c(){C&&C.c(),r=H(),t=y("div"),l=y("div"),N(a.$$.fragment),n=H(),s=y("input"),m=H(),V&&V.c(),d=H(),I&&I.c(),p=H(),f=y("div"),N(b.$$.fragment),L=H(),N(D.$$.fragment),this.h()},l(g){C&&C.l(g),r=S(g),t=A(g,"DIV",{id:!0,class:!0});var E=$(t);l=A(E,"DIV",{id:!0,class:!0});var O=$(l);P(a.$$.fragment,O),n=S(O),s=A(O,"INPUT",{id:!0,spellcheck:!0,autocomplete:!0,autocapitalize:!0,maxlength:!0,placeholder:!0,"aria-label":!0,"data-form-type":!0,class:!0}),m=S(O),V&&V.l(O),d=S(O),I&&I.l(O),O.forEach(c),p=S(E),f=A(E,"DIV",{id:!0,class:!0});var x=$(f);P(b.$$.fragment,x),L=S(x),P(D.$$.fragment,x),x.forEach(c),E.forEach(c),this.h()},h(){u(s,"id","link-area"),u(s,"spellcheck","false"),u(s,"autocomplete","off"),u(s,"autocapitalize","off"),u(s,"maxlength","512"),u(s,"placeholder",o=i[8]("save.input.placeholder")),u(s,"aria-label",h=i[6]?i[8]("a11y.save.link_area.turnstile"):i[8]("a11y.save.link_area")),u(s,"data-form-type","other"),s.disabled=i[4],u(s,"class","svelte-1kokkg7"),u(l,"id","input-container"),u(l,"class","svelte-1kokkg7"),te(l,"focused",i[3]),te(l,"downloadable",i[9](i[7])),u(f,"id","action-container"),u(f,"class","svelte-1kokkg7"),u(t,"id","omnibox"),u(t,"class","svelte-1kokkg7")},m(g,E){C&&C.m(g,E),M(g,r,E),M(g,t,E),_(t,l),q(a,l,null),_(l,n),_(l,s),ve(s,i[7]),i[17](s),_(l,m),V&&V.m(l,null),_(l,d),I&&I.m(l,null),_(t,p),_(t,f),q(b,f,null),_(f,L),q(D,f,null),Z=!0,K||(j=[ee(window,"keydown",i[11]),ee(s,"input",i[16]),ee(s,"input",i[18]),ee(s,"focus",i[19]),ee(s,"blur",i[20])],K=!0)},p(g,[E]){E&1&&(e=$e.DEFAULT_API||!g[0].url.host.endsWith(".cobalt.tools")&&g[0].url.host!=="cobalt.tools"),e?C?C.p(g,E):(C=we(g),C.c(),C.m(r.parentNode,r)):C&&(C.d(1),C=null);const O={};E&96&&(O.loading=g[5]||g[6]),a.$set(O),(!Z||E&256&&o!==(o=g[8]("save.input.placeholder")))&&u(s,"placeholder",o),(!Z||E&320&&h!==(h=g[6]?g[8]("a11y.save.link_area.turnstile"):g[8]("a11y.save.link_area")))&&u(s,"aria-label",h),(!Z||E&16)&&(s.disabled=g[4]),E&128&&s.value!==g[7]&&ve(s,g[7]),g[7]&&!g[5]?V?(V.p(g,E),E&160&&w(V,1)):(V=ke(g),V.c(),w(V,1),V.m(l,d)):V&&(se(),F(V,1,1,()=>{V=null}),ie()),E&128&&(v=g[9](g[7])),v?I?(I.p(g,E),E&128&&w(I,1)):(I=Ee(g),I.c(),w(I,1),I.m(l,null)):I&&(se(),F(I,1,1,()=>{I=null}),ie()),(!Z||E&8)&&te(l,"focused",g[3]),(!Z||E&640)&&te(l,"downloadable",g[9](g[7]));const x={};E&134217984&&(x.$$scope={dirty:E,ctx:g}),b.$set(x);const ue={};E&134217984&&(ue.$$scope={dirty:E,ctx:g}),D.$set(ue)},i(g){Z||(w(a.$$.fragment,g),w(V),w(I),w(b.$$.fragment,g),w(D.$$.fragment,g),Z=!0)},o(g){F(a.$$.fragment,g),F(V),F(I),F(b.$$.fragment,g),F(D.$$.fragment,g),Z=!1},d(g){g&&(c(r),c(t)),C&&C.d(g),z(a),i[17](null),V&&V.d(),I&&I.d(),z(b),z(D),K=!1,Ze(j)}}}function yt(i,e,r){let t,l,a,n,s,o,h,m,d;G(i,le,k=>r(7,n=k)),G(i,Ue,k=>r(25,s=k)),G(i,qe,k=>r(0,o=k)),G(i,Ke,k=>r(14,h=k)),G(i,je,k=>r(15,m=k)),G(i,oe,k=>r(8,d=k));let v,p,f=!1,b=!1,L=!1;const D=k=>{try{return/^https:/i.test(new URL(k).protocol)}catch{}},Z=()=>{s.length>0||b||L||navigator.clipboard.readText().then(async k=>{let me=k.match(/https:\/\/[^\s]+/g);me&&(ne(le,n=me[0],n),t||(await Ne(),p.download(n)))})},K=k=>{Oe({save:{downloadMode:k}})},j=k=>{if(!(!v||s.length>0||b||L)&&((k.metaKey||k.ctrlKey||k.key==="/")&&v.focus(),k.key==="Enter"&&D(n)&&f&&p.download(n),["Escape","Clear"].includes(k.key)&&f&&ne(le,n="",n),k.target!==v))switch(k.key){case"D":Z();break;case"J":K("auto");break;case"K":K("audio");break;case"L":K("mute");break}};function C(){n=this.value,le.set(n)}function V(k){ae[k?"unshift":"push"](()=>{v=k,r(1,v)})}const I=()=>r(3,f=!0),g=()=>r(3,f=!0),E=()=>r(3,f=!1),O=()=>ne(le,n="",n);function x(k){ae[k?"unshift":"push"](()=>{p=k,r(2,p)})}function ue(k){b=k,r(4,b)}function ye(k){L=k,r(5,L)}return i.$$.update=()=>{i.$$.dirty&49152&&r(6,t=m&&!h),i.$$.dirty&1&&r(13,l=o.url.hash.replace("#","")||""),i.$$.dirty&1&&r(12,a=o.url.searchParams.get("u")||""),i.$$.dirty&12288&&(l||a)&&(D(l)?ne(le,n=l,n):D(a)&&ne(le,n=a,n),ze("/",{replaceState:!0}))},[o,v,p,f,b,L,t,n,d,D,Z,j,a,l,h,m,C,V,I,g,E,O,x,ue,ye]}class At extends X{constructor(e){super(),Y(this,e,yt,Dt,Q,{})}}function Le(i,e,r){const t=i.slice();return t[14]=e[r],t}function Ve(i,e,r){const t=i.slice();return t[11]=e[r],t}function Fe(i){let e,r,t,l,a,n,s=i[5]("save.services.disclaimer")+"",o,h;const m=[Tt,Bt],d=[];function v(p,f){return p[4]?0:1}return t=v(i),l=d[t]=m[t](i),{c(){e=y("div"),r=y("div"),l.c(),a=H(),n=y("div"),o=R(s),this.h()},l(p){e=A(p,"DIV",{id:!0,class:!0});var f=$(e);r=A(f,"DIV",{id:!0,tabindex:!0,"data-focus-ring-hidden":!0,class:!0});var b=$(r);l.l(b),b.forEach(c),a=S(f),n=A(f,"DIV",{id:!0,class:!0});var L=$(n);o=J(L,s),L.forEach(c),f.forEach(c),this.h()},h(){u(r,"id","services-container"),u(r,"tabindex","-1"),u(r,"data-focus-ring-hidden",""),u(r,"class","svelte-1c261yq"),u(n,"id","services-disclaimer"),u(n,"class","subtext svelte-1c261yq"),u(e,"id","services-popover"),u(e,"class","svelte-1c261yq")},m(p,f){M(p,e,f),_(e,r),d[t].m(r,null),i[7](r),_(e,a),_(e,n),_(n,o),h=!0},p(p,f){let b=t;t=v(p),t===b?d[t].p(p,f):(se(),F(d[b],1,1,()=>{d[b]=null}),ie(),l=d[t],l?l.p(p,f):(l=d[t]=m[t](p),l.c()),w(l,1),l.m(r,null)),(!h||f&32)&&s!==(s=p[5]("save.services.disclaimer")+"")&&W(o,s)},i(p){h||(w(l),h=!0)},o(p){F(l),h=!1},d(p){p&&c(e),d[t].d(),i[7](null)}}}function Bt(i){let e,r,t=ce({length:17}),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ie(Le(i,t,n));const a=n=>F(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=fe()},l(n){for(let s=0;s<l.length;s+=1)l[s].l(n);e=fe()},m(n,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,s);M(n,e,s),r=!0},p(n,s){if(s&0){t=ce({length:17});let o;for(o=0;o<t.length;o+=1){const h=Le(n,t,o);l[o]?(l[o].p(h,s),w(l[o],1)):(l[o]=Ie(),l[o].c(),w(l[o],1),l[o].m(e.parentNode,e))}for(se(),o=t.length;o<l.length;o+=1)a(o);ie()}},i(n){if(!r){for(let s=0;s<t.length;s+=1)w(l[s]);r=!0}},o(n){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)F(l[s]);r=!1},d(n){n&&c(e),De(l,n)}}}function Tt(i){let e,r=ce(i[0]),t=[];for(let l=0;l<r.length;l+=1)t[l]=Me(Ve(i,r,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=fe()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=fe()},m(l,a){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(l,a);M(l,e,a)},p(l,a){if(a&1){r=ce(l[0]);let n;for(n=0;n<r.length;n+=1){const s=Ve(l,r,n);t[n]?t[n].p(s,a):(t[n]=Me(s),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=r.length}},i:U,o:U,d(l){l&&c(e),De(t,l)}}}function Ie(i){let e,r;return e=new lt({props:{class:"elevated",width:Math.random()*44+50+"px",height:"24.5px"}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){q(e,t,l),r=!0},p:U,i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){z(e,t)}}}function Me(i){let e,r=i[11]+"",t;return{c(){e=y("div"),t=R(r),this.h()},l(l){e=A(l,"DIV",{class:!0});var a=$(e);t=J(a,r),a.forEach(c),this.h()},h(){u(e,"class","service-item svelte-1c261yq")},m(l,a){M(l,e,a),_(e,t)},p(l,a){a&1&&r!==(r=l[11]+"")&&W(t,r)},d(l){l&&c(e)}}}function Ht(i){let e,r,t,l,a,n,s=i[5]("save.services.title")+"",o,h,m,d,v,p;l=new nt({});let f=i[2]&&Fe(i);return{c(){e=y("div"),r=y("button"),t=y("div"),N(l.$$.fragment),a=H(),n=y("span"),o=R(s),m=H(),f&&f.c(),this.h()},l(b){e=A(b,"DIV",{id:!0,class:!0});var L=$(e);r=A(L,"BUTTON",{id:!0,"aria-label":!0,class:!0});var D=$(r);t=A(D,"DIV",{class:!0});var Z=$(t);P(l.$$.fragment,Z),Z.forEach(c),a=S(D),n=A(D,"SPAN",{class:!0});var K=$(n);o=J(K,s),K.forEach(c),D.forEach(c),m=S(L),f&&f.l(L),L.forEach(c),this.h()},h(){u(t,"class","expand-icon svelte-1c261yq"),u(n,"class","title"),u(r,"id","services-button"),u(r,"aria-label",h=i[5](`save.services.title_${i[3]?"hide":"show"}`)),u(r,"class","svelte-1c261yq"),u(e,"id","supported-services"),u(e,"class","svelte-1c261yq"),te(e,"expanded",i[3])},m(b,L){M(b,e,L),_(e,r),_(r,t),q(l,t,null),_(r,a),_(r,n),_(n,o),_(e,m),f&&f.m(e,null),d=!0,v||(p=ee(r,"click",i[6]),v=!0)},p(b,[L]){(!d||L&32)&&s!==(s=b[5]("save.services.title")+"")&&W(o,s),(!d||L&40&&h!==(h=b[5](`save.services.title_${b[3]?"hide":"show"}`)))&&u(r,"aria-label",h),b[2]?f?(f.p(b,L),L&4&&w(f,1)):(f=Fe(b),f.c(),w(f,1),f.m(e,null)):f&&(se(),F(f,1,1,()=>{f=null}),ie()),(!d||L&8)&&te(e,"expanded",b[3])},i(b){d||(w(l.$$.fragment,b),w(f),d=!0)},o(b){F(l.$$.fragment,b),F(f),d=!1},d(b){b&&c(e),z(l),f&&f.d(),v=!1,p()}}}function St(i,e,r){let t,l,a,n,s;G(i,Re,f=>r(8,n=f)),G(i,oe,f=>r(5,s=f));let o=[],h;const m=async()=>{await tt(),n&&(r(4,l=!0),r(0,o=n.info.cobalt.services))},d=async()=>{r(3,t=!t),t&&o.length===0&&await m(),t&&h.focus()},v=async()=>{const f=!a;r(2,a=!0),f?setTimeout(d,10):await d()};function p(f){ae[f?"unshift":"push"](()=>{h=f,r(1,h)})}return r(3,t=!1),r(4,l=!1),r(2,a=!1),[o,h,a,t,l,s,v,p]}class Zt extends X{constructor(e){super(),Y(this,e,St,Ht,Q,{})}}function Nt(i){let e,r,t,l,a,n,s,o,h,m,d,v,p,f=i[0]("save.terms.note.agreement")+"",b,L,D,Z=i[0]("save.terms.note.link")+"",K,j;return document.title=e=i[0]("general.cobalt"),n=new Zt({}),h=new et({props:{emotion:"smile"}}),d=new At({}),{c(){r=y("meta"),l=H(),a=y("div"),N(n.$$.fragment),s=H(),o=y("main"),N(h.$$.fragment),m=H(),N(d.$$.fragment),v=H(),p=y("div"),b=R(f),L=H(),D=y("a"),K=R(Z),this.h()},l(C){const V=Pe("svelte-1rvzcsd",document.head);r=A(V,"META",{property:!0,content:!0}),V.forEach(c),l=S(C),a=A(C,"DIV",{id:!0,class:!0});var I=$(a);P(n.$$.fragment,I),s=S(I),o=A(I,"MAIN",{id:!0,tabindex:!0,"data-first-focus":!0,"data-focus-ring-hidden":!0,class:!0});var g=$(o);P(h.$$.fragment,g),m=S(g),P(d.$$.fragment,g),g.forEach(c),v=S(I),p=A(I,"DIV",{id:!0,class:!0});var E=$(p);b=J(E,f),L=S(E),D=A(E,"A",{href:!0});var O=$(D);K=J(O,Z),O.forEach(c),E.forEach(c),I.forEach(c),this.h()},h(){u(r,"property","og:title"),u(r,"content",t=i[0]("general.cobalt")),u(o,"id","cobalt-save"),u(o,"tabindex","-1"),u(o,"data-first-focus",""),u(o,"data-focus-ring-hidden",""),u(o,"class","svelte-5x22zy"),u(D,"href","/about/terms"),u(p,"id","terms-note"),u(p,"class","svelte-5x22zy"),u(a,"id","cobalt-save-container"),u(a,"class","center-column-container svelte-5x22zy")},m(C,V){_(document.head,r),M(C,l,V),M(C,a,V),q(n,a,null),_(a,s),_(a,o),q(h,o,null),_(o,m),q(d,o,null),_(a,v),_(a,p),_(p,b),_(p,L),_(p,D),_(D,K),j=!0},p(C,[V]){(!j||V&1)&&e!==(e=C[0]("general.cobalt"))&&(document.title=e),(!j||V&1&&t!==(t=C[0]("general.cobalt")))&&u(r,"content",t),(!j||V&1)&&f!==(f=C[0]("save.terms.note.agreement")+"")&&W(b,f),(!j||V&1)&&Z!==(Z=C[0]("save.terms.note.link")+"")&&W(K,Z)},i(C){j||(w(n.$$.fragment,C),w(h.$$.fragment,C),w(d.$$.fragment,C),j=!0)},o(C){F(n.$$.fragment,C),F(h.$$.fragment,C),F(d.$$.fragment,C),j=!1},d(C){C&&(c(l),c(a)),c(r),z(n),z(h),z(d)}}}function Pt(i,e,r){let t;return G(i,oe,l=>r(0,t=l)),[t]}class sl extends X{constructor(e){super(),Y(this,e,Pt,Nt,Q,{})}}export{sl as component};