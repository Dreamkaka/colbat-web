import{s as c,a as l,e as d,n as p}from"./scheduler.y4uHs2UB.js";import{S as f,i as _,c as g,a as h,m as v,t as b,b as x,d as $,e as k,f as w,x as y,k as C,h as L}from"./index.Cysm1UDV.js";import{g as S,a as u}from"./Icon.NybfZExb.js";import{C as j}from"./ChangelogEntryWrapper.Bue341gA.js";function q(s){let e,n="<li>download mode switcher is moving places, it’s now right next to link input area.</li> <li>smart mode has been renamed to auto mode, because this name is easier to understand.</li> <li>all spacings in ui have been evened out. no more eye strain.</li> <li>added support for twitter /video/1 links</li> <li>clipboard button exception has been redone to prepare for adoption of readtext clipboard api in firefox.</li> <li>cobalt is now using different tiktok api endpoint, because previous one got killed, just like the one before.</li> <li>“other” settings tab has been cleaned up.</li>";return{c(){e=k("ul"),e.innerHTML=n},l(a){e=w(a,"UL",{"data-svelte-h":!0}),y(e)!=="svelte-123hqhr"&&(e.innerHTML=n)},m(a,i){C(a,e,i)},p,d(a){a&&L(e)}}}function H(s){let e,n;const a=[s[0],m];let i={$$slots:{default:[q]},$$scope:{ctx:s}};for(let t=0;t<a.length;t+=1)i=l(i,a[t]);return e=new j({props:i}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,o){v(e,t,o),n=!0},p(t,[o]){const r=o&1?S(a,[o&1&&u(t[0]),o&0&&u(m)]):{};o&2&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){$(e,t)}}}const m={title:"improvements all around!",date:"Sep 28, 2022"};function M(s,e,n){return s.$$set=a=>{n(0,e=l(l({},e),d(a)))},e=d(e),[e]}class z extends f{constructor(e){super(),_(this,e,M,H,c,{})}}export{z as default,m as metadata};