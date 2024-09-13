import{r as m,j as s,a as g,c as _,u as Z,q,m as B}from"./app-C6t3fjNn.js";import{q as X}from"./transition-DKr33fzn.js";import{r as p}from"./index-BJNcbSVX.js";import{A as Q}from"./ApplicationLogo-BILbX1vC.js";const T=m.createContext(),A=({children:e})=>{const[t,r]=m.useState(!1),i=()=>{r(o=>!o)};return s.jsx(T.Provider,{value:{open:t,setOpen:r,toggleOpen:i},children:s.jsx("div",{className:"relative",children:e})})},Y=({children:e})=>{const{open:t,setOpen:r,toggleOpen:i}=m.useContext(T);return s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:i,children:e}),t&&s.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},J=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white dark:bg-gray-700",children:i})=>{const{open:o,setOpen:a}=m.useContext(T);let n="origin-top";e==="left"?n="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(n="ltr:origin-top-right rtl:origin-top-left end-0");let l="";return t==="48"&&(l="w-48"),s.jsx(s.Fragment,{children:s.jsx(X,{as:m.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:s.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${n} ${l}`,onClick:()=>a(!1),children:s.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:i})})})})},K=({className:e="",children:t,...r})=>s.jsx(g,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+e,children:t});A.Trigger=Y;A.Content=J;A.Link=K;const C=A;/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G=(...e)=>e.filter((t,r,i)=>!!t&&i.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:n,...l},d)=>m.createElement("svg",{ref:d,...te,width:t,height:t,stroke:e,strokeWidth:i?Number(r)*24/Number(t):r,className:G("lucide",o),...l},[...n.map(([c,u])=>m.createElement(c,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const r=m.forwardRef(({className:i,...o},a)=>m.createElement(se,{ref:a,iconNode:t,className:G(`lucide-${ee(e)}`,i),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=x("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=x("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=x("CircleGauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=x("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=x("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=x("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=x("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=x("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=x("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=x("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=x("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);let xe={data:""},fe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||xe,ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ye=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,w=(e,t)=>{let r="",i="",o="";for(let a in e){let n=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+n+";":i+=a[1]=="f"?w(n,a):a+"{"+w(n,a[1]=="k"?"":t)+"}":typeof n=="object"?i+=w(n,t?t.replace(/([^,])+/g,l=>a.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):a):n!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=w.p?w.p(a,n):a+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+i},j={},U=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+U(e[r]);return t}return e},be=(e,t,r,i,o)=>{let a=U(e),n=j[a]||(j[a]=(d=>{let c=0,u=11;for(;c<d.length;)u=101*u+d.charCodeAt(c++)>>>0;return"go"+u})(a));if(!j[n]){let d=a!==e?e:(c=>{let u,y,f=[{}];for(;u=ge.exec(c.replace(ye,""));)u[4]?f.shift():u[3]?(y=u[3].replace(H," ").trim(),f.unshift(f[0][y]=f[0][y]||{})):f[0][u[1]]=u[2].replace(H," ").trim();return f[0]})(e);j[n]=w(o?{["@keyframes "+n]:d}:d,r?"":"."+n)}let l=r&&j.g?j.g:null;return r&&(j.g=j[n]),((d,c,u,y)=>{y?c.data=c.data.replace(y,d):c.data.indexOf(d)===-1&&(c.data=u?d+c.data:c.data+d)})(j[n],t,i,l),n},je=(e,t,r)=>e.reduce((i,o,a)=>{let n=t[a];if(n&&n.call){let l=n(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;n=d?"."+d:l&&typeof l=="object"?l.props?"":w(l,""):l===!1?"":l}return i+o+(n??"")},"");function O(e){let t=this||{},r=e.call?e(t.p):e;return be(r.unshift?r.raw?je(r,[].slice.call(arguments,1),t.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):r,fe(t.target),t.g,t.o,t.k)}let V,F,P;O.bind({g:1});let v=O.bind({k:1});function ve(e,t,r,i){w.p=t,V=e,F=r,P=i}function k(e,t){let r=this||{};return function(){let i=arguments;function o(a,n){let l=Object.assign({},a),d=l.className||o.className;r.p=Object.assign({theme:F&&F()},l),r.o=/ *go\d+/.test(d),l.className=O.apply(r,i)+(d?" "+d:"");let c=e;return e[0]&&(c=l.as||e,delete l.as),P&&c[0]&&P(l),V(c,l)}return o}}var we=e=>typeof e=="function",I=(e,t)=>we(e)?e(t):e,ke=(()=>{let e=0;return()=>(++e).toString()})(),W=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ne=20,z=new Map,Ce=1e3,R=e=>{if(z.has(e))return;let t=setTimeout(()=>{z.delete(e),N({type:4,toastId:e})},Ce);z.set(e,t)},Le=e=>{let t=z.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ne)};case 1:return t.toast.id&&Le(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return e.toasts.find(a=>a.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?R(i):e.toasts.forEach(a=>{R(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},M=[],E={toasts:[],pausedAt:void 0},N=e=>{E=S(E,e),M.forEach(t=>{t(E)})},$e={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ze=(e={})=>{let[t,r]=m.useState(E);m.useEffect(()=>(M.push(r),()=>{let o=M.indexOf(r);o>-1&&M.splice(o,1)}),[t]);let i=t.toasts.map(o=>{var a,n;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||$e[o.type],style:{...e.style,...(n=e[o.type])==null?void 0:n.style,...o.style}}});return{...t,toasts:i}},Me=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ke()}),L=e=>(t,r)=>{let i=Me(t,e,r);return N({type:2,toast:i}),i.id},h=(e,t)=>L("blank")(e,t);h.error=L("error");h.success=L("success");h.loading=L("loading");h.custom=L("custom");h.dismiss=e=>{N({type:3,toastId:e})};h.remove=e=>N({type:4,toastId:e});h.promise=(e,t,r)=>{let i=h.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(h.success(I(t.success,o),{id:i,...r,...r==null?void 0:r.success}),o)).catch(o=>{h.error(I(t.error,o),{id:i,...r,...r==null?void 0:r.error})}),e};var Ee=(e,t)=>{N({type:1,toast:{id:e,height:t}})},Ie=()=>{N({type:5,time:Date.now()})},Ae=e=>{let{toasts:t,pausedAt:r}=ze(e);m.useEffect(()=>{if(r)return;let a=Date.now(),n=t.map(l=>{if(l.duration===1/0)return;let d=(l.duration||0)+l.pauseDuration-(a-l.createdAt);if(d<0){l.visible&&h.dismiss(l.id);return}return setTimeout(()=>h.dismiss(l.id),d)});return()=>{n.forEach(l=>l&&clearTimeout(l))}},[t,r]);let i=m.useCallback(()=>{r&&N({type:6,time:Date.now()})},[r]),o=m.useCallback((a,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},u=t.filter(b=>(b.position||c)===(a.position||c)&&b.height),y=u.findIndex(b=>b.id===a.id),f=u.filter((b,D)=>D<y&&b.visible).length;return u.filter(b=>b.visible).slice(...l?[f+1]:[0,f]).reduce((b,D)=>b+(D.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Ee,startPause:Ie,endPause:i,calculateOffset:o}}},Oe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,De=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Pe=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${De} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Fe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Se=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Te=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Se} 1s linear infinite;
`,qe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,He=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Re=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${He} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ge=k("div")`
  position: absolute;
`,Ue=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ve=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,We=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_e=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?m.createElement(We,null,t):t:r==="blank"?null:m.createElement(Ue,null,m.createElement(Te,{...i}),r!=="loading"&&m.createElement(Ge,null,r==="error"?m.createElement(Pe,{...i}):m.createElement(Re,{...i})))},Ze=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Be=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Xe="0%{opacity:0;} 100%{opacity:1;}",Qe="0%{opacity:1;} 100%{opacity:0;}",Ye=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Je=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ke=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=W()?[Xe,Qe]:[Ze(r),Be(r)];return{animation:t?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=m.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?Ke(e.position||t||"top-center",e.visible):{opacity:0},a=m.createElement(_e,{toast:e}),n=m.createElement(Je,{...e.ariaProps},I(e.message,e));return m.createElement(Ye,{className:e.className,style:{...o,...r,...e.style}},typeof i=="function"?i({icon:a,message:n}):m.createElement(m.Fragment,null,a,n))});ve(m.createElement);var tt=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let a=m.useCallback(n=>{if(n){let l=()=>{let d=n.getBoundingClientRect().height;i(e,d)};l(),new MutationObserver(l).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return m.createElement("div",{ref:a,className:t,style:r},o)},st=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:W()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...o}},rt=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,at=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:d}=Ae(r);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(c=>{let u=c.position||t,y=d.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),f=st(u,y);return m.createElement(tt,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?rt:"",style:f},c.type==="custom"?I(c.message,c):o?o(c):m.createElement(et,{toast:c,position:u}))}))},ct=h;function dt({user:e,children:t}){var d;const r=_(),{minimizedSidebar:i}=Z(c=>c.menu),{role:o}=(d=q().props)==null?void 0:d.auth,{entities:a}=q().props,n=route().current(),l=()=>{r(B())};return s.jsxs("div",{className:"bg-[#f7f9fb] min-h-screen",children:[s.jsx("div",{className:"main-layout",children:s.jsxs("div",{className:"layout-wrapper flex flex-wrap",children:[s.jsxs("div",{className:`sidebar h-screen bg-gray-900 w-full shadow-sm rounded-none overflow-hidden ${i?"w-max sm:w-full sm:left-[-100px] sm:max-w-[64px]":"w-max sm:w-full -left-full sm:max-w-[250px]"} transition-all ease-in-out duration-300 fixed sm:left-0 z-50`,children:[s.jsx("div",{className:"close sm:hidden rounded-full block w-max top-2 right-2 absolute p-1 ",onClick:()=>{},children:s.jsx(he,{size:22,color:"white"})}),s.jsx("div",{className:"logo-wrapper p-3 px-8 my-2",children:s.jsx(g,{href:"/dashboard",className:"flex items-center",children:s.jsx(Q,{className:"w-40"})})}),s.jsxs("div",{className:"side-menu px-3",children:[s.jsx(p.List,{className:`p-0 rounded-none ${n==="dashboard"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:"/dashboard",className:"",children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white ",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(ie,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:"Dashboard"})]})})}),s.jsx(p.List,{className:`p-0 ${n==="wireless.sites.index"?" border-l-4 border-green-700  bg-gray-700/90":""}`,"data-voyager":"report-menu",children:s.jsx(g,{href:route("wireless.sites.index"),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none  text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(ce,{size:20})}),s.jsx("span",{className:"font-semibold text-base",children:"WNTD"})]})})}),s.jsx(p.List,{className:`p-0 ${n==="site.field.name.index"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("site.field.name.index"),className:"",children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white ",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(de,{size:20})}),s.jsx("span",{className:"font-semibold text-base",children:"FW Site"})]})})}),(a==null?void 0:a.length)>0&&(a==null?void 0:a.map((c,u)=>s.jsx(p.List,{className:`p-0 ${n==="view.table.item"?"border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("view.table.item",c==null?void 0:c.slug),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(le,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:c==null?void 0:c.title})]})})},u))),o==="super-admin"&&s.jsxs(s.Fragment,{children:[s.jsx(p.List,{className:`p-0 ${n==="sql.import"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("sql.import"),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(oe,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:"SQL Import"})]})})}),s.jsx(p.List,{className:`p-0 ${n==="mo.file.generator"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("mo.file.generator"),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(ne,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:"MO File Generator"})]})})}),s.jsx(p.List,{className:`p-0 ${n==="roles.index"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("roles.index"),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(pe,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:"Roles Management"})]})})}),s.jsx(p.List,{className:`p-0 ${n==="settings.index"?" border-l-4 border-green-700  bg-gray-700/90":""}`,children:s.jsx(g,{href:route("settings.index"),children:s.jsxs(p.ListItem,{className:"py-3 rounded-none  text-white",children:[s.jsx(p.ListItemPrefix,{className:"mr-3",children:s.jsx(me,{size:20})}),s.jsx("span",{className:"font-semibold text-sm",children:"Settings"})]})})})]})]})]}),s.jsxs("div",{className:`main-content w-full ${i?"w-full  ":"sm:max-w-[calc(100%-250px)] sm:ms-[250px]"} transition-all ease-in-out duration-300`,children:[s.jsx("header",{className:"bg-white p-3 shadow border-b sticky top-0 z-50",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("div",{className:"flex items-center gap-4",children:s.jsx("div",{className:"toggle-menu cursor-pointer",children:s.jsx(re,{onClick:l,size:28,strokeWidth:1.5,color:"rgba(61, 67, 74, 0.9)"})})}),s.jsx("div",{className:"right-item flex items-center justify-center gap-4 ",children:s.jsx("div",{className:"user-item font-normal",children:s.jsxs("div",{className:"flex items-center gap-4",children:[n!=="table.wizard.index"&&s.jsx(g,{href:route("table.wizard.index"),children:s.jsx(p.Button,{variant:"gradient",size:"sm",className:"capitalize rounded text-sm",children:"Create Table"})}),s.jsxs(C,{children:[s.jsx(C.Trigger,{children:s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"border rounded-full w-10 h-10 bg-[#F4F7F9] flex items-center justify-center",children:s.jsx(ue,{color:"rgba(61, 67, 74, 0.9)",size:18,strokeWidth:1.5})}),s.jsxs("button",{type:"button",className:"text-xs sm:text-base flex items-center gap-2 text-gray-600 font-semibold",children:[e==null?void 0:e.name,s.jsx(ae,{})]})]})}),s.jsxs(C.Content,{children:[s.jsx(C.Link,{href:route("profile.edit"),children:"Profile"}),s.jsx(C.Link,{onClick:()=>{localStorage.removeItem("minimized")},href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})]})})})]})}),s.jsx("div",{className:"content",children:t})]})]})}),s.jsx(at,{position:"top-right"})]})}export{dt as A,ae as C,he as X,ct as _,x as c};
