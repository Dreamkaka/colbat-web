import{s as c,a as r,e as m,n as d}from"./scheduler.y4uHs2UB.js";import{S as f,i as p,c as g,a as h,m as v,t as $,b as x,d as b,e as y,f as C,x as w,k as L,h as H}from"./index.Cysm1UDV.js";import{g as M,a as u}from"./Icon.NybfZExb.js";import{C as S}from"./ChangelogEntryWrapper.Bue341gA.js";function T(l){let e,s="<li>spanish localization by @adrigoomy</li> <li>cobalt should load even faster cause all loaded files are now way smaller (esbuild implementation)</li>";return{c(){e=y("ul"),e.innerHTML=s},l(a){e=C(a,"UL",{"data-svelte-h":!0}),w(e)!=="svelte-humi0"&&(e.innerHTML=s)},m(a,o){L(a,e,o)},p:d,d(a){a&&H(e)}}}function j(l){let e,s;const a=[l[0],_];let o={$$slots:{default:[T]},$$scope:{ctx:l}};for(let t=0;t<a.length;t+=1)o=r(o,a[t]);return e=new S({props:o}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p(t,[n]){const i=n&1?M(a,[n&1&&u(t[0]),n&0&&u(_)]):{};n&2&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}const _={title:"faster and more accessible",date:"Jul 30, 2022"};function k(l,e,s){return l.$$set=a=>{s(0,e=r(r({},e),m(a)))},e=m(e),[e]}class U extends f{constructor(e){super(),p(this,e,k,j,c,{})}}export{U as default,_ as metadata};