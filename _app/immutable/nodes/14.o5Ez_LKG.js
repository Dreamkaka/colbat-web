const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/immutable/chunks/api-url.DxeaKSsF.js","_app/immutable/chunks/scheduler.y4uHs2UB.js","_app/immutable/chunks/settings.D2QZNL8x.js","_app/immutable/chunks/index.CdrgBhix.js","_app/immutable/chunks/translations.BVElcgx8.js","_app/immutable/chunks/preload-helper.D7HrI6pR.js","_app/immutable/chunks/i18n_languages.json.C6QiP7u4.js","_app/immutable/chunks/env.C2bSzLpJ.js","_app/immutable/chunks/api.BDDPSeF4.js","_app/immutable/chunks/lazy-get.slowJJOg.js","_app/immutable/chunks/session.B5AThXCd.js","_app/immutable/chunks/turnstile.b4aMnCAN.js","_app/immutable/chunks/turnstile.BJf2cMOv.js","_app/immutable/chunks/server-info.Dtq1Mxeq.js","_app/immutable/chunks/safety-warning.Bw3vsJXK.js","_app/immutable/chunks/download.CE4MlqSw.js","_app/immutable/chunks/device.BfQL0yu1.js","_app/immutable/chunks/locale.BODhtjXm.js","_app/immutable/chunks/validate.Bpb5b3Xj.js","_app/immutable/chunks/settings.H-Agf-dr.js","_app/immutable/chunks/omnibox.C56TUS5r.js","_app/immutable/chunks/theme.DQ59N7Tj.js","_app/immutable/chunks/meowbalt.DtU_1xQd.js","_app/immutable/chunks/control.CYgJF_JY.js"])))=>i.map(i=>d[i]);
import{_}from"../chunks/preload-helper.D7HrI6pR.js";import{s as C,c as D,o as H,k as M}from"../chunks/scheduler.y4uHs2UB.js";import{S as x,i as F,o as T,k as A,t as m,b,q as J,h as f,e as I,f as P,g as V,j as E,p as $,r as G,c as K,s as y,u as Q,a as U,n as S,v as W,m as X,y as v,w as Y,d as Z}from"../chunks/index.Cysm1UDV.js";import{e as k}from"../chunks/Icon.NybfZExb.js";import{g as tt}from"../chunks/meowbalt.DtU_1xQd.js";import{v as et}from"../chunks/version.DVbGo5C6.js";import{d as st,a as it}from"../chunks/device.BfQL0yu1.js";import{d as rt}from"../chunks/subnav.D7qMs4lw.js";import{s as ot,a as _t}from"../chunks/settings.D2QZNL8x.js";import{S as at}from"../chunks/SectionHeading.BD9mX1nP.js";function N(c,i,a){const e=c.slice();return e[7]=i[a].title,e[8]=i[a].data,e[10]=a,e}function j(c){let i,a,e=k(c[0]),t=[];for(let r=0;r<e.length;r+=1)t[r]=w(N(c,e,r));const p=r=>b(t[r],1,1,()=>{t[r]=null});return{c(){i=I("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){i=P(r,"DIV",{id:!0,class:!0});var n=V(i);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(f),this.h()},h(){E(i,"id","debug-page"),E(i,"class","svelte-1b9o8c")},m(r,n){A(r,i,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(i,null);a=!0},p(r,n){if(n&1){e=k(r[0]);let s;for(s=0;s<e.length;s+=1){const u=N(r,e,s);t[s]?(t[s].p(u,n),m(t[s],1)):(t[s]=w(u),t[s].c(),m(t[s],1),t[s].m(i,null))}for($(),s=e.length;s<t.length;s+=1)p(s);J()}},i(r){if(!a){for(let n=0;n<e.length;n+=1)m(t[n]);a=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)b(t[n]);a=!1},d(r){r&&f(i),G(t,r)}}}function w(c){let i,a,e,t,p=JSON.stringify(c[8],null,2)+"",r,n,s;return a=new at({props:{sectionId:c[7],title:c[7],copyData:JSON.stringify(c[8])}}),{c(){i=I("div"),K(a.$$.fragment),e=y(),t=I("div"),r=Q(p),n=y(),this.h()},l(u){i=P(u,"DIV",{class:!0});var l=V(i);U(a.$$.fragment,l),e=S(l),t=P(l,"DIV",{class:!0});var d=V(t);r=W(d,p),d.forEach(f),n=S(l),l.forEach(f),this.h()},h(){E(t,"class","json-block subtext svelte-1b9o8c"),E(i,"class","debug-section svelte-1b9o8c")},m(u,l){A(u,i,l),X(a,i,null),v(i,e),v(i,t),v(t,r),v(i,n),s=!0},p(u,l){const d={};l&1&&(d.sectionId=u[7]),l&1&&(d.title=u[7]),l&1&&(d.copyData=JSON.stringify(u[8])),a.$set(d),(!s||l&1)&&p!==(p=JSON.stringify(u[8],null,2)+"")&&Y(r,p)},i(u){s||(m(a.$$.fragment,u),s=!0)},o(u){b(a.$$.fragment,u),s=!1},d(u){u&&f(i),Z(a)}}}function nt(c){let i,a,e=c[1].advanced.debug&&j(c);return{c(){e&&e.c(),i=T()},l(t){e&&e.l(t),i=T()},m(t,p){e&&e.m(t,p),A(t,i,p),a=!0},p(t,[p]){t[1].advanced.debug?e?(e.p(t,p),p&2&&m(e,1)):(e=j(t),e.c(),m(e,1),e.m(i.parentNode,i)):e&&($(),b(e,1,1,()=>{e=null}),J())},i(t){a||(m(e),a=!0)},o(t){b(e),a=!1},d(t){t&&f(i),e&&e.d(t)}}}function lt(c,i,a){let e,t,p,r;D(c,ot,l=>a(1,t=l)),D(c,et,l=>a(3,p=l)),D(c,_t,l=>a(4,r=l));const n={};let s={};const u=()=>{const l=Object.assign({"/src/lib/api/api-url.ts":()=>_(()=>import("../chunks/api-url.DxeaKSsF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),"/src/lib/api/api.ts":()=>_(()=>import("../chunks/api.BDDPSeF4.js"),__vite__mapDeps([8,1,2,3,4,5,6,9,10,11,12,0,7,13])),"/src/lib/api/safety-warning.ts":()=>_(()=>import("../chunks/safety-warning.Bw3vsJXK.js"),__vite__mapDeps([14,1,4,5,3,6,2,15,16])),"/src/lib/api/server-info.ts":()=>_(()=>import("../chunks/server-info.Dtq1Mxeq.js"),__vite__mapDeps([13,1,0,2,3,4,5,6,7,12])),"/src/lib/api/session.ts":()=>_(()=>import("../chunks/session.B5AThXCd.js"),__vite__mapDeps([10,11,12,2,3,1,4,5,6,0,7])),"/src/lib/api/turnstile.ts":()=>_(()=>import("../chunks/turnstile.b4aMnCAN.js"),__vite__mapDeps([11,12,2,3,1,4,5,6])),"/src/lib/i18n/locale.ts":()=>_(()=>import("../chunks/locale.BODhtjXm.js"),__vite__mapDeps([17,3,1,6,2,4,5,16])),"/src/lib/i18n/translations.ts":()=>_(()=>import("../chunks/translations.BVElcgx8.js"),__vite__mapDeps([4,5,3,1,6])),"/src/lib/polyfills/abortsignal-timeout.ts":()=>_(()=>import("../chunks/abortsignal-timeout.aMHluG6E.js"),[]),"/src/lib/polyfills/user-activation.ts":()=>_(()=>import("../chunks/user-activation.B0unOshY.js"),[]),"/src/lib/settings/defaults.ts":()=>_(()=>import("../chunks/settings.D2QZNL8x.js").then(o=>o.b),__vite__mapDeps([2,3,1,4,5,6])),"/src/lib/settings/lazy-get.ts":()=>_(()=>import("../chunks/lazy-get.slowJJOg.js"),__vite__mapDeps([9,2,3,1,4,5,6])),"/src/lib/settings/migrate-v7.ts":()=>_(()=>import("../chunks/settings.D2QZNL8x.js").then(o=>o.m),__vite__mapDeps([2,3,1,4,5,6])),"/src/lib/settings/migrate.ts":()=>_(()=>import("../chunks/settings.D2QZNL8x.js").then(o=>o.e),__vite__mapDeps([2,3,1,4,5,6])),"/src/lib/settings/validate.ts":()=>_(()=>import("../chunks/validate.Bpb5b3Xj.js"),__vite__mapDeps([18,2,3,1,4,5,6,19])),"/src/lib/settings/youtube-lang.ts":()=>_(()=>import("../chunks/settings.D2QZNL8x.js").then(o=>o.c),__vite__mapDeps([2,3,1,4,5,6])),"/src/lib/state/dialogs.ts":()=>_(()=>import("../chunks/download.CE4MlqSw.js").then(o=>o.g),__vite__mapDeps([15,1,2,3,4,5,6,16])),"/src/lib/state/omnibox.ts":()=>_(()=>import("../chunks/omnibox.C56TUS5r.js"),__vite__mapDeps([20,3,1])),"/src/lib/state/server-info.ts":()=>_(()=>import("../chunks/turnstile.BJf2cMOv.js").then(o=>o.s),__vite__mapDeps([12,2,3,1,4,5,6])),"/src/lib/state/settings.ts":()=>_(()=>import("../chunks/settings.D2QZNL8x.js").then(o=>o.f),__vite__mapDeps([2,3,1,4,5,6])),"/src/lib/state/theme.ts":()=>_(()=>import("../chunks/theme.DQ59N7Tj.js"),__vite__mapDeps([21,3,1,2,4,5,6])),"/src/lib/state/turnstile.ts":()=>_(()=>import("../chunks/turnstile.BJf2cMOv.js").then(o=>o.d),__vite__mapDeps([12,2,3,1,4,5,6])),"/src/lib/types/api.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.d),__vite__mapDeps([22,1,3,23])),"/src/lib/types/changelogs.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.e),__vite__mapDeps([22,1,3,23])),"/src/lib/types/dialog.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.f),__vite__mapDeps([22,1,3,23])),"/src/lib/types/generic.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.h),__vite__mapDeps([22,1,3,23])),"/src/lib/types/i18n.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.i),__vite__mapDeps([22,1,3,23])),"/src/lib/types/libav.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.l),__vite__mapDeps([22,1,3,23])),"/src/lib/types/meowbalt.ts":()=>_(()=>import("../chunks/meowbalt.DtU_1xQd.js").then(o=>o.m),__vite__mapDeps([22,1,3,23])),"/src/lib/types/settings.ts":()=>_(()=>import("../chunks/settings.H-Agf-dr.js"),[])}),d=new Set(["translations.translations","settings"]);Object.entries(l).map(async([o,q])=>{var R;const z=(R=o.split("/").pop())==null?void 0:R.split(".").shift(),L=await q();for(const g in L){const h=L[g];if(typeof h=="object"&&"subscribe"in h){const O=z+(g==="default"?"":`.${g}`);if(d.has(O))continue;n[O]=h.subscribe(B=>{a(2,s={...s,[O]:B})})}}})};return H(()=>{t.advanced.debug||tt(rt("settings"),{replaceState:!0}),u()}),M(()=>{Object.values(n).map(l=>l())}),c.$$.update=()=>{c.$$.dirty&28&&a(0,e=[{title:"device",data:st},{title:"app",data:it},{title:"settings",data:r},{title:"version",data:p},{title:"states",data:s}])},[e,t,s,p,r]}class ht extends x{constructor(i){super(),F(this,i,lt,nt,C,{})}}export{ht as component};