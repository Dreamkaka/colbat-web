import{s as Y,a as W,e as R,n as Z}from"./scheduler.y4uHs2UB.js";import{S as tt,i as et,c as ot,a as it,m as lt,t as nt,b as at,d as st,e as a,s as d,f as s,x as r,n as p,k as o,h as i}from"./index.Cysm1UDV.js";import{g as rt,a as V}from"./Icon.NybfZExb.js";import{C as ut}from"./ChangelogEntryWrapper.Bue341gA.js";function dt(j){let l,h="long time no see! well, actually, you’ve been using the latest version for some time now. we’ve moved to a rolling release scheme, allowing for speedy update rollouts :)",f,m,n="since 7.11, there has been a ton of changes. here are the most notable of them:",u,c,A="<li>youtube downloads are now faster and more reliable than ever.</li> <li>all posts from twitter are now downloadable, including sensitive ones.</li> <li>you now can download tiktok videos in 1080p h265! just enable h265 support in settings &gt; video.</li> <li>added support for sharing links directly to the cobalt web app on android.</li> <li>added 240p and 144p quality options to the quality picker in settings (for some reason, many of you wanted this).</li> <li>pasting a link with additional text around it will now work; cobalt will extract the link for you (works only via the paste button).</li> <li>added anonymous traffic analytics by plausible. we’re using a selfhosted instance and don’t collect any identifiable information about you. you can learn more in about &gt; privacy policy. you can also opt out of anonymous analytics in settings &gt; other.</li>",M,v,B="service support improvements:",P,y,D="<li>implemented internal streams functionality, allowing for more fine-grained file streaming and therefore proper youtube support.</li> <li>added fallback to m4a if opus isn’t available for youtube.</li> <li>added a total of 7 ways to get instagram post info, including mobile api, embed, and graphql api. absolute torture.</li> <li>added support for reddit user posts.</li> <li>updated the way tiktok downloads are handled for better reliability and 1080p support.</li> <li>added tiktok author’s username to filename.</li> <li>added support for rutube shorts and yappy videos.</li> <li>added support for m.soundcloud.com links.</li> <li>added support for new post and reel links from instagram.</li> <li>added support for photo twitter links, only used for gifs.</li> <li>added support for m.bilibili.com links.</li> <li>added support for new type of vimeo links.</li> <li>added support for ddinstagram.com links.</li> <li>updated youtube codec info in settings to display the fact that av1 is a better choice now.</li> <li>updated best audio picking for tiktok and soundcloud.</li> <li>changed the youtube client to web, since android client no longer works.</li> <li>removed the vimeo download type switcher, as it should’ve always been automatic instead.</li> <li>removed an ability to enable the tiktok watermark, as it no longer includes the author’s username.</li>",$,b,F="ui & ux improvements:",H,w,G="<li>youtube audio dub switcher is now a toggle with a much easier to understand description.</li> <li>meowbalt now sticks out on the left side of download popup on desktop.</li> <li>updated “made with love” text to include the research &amp; dev team behind cobalt, imput.</li> <li>fixed grammar of russian localization.</li> <li>rounded corners are now correctly rendered across all browsers.</li> <li>various minor improvements, including smaller button padding.</li> <li>removed the notification (red dot) functionality as the most recent changelog is already always on screen.</li> <li>removed settings migration from the old domain.</li>",T,x,I="other changes:",q,_,J="<li>various docs updates in github repo, making sure they’re functional across branches and forks.</li> <li>major codebase cleanup.</li>",z,k,K="thank you for using cobalt, and thank you for being one of our 900k friends! i hope you like this update as much as we liked making it.",U,g,N="we’re committed to keeping cobalt the best way to save what you love without ads or invasion of your privacy. there’s a ton of cool stuff to come soon; stay tuned and have an amazing rest of your day <3",S,C,O="if you want to help our goal of a better internet for everyone, just share cobalt with a friend!",E,L,Q="(original photo of a man in a suit by benzoix on freepik)";return{c(){l=a("p"),l.textContent=h,f=d(),m=a("p"),m.textContent=n,u=d(),c=a("ul"),c.innerHTML=A,M=d(),v=a("p"),v.textContent=B,P=d(),y=a("ul"),y.innerHTML=D,$=d(),b=a("p"),b.textContent=F,H=d(),w=a("ul"),w.innerHTML=G,T=d(),x=a("p"),x.textContent=I,q=d(),_=a("ul"),_.innerHTML=J,z=d(),k=a("p"),k.textContent=K,U=d(),g=a("p"),g.textContent=N,S=d(),C=a("p"),C.textContent=O,E=d(),L=a("p"),L.textContent=Q},l(t){l=s(t,"P",{"data-svelte-h":!0}),r(l)!=="svelte-1o7ay36"&&(l.textContent=h),f=p(t),m=s(t,"P",{"data-svelte-h":!0}),r(m)!=="svelte-5cu6q7"&&(m.textContent=n),u=p(t),c=s(t,"UL",{"data-svelte-h":!0}),r(c)!=="svelte-1kg3x3w"&&(c.innerHTML=A),M=p(t),v=s(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-mxj6jp"&&(v.textContent=B),P=p(t),y=s(t,"UL",{"data-svelte-h":!0}),r(y)!=="svelte-1xp67p8"&&(y.innerHTML=D),$=p(t),b=s(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-b6p5xc"&&(b.textContent=F),H=p(t),w=s(t,"UL",{"data-svelte-h":!0}),r(w)!=="svelte-6szvkq"&&(w.innerHTML=G),T=p(t),x=s(t,"P",{"data-svelte-h":!0}),r(x)!=="svelte-14uhjj1"&&(x.textContent=I),q=p(t),_=s(t,"UL",{"data-svelte-h":!0}),r(_)!=="svelte-pnny8v"&&(_.innerHTML=J),z=p(t),k=s(t,"P",{"data-svelte-h":!0}),r(k)!=="svelte-1o4jnr4"&&(k.textContent=K),U=p(t),g=s(t,"P",{"data-svelte-h":!0}),r(g)!=="svelte-2k0n8l"&&(g.textContent=N),S=p(t),C=s(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1qn8w24"&&(C.textContent=O),E=p(t),L=s(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-1opb9ly"&&(L.textContent=Q)},m(t,e){o(t,l,e),o(t,f,e),o(t,m,e),o(t,u,e),o(t,c,e),o(t,M,e),o(t,v,e),o(t,P,e),o(t,y,e),o(t,$,e),o(t,b,e),o(t,H,e),o(t,w,e),o(t,T,e),o(t,x,e),o(t,q,e),o(t,_,e),o(t,z,e),o(t,k,e),o(t,U,e),o(t,g,e),o(t,S,e),o(t,C,e),o(t,E,e),o(t,L,e)},p:Z,d(t){t&&(i(l),i(f),i(m),i(u),i(c),i(M),i(v),i(P),i(y),i($),i(b),i(H),i(w),i(T),i(x),i(q),i(_),i(z),i(k),i(U),i(g),i(S),i(C),i(E),i(L))}}}function pt(j){let l,h;const f=[j[0],X];let m={$$slots:{default:[dt]},$$scope:{ctx:j}};for(let n=0;n<f.length;n+=1)m=W(m,f[n]);return l=new ut({props:m}),{c(){ot(l.$$.fragment)},l(n){it(l.$$.fragment,n)},m(n,u){lt(l,n,u),h=!0},p(n,[u]){const c=u&1?rt(f,[u&1&&V(n[0]),u&0&&V(X)]):{};u&2&&(c.$$scope={dirty:u,ctx:n}),l.$set(c)},i(n){h||(nt(l.$$.fragment,n),h=!0)},o(n){at(l.$$.fragment,n),h=!1},d(n){st(l,n)}}}const X={title:"better ux, improvements for youtube, twitter, tiktok, instagram, and more!",date:"May 5, 2024",banner:{file:"meowthbusinessman.webp",alt:"photo of a businessman holding hands together (merkel-raute pose) with meowth plush head."}};function mt(j,l,h){return j.$$set=f=>{h(0,l=W(W({},l),R(f)))},l=R(l),[l]}class yt extends tt{constructor(l){super(),et(this,l,mt,pt,Y,{})}}export{yt as default,X as metadata};