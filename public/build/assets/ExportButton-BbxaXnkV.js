import{c as l}from"./AuthenticatedLayout-GSa4eCUk.js";import{r as p,j as a}from"./app-ZJVYOzKk.js";import{r as m}from"./index-BO9AAvUu.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);function f({route_name:n,file_name:r}){const[c,o]=p.useState(!1),s=async()=>{try{o(!0);const e=await axios.get(route(`${n}`)),i=new Blob([e.data],{type:"text/csv"}),d=window.URL.createObjectURL(i),t=document.createElement("a");t.href=d,t.setAttribute("download",`${r}.csv`),document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(e){console.log(e)}finally{o(!1)}};return a.jsx("div",{className:"export",children:a.jsx(m.Button,{variant:"gradient",size:"sm",className:"capitalize rounded text-sm",onClick:s,loading:c,children:"Export"})})}export{f as E,y as P};
