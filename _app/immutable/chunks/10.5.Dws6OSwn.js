import{s as al,a as wt,e as tl}from"./scheduler.y4uHs2UB.js";import{S as il,i as ol,c as xe,a as be,m as we,t as ge,b as Ce,d as _e,e as o,s as u,u as v,f as s,x as p,n as d,g as ve,v as x,h as l,k as n,y as i}from"./index.Cysm1UDV.js";import{g as sl,a as ll}from"./Icon.NybfZExb.js";import{C as rl}from"./ChangelogEntryWrapper.Bue341gA.js";import{O as ye}from"./OuterLink.ClwKgp00.js";function ul(h){let a;return{c(){a=v("instance access keys")},l(m){a=x(m,"instance access keys")},m(m,c){n(m,a,c)},d(m){m&&l(a)}}}function dl(h){let a;return{c(){a=v("remux page")},l(m){a=x(m,"remux page")},m(m,c){n(m,a,c)},d(m){m&&l(a)}}}function ml(h){let a;return{c(){a=v("all commits since the last release on github")},l(m){a=x(m,"all commits since the last release on github")},m(m,c){n(m,a,c)},d(m){m&&l(a)}}}function pl(h){let a;return{c(){a=v("github repo")},l(m){a=x(m,"github repo")},m(m,c){n(m,a,c)},d(m){m&&l(a)}}}function cl(h){let a;return{c(){a=v("donate")},l(m){a=x(m,"donate")},m(m,c){n(m,a,c)},d(m){m&&l(a)}}}function fl(h){let a,m="where the elves at?",c,w,f="we are back once again with another cobalt update, whether you like it or not! just like santa, we come when you least expect us.",b,g,gt="we’re back to the battlefield against youtube’s scraper flattener, but we’re winning so far! we even managed to squeeze in a ton of improvements that range from performance bumps to ui overhauls to brand new features. make sure to read further or you might end up on the naughty list…",ke,q,Ct="even more youtube improvements",$e,T,_t="<li>countless infrastructure improvements and developments that allowed us to keep youtube support available during the worst times.</li> <li>improved youtube codec fallback. now cobalt goes through all codecs to find you the best one!</li> <li>improved youtube video quality selection &amp; fallback.</li>",Le,U,yt="improvements for other services",Ae,P,kt=`<li>added support for loom’s video embed links.</li> <li>added support for facebook’s mobile subdomain links.</li> <li>fixed a bug in the instagram module where it wouldn’t use the graphql api on failure, due to which cobalt was unable to load slightly more posts successfully. now the majority of posts are accessible!</li> <li>removed support for vine because 𝕏, “The Everything App”, broke the vine archive.</li> <li>increased performance of downloads from bluesky by using the video cdn directly.</li> <li>error messages from bluesky module are now more descriptive.</li> <li>rewrote the vk video extraction module to use the general api as the web app extraction was broken by a vk update.</li> <li>added support for new vk video links.</li> <li>cobalt now shows an appropriate error if:
<ul><li>soundcloud track is region locked or paywalled.</li> <li>tiktok post is age restricted or otherwise unavailable.</li> <li>rutube video is region locked.</li> <li>vk video is region locked.</li></ul></li>`,Ie,M,$t="<em>~ still reading? that’s impressive. ~</em>",He,j,Lt="web app (and ui/ux) improvements",qe,r,K,Be,_,Fe,Xe,R,Ze,y,De,Je,G,At="majorly improved the reliability of turnstile. it no longer gets stuck in the background, and cobalt always keeps track of its state and displays it in the omnibox.",Oe,ee,It="rewrote almost all error messages in an effort to make them easier to understand at a glance.",Ge,te,Ht="added more error messages to describe processing issues even better whenever possible.",et,le,qt="added animations to omnibox icons that make them more lively and cute.",tt,ne,Tt="improved the toggle animation, made it stretchy and jumpy just like the rest of the ui.",lt,ae,Ut="made the cobalt web app fully compatible with RTL languages (such as arabic).",nt,ie,Pt="added an automatically generated sitemap, making the web app easier to index by search engine crawlers.",at,oe,Mt="made it way easier to override the selfhosted processing instance in a selfhosted web app.",it,se,jt="removed an extra security warning in the selfhosted web app which appeared when the processing instance didn’t match the default one.",ot,re,Kt="added the “community instance” label to the web app that appears on instances different from the official one, making it easier to differentiate them from one another.",st,ue,Rt="updated cobalt embed description to be less corny.",rt,de,St="fixed a bug that caused settings to be exported improperly on ios in PWA mode. now they’re extracted via the share api, just like all other files!",ut,me,Vt="fixed the weird focus borders in chromium browsers that appeared after a recent browser update.",dt,pe,Wt="optimized rendering of the <em>supported services</em> popover &amp; updated its animation.",mt,ce,Et="improved accessibility of the web app all around.",pt,fe,zt="other tiny but mighty changes.",Te,S,Yt="<em>~ 🦆🔜 ~</em>",Ue,V,Nt="processing instance improvements",Pe,W,Qt="<em>(mostly nerd talk)</em>",Me,E,Bt="<li>added support for one more way of youtube authentication: web cookies with poToken &amp; visitorData, so that everyone can access youtube on their instances again!</li> <li>significantly refactored the cookie system for better error resistance.</li> <li>added success and error console messages to indicate whether cookies/keys were loaded successfully.</li> <li>cobalt now warns if it was unable to save updated cookies back to the file.</li> <li>majorly refactored the youtube module and removed unnecessary extra loops.</li> <li>cobalt no longer loads unnecessary data from youtube when not needed.</li> <li>fixed a bug where cobalt tried to proxy URLs on local network when global proxy was configured.</li> <li>fixed a bug that caused some HLS videos to be impossible to download in the “mute” download mode.</li> <li>fixed a bug where cobalt stacked HLS streams several times within itself which caused heavily reduced performance.</li> <li>fixed a bug where cobalt did not use a dispatcher on a HLS stream’s chunks, sometimes causing it to access content from an incorrect IP address.</li> <li>refactored automatic testing CI, made service tests easier to manage.</li> <li>reduced docker container privileges to a regular user.</li> <li>improved rich filename &amp; metadata support. all metadata is now added to the file “as-is” with no modifications at all. filenames are now compatible with all operating systems and files should never appear as “tunnel”, even in some rare cases.</li>",je,z,Ft="more details",Ke,C,ct,k,ft,he,Xt="literally all changes!",Re,Y,Zt="thank you!",Se,$,ht,L,vt,Ve,N,Dt=`this is the last big update of 2024, the most transformative and exciting year for cobalt yet.
we’re already working on new cool features that’ll come out next year :3`,We,Q,Jt="we hope you have amazing holidays and 2025!",Ee,B,Ot="~ your jolly friends at imput 🎄",ze,F,Gt="donate to imput",Ye,A,xt,I,bt,Ne,X,el='<img src="data:image/webp;base64,UklGRn4BAABXRUJQVlA4IHIBAAAwDgCdASpAAEkAP1Waw1oxqqckKbqq2jAqiWIA0kkRgW9ViVdiWdXKQi6/gdi6yh7EP2hdKybn20T+5U2HORdT1INF/azUgAe83P37UIt7DaMNjNpN1q36xYwYmvqRvyHZCbmjuEi8jMI5QwpK+A6PL5WzAeMK1HHSwAD+6mC6qPoWsYNuVCVokfhT4iULSdrgIUxMVYuFmvaB6EO1tiQsDKgGz3TT/evh4KRuHM3hK23nOULaAYPQUKFqt6mmdlUXEnnkybyuQspqBd7vYu7KCfAgexNvxKgitS1o+4JfpkOuihhRfUFRqB2Z63FsbgywZxKR9zkIWWPVYn5XIBJX6LS+AU0fc7hHnV7I0boYFlIgvVJQX0k1Tcuvk4aS9UnxcZXhLIrob7G+vHgUt4z1jVbRN+cMa/ymg+mH2qtsTW1QyhZqaerV930ZZFSsPbSlxCabNU46cRYJ3EIYwxRS6n16lWtc1hKg3Tk23rG9AAAA" alt="sad hampter in a christmas hat"/> <img src="data:image/webp;base64,UklGRn4BAABXRUJQVlA4IHIBAAAwDgCdASpAAEkAP1Waw1oxqqckKbqq2jAqiWIA0kkRgW9ViVdiWdXKQi6/gdi6yh7EP2hdKybn20T+5U2HORdT1INF/azUgAe83P37UIt7DaMNjNpN1q36xYwYmvqRvyHZCbmjuEi8jMI5QwpK+A6PL5WzAeMK1HHSwAD+6mC6qPoWsYNuVCVokfhT4iULSdrgIUxMVYuFmvaB6EO1tiQsDKgGz3TT/evh4KRuHM3hK23nOULaAYPQUKFqt6mmdlUXEnnkybyuQspqBd7vYu7KCfAgexNvxKgitS1o+4JfpkOuihhRfUFRqB2Z63FsbgywZxKR9zkIWWPVYn5XIBJX6LS+AU0fc7hHnV7I0boYFlIgvVJQX0k1Tcuvk4aS9UnxcZXhLIrob7G+vHgUt4z1jVbRN+cMa/ymg+mH2qtsTW1QyhZqaerV930ZZFSsPbSlxCabNU46cRYJ3EIYwxRS6n16lWtc1hKg3Tk23rG9AAAA" alt="one more sad hampter in a christmas hat"/>',Qe;return _=new ye({props:{href:"/settings/instances#access-key",$$slots:{default:[ul]},$$scope:{ctx:h}}}),y=new ye({props:{href:"/remux",$$slots:{default:[dl]},$$scope:{ctx:h}}}),k=new ye({props:{href:"https://github.com/imputnet/cobalt/compare/c021293...41430ff",rel:"nofollow",$$slots:{default:[ml]},$$scope:{ctx:h}}}),L=new ye({props:{href:"https://github.com/imputnet/cobalt",rel:"nofollow",$$slots:{default:[pl]},$$scope:{ctx:h}}}),I=new ye({props:{href:"/donate",$$slots:{default:[cl]},$$scope:{ctx:h}}}),{c(){a=o("h2"),a.textContent=m,c=u(),w=o("p"),w.textContent=f,b=u(),g=o("p"),g.textContent=gt,ke=u(),q=o("h2"),q.textContent=Ct,$e=u(),T=o("ul"),T.innerHTML=_t,Le=u(),U=o("h2"),U.textContent=yt,Ae=u(),P=o("ul"),P.innerHTML=kt,Ie=u(),M=o("p"),M.innerHTML=$t,He=u(),j=o("h2"),j.textContent=Lt,qe=u(),r=o("ul"),K=o("li"),Be=v("added support for "),xe(_.$$.fragment),Fe=v("! now you can access private cobalt instances with no turnstile, directly from the web app."),Xe=u(),R=o("li"),Ze=v("redesigned the "),xe(y.$$.fragment),De=v(" to indicate better what remuxing does and what it’s for."),Je=u(),G=o("li"),G.textContent=At,Oe=u(),ee=o("li"),ee.textContent=It,Ge=u(),te=o("li"),te.textContent=Ht,et=u(),le=o("li"),le.textContent=qt,tt=u(),ne=o("li"),ne.textContent=Tt,lt=u(),ae=o("li"),ae.textContent=Ut,nt=u(),ie=o("li"),ie.textContent=Pt,at=u(),oe=o("li"),oe.textContent=Mt,it=u(),se=o("li"),se.textContent=jt,ot=u(),re=o("li"),re.textContent=Kt,st=u(),ue=o("li"),ue.textContent=Rt,rt=u(),de=o("li"),de.textContent=St,ut=u(),me=o("li"),me.textContent=Vt,dt=u(),pe=o("li"),pe.innerHTML=Wt,mt=u(),ce=o("li"),ce.textContent=Et,pt=u(),fe=o("li"),fe.textContent=zt,Te=u(),S=o("p"),S.innerHTML=Yt,Ue=u(),V=o("h2"),V.textContent=Nt,Pe=u(),W=o("p"),W.innerHTML=Qt,Me=u(),E=o("ul"),E.innerHTML=Bt,je=u(),z=o("h2"),z.textContent=Ft,Ke=u(),C=o("p"),ct=v("as always, you can check "),xe(k.$$.fragment),ft=v(" for "),he=o("em"),he.textContent=Xt,Re=u(),Y=o("h2"),Y.textContent=Zt,Se=u(),$=o("p"),ht=v("our "),xe(L.$$.fragment),vt=v(" reached over 20k stars recently, and around the same time the cobalt web app reached over 150k daily visitors. both of these numbers are insane to think about, thank you so much for your support!"),Ve=u(),N=o("p"),N.textContent=Dt,We=u(),Q=o("p"),Q.textContent=Jt,Ee=u(),B=o("p"),B.textContent=Ot,ze=u(),F=o("h2"),F.textContent=Gt,Ye=u(),A=o("p"),xt=v("plz "),xe(I.$$.fragment),bt=v(", we as elves work all day and night"),Ne=u(),X=o("p"),X.innerHTML=el},l(e){a=s(e,"H2",{"data-svelte-h":!0}),p(a)!=="svelte-1g18p43"&&(a.textContent=m),c=d(e),w=s(e,"P",{"data-svelte-h":!0}),p(w)!=="svelte-49vll3"&&(w.textContent=f),b=d(e),g=s(e,"P",{"data-svelte-h":!0}),p(g)!=="svelte-x65xmj"&&(g.textContent=gt),ke=d(e),q=s(e,"H2",{"data-svelte-h":!0}),p(q)!=="svelte-1v2e0xz"&&(q.textContent=Ct),$e=d(e),T=s(e,"UL",{"data-svelte-h":!0}),p(T)!=="svelte-16ilhg8"&&(T.innerHTML=_t),Le=d(e),U=s(e,"H2",{"data-svelte-h":!0}),p(U)!=="svelte-18hvd0q"&&(U.textContent=yt),Ae=d(e),P=s(e,"UL",{"data-svelte-h":!0}),p(P)!=="svelte-1g5u4ak"&&(P.innerHTML=kt),Ie=d(e),M=s(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-80qr5w"&&(M.innerHTML=$t),He=d(e),j=s(e,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-580eqy"&&(j.textContent=Lt),qe=d(e),r=s(e,"UL",{});var t=ve(r);K=s(t,"LI",{});var Z=ve(K);Be=x(Z,"added support for "),be(_.$$.fragment,Z),Fe=x(Z,"! now you can access private cobalt instances with no turnstile, directly from the web app."),Z.forEach(l),Xe=d(t),R=s(t,"LI",{});var D=ve(R);Ze=x(D,"redesigned the "),be(y.$$.fragment,D),De=x(D," to indicate better what remuxing does and what it’s for."),D.forEach(l),Je=d(t),G=s(t,"LI",{"data-svelte-h":!0}),p(G)!=="svelte-1gfogbt"&&(G.textContent=At),Oe=d(t),ee=s(t,"LI",{"data-svelte-h":!0}),p(ee)!=="svelte-1fq2t24"&&(ee.textContent=It),Ge=d(t),te=s(t,"LI",{"data-svelte-h":!0}),p(te)!=="svelte-t16b29"&&(te.textContent=Ht),et=d(t),le=s(t,"LI",{"data-svelte-h":!0}),p(le)!=="svelte-clevxf"&&(le.textContent=qt),tt=d(t),ne=s(t,"LI",{"data-svelte-h":!0}),p(ne)!=="svelte-a5sjmh"&&(ne.textContent=Tt),lt=d(t),ae=s(t,"LI",{"data-svelte-h":!0}),p(ae)!=="svelte-xdxvtn"&&(ae.textContent=Ut),nt=d(t),ie=s(t,"LI",{"data-svelte-h":!0}),p(ie)!=="svelte-15vpz4v"&&(ie.textContent=Pt),at=d(t),oe=s(t,"LI",{"data-svelte-h":!0}),p(oe)!=="svelte-19jxc1x"&&(oe.textContent=Mt),it=d(t),se=s(t,"LI",{"data-svelte-h":!0}),p(se)!=="svelte-1njii30"&&(se.textContent=jt),ot=d(t),re=s(t,"LI",{"data-svelte-h":!0}),p(re)!=="svelte-9jbu9d"&&(re.textContent=Kt),st=d(t),ue=s(t,"LI",{"data-svelte-h":!0}),p(ue)!=="svelte-1jkzsfl"&&(ue.textContent=Rt),rt=d(t),de=s(t,"LI",{"data-svelte-h":!0}),p(de)!=="svelte-pt4068"&&(de.textContent=St),ut=d(t),me=s(t,"LI",{"data-svelte-h":!0}),p(me)!=="svelte-xm6421"&&(me.textContent=Vt),dt=d(t),pe=s(t,"LI",{"data-svelte-h":!0}),p(pe)!=="svelte-13n593c"&&(pe.innerHTML=Wt),mt=d(t),ce=s(t,"LI",{"data-svelte-h":!0}),p(ce)!=="svelte-sk5jp5"&&(ce.textContent=Et),pt=d(t),fe=s(t,"LI",{"data-svelte-h":!0}),p(fe)!=="svelte-1nda4jw"&&(fe.textContent=zt),t.forEach(l),Te=d(e),S=s(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-tsk6o0"&&(S.innerHTML=Yt),Ue=d(e),V=s(e,"H2",{"data-svelte-h":!0}),p(V)!=="svelte-1aie8ed"&&(V.textContent=Nt),Pe=d(e),W=s(e,"P",{"data-svelte-h":!0}),p(W)!=="svelte-112frzt"&&(W.innerHTML=Qt),Me=d(e),E=s(e,"UL",{"data-svelte-h":!0}),p(E)!=="svelte-17fykq6"&&(E.innerHTML=Bt),je=d(e),z=s(e,"H2",{"data-svelte-h":!0}),p(z)!=="svelte-1argcp9"&&(z.textContent=Ft),Ke=d(e),C=s(e,"P",{});var H=ve(C);ct=x(H,"as always, you can check "),be(k.$$.fragment,H),ft=x(H," for "),he=s(H,"EM",{"data-svelte-h":!0}),p(he)!=="svelte-1bo0u0f"&&(he.textContent=Xt),H.forEach(l),Re=d(e),Y=s(e,"H2",{"data-svelte-h":!0}),p(Y)!=="svelte-1ggow70"&&(Y.textContent=Zt),Se=d(e),$=s(e,"P",{});var J=ve($);ht=x(J,"our "),be(L.$$.fragment,J),vt=x(J," reached over 20k stars recently, and around the same time the cobalt web app reached over 150k daily visitors. both of these numbers are insane to think about, thank you so much for your support!"),J.forEach(l),Ve=d(e),N=s(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-md4ncu"&&(N.textContent=Dt),We=d(e),Q=s(e,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-az8ax0"&&(Q.textContent=Jt),Ee=d(e),B=s(e,"P",{"data-svelte-h":!0}),p(B)!=="svelte-1gvbpo0"&&(B.textContent=Ot),ze=d(e),F=s(e,"H2",{"data-svelte-h":!0}),p(F)!=="svelte-12pam7v"&&(F.textContent=Gt),Ye=d(e),A=s(e,"P",{});var O=ve(A);xt=x(O,"plz "),be(I.$$.fragment,O),bt=x(O,", we as elves work all day and night"),O.forEach(l),Ne=d(e),X=s(e,"P",{"data-svelte-h":!0}),p(X)!=="svelte-h7l9th"&&(X.innerHTML=el)},m(e,t){n(e,a,t),n(e,c,t),n(e,w,t),n(e,b,t),n(e,g,t),n(e,ke,t),n(e,q,t),n(e,$e,t),n(e,T,t),n(e,Le,t),n(e,U,t),n(e,Ae,t),n(e,P,t),n(e,Ie,t),n(e,M,t),n(e,He,t),n(e,j,t),n(e,qe,t),n(e,r,t),i(r,K),i(K,Be),we(_,K,null),i(K,Fe),i(r,Xe),i(r,R),i(R,Ze),we(y,R,null),i(R,De),i(r,Je),i(r,G),i(r,Oe),i(r,ee),i(r,Ge),i(r,te),i(r,et),i(r,le),i(r,tt),i(r,ne),i(r,lt),i(r,ae),i(r,nt),i(r,ie),i(r,at),i(r,oe),i(r,it),i(r,se),i(r,ot),i(r,re),i(r,st),i(r,ue),i(r,rt),i(r,de),i(r,ut),i(r,me),i(r,dt),i(r,pe),i(r,mt),i(r,ce),i(r,pt),i(r,fe),n(e,Te,t),n(e,S,t),n(e,Ue,t),n(e,V,t),n(e,Pe,t),n(e,W,t),n(e,Me,t),n(e,E,t),n(e,je,t),n(e,z,t),n(e,Ke,t),n(e,C,t),i(C,ct),we(k,C,null),i(C,ft),i(C,he),n(e,Re,t),n(e,Y,t),n(e,Se,t),n(e,$,t),i($,ht),we(L,$,null),i($,vt),n(e,Ve,t),n(e,N,t),n(e,We,t),n(e,Q,t),n(e,Ee,t),n(e,B,t),n(e,ze,t),n(e,F,t),n(e,Ye,t),n(e,A,t),i(A,xt),we(I,A,null),i(A,bt),n(e,Ne,t),n(e,X,t),Qe=!0},p(e,t){const Z={};t&2&&(Z.$$scope={dirty:t,ctx:e}),_.$set(Z);const D={};t&2&&(D.$$scope={dirty:t,ctx:e}),y.$set(D);const H={};t&2&&(H.$$scope={dirty:t,ctx:e}),k.$set(H);const J={};t&2&&(J.$$scope={dirty:t,ctx:e}),L.$set(J);const O={};t&2&&(O.$$scope={dirty:t,ctx:e}),I.$set(O)},i(e){Qe||(ge(_.$$.fragment,e),ge(y.$$.fragment,e),ge(k.$$.fragment,e),ge(L.$$.fragment,e),ge(I.$$.fragment,e),Qe=!0)},o(e){Ce(_.$$.fragment,e),Ce(y.$$.fragment,e),Ce(k.$$.fragment,e),Ce(L.$$.fragment,e),Ce(I.$$.fragment,e),Qe=!1},d(e){e&&(l(a),l(c),l(w),l(b),l(g),l(ke),l(q),l($e),l(T),l(Le),l(U),l(Ae),l(P),l(Ie),l(M),l(He),l(j),l(qe),l(r),l(Te),l(S),l(Ue),l(V),l(Pe),l(W),l(Me),l(E),l(je),l(z),l(Ke),l(C),l(Re),l(Y),l(Se),l($),l(Ve),l(N),l(We),l(Q),l(Ee),l(B),l(ze),l(F),l(Ye),l(A),l(Ne),l(X)),_e(_),_e(y),_e(k),_e(L),_e(I)}}}function hl(h){let a,m;const c=[h[0],nl];let w={$$slots:{default:[fl]},$$scope:{ctx:h}};for(let f=0;f<c.length;f+=1)w=wt(w,c[f]);return a=new rl({props:w}),{c(){xe(a.$$.fragment)},l(f){be(a.$$.fragment,f)},m(f,b){we(a,f,b),m=!0},p(f,[b]){const g=b&1?sl(c,[b&1&&ll(f[0]),b&0&&ll(nl)]):{};b&2&&(g.$$scope={dirty:b,ctx:f}),a.$set(g)},i(f){m||(ge(a.$$.fragment,f),m=!0)},o(f){Ce(a.$$.fragment,f),m=!1},d(f){_e(a,f)}}}const nl={title:"merry christmas and happy new year!",date:"23 Dec, 2024",banner:{file:"newyear2025.webp",alt:"meowth plush in a christmas hat sitting in front of a shiny christmas tree."}};function vl(h,a,m){return h.$$set=c=>{m(0,a=wt(wt({},a),tl(c)))},a=tl(a),[a]}class _l extends il{constructor(a){super(),ol(this,a,vl,hl,al,{})}}export{_l as default,nl as metadata};