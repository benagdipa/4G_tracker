import{W as D,j as e,Y as _,a as v}from"./app-DzalHcVU.js";import{c as z,A as R,X as A}from"./AuthenticatedLayout-DdSPs-UH.js";import{r as m}from"./index-D4XrngbZ.js";import{I as c}from"./InputLabel-wtpN6Dbq.js";import{T as y}from"./TextInput-CxoPIxQU.js";import{I as x}from"./InputError-CQQuqtUr.js";import"./transition-C5FwFN3G.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var l=[];for(var g=0;g<256;++g)l.push((g+256).toString(16).slice(1));function V(n,a=0){return(l[n[a+0]]+l[n[a+1]]+l[n[a+2]]+l[n[a+3]]+"-"+l[n[a+4]]+l[n[a+5]]+"-"+l[n[a+6]]+l[n[a+7]]+"-"+l[n[a+8]]+l[n[a+9]]+"-"+l[n[a+10]]+l[n[a+11]]+l[n[a+12]]+l[n[a+13]]+l[n[a+14]]+l[n[a+15]]).toLowerCase()}var h,W=new Uint8Array(16);function $(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(W)}var L=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const N={randomUUID:L};function f(n,a,t){if(N.randomUUID&&!a&&!n)return N.randomUUID();n=n||{};var o=n.random||(n.rng||$)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,V(o)}function q({auth:n,table:a}){const{data:t,setData:o,post:b,processing:C,errors:u}=D({table_id:a==null?void 0:a.id,table_slug:a==null?void 0:a.slug,items:[{id:f(),name:"",slug:"",position:1,sortable:!1,editable:!1,input_type:"",options:[]}]}),I=()=>{const s={id:f(),name:"",slug:"",position:t.items.length+1,sortable:!1,editable:!1,input_type:"",options:[]};o({...t,items:[...t.items,s]})},w=s=>{const i=t==null?void 0:t.items.filter(r=>r.id!==s);o({...t,items:i})},d=(s,i,r)=>{const S=t.items.map(p=>{if(p.id===s){const{name:j,value:U,checked:T}=i.target;return r?{...p,[j]:T}:{...p,[j]:U}}return p});o("items",S)},k=()=>{console.log(t),b(route("table.wizard.column.store"),{preserveScroll:!0,onSuccess:()=>{reset()}})};return e.jsxs(R,{user:n==null?void 0:n.user,children:[e.jsx(_,{title:"Table Wizard"}),e.jsx("div",{className:"top-section p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"left",children:[e.jsx(m.Typography,{variant:"h3",className:"tracking-tight",children:"Self Service Table Wizard"}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(v,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(v,{href:route("table.wizard.index"),children:"Self Service Table Wizard"})})]})]})})}),e.jsx("div",{className:"content mt-6 relative border-t",children:e.jsxs("div",{className:"container mx-auto pt-12",children:[e.jsxs(m.Typography,{variant:"h2",color:"gray",children:[" Add Columns for  ",a==null?void 0:a.title,"."]}),e.jsx("div",{className:"column-items mb-6",children:t==null?void 0:t.items.map((s,i)=>e.jsxs("div",{className:"grid grid-cols-4 gap-4 relative mt-6 border p-4 rounded-md",children:[e.jsxs("div",{className:"form-item",children:[e.jsx(c,{value:"Column Name",className:"mb-1"}),e.jsx(y,{className:"w-full text-sm",value:s.name,name:"name",onChange:r=>{d(s.id,r,!1)}}),e.jsx(x,{message:u[`items.${i}.name`],className:"mt-1 font-medium tracking-tight"})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(c,{value:"Column Slug",className:"mb-1"}),e.jsx(y,{className:"w-full text-sm",value:s.slug,name:"slug",onChange:r=>{d(s.id,r,!1)}}),e.jsx(x,{message:u[`items.${i}.slug`],className:"mt-1 font-medium tracking-tight"})]}),e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex gap-4 justify-evenly",children:[e.jsxs("div",{className:"form-item",children:[e.jsx(c,{value:"Sortable",className:"mb-1"}),e.jsx(m.Checkbox,{defaultChecked:s==null?void 0:s.sortable,className:"h-6 w-6",name:"sortable",onChange:r=>{d(s.id,r,!0)}})]}),e.jsxs("div",{className:"form-item",children:[e.jsx(c,{value:"Editable",className:"mb-1"}),e.jsx(m.Checkbox,{defaultChecked:s==null?void 0:s.editable,className:"h-6 w-6",name:"editable",onChange:r=>{d(s.id,r,!0)}})]})]}),s.editable&&e.jsxs("div",{className:"form-item",children:[e.jsx(c,{value:"Input Type",className:"mb-1"}),e.jsxs("select",{className:"w-full text-sm rounded-md border-gray-300 text-gray-500 font-normal",value:s==null?void 0:s.input_type,name:"input_type",onChange:r=>{d(s.id,r,!1)},children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"text",children:"Text"}),e.jsx("option",{value:"date",children:"Date"}),e.jsx("option",{value:"dropdown",children:"Dropdown"}),e.jsx("option",{value:"upload",children:"Upload"})]}),e.jsx(x,{message:u[`items.${i}.input_type`],className:"mt-1 font-medium tracking-tight"})]})]})}),s.input_type==="dropdown"&&e.jsxs("div",{className:"form-item col-span-4",children:[e.jsx(c,{value:"Options seprated by (|)",className:"mb-1"}),e.jsx("textarea",{className:"w-full border-gray-300 rounded-md text-sm",rows:6,value:s==null?void 0:s.options,name:"options",onChange:r=>{d(s.id,r,!1)}}),e.jsx(x,{message:u[`items.${i}.options`],className:"mt-1 font-medium tracking-tight"})]}),e.jsx("div",{className:"add-icon absolute -right-10 top-6",children:i===(t==null?void 0:t.items.length)-1?e.jsx("button",{onClick:I,children:e.jsx(E,{})}):e.jsx("button",{onClick:()=>{w(s.id)},children:e.jsx(A,{})})})]},i))}),e.jsx("div",{className:"form-item flex justify-end",children:e.jsx(m.Button,{variant:"gradient",color:"green",onClick:k,className:"capitalize",loading:C,children:"Submit"})})]})})]})}export{q as default};