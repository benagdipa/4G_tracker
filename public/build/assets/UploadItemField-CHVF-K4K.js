import{r as U,W as y,j as s}from"./app-DuVyQ3f3.js";import{r as t}from"./index-ClccL2zE.js";import{u as O,F as x,I as S}from"./index-CbSERLGd.js";import"./floating-ui.dom-BJX5GPEt.js";import"./createLucideIcon-DzoGniTu.js";function E({siteId:u,name:f,value:l,single:m=!1}){const d=()=>j(!h),[h,j]=U.useState(!1),{data:n,setData:g,post:N,processing:F,reset:b}=y({site_id:u,field_name:f,artifacts:[]}),{getRootProps:v,getInputProps:D}=O({onDrop:r=>{g("artifacts",[...n.artifacts,...r.map(i=>Object.assign(i,{preview:URL.createObjectURL(i)}))])}}),z=n==null?void 0:n.artifacts.map(r=>s.jsxs("li",{children:[r.path," - ",r.size," bytes"]},r.path)),C=()=>{N(route("site.field.name.update.artifacts"),{preserveScroll:!0,onSuccess:()=>{b(),j(!1)}})},I=({files:r})=>{if(r){const i=JSON.parse(r),o=e=>e.split(".").pop(),a=e=>{const c=e.split("/");let p=c[c.length-1];return p=p.replace(/^\d+_/,""),p};return s.jsx("div",{className:"flex ps-2",children:i.map((e,c)=>s.jsxs("div",{className:`${m?"pt-2":""}`,children:[o(e)==="csv"&&s.jsx(t.Tooltip,{content:a(e),children:s.jsx(x,{size:18})}),o(e)==="xlsx"&&s.jsx(t.Tooltip,{content:a(e),children:s.jsx(x,{size:18})}),o(e)==="xls"&&s.jsx(t.Tooltip,{content:a(e),children:s.jsx(x,{size:18})}),o(e)==="txt"&&s.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),o(e)==="pdf"&&s.jsx(t.Tooltip,{content:a(e),children:s.jsx(S,{})})]},c))})}};return s.jsxs("div",{className:"w-full h-full",children:[!m&&s.jsx("button",{className:"font-medium text-[12px] opacity-0",onClick:d,children:"Uplaod"}),l&&s.jsx(I,{files:l||""}),s.jsxs(t.Dialog,{open:h,handler:d,size:"xs",children:[s.jsx(t.DialogHeader,{children:"Upload Artifacts"}),s.jsxs(t.DialogBody,{children:[s.jsx("div",{className:"border-dashed border py-12 text-sm text-center font-medium rounded-md border-gray-300",children:s.jsxs("div",{...v({className:"dropzone"}),children:[s.jsx("input",{...D()}),s.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]})}),(n==null?void 0:n.artifacts.length)>0&&s.jsxs("aside",{children:[s.jsx("h4",{className:"font-sm font-semibold",children:"Files"}),s.jsx("ul",{className:"text-[12px] font-normal",children:z})]})]}),s.jsxs(t.DialogFooter,{children:[s.jsx(t.Button,{variant:"text",color:"red",onClick:d,className:"mr-1",children:s.jsx("span",{children:"Cancel"})}),s.jsx(t.Button,{variant:"gradient",color:"green",onClick:C,loading:F,children:s.jsx("span",{children:"Confirm"})})]})]})]})}export{E as default};