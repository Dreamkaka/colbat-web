import{s as H,c as O}from"../chunks/scheduler.y4uHs2UB.js";import{S as J,i as K,c,s as h,a as p,n as k,m,k as _,t as g,b as $,h as b,d,o as S,p as P,q as Y,r as j,u as B,v as F,w as z}from"../chunks/index.Cysm1UDV.js";import{e as I}from"../chunks/Icon.NybfZExb.js";import{n as M,s as Q}from"../chunks/settings.RqfMgPN1.js";import{t as R}from"../chunks/translations.C2mFf6Kf.js";import{audioFormatOptions as y,audioBitrateOptions as T}from"../chunks/settings.H-Agf-dr.js";import{S as v,a as U}from"../chunks/SettingsCategory.ByzU59Z5.js";import{S as E,a as G}from"../chunks/SettingsButton.Cu9uZFbP.js";import{S as W}from"../chunks/SettingsDropdown.BrS1bH7d.js";function q(a,s,n){const t=a.slice();return t[3]=s[n],t}function N(a,s,n){const t=a.slice();return t[3]=s[n],t}function X(a){let s=a[0](`settings.audio.format.${a[3]}`)+"",n,t;return{c(){n=B(s),t=h()},l(e){n=F(e,s),t=k(e)},m(e,o){_(e,n,o),_(e,t,o)},p(e,o){o&1&&s!==(s=e[0](`settings.audio.format.${e[3]}`)+"")&&z(n,s)},d(e){e&&(b(n),b(t))}}}function V(a){let s,n;return s=new G({props:{settingContext:"save",settingId:"audioFormat",settingValue:a[3],$$slots:{default:[X]},$$scope:{ctx:a}}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&257&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function Z(a){let s,n,t=I(y),e=[];for(let i=0;i<t.length;i+=1)e[i]=V(N(a,t,i));const o=i=>$(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();s=S()},l(i){for(let u=0;u<e.length;u+=1)e[u].l(i);s=S()},m(i,u){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(i,u);_(i,s,u),n=!0},p(i,u){if(u&1){t=I(y);let l;for(l=0;l<t.length;l+=1){const r=N(i,t,l);e[l]?(e[l].p(r,u),g(e[l],1)):(e[l]=V(r),e[l].c(),g(e[l],1),e[l].m(s.parentNode,s))}for(P(),l=t.length;l<e.length;l+=1)o(l);Y()}},i(i){if(!n){for(let u=0;u<t.length;u+=1)g(e[u]);n=!0}},o(i){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)$(e[u]);n=!1},d(i){i&&b(s),j(e,i)}}}function x(a){let s,n;return s=new E({props:{big:!0,description:a[0]("settings.audio.format.description"),$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&1&&(o.description=t[0]("settings.audio.format.description")),e&257&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function tt(a){let s,n=a[0]("settings.audio.bitrate.kbps")+"",t,e;return{c(){s=B(a[3]),t=B(n),e=h()},l(o){s=F(o,a[3]),t=F(o,n),e=k(o)},m(o,i){_(o,s,i),_(o,t,i),_(o,e,i)},p(o,i){i&1&&n!==(n=o[0]("settings.audio.bitrate.kbps")+"")&&z(t,n)},d(o){o&&(b(s),b(t),b(e))}}}function A(a){let s,n;return s=new G({props:{settingContext:"save",settingId:"audioBitrate",settingValue:a[3],$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&257&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function et(a){let s,n,t=I(T),e=[];for(let i=0;i<t.length;i+=1)e[i]=A(q(a,t,i));const o=i=>$(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();s=S()},l(i){for(let u=0;u<e.length;u+=1)e[u].l(i);s=S()},m(i,u){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(i,u);_(i,s,u),n=!0},p(i,u){if(u&1){t=I(T);let l;for(l=0;l<t.length;l+=1){const r=q(i,t,l);e[l]?(e[l].p(r,u),g(e[l],1)):(e[l]=A(r),e[l].c(),g(e[l],1),e[l].m(s.parentNode,s))}for(P(),l=t.length;l<e.length;l+=1)o(l);Y()}},i(i){if(!n){for(let u=0;u<t.length;u+=1)g(e[u]);n=!0}},o(i){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)$(e[u]);n=!1},d(i){i&&b(s),j(e,i)}}}function st(a){let s,n;return s=new E({props:{big:!0,description:a[0]("settings.audio.bitrate.description"),$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&1&&(o.description=t[0]("settings.audio.bitrate.description")),e&257&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function nt(a){let s,n;return s=new W({props:{title:a[0]("settings.audio.youtube.dub.title"),description:a[0]("settings.audio.youtube.dub.description"),items:a[2],settingContext:"save",settingId:"youtubeDubLang",selectedOption:a[1].save.youtubeDubLang,selectedTitle:a[2][a[1].save.youtubeDubLang]}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&1&&(o.title=t[0]("settings.audio.youtube.dub.title")),e&1&&(o.description=t[0]("settings.audio.youtube.dub.description")),e&2&&(o.selectedOption=t[1].save.youtubeDubLang),e&2&&(o.selectedTitle=t[2][t[1].save.youtubeDubLang]),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function it(a){let s,n;return s=new U({props:{settingContext:"save",settingId:"tiktokFullAudio",title:a[0]("settings.audio.tiktok.original.title"),description:a[0]("settings.audio.tiktok.original.description")}}),{c(){c(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,e){m(s,t,e),n=!0},p(t,e){const o={};e&1&&(o.title=t[0]("settings.audio.tiktok.original.title")),e&1&&(o.description=t[0]("settings.audio.tiktok.original.description")),s.$set(o)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){$(s.$$.fragment,t),n=!1},d(t){d(s,t)}}}function ot(a){let s,n,t,e,o,i,u,l;return s=new v({props:{sectionId:"format",title:a[0]("settings.audio.format"),$$slots:{default:[x]},$$scope:{ctx:a}}}),t=new v({props:{sectionId:"bitrate",title:a[0]("settings.audio.bitrate"),disabled:["wav","best"].includes(a[1].save.audioFormat),$$slots:{default:[st]},$$scope:{ctx:a}}}),o=new v({props:{sectionId:"youtube-dub",title:a[0]("settings.audio.youtube.dub"),beta:!0,$$slots:{default:[nt]},$$scope:{ctx:a}}}),u=new v({props:{sectionId:"tiktok",title:a[0]("settings.audio.tiktok.original"),$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){c(s.$$.fragment),n=h(),c(t.$$.fragment),e=h(),c(o.$$.fragment),i=h(),c(u.$$.fragment)},l(r){p(s.$$.fragment,r),n=k(r),p(t.$$.fragment,r),e=k(r),p(o.$$.fragment,r),i=k(r),p(u.$$.fragment,r)},m(r,f){m(s,r,f),_(r,n,f),m(t,r,f),_(r,e,f),m(o,r,f),_(r,i,f),m(u,r,f),l=!0},p(r,[f]){const L={};f&1&&(L.title=r[0]("settings.audio.format")),f&257&&(L.$$scope={dirty:f,ctx:r}),s.$set(L);const w={};f&1&&(w.title=r[0]("settings.audio.bitrate")),f&2&&(w.disabled=["wav","best"].includes(r[1].save.audioFormat)),f&257&&(w.$$scope={dirty:f,ctx:r}),t.$set(w);const C={};f&1&&(C.title=r[0]("settings.audio.youtube.dub")),f&259&&(C.$$scope={dirty:f,ctx:r}),o.$set(C);const D={};f&1&&(D.title=r[0]("settings.audio.tiktok.original")),f&257&&(D.$$scope={dirty:f,ctx:r}),u.$set(D)},i(r){l||(g(s.$$.fragment,r),g(t.$$.fragment,r),g(o.$$.fragment,r),g(u.$$.fragment,r),l=!0)},o(r){$(s.$$.fragment,r),$(t.$$.fragment,r),$(o.$$.fragment,r),$(u.$$.fragment,r),l=!1},d(r){r&&(b(n),b(e),b(i)),d(s,r),d(t,r),d(o,r),d(u,r)}}}function at(a,s,n){let t,e;O(a,R,i=>n(0,t=i)),O(a,Q,i=>n(1,e=i));const o=M();return[t,e,o]}class dt extends J{constructor(s){super(),K(this,s,at,ot,H,{})}}export{dt as component};