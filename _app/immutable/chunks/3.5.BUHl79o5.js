import{s as j,a as k,e as H,n as P}from"./scheduler.y4uHs2UB.js";import{S,i as U,c as z,a as E,m as W,t as A,b as B,d as D,e as h,s as v,f as _,x as b,n as w,k as s,h as i}from"./index.Cysm1UDV.js";import{g as F,a as M}from"./Icon.NybfZExb.js";import{C as G}from"./ChangelogEntryWrapper.Cx7_ByQL.js";function I(f){let t,p="new features:",r,a,o=`<li>cobalt now lets you paste the link in your clipboard and download the file in a single press of a button.if your clipboard’s latest content isn’t a valid url, cobalt won’t process or paste it. you can also hide the clipboard button in settings if you want to.
unfortunately, the clipboard feature is not available to firefox users because mozilla didn’t add proper support for clipboard api.</li> <li>there’s now a button to quickly clean the input area, right next to download button. it’s really useful in case when you want to quickly save a bunch of videos and don’t want to bother selecting text.</li> <li>keyboard shortcuts! you love them, i love them, and now we can use them to perform quick actions in cobalt. use ctrl+v combo to paste the link without focusing the input area; press escape key to close the active popup or clean the input area; and if you didn’t know, you can also press enter to download content from the link.</li>`,n,u,C="new looks:",y,d,$="<li>main box has been revamped. it has lost its border, thick padding, and now feels light and fresh.</li> <li>download button is now prettier, and has been tuned to make &gt;&gt; look just like the logo.</li> <li>buttons on the bottom now actually look like buttons and are way more descriptive. no more #@+?$ bullshit. it’s way easier to see and understand what each of them does.</li> <li>bottom buttons are prettier and easier to use on a phone. they’re bigger and stretch out to sides, making them easier to press.</li>",x,c,L="fixes:",g,m,q="<li>it’s now impossible to overlap multiple popups at once. no more mess if you decide to explore popups while waiting for request to process.</li> <li>popup tabs have been slightly moved down to prevent popup content overlapping.</li> <li>ui scalability has been improved.</li>";return{c(){t=h("p"),t.textContent=p,r=v(),a=h("ul"),a.innerHTML=o,n=v(),u=h("p"),u.textContent=C,y=v(),d=h("ul"),d.innerHTML=$,x=v(),c=h("p"),c.textContent=L,g=v(),m=h("ul"),m.innerHTML=q},l(e){t=_(e,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vc57e5"&&(t.textContent=p),r=w(e),a=_(e,"UL",{"data-svelte-h":!0}),b(a)!=="svelte-t0n5l5"&&(a.innerHTML=o),n=w(e),u=_(e,"P",{"data-svelte-h":!0}),b(u)!=="svelte-12jm1hc"&&(u.textContent=C),y=w(e),d=_(e,"UL",{"data-svelte-h":!0}),b(d)!=="svelte-16f7q9f"&&(d.innerHTML=$),x=w(e),c=_(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-1e8zsqx"&&(c.textContent=L),g=w(e),m=_(e,"UL",{"data-svelte-h":!0}),b(m)!=="svelte-1so5pcy"&&(m.innerHTML=q)},m(e,l){s(e,t,l),s(e,r,l),s(e,a,l),s(e,n,l),s(e,u,l),s(e,y,l),s(e,d,l),s(e,x,l),s(e,c,l),s(e,g,l),s(e,m,l)},p:P,d(e){e&&(i(t),i(r),i(a),i(n),i(u),i(y),i(d),i(x),i(c),i(g),i(m))}}}function J(f){let t,p;const r=[f[0],T];let a={$$slots:{default:[I]},$$scope:{ctx:f}};for(let o=0;o<r.length;o+=1)a=k(a,r[o]);return t=new G({props:a}),{c(){z(t.$$.fragment)},l(o){E(t.$$.fragment,o)},m(o,n){W(t,o,n),p=!0},p(o,[n]){const u=n&1?F(r,[n&1&&M(o[0]),n&0&&M(T)]):{};n&2&&(u.$$scope={dirty:n,ctx:o}),t.$set(u)},i(o){p||(A(t.$$.fragment,o),p=!0)},o(o){B(t.$$.fragment,o),p=!1},d(o){D(t,o)}}}const T={title:"ui revamp and usability improvements",date:"Sep 8, 2022"};function K(f,t,p){return f.$$set=r=>{p(0,t=k(k({},t),H(r)))},t=H(t),[t]}class V extends S{constructor(t){super(),U(this,t,K,J,j,{})}}export{V as default,T as metadata};