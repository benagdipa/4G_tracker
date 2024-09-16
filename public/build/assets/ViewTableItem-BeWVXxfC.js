import{q as R,r as v,j as e,R as B,y as H,W as D,Y as L,a as E}from"./app-DzalHcVU.js";import{c as W,_ as J,A as q,C as Y}from"./AuthenticatedLayout-DdSPs-UH.js";import{r as n}from"./index-D4XrngbZ.js";import{T as y}from"./TextInput-CxoPIxQU.js";import{I as O}from"./InputLabel-wtpN6Dbq.js";import{I as P}from"./InputError-CQQuqtUr.js";import{M as G,T as V,D as $,S as K,C as Q,P as X}from"./react-datepicker-gxwmPFVC.js";import{u as Z,F as A,I as ee}from"./index-DDCp2-z9.js";import"./transition-C5FwFN3G.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=W("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);function ne({mappingDialog:r,setMappingDialog:s,columns:a,mappingData:l}){const{id:c,slug:o}=R().props.entity,x=a==null?void 0:a.reduce((m,S)=>(m[S.slug]="",m),{}),[d,h]=v.useState({...x,file_path:l?l==null?void 0:l.filePath:"",entity_id:c}),[b,N]=v.useState({}),[i,u]=v.useState(!1),[t,g]=v.useState(""),[j,C]=v.useState(""),k=()=>s(!r),f=(m,S)=>{h(I=>({...I,[m]:S}))};v.useEffect(()=>{f("file_path",l!=null&&l.filePath?l==null?void 0:l.filePath:"")},[l]);const p=async m=>{var I,z,F,T,M;m.preventDefault();let S={};if(Object.keys(d).forEach(w=>{d[w]||(S[w]="This field is required.")}),N(S),Object.keys(S).length>0){console.log(S);return}try{u(!0);const w=await axios.post(route("table.map.save"),d);w!=null&&w.data&&(C((z=(I=w==null?void 0:w.data)==null?void 0:I.success)==null?void 0:z.message),setTimeout(()=>{s(!1),C(""),g("")},3e3),H.visit(route("view.table.item",o)))}catch(w){console.log("error:",w),g(`${(M=(T=(F=w==null?void 0:w.response)==null?void 0:F.data)==null?void 0:T.error)==null?void 0:M.message}`)}finally{u(!1)}};return e.jsx(B.Fragment,{children:e.jsxs(n.Dialog,{open:r,size:"xs",children:[e.jsx(n.DialogHeader,{children:"CSV Mapping"}),e.jsx(n.DialogBody,{className:"px-6 overflow-scroll",children:(a==null?void 0:a.length)>0&&(a==null?void 0:a.map((m,S)=>{var I;return e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(O,{value:m==null?void 0:m.name,className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:d[m==null?void 0:m.slug],onChange:z=>f(m==null?void 0:m.slug,z.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((I=l==null?void 0:l.header)==null?void 0:I.length)>0&&(l==null?void 0:l.header.map((z,F)=>e.jsx("option",{value:z,children:z},F)))]}),e.jsx(P,{message:b[m==null?void 0:m.slug],className:"!text-[12px] font-medium mt-1"})]})]})},S)}))}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",onClick:k,className:"mr-1 capitalize",disabled:i,children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:p,loading:i,children:e.jsx("span",{children:"Confirm"})})]})]})})}function re({columns:r}){const s=v.useRef(null),[a,l]=v.useState(!1),[c,o]=v.useState(""),x=h=>{s.current.click()},d=async h=>{var N,i,u;const b=new FormData;b.append("import_file",h.target.files[0]);try{const t=await axios.post(route("table.import.csv"),b);t!=null&&t.data&&(o(t==null?void 0:t.data),l(!0))}catch(t){J.error(`${(u=(i=(N=t==null?void 0:t.response)==null?void 0:N.data)==null?void 0:i.error)==null?void 0:u.message}`)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"import-type-field",children:[e.jsx(n.Button,{variant:"gradient",className:"capitalize",size:"sm",onClick:x,children:"Import from CSV"}),e.jsx("input",{type:"file",onChange:d,ref:s,style:{display:"none"}})]}),e.jsx(ne,{mappingDialog:a,setMappingDialog:l,mappingData:c,columns:r})]})}function le({addColumnDialog:r,setAddColumnDialog:s}){var N;const{id:a}=(N=R().props)==null?void 0:N.entity,{data:l,setData:c,post:o,processing:x,errors:d,reset:h}=D({entity_id:a,name:"",slug:"",sortable:!1,editable:!1,input_type:"",options:""}),b=i=>{i.preventDefault(),o(route("table.add.column"),{onSuccess:()=>{s(!1),h()}})};return e.jsxs(n.Dialog,{open:r,size:"xs",children:[e.jsx(n.DialogHeader,{children:"Add New Column"}),e.jsxs(n.DialogBody,{children:[e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(O,{value:"Column Name",className:"mb-1"}),e.jsx(y,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column Name...",value:l.name,onChange:i=>c("name",i.target.value)}),e.jsx(P,{message:d.name,className:"text-sm font-medium"})]}),e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(O,{value:"Column Slug",className:"mb-1"}),e.jsx(y,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column slug...",value:l.slug,onChange:i=>c("slug",i.target.value)}),e.jsx(P,{message:d.slug,className:"text-sm font-medium"})]}),e.jsx("div",{className:"form-item",children:e.jsx(n.Checkbox,{label:e.jsx(n.Typography,{className:"text-sm font-medium pl-2",children:"Sortable"}),defaultChecked:l.sortable,onChange:i=>c("sortable",i.target.checked)})}),e.jsx("div",{className:"form-item",children:e.jsx(n.Checkbox,{label:e.jsx(n.Typography,{className:"text-sm font-medium pl-2",children:"Editable"}),defaultChecked:l.editable,onChange:i=>c("editable",i.target.checked)})}),(l==null?void 0:l.editable)&&e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(O,{value:"Column Input Type",className:"mb-1"}),e.jsxs("select",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-medium text-gray-600 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",value:l.input_type,onChange:i=>c("input_type",i.target.value),children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"text",children:"Text"}),e.jsx("option",{value:"date",children:"Date"}),e.jsx("option",{value:"dropdown",children:"DropDown"})]}),e.jsx(P,{message:d.input_type,className:"text-sm font-medium"})]}),(l==null?void 0:l.input_type)==="dropdown"&&e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(O,{value:"Dropdown Options seprated by (|)",className:"mb-1"}),e.jsx("textarea",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-normal focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",placeholder:"Dropdown Options seprated by | ...",rows:4,value:l.options,onChange:i=>c("options",i.target.value)}),e.jsx(P,{message:d.options,className:"text-sm font-medium"})]})]}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",onClick:()=>s(!r),className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{variant:"gradient",color:"green",onClick:i=>b(i),className:"capitalize",loading:x,children:e.jsx("span",{children:"Submit"})})]})]})}function ae({hideColumnDialog:r,setHideColumnDialog:s,columns:a}){const l=()=>s(!r),{data:c,setData:o,post:x,processing:d,errors:h,reset:b}=D({items:[],unHiddenItems:[]}),N=u=>{const{value:t,checked:g}=u.target;g?(o(j=>({...j,items:[...j.items,parseInt(t)]})),o(j=>({...j,unHiddenItems:j.unHiddenItems.filter(C=>C!==parseInt(t))}))):(o(j=>({...j,items:j.items.filter(C=>C!==parseInt(t))})),o(j=>({...j,unHiddenItems:[...j.unHiddenItems,parseInt(t)]})))},i=u=>{u.preventDefault(),x(route("table.hide.column"),{onSuccess:()=>{s(!1),b()}})};return e.jsx(e.Fragment,{children:e.jsxs(n.Dialog,{open:r,size:"xs",children:[e.jsx(n.DialogHeader,{children:"Hide Column"}),e.jsx(n.DialogBody,{children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to hide"}),e.jsx("div",{className:"form-item grid grid-cols-2",children:(a==null?void 0:a.length)>0&&a.map((u,t)=>e.jsx(B.Fragment,{children:e.jsx(n.Checkbox,{label:e.jsx(n.Typography,{color:"blue-gray",className:"font-medium text-sm",children:u==null?void 0:u.name}),value:u==null?void 0:u.id,onChange:g=>N(g),defaultChecked:u==null?void 0:u.hidden})},t))})]})}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",onClick:l,className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:u=>{i(u)},loading:d,children:e.jsx("span",{children:"Confirm"})})]})]})})}function te({renameColumnDialog:r,setRenameColumnDialog:s,columns:a}){var i,u;const{data:l,setData:c,post:o,processing:x,errors:d,reset:h}=D({items:a}),b=(t,g)=>{c(j=>({...j,items:j.items.map(C=>C.slug===t?{...C,name:g}:C)}))},N=t=>{t.preventDefault(),o(route("table.rename.column"),{onSuccess:()=>{s(!1),h()}})};return e.jsxs(n.Dialog,{open:r,size:"xs",children:[e.jsx(n.DialogHeader,{children:"Rename Columns"}),e.jsx(n.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:((i=l==null?void 0:l.items)==null?void 0:i.length)>0&&((u=l==null?void 0:l.items)==null?void 0:u.map((t,g)=>e.jsx("div",{className:"form-item mb-2",children:e.jsx(y,{className:"w-full text-sm font-medium text-gray-600",value:t!=null&&t.alternative_name?t==null?void 0:t.alternative_name:t==null?void 0:t.name,onChange:j=>b(t==null?void 0:t.slug,j.target.value)})},g)))})}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>s(!1),children:"Cancel"}),e.jsx(n.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:t=>N(t),loading:x,children:"Submit"})]})]})}function oe({deleteColumnDialog:r,setDeleteColumnDialog:s,columns:a}){const{data:l,setData:c,post:o,processing:x,errors:d,reset:h}=D({items:[]}),b=(i,u)=>{const t=i.target.checked;c(g=>t?{...g,items:[...g.items,u]}:{...g,items:g.items.filter(j=>j!==u)})},N=i=>{i.preventDefault(),o(route("table.delete.column"),{onSuccess:()=>{s(!1),h()}})};return e.jsxs(n.Dialog,{size:"xs",open:r,children:[e.jsx(n.DialogHeader,{children:"Delete Columns"}),e.jsx(n.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to delete."}),e.jsx("div",{className:"grid grid-cols-2",children:(a==null?void 0:a.length)>0&&a.map((i,u)=>e.jsx(B.Fragment,{children:e.jsx(n.Checkbox,{containerProps:{className:"py-3"},className:"w-5 h-5 rounded-md",label:e.jsx(n.Typography,{color:"blue-gray",className:"font-medium text-sm",children:i!=null&&i.alternative_name?i==null?void 0:i.alternative_name:i==null?void 0:i.name}),onChange:t=>{b(t,i==null?void 0:i.id)}})},u))})]})}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",onClick:()=>s(!1),children:"Cancel"}),e.jsx(n.Button,{variant:"text",color:"red",onClick:i=>N(i),children:"Delete"})]})]})}function ce({arrangeColumnDialog:r,setArrangeColumnDialog:s,columns:a}){const[l,c]=v.useState([]),[o,x]=v.useState(null),{data:d,setData:h,post:b,processing:N,errors:i,reset:u}=D({items:[]});v.useEffect(()=>{r&&c(a)},[r]);const t=(f,p)=>{x(p)},g=()=>{x(null)},j=f=>{f.preventDefault()},C=(f,p)=>{if(!o)return;const m=l.indexOf(o),S=l.indexOf(p);if(m!==-1&&S!==-1){const z=[...(w=>w.map((_,U)=>({..._,position:U+1})))(l)],[F]=z.splice(m,1);z.splice(S,0,F);const T=z.map((w,_)=>({...w,position:_+1}));c(T);const M=T.map(w=>({slug:w.slug,position:w.position}));h("items",M)}},k=f=>{f.preventDefault(),b(route("table.rearrange.column"),{onSuccess:()=>{s(!1),u()}})};return e.jsxs(n.Dialog,{open:r,size:"xs",children:[e.jsx(n.DialogHeader,{children:"Re-arrange Columns"}),e.jsxs(n.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:[e.jsx("p",{className:"text-[#333] font-semibold mb-3",children:"Please drag and drop the column you want to arrange."}),e.jsx("div",{className:"draggable-wrapper border rounded-md py-2",children:(l==null?void 0:l.length)>0&&(l==null?void 0:l.map((f,p)=>e.jsx("div",{className:"text-gray-600 font-medium py-1 px-2 text-sm  cursor-move",draggable:"true",onDragStart:m=>t(m,f),onDragEnd:g,onDragOver:j,onDrop:m=>C(m,f),children:e.jsxs("div",{className:"flex items-center gap-3 border py-2 px-2 rounded-md ",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx(G,{strokeWidth:1.5,size:18})}),f!=null&&f.alternative_name?f==null?void 0:f.alternative_name:f.name]})},p)))})]}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>s(!1),children:"cancel"}),e.jsx(n.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:f=>k(f),loading:N,children:"Submit"})]})]})}function ie({columns:r}){const[s,a]=v.useState(!1),[l,c]=v.useState(!1),[o,x]=v.useState(!1),[d,h]=v.useState(!1),[b,N]=v.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(n.Menu,{children:[e.jsx(n.MenuHandler,{children:e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize",children:"Column Options"})}),e.jsxs(n.MenuList,{className:"font-semibold text-gray-600",children:[e.jsx(n.MenuItem,{onClick:()=>{a(!0)},children:"Add Column"}),e.jsx(n.MenuItem,{onClick:()=>{c(!0)},children:"Show/Hide Columns"}),e.jsx(n.MenuItem,{onClick:()=>{x(!0)},children:"Rename Columns"}),e.jsx(n.MenuItem,{onClick:()=>{N(!0)},children:"Rearrange Columns"}),e.jsx(n.MenuItem,{className:"text-red-500",onClick:()=>{h(!0)},children:"Delete Columns"})]})]}),e.jsx(le,{addColumnDialog:s,setAddColumnDialog:a}),e.jsx(ae,{columns:r,hideColumnDialog:l,setHideColumnDialog:c}),e.jsx(te,{renameColumnDialog:o,setRenameColumnDialog:x,columns:r}),e.jsx(oe,{deleteColumnDialog:d,setDeleteColumnDialog:h,columns:r}),e.jsx(ce,{arrangeColumnDialog:b,setArrangeColumnDialog:N,columns:r})]})}function de({entity_id:r}){const{post:s,processing:a,reset:l}=D({entity_id:r}),c=()=>{r&&s(route("table.restore.column"),{preserveScroll:!0,onSuccess:()=>{l()}})};return e.jsx("div",{className:"restore-table",children:e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize",loading:a,onClick:c,children:"Restore Table"})})}function ue({deleteTableDialog:r,setDeleteTableDialog:s,tableId:a}){const{processing:l,delete:c}=D(),o=()=>{a&&c(route("table.delete",a),{preserveScroll:!0,onSuccess:()=>{H.visit(route("dashboard"))}})};return e.jsx(e.Fragment,{children:e.jsxs(n.Dialog,{open:r,size:"xs",className:"rounded py-5",children:[e.jsxs(n.DialogBody,{children:[e.jsx(n.Typography,{variant:"h4",className:"text-center",color:"black",children:"Are you sure?"}),e.jsx("p",{className:"font-medium text-center",children:"This step is permanent and cannot be undone."})]}),e.jsxs(n.DialogFooter,{className:"justify-center",children:[e.jsx(n.Button,{variant:"gradient",className:"mr-1",onClick:()=>{s(!1)},disabled:l,children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{variant:"gradient",color:"red",onClick:o,loading:l,children:e.jsx("span",{children:"Confirm"})})]})]})})}function xe({valueId:r}){var h;const{slug:s}=(h=R().props)==null?void 0:h.entity,{processing:a,delete:l}=D(),[c,o]=v.useState(!1),x={onClick:()=>o(!c)},d=()=>{r&&l(route("table.delete.row",r),{preserveScroll:!0,onSuccess:()=>{H.visit(route("view.table.item",s))}})};return e.jsx(B.Fragment,{children:e.jsxs(n.Popover,{placement:"top-end",open:c,handler:o,children:[e.jsx(n.PopoverHandler,{...x,children:e.jsx(n.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:()=>setOpen(!0),children:e.jsx(V,{size:14})})}),e.jsxs(n.PopoverContent,{...x,className:"px-3",children:[e.jsx(n.Typography,{variant:"h6",className:"text-center",children:"Are you sure?"}),e.jsx(n.Typography,{variant:"small",className:"font-normal",children:"This cannot be reverted back."}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx(n.Button,{variant:"text",color:"red",size:"sm",className:"capitalize rounded",onClick:()=>o(!1),disabled:a,children:"Cancel"}),e.jsx(n.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize rounded",onClick:d,loading:a,children:"Delete"})]})]})]})})}function me({changed:r,handleOnSave:s}){return e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",disabled:!r,onClick:s,children:"Save"})}function he({value:r,handleItemChange:s,headerSlug:a}){const[l,c]=v.useState(r||""),o=x=>{c(x.target.value),s(a,x.target.value)};return e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{className:"border-none focus:ring-0 bg-transparent !shadow-none text-[12px] font-medium w-full resize-none",value:l,rows:1,onChange:x=>{o(x)}})})}function pe({value:r,handleItemChange:s,headerSlug:a}){function l(d){return!isNaN(Date.parse(d))}const[c,o]=v.useState(l(r)?r:""),x=d=>{o(d),s(a,d)};return e.jsx("div",{className:"w-full h-full",children:e.jsx($,{selected:c,onChange:d=>x(d),className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium",dateFormat:"dd/MM/yyyy"})})}function ge({value:r,handleItemChange:s,headerSlug:a,options:l}){const[c,o]=v.useState(r||""),x=h=>{o(h),s(a,h)},d=JSON.parse(l);return e.jsx("div",{className:"w-full h-full min-w-32",children:e.jsxs("select",{value:c,onChange:h=>{x(h.target.value)},className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium px-1",children:[e.jsx("option",{value:"",children:"Select"}),(d==null?void 0:d.length)>0&&d.map((h,b)=>e.jsx("option",{value:h,children:h},b))]})})}function je({value:r,headerSlug:s,columnId:a}){const[l,c]=v.useState(!1),o=()=>c(!l),{data:x,setData:d,post:h,processing:b,reset:N}=D({columnId:a,headerSlug:s,artifacts:[]}),{getRootProps:i,getInputProps:u}=Z({onDrop:C=>{d("artifacts",[...x.artifacts,...C.map(k=>Object.assign(k,{preview:URL.createObjectURL(k)}))])}}),t=x==null?void 0:x.artifacts.map(C=>e.jsxs("li",{children:[C.path," - ",C.size," bytes"]},C.path)),g=()=>{h(route("table.upload.row.artifacts",a),{preserveScroll:!0,onSuccess:()=>{N(),c(!1)}})},j=({files:C})=>{if(C){const k=JSON.parse(C),f=m=>m.split(".").pop(),p=m=>{const S=m.split("/");let I=S[S.length-1];return I=I.replace(/^\d+_/,""),I};return e.jsx("div",{className:"flex ps-2",children:k.map((m,S)=>e.jsxs("div",{className:"my-2",children:[f(m)==="csv"&&e.jsx(n.Tooltip,{content:p(m),children:e.jsx(A,{size:18})}),f(m)==="xlsx"&&e.jsx(n.Tooltip,{content:p(m),children:e.jsx(A,{size:18})}),f(m)==="xls"&&e.jsx(n.Tooltip,{content:p(m),children:e.jsx(A,{size:18})}),f(m)==="txt"&&e.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),f(m)==="pdf"&&e.jsx(n.Tooltip,{content:p(m),children:e.jsx(ee,{})})]},S))})}};return e.jsxs("div",{className:"w-full h-full flex items-center",children:[e.jsx("button",{className:"font-medium text-[12px] mt-2 border py-1 px-2 rounded",onClick:o,children:"Uplaod"}),r&&e.jsx(j,{files:r||""}),e.jsxs(n.Dialog,{open:l,handler:o,size:"xs",children:[e.jsx(n.DialogHeader,{children:"Upload Artifacts"}),e.jsxs(n.DialogBody,{children:[e.jsx("div",{className:"border-dashed border py-12 text-sm text-center font-medium rounded-md border-gray-300",children:e.jsxs("div",{...i({className:"dropzone"}),children:[e.jsx("input",{...u()}),e.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]})}),(x==null?void 0:x.artifacts.length)>0&&e.jsxs("aside",{children:[e.jsx("h4",{className:"font-sm font-semibold",children:"Files"}),e.jsx("ul",{className:"text-[12px] font-normal",children:t})]})]}),e.jsxs(n.DialogFooter,{children:[e.jsx(n.Button,{variant:"text",color:"red",onClick:o,className:"mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{variant:"gradient",color:"green",onClick:g,loading:b,children:e.jsx("span",{children:"Confirm"})})]})]})]})}const fe={text:he,date:pe,dropdown:ge,upload:je};function ve({header:r,itemValue:s,handleItemChange:a,columnId:l}){const c=fe[r==null?void 0:r.input_type];return e.jsx(B.Fragment,{children:e.jsx(c,{value:s,handleItemChange:a,headerSlug:r.slug,options:r==null?void 0:r.input_options,columnId:l})})}function be({columnId:r,header:s,itemValue:a,handleItemChange:l}){return e.jsx(B.Fragment,{children:e.jsx("td",{className:`border-l h-10 text-[12px] font-medium ps-2 ${s!=null&&s.hidden?"hidden":""}`,children:s!=null&&s.editable?e.jsx(ve,{header:s,itemValue:a,handleItemChange:l,columnId:r}):a})})}function Ne({headers:r,values:s,valueId:a}){const[l,c]=v.useState(!1),{data:o,setData:x,post:d}=D({changedItems:[...s]});function h(u,t){for(let g=0;g<u.length;g++)if(t in u[g])return u[g][t];return""}function b(u,t){for(let g=0;g<t.length;g++)if(u in t[g])return g;return-1}const N=(u,t)=>{let g=o.changedItems,j=b(u,g);j!==-1&&(g[j][u]=t,x("changedItems",g),c(!0))},i=async()=>{d(route("table.save.row",a),{onSuccess:()=>{c(!1)}})};return e.jsx(B.Fragment,{children:e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[r.length&&r.map((u,t)=>e.jsx(be,{columnId:a,header:u,itemValue:h(s,u.slug),handleItemChange:N},t)),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(me,{changed:l,handleOnSave:i}),e.jsx(xe,{valueId:a})]})})]})})}function Ce({headerSlug:r,handleOnChangeItem:s}){const[a,l]=v.useState(""),c=o=>{l(o.target.value),s(r,o.target.value)};return e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{className:"border-none focus:ring-0 bg-transparent !shadow-none text-[12px] font-medium w-full resize-none",value:a,rows:1,autoFocus:!0,onChange:o=>{c(o)}})})}function we({headerSlug:r,handleOnChangeItem:s}){const[a,l]=v.useState(""),c=o=>{l(o),s(r,o)};return e.jsx("div",{className:"w-full h-full",children:e.jsx($,{showIcon:!0,selected:a,onChange:o=>c(o),className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium",dateFormat:"dd/MM/yyyy"})})}function Se({headerSlug:r,handleOnChangeItem:s,options:a}){const[l,c]=v.useState(""),o=d=>{c(d),s(r,d)},x=JSON.parse(a);return e.jsx("div",{className:"w-full h-full min-w-32",children:e.jsxs("select",{value:l,onChange:d=>{o(d.target.value)},className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium px-1",children:[e.jsx("option",{value:"",children:"Select"}),(x==null?void 0:x.length)>0&&x.map((d,h)=>e.jsx("option",{value:d,children:d},h))]})})}const Ie=()=>e.jsx(e.Fragment,{}),ke={text:Ce,date:we,dropdown:Se,none:Ie};function ze({item:r,handleOnChangeItem:s}){const a=ke[(r==null?void 0:r.input_type)==="upload"?"none":r==null?void 0:r.input_type];return e.jsx(a,{headerSlug:r.slug,options:r==null?void 0:r.input_options,handleOnChangeItem:s})}function De({tableHeader:r,setAddNewRow:s}){const{entity:a}=R().props,{data:l,setData:c,post:o}=D({newItem:[],entity_id:a==null?void 0:a.id}),x=(h,b)=>{c("newItem",{...l.newItem,[h]:b})},d=()=>{o(route("table.add.row"),{onSuccess:()=>{s(!1),H.visit(route("view.table.item",a==null?void 0:a.slug))}})};return e.jsxs("tr",{className:"border-b",children:[(r==null?void 0:r.length)>0&&(r==null?void 0:r.map((h,b)=>e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:e.jsx(ze,{item:h,handleOnChangeItem:x})},b))),e.jsx("td",{className:"ps-2 border-l",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",onClick:d,children:"Save"}),e.jsx(n.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:()=>s(!1),children:e.jsx(V,{size:14})})]})})]})}function _e({auth:r,entity:s}){var N,i,u,t,g,j,C,k,f;const{role:a}=r,[l,c]=v.useState(!1),[o,x]=v.useState(10),[d,h]=v.useState(!1),b=p=>{x(p)};return e.jsxs(q,{user:r==null?void 0:r.user,children:[e.jsx(L,{title:s==null?void 0:s.title}),e.jsx("div",{className:"top-section p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"",children:[e.jsx(n.Typography,{variant:"h3",className:"tracking-tight",children:s==null?void 0:s.title}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(E,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(E,{href:route("view.table.item",s==null?void 0:s.slug),children:s==null?void 0:s.title})})]})]}),e.jsxs("div",{children:[e.jsxs(n.Menu,{children:[e.jsx(n.MenuHandler,{children:e.jsx(n.Button,{variant:"text",size:"sm",children:e.jsx(se,{size:18,color:"gray"})})}),e.jsx(n.MenuList,{className:"font-semibold text-gray-600 max-w-32",children:e.jsx(n.MenuItem,{onClick:()=>{c(!0)},className:"text-red-500 hover:!text-red-500",children:"Delete"})})]}),e.jsx(ue,{deleteTableDialog:l,setDeleteTableDialog:c,tableId:s==null?void 0:s.id})]})]})}),(s==null?void 0:s.attributes.length)===0&&e.jsxs("div",{className:"text-center border rounded py-6",children:[e.jsx(n.Typography,{variant:"h4",color:"blue-gray",className:"mb-3",children:"It seems you haven't created any columns yet."}),e.jsx(E,{href:route("table.wizard.column.index",s==null?void 0:s.id),children:e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize",children:"Create Column"})})]}),(s==null?void 0:s.attributes.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"filter-wrapper md:px-4",children:e.jsxs("div",{className:"flex filter-details justify-end gap-2",children:[e.jsxs("div",{className:"search-wrapper w-1/6 flex relative",children:[e.jsx(y,{placeholder:"Search...",className:"w-full text-sm rounded-md rounded-r-none border-r-0 focus:ring-0 h-8"}),e.jsx("div",{className:"search-icon",children:e.jsx(n.IconButton,{size:"sm",className:"rounded-l-none",children:e.jsx(K,{color:"white",size:18})})})]}),a==="super-admin"&&e.jsxs(B.Fragment,{children:[e.jsx(re,{columns:s==null?void 0:s.attributes}),e.jsx(ie,{columns:s==null?void 0:s.attributes}),e.jsx(de,{entity_id:s==null?void 0:s.id})]})]})}),e.jsx("div",{className:"content mt-6",children:e.jsxs(n.Card,{className:"h-full w-full rounded-none",children:[e.jsx("div",{className:"overflow-x-auto overflow-hidden",children:e.jsxs("table",{className:"w-full table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(N=s==null?void 0:s.attributes)==null?void 0:N.map((p,m)=>e.jsx("th",{className:`border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer ${p!=null&&p.hidden?"hidden":""}`,children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx(n.Typography,{variant:"small",className:"leading-none text-gray-800 font-medium text-sm",children:p!=null&&p.alternative_name?p==null?void 0:p.alternative_name:p.name}),(p==null?void 0:p.sortable)&&e.jsxs("div",{className:"relative mt-1",children:[e.jsx("span",{className:"absolute -top-2 right-0 hover:bg-blue-gray-100 rounded-sm",children:e.jsx(Q,{size:12,strokeWidth:2,onClick:()=>{sortData(p.slug,"asc")}})}),e.jsx("span",{className:"absolute -bottom-1 right-0 hover:bg-blue-gray-100 rounded-sm",children:e.jsx(Y,{size:12,strokeWidth:2,onClick:()=>{sortData(p.slug,"desc")}})})]})]})},m)),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer"})]})}),e.jsxs("tbody",{children:[((u=(i=s==null?void 0:s.values)==null?void 0:i.data)==null?void 0:u.length)>0&&((g=(t=s==null?void 0:s.values)==null?void 0:t.data)==null?void 0:g.map((p,m)=>{const S=JSON.parse(p==null?void 0:p.values),I=s==null?void 0:s.attributes;return e.jsx(Ne,{headers:I,values:S,valueId:p==null?void 0:p.id},m)})),d&&e.jsx(De,{tableHeader:s==null?void 0:s.attributes,setAddNewRow:h})]})]})}),e.jsxs("div",{className:"pagination flex justify-between items-center",children:[e.jsx("div",{className:"px-4",children:e.jsx(n.Button,{variant:"gradient",size:"sm",className:"capitalize rounded",onClick:()=>{h(!0)},children:"Add New Row"})}),e.jsxs("div",{className:"md:flex grid justify-start md:justify-end items-center pt-6 mb-8 gap-3 px-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Rows per Page"}),e.jsxs("select",{className:"rounded-md text-sm font-medium border-gray-400 focus:ring-0 py-2",value:o,onChange:p=>{b(p.target.value)},children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"20",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"all",children:"All"})]})]}),e.jsx("div",{className:"text-sm font-medium",children:`${(j=s==null?void 0:s.values)==null?void 0:j.from}-${(C=s==null?void 0:s.values)==null?void 0:C.to} of ${(k=s==null?void 0:s.values)==null?void 0:k.total} Records`}),e.jsx(X,{links:(f=s==null?void 0:s.values)==null?void 0:f.links,perPage:o})]})]})]})})]})]})}export{_e as default};