import{s as R,a as S,e as N,n as V}from"./scheduler.y4uHs2UB.js";import{S as X,i as Y,c as Z,a as ee,m as te,t as ie,b as le,d as ne,e as s,s as u,f as r,x as d,n as f,k as l,h as n}from"./index.Cysm1UDV.js";import{g as ae,a as O}from"./Icon.NybfZExb.js";import{C as oe}from"./ChangelogEntryWrapper.Cx7_ByQL.js";function se(L){let t,v="happy valentine’s day! i have an update for you, as a gift :D",m,p,a='tl;dr: added support for <span class="text-backdrop">reddit gifs</span>, fixed douyin downloads, fixed vimeo quality picking, revamped entirety of codebase, and many other fixes.',o,c,D="here’s more info:",P,x,E="this update is mostly about cleaning up and polishing the codebase, but it also has some new features. here’s what’s up:",$,_,F="service-related improvements:",H,h,W="<li>you now can download gifs from reddit!</li> <li>attempting to download a video from douyin no longer throws an error (bytedance changed the api endpoint, yet again).</li> <li>fixed quality picking for vimeo downloads.</li> <li>fixed length limit check in vimeo module.</li> <li>fixed support for “user view” vk clips links.</li> <li>various twitter errors are now displayed correctly instead of falling back to the default error.</li> <li>state of all services is now tested on each commit.</li>",M,y,A="ui improvements:",T,C,B="<li>cobalt social links no longer disappear if you have an aggressive ad blocking extension installed.</li> <li>various localization improvements for both english and russian.</li> <li>changed some service aliases to display full list of supported downloads.</li> <li>added current branch information to version text (in settings).</li> <li>fixed typos in older changelogs.</li>",z,w,G="internal improvements:",j,b,I='<li><span class="text-backdrop">everything</span> has been sanitized, improved, and refactored. code is now much easier to read and maintain.</li> <li>rewrote and/or optimized all modules that were messy or inefficient.</li> <li>all git interaction functions now store info in cache instead of fetching it every time the function is called.</li> <li>added a test script that checks functionality of all supported services.</li> <li>updated deepsource config. checks are more accurate now.</li> <li>requests from internet explorer are now dropped entirely instead of redirecting people stuck in 90s to a proper browser download page. this was done to avoid (my) personal bias towards browsers.</li>',q,g,J="i put a ton of effort into this version, and i hope you like it as much as i do.",U,k,K="thank you for using cobalt. there’s so much more to come :)";return{c(){t=s("p"),t.textContent=v,m=u(),p=s("p"),p.innerHTML=a,o=u(),c=s("p"),c.textContent=D,P=u(),x=s("p"),x.textContent=E,$=u(),_=s("p"),_.textContent=F,H=u(),h=s("ul"),h.innerHTML=W,M=u(),y=s("p"),y.textContent=A,T=u(),C=s("ul"),C.innerHTML=B,z=u(),w=s("p"),w.textContent=G,j=u(),b=s("ul"),b.innerHTML=I,q=u(),g=s("p"),g.textContent=J,U=u(),k=s("p"),k.textContent=K},l(e){t=r(e,"P",{"data-svelte-h":!0}),d(t)!=="svelte-17m5zdn"&&(t.textContent=v),m=f(e),p=r(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-44y31j"&&(p.innerHTML=a),o=f(e),c=r(e,"P",{"data-svelte-h":!0}),d(c)!=="svelte-5nm3od"&&(c.textContent=D),P=f(e),x=r(e,"P",{"data-svelte-h":!0}),d(x)!=="svelte-10ypvoa"&&(x.textContent=E),$=f(e),_=r(e,"P",{"data-svelte-h":!0}),d(_)!=="svelte-1tb1b5s"&&(_.textContent=F),H=f(e),h=r(e,"UL",{"data-svelte-h":!0}),d(h)!=="svelte-1c5ge1w"&&(h.innerHTML=W),M=f(e),y=r(e,"P",{"data-svelte-h":!0}),d(y)!=="svelte-1cujzah"&&(y.textContent=A),T=f(e),C=r(e,"UL",{"data-svelte-h":!0}),d(C)!=="svelte-6n8gci"&&(C.innerHTML=B),z=f(e),w=r(e,"P",{"data-svelte-h":!0}),d(w)!=="svelte-ouv43k"&&(w.textContent=G),j=f(e),b=r(e,"UL",{"data-svelte-h":!0}),d(b)!=="svelte-akkr4l"&&(b.innerHTML=I),q=f(e),g=r(e,"P",{"data-svelte-h":!0}),d(g)!=="svelte-1l92nhj"&&(g.textContent=J),U=f(e),k=r(e,"P",{"data-svelte-h":!0}),d(k)!=="svelte-1d0koil"&&(k.textContent=K)},m(e,i){l(e,t,i),l(e,m,i),l(e,p,i),l(e,o,i),l(e,c,i),l(e,P,i),l(e,x,i),l(e,$,i),l(e,_,i),l(e,H,i),l(e,h,i),l(e,M,i),l(e,y,i),l(e,T,i),l(e,C,i),l(e,z,i),l(e,w,i),l(e,j,i),l(e,b,i),l(e,q,i),l(e,g,i),l(e,U,i),l(e,k,i)},p:V,d(e){e&&(n(t),n(m),n(p),n(o),n(c),n(P),n(x),n($),n(_),n(H),n(h),n(M),n(y),n(T),n(C),n(z),n(w),n(j),n(b),n(q),n(g),n(U),n(k))}}}function re(L){let t,v;const m=[L[0],Q];let p={$$slots:{default:[se]},$$scope:{ctx:L}};for(let a=0;a<m.length;a+=1)p=S(p,m[a]);return t=new oe({props:p}),{c(){Z(t.$$.fragment)},l(a){ee(t.$$.fragment,a)},m(a,o){te(t,a,o),v=!0},p(a,[o]){const c=o&1?ae(m,[o&1&&O(a[0]),o&0&&O(Q)]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),t.$set(c)},i(a){v||(ie(t.$$.fragment,a),v=!0)},o(a){le(t.$$.fragment,a),v=!1},d(a){ne(t,a)}}}const Q={title:"it's all about attention to detail!",date:"Feb 13, 2023",banner:{file:"valentines.webp",alt:"relaxed meowth with sakura petals falling in front of them"}};function de(L,t,v){return L.$$set=m=>{v(0,t=S(S({},t),N(m)))},t=N(t),[t]}class ce extends X{constructor(t){super(),Y(this,t,de,re,R,{})}}export{ce as default,Q as metadata};