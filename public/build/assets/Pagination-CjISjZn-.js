import{c as r}from"./AuthenticatedLayout-BtjXaohP.js";import{j as t,a as y}from"./app-CIRcvYGN.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=r("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function c({links:a,perPage:o}){function n(e){return e?"bg-gray-600 text-white text-xs font-semibold rounded-md px-3 py-2":"bg-gradient-to-tr from-gray-900 to-gray-800 text-white text-xs font-semibold rounded-md px-3 py-2"}return(a==null?void 0:a.length)>3&&t.jsx("div",{className:"flex flex-wrap flex-start md:justify-end gap-1",children:a.map((e,s)=>e.url===null?t.jsx("div",{className:"bg-gray-600 text-white text-xs font-semibold rounded-md px-3 py-2",children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e.label}})},s):t.jsx(y,{className:n(e.active),href:`${e.url}&per_page=${o}`,children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e.label}})},s))})}export{p as M,c as P,d as S,i as T};
