const i={is:{installed:!1}},a={is:{iPhone:!1,iPad:!1,iOS:!1,android:!1,mobile:!1},prefers:{language:"en",reducedMotion:!1,reducedTransparency:!1},supports:{share:!1,directDownload:!1},userAgent:"sveltekit server"};{const e=navigator.userAgent.toLowerCase(),s=e.includes("iphone os"),o=!s&&e.includes("mac os")&&navigator.maxTouchPoints>0,n=s||o,r=e.includes("android")||e.includes("diordna"),d=window.matchMedia("(display-mode: standalone)").matches;i.is={installed:d},a.is={iPhone:s,iPad:o,iOS:n,android:r,mobile:n||r},a.prefers={language:navigator.language.toLowerCase().slice(0,2)||"en",reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,reducedTransparency:window.matchMedia("(prefers-reduced-transparency: reduce)").matches},a.supports={share:navigator.share!==void 0,directDownload:!(d&&n)},a.userAgent=navigator.userAgent}export{i as a,a as d};