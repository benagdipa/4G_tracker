import{r as j,j as e,R as K,b as re,y as G,W as V,Y as ue,a as le}from"./app-DCzs6V2X.js";import{r as t}from"./index-BhtO_dXz.js";import{_ as Q,A as xe,C as he}from"./AuthenticatedLayout-CQZoIa5e.js";import{M as me,D as ae,T as ie,S as fe,C as je,P as pe}from"./react-datepicker-DxixUcoB.js";import{T as te}from"./TextInput-DBtXpBta.js";import{I as H}from"./InputLabel-CGy9uf-r.js";import{I as R}from"./InputError-BYZ1E1DP.js";import{R as ye,E as ve}from"./RestoreTable-B2Ss8kI9.js";import{U as be}from"./UploadItem-Cyi_CdlH.js";import{u as Ne,F as ne,I as ge}from"./index-BI5OuR6P.js";import"./transition-MKAVkSnk.js";function we({mappingDialog:n,setMappingDialog:a,mappingData:s,setBatchId:c}){var I,B,z,T,P,F,$,L,U,q,J,A,W;const i=()=>a(!n),[o,u]=j.useState({file_path:s?s==null?void 0:s.filePath:"",site_name:"",cell_name:"",lon:"",lat:"",bb_type:"",rru_type:"",antenna_type:"",frequency:"",pci:"",azimuth:"",height:"",last_epo:"",next_epo:""}),[d,p]=j.useState({}),[y,w]=j.useState(!1),[_,C]=j.useState(""),[g,b]=j.useState(""),m=(l,v)=>{u(Y=>({...Y,[l]:v}))};j.useEffect(()=>{m("file_path",s!=null&&s.filePath?s==null?void 0:s.filePath:"")},[s]);const f=async l=>{var Y,D,X,Z,ee,se;l.preventDefault();let v={};if(["site_name","cell_name","lon","lat","bb_type","rru_type","antenna_type","frequency","pci","azimuth","height","last_epo","next_epo"].forEach(O=>{o[O]||(v[O]="This field is required.")}),p(v),Object.keys(v).length>0){console.log(v);return}try{w(!0);const O=await re.post(route("site.field.map.save"),o);O!=null&&O.data&&(b((D=(Y=O==null?void 0:O.data)==null?void 0:Y.success)==null?void 0:D.message),c((X=O==null?void 0:O.data)==null?void 0:X.batch_id),setTimeout(()=>{a(!1),b(""),C("")},3e3),G.visit(route("site.field.name.index")))}catch(O){console.log("error:",O),C(`${(se=(ee=(Z=O==null?void 0:O.response)==null?void 0:Z.data)==null?void 0:ee.error)==null?void 0:se.message}`)}finally{w(!1)}};return e.jsx(K.Fragment,{children:e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"CSV Mapping"}),_&&e.jsx("p",{className:"text-red-500 font-medium text-[12px] px-4",children:_}),g&&e.jsx("p",{className:"text-green-500 font-medium text-[12px] px-4",children:g}),e.jsxs(t.DialogBody,{className:"px-6 overflow-scroll",children:[e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Site Name",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.site_name,onChange:l=>m("site_name",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((I=s==null?void 0:s.header)==null?void 0:I.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.site_name,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Cell Name",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.cell_name,onChange:l=>m("cell_name",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((B=s==null?void 0:s.header)==null?void 0:B.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.cell_name,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Lon",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.lon,onChange:l=>m("lon",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((z=s==null?void 0:s.header)==null?void 0:z.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.lon,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Lat",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.lat,onChange:l=>m("lat",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((T=s==null?void 0:s.header)==null?void 0:T.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.lat,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"BB Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.bb_type,onChange:l=>m("bb_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((P=s==null?void 0:s.header)==null?void 0:P.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.bb_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"RRU Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.rru_type,onChange:l=>m("rru_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((F=s==null?void 0:s.header)==null?void 0:F.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.rru_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Antenna Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.antenna_type,onChange:l=>m("antenna_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),(($=s==null?void 0:s.header)==null?void 0:$.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.antenna_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Frequency",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.frequency,onChange:l=>m("frequency",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((L=s==null?void 0:s.header)==null?void 0:L.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.frequency,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"PCI",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.pci,onChange:l=>m("pci",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((U=s==null?void 0:s.header)==null?void 0:U.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.pci,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Azimuth",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.azimuth,onChange:l=>m("azimuth",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((q=s==null?void 0:s.header)==null?void 0:q.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.azimuth,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Height",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.height,onChange:l=>m("height",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((J=s==null?void 0:s.header)==null?void 0:J.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.height,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Last EPO",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.last_epo,onChange:l=>m("last_epo",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((A=s==null?void 0:s.header)==null?void 0:A.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.last_epo,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(H,{value:"Next EPO",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:o.next_epo,onChange:l=>m("next_epo",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((W=s==null?void 0:s.header)==null?void 0:W.length)>0&&(s==null?void 0:s.header.map((l,v)=>e.jsx("option",{value:l,children:l},v)))]}),e.jsx(R,{message:d.next_epo,className:"!text-[12px] font-medium"})]})]})})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:i,className:"mr-1",disabled:y,children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:f,loading:y,children:e.jsx("span",{children:"Confirm"})})]})]})})}function Ce({site_id:n,changedItems:a,setChangedItems:s}){const[c,i]=j.useState(!1),o=async u=>{var d,p,y;if(a.length>0){let w=a.filter(_=>_.site_id===u)[0];if(w){i(!0);const _=await axios.post(route("site.field.name.save.item"),{site_id:w==null?void 0:w.site_id,items:w==null?void 0:w.items});(d=_==null?void 0:_.data)!=null&&d.success&&(i(!1),Q.success((y=(p=_==null?void 0:_.data)==null?void 0:p.success)==null?void 0:y.message),s(C=>C.filter(g=>g.site_id!==u)))}}};return e.jsx(t.Button,{size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",disabled:!a.some(u=>u.site_id===n),onClick:()=>{o(n)},loading:c,children:"Save"})}function ke({addColumnDialog:n,setAddColumnDialog:a}){const{data:s,setData:c,post:i,processing:o,errors:u,reset:d}=V({type:"fw_site",name:"",key:"",input_type:"",options:""}),p=y=>{y.preventDefault(),i(route("additional.columns.save.item"),{onSuccess:()=>{a(!1),d()}})};return e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Add New Column"}),e.jsxs(t.DialogBody,{children:[e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(H,{value:"Column Name",className:"mb-1"}),e.jsx(te,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column Name...",value:s.name,onChange:y=>c("name",y.target.value)}),e.jsx(R,{message:u.name,className:"text-sm font-medium"})]}),e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(H,{value:"Column Key",className:"mb-1"}),e.jsx(te,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column key...",value:s.key,onChange:y=>c("key",y.target.value)}),e.jsx(R,{message:u.key,className:"text-sm font-medium"})]}),e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(H,{value:"Column Input Type",className:"mb-1"}),e.jsxs("select",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-medium text-gray-600 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",value:s.input_type,onChange:y=>c("input_type",y.target.value),children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"text",children:"Text"}),e.jsx("option",{value:"date",children:"Date"}),e.jsx("option",{value:"dropdown",children:"DropDown"})]}),e.jsx(R,{message:u.input_type,className:"text-sm font-medium"})]}),(s==null?void 0:s.input_type)==="dropdown"&&e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(H,{value:"Dropdown Options seprated by (|)",className:"mb-1"}),e.jsx("textarea",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-normal focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",placeholder:"Dropdown Options seprated by | ...",rows:4,value:s.options,onChange:y=>c("options",y.target.value)}),e.jsx(R,{message:u.options,className:"text-sm font-medium"})]})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:()=>a(!n),className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:y=>p(y),className:"capitalize",loading:o,children:e.jsx("span",{children:"Submit"})})]})]})}function Se({hideColumnDialog:n,setHideColumnDialog:a,columns:s,hidden_columns:c,deleted_columns:i}){const o=()=>a(!n),[u,d]=j.useState([]),{data:p,setData:y,post:w,processing:_,errors:C,reset:g}=V({type:"fw_site",key:"hide",items:(c==null?void 0:c.length)>0?c:[]});j.useEffect(()=>{n&&d(f=>[...s.filter(B=>!i.includes(B.key)).map(B=>({key:B.key,name:B.name}))])},[n]);const b=(f,I)=>{const B=f.target.checked;y(z=>B?{...z,items:[...z.items,I]}:{...z,items:z.items.filter(T=>T!==I)})},m=f=>{f.preventDefault(),w(route("hide.columns.item"),{onSuccess:()=>{a(!1),g()}})};return e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Hide Column"}),e.jsx(t.DialogBody,{children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to hide"}),e.jsx("div",{className:"form-item grid grid-cols-2",children:(u==null?void 0:u.length)>0&&u.map((f,I)=>e.jsx(K.Fragment,{children:e.jsx(t.Checkbox,{containerProps:{className:"py-3"},className:"w-5 h-5 rounded-md",label:e.jsx(t.Typography,{color:"blue-gray",className:"font-medium text-sm",children:f==null?void 0:f.name}),onChange:B=>b(B,f==null?void 0:f.key),defaultChecked:c==null?void 0:c.includes(f==null?void 0:f.key)})},I))})]})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:o,className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:f=>{m(f)},className:"capitalize",children:e.jsx("span",{children:"Confirm"})})]})]})}function _e({renameColumnDialog:n,setRenameColumnDialog:a,columns:s,deleted_columns:c}){var C;const{data:i,setData:o,post:u,processing:d,errors:p,reset:y}=V({type:"fw_site",key:"rename",items:[]});j.useEffect(()=>{n&&o(g=>{const b=[...s.filter(m=>!c.includes(m.key)).map(m=>({key:m.key,name:m.name}))];return{...g,items:b}})},[n]);const w=(g,b)=>{o(m=>({...m,items:m.items.map(f=>f.key===g?{...f,name:b}:f)}))},_=g=>{g.preventDefault(),u(route("rename.columns.item"),{onSuccess:()=>{a(!1),y()}})};return e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Rename Columns"}),e.jsx(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:(i==null?void 0:i.items.length)>0&&((C=i==null?void 0:i.items)==null?void 0:C.map((g,b)=>e.jsx("div",{className:"form-item mb-2",children:e.jsx(te,{className:"w-full text-sm font-medium text-gray-600",value:g==null?void 0:g.name,onChange:m=>w(g==null?void 0:g.key,m.target.value)})},b)))})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:g=>_(g),loading:d,children:"Submit"})]})]})}function ze({deleteColumnDialog:n,setDeleteColumnDialog:a,columns:s,deleted_columns:c}){const{data:i,setData:o,post:u,processing:d,errors:p,reset:y}=V({type:"fw_site",key:"delete",items:[]}),[w,_]=j.useState([]);j.useEffect(()=>{n&&_(b=>[...s.filter(f=>!c.includes(f.key)).map(f=>({key:f.key,name:f.name}))])},[n]);const C=(b,m)=>{const f=b.target.checked;o(I=>f?{...I,items:[...I.items,m]}:{...I,items:I.items.filter(B=>B!==m)})},g=b=>{b.preventDefault(),u(route("delete.columns.item"),{onSuccess:()=>{a(!1),y()}})};return e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Delete Columns"}),e.jsx(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to delete."}),e.jsx("div",{className:"grid grid-cols-2",children:(w==null?void 0:w.length)>0&&w.map((b,m)=>e.jsx(K.Fragment,{children:e.jsx(t.Checkbox,{containerProps:{className:"py-3"},className:"w-5 h-5 rounded-md",label:e.jsx(t.Typography,{color:"blue-gray",className:"font-medium text-sm",children:b==null?void 0:b.name}),onChange:f=>{C(f,b==null?void 0:b.key)}})},m))})]})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:b=>{g(b)},loading:d,children:"Submit"})]})]})}function Ie({arrangeColumnDialog:n,setArrangeColumnDialog:a,columns:s,deleted_columns:c}){const[i,o]=j.useState([]),[u,d]=j.useState(null),{data:p,setData:y,post:w,processing:_,errors:C,reset:g}=V({type:"fw_site",key:"arrange",items:[]});j.useEffect(()=>{n&&o(z=>[...(F=>F.map(($,L)=>({...$,position:L+1})))(s.filter(F=>!c.includes(F.key)).map(F=>({key:F.key,name:F.name})))])},[n]);const b=(z,T)=>{d(T)},m=()=>{d(null)},f=z=>{z.preventDefault()},I=(z,T)=>{if(!u)return;const P=i.indexOf(u),F=i.indexOf(T);if(P!==-1&&F!==-1){const L=[...(A=>A.map((W,l)=>({...W,position:l+1})))(i)],[U]=L.splice(P,1);L.splice(F,0,U);const q=L.map((A,W)=>({...A,position:W+1}));o(q);const J=q.map(A=>({key:A.key,position:A.position}));y("items",J)}},B=z=>{z.preventDefault(),w(route("rearrange.columns.item"),{onSuccess:()=>{a(!1),g()}})};return e.jsxs(t.Dialog,{open:n,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Re-arrange Columns"}),e.jsxs(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:[e.jsx("p",{className:"text-[#333] font-semibold mb-3",children:"Please drag and drop the column you want to arrange."}),e.jsx("div",{className:"draggable-wrapper border rounded-md py-2",children:(i==null?void 0:i.length)>0&&(i==null?void 0:i.map((z,T)=>e.jsx("div",{className:"text-gray-600 font-medium py-1 px-2 text-sm  cursor-move",draggable:"true",onDragStart:P=>b(P,z),onDragEnd:m,onDragOver:f,onDrop:P=>I(P,z),children:e.jsxs("div",{className:"flex items-center gap-3 border py-2 px-2 rounded-md ",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx(me,{strokeWidth:1.5,size:18})}),z.name]})},T)))})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:z=>B(z),loading:_,children:"Submit"})]})]})}function Te({columns:n,hidden_columns:a,deleted_columns:s}){const[c,i]=j.useState(!1),[o,u]=j.useState(!1),[d,p]=j.useState(!1),[y,w]=j.useState(!1),[_,C]=j.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(t.Menu,{children:[e.jsx(t.MenuHandler,{children:e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize",children:"Column Options"})}),e.jsxs(t.MenuList,{className:"font-semibold text-gray-600",children:[e.jsx(t.MenuItem,{onClick:()=>{i(!0)},children:"Add Column"}),e.jsx(t.MenuItem,{onClick:()=>{u(!0)},children:"Show/Hide Columns"}),e.jsx(t.MenuItem,{onClick:()=>{p(!0)},children:"Rename Columns"}),e.jsx(t.MenuItem,{onClick:()=>{C(!0)},children:"Rearrange Columns"}),e.jsx(t.MenuItem,{onClick:()=>{w(!0)},className:"text-red-500",children:"Delete Columns"})]})]}),e.jsx(ke,{addColumnDialog:c,setAddColumnDialog:i}),e.jsx(Se,{hideColumnDialog:o,setHideColumnDialog:u,columns:n,hidden_columns:a,deleted_columns:s}),e.jsx(_e,{renameColumnDialog:d,setRenameColumnDialog:p,columns:n,deleted_columns:s}),e.jsx(ze,{deleteColumnDialog:y,setDeleteColumnDialog:w,columns:n,deleted_columns:s}),e.jsx(Ie,{arrangeColumnDialog:_,setArrangeColumnDialog:C,columns:n,deleted_columns:s})]})}function Pe({siteId:n,name:a,value:s,handleEditAbleItem:c}){const[i,o]=j.useState(s||""),u=d=>{o(d),c(n,a,d)};return e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{className:"border-none focus:ring-0 bg-transparent !shadow-none text-[12px] font-medium w-full",value:i,rows:1,onChange:d=>{u(d.target.value)}})})}function Be({siteId:n,name:a,value:s,handleEditAbleItem:c}){function i(p){return!isNaN(Date.parse(p))}const[o,u]=j.useState(i(s)?s:""),d=p=>{u(p),c(n,a,p)};return e.jsx("div",{className:"w-full h-full",children:e.jsx(ae,{selected:o,onChange:p=>d(p),className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium",dateFormat:"dd/MM/yyyy"})})}function Fe({siteId:n,name:a,value:s,options:c,handleEditAbleItem:i}){const[o,u]=j.useState(s||""),d=p=>{u(p),i(n,a,p)};return e.jsx("div",{className:"w-full h-full",children:e.jsxs("select",{value:o,onChange:p=>{d(p.target.value)},className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium",children:[e.jsx("option",{value:"",children:"Select"}),c.length>0&&c.map((p,y)=>e.jsx("option",{value:p.value,children:p.label},y))]})})}const Oe={text:Pe,date:Be,dropdown:Fe,upload:be};function Ee({item:n,site:a,handleEditAbleItem:s}){const c=Oe[n.input_type],i={status:[{label:"In Progress",value:"in_progress"},{label:"Not Started",value:"not_started"},{label:"Completed",value:"completed"}],solution_type:[{label:"Opti Type-1",value:"opti_type_1"},{label:"Opti Type-5",value:"opti_type_5"},{label:"Opti Type-6",value:"opti_type_6"}]};return e.jsx(c,{siteId:a==null?void 0:a.id,name:n.key,value:n.value,handleEditAbleItem:s,options:i[n.key]})}function He({site_id:n}){const{processing:a,delete:s}=V(),[c,i]=j.useState(!1),o={onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},u=()=>{s(route("site.field.name.destroy",n),{preserveScroll:!0,onSuccess:()=>{G.visit(route("site.field.name.index"))}})};return e.jsx(K.Fragment,{children:e.jsxs(t.Popover,{placement:"top-end",open:c,handler:i,children:[e.jsx(t.PopoverHandler,{...o,children:e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:()=>setOpen(!0),children:e.jsx(ie,{size:14})})}),e.jsxs(t.PopoverContent,{...o,className:"px-3",children:[e.jsx(t.Typography,{variant:"h6",className:"text-center",children:"Are you sure?"}),e.jsx(t.Typography,{variant:"small",className:"font-normal",children:"This cannot be reverted back."}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx(t.Button,{variant:"text",color:"red",size:"sm",className:"capitalize rounded",onClick:()=>i(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize rounded",onClick:u,children:"Delete"})]})]})]})})}function Re({name:n,handleItemOnChange:a}){const[s,c]=j.useState(""),i=o=>{c(o),a(n,o)};return e.jsx("div",{className:"w-full h-full",children:e.jsx("textarea",{className:"border-none focus:ring-0 bg-transparent !shadow-none text-[12px] font-medium w-full",rows:1,value:s,onChange:o=>{i(o.target.value)}})})}function Me({name:n,handleItemOnChange:a}){const[s,c]=j.useState(""),i=o=>{c(o),a(n,o)};return e.jsx("div",{className:"w-full h-full",children:e.jsx(ae,{selected:s,onChange:o=>i(o),className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium",dateFormat:"dd/MM/yyyy"})})}function Ae({name:n,handleItemOnChange:a,options:s}){const[c,i]=j.useState(""),o=u=>{i(u),a(n,u)};return e.jsx("div",{className:"w-full h-full min-w-32",children:e.jsxs("select",{value:c,onChange:u=>{o(u.target.value)},className:"border-none focus:ring-0 w-full bg-transparent !shadow-none text-[12px] font-medium px-1",children:[e.jsx("option",{value:"",children:"Select"}),(s==null?void 0:s.length)>0&&s.map((u,d)=>e.jsx("option",{value:u.value,children:u.label},d))]})})}function $e({siteId:n,name:a,value:s,single:c=!1}){const i=()=>u(!o),[o,u]=j.useState(!1),{data:d,setData:p,post:y,processing:w,reset:_}=V({site_id:n,field_name:a,artifacts:[]}),{getRootProps:C,getInputProps:g}=Ne({onDrop:I=>{p("artifacts",[...d.artifacts,...I.map(B=>Object.assign(B,{preview:URL.createObjectURL(B)}))])}}),b=d==null?void 0:d.artifacts.map(I=>e.jsxs("li",{children:[I.path," - ",I.size," bytes"]},I.path)),m=()=>{y(route("site.field.name.update.artifacts"),{preserveScroll:!0,onSuccess:()=>{_(),u(!1)}})},f=({files:I})=>{if(I){const B=JSON.parse(I),z=P=>P.split(".").pop(),T=P=>{const F=P.split("/");let $=F[F.length-1];return $=$.replace(/^\d+_/,""),$};return e.jsx("div",{className:"flex ps-2",children:B.map((P,F)=>e.jsxs("div",{className:`${c?"pt-2":""}`,children:[z(P)==="csv"&&e.jsx(t.Tooltip,{content:T(P),children:e.jsx(ne,{size:18})}),z(P)==="xlsx"&&e.jsx(t.Tooltip,{content:T(P),children:e.jsx(ne,{size:18})}),z(P)==="xls"&&e.jsx(t.Tooltip,{content:T(P),children:e.jsx(ne,{size:18})}),z(P)==="txt"&&e.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),z(P)==="pdf"&&e.jsx(t.Tooltip,{content:T(P),children:e.jsx(ge,{})})]},F))})}};return e.jsxs("div",{className:"w-full h-full",children:[!c&&e.jsx("button",{className:"font-medium text-[12px] opacity-0",onClick:i,children:"Uplaod"}),s&&e.jsx(f,{files:s||""}),e.jsxs(t.Dialog,{open:o,handler:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Upload Artifacts"}),e.jsxs(t.DialogBody,{children:[e.jsx("div",{className:"border-dashed border py-12 text-sm text-center font-medium rounded-md border-gray-300",children:e.jsxs("div",{...C({className:"dropzone"}),children:[e.jsx("input",{...g()}),e.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]})}),(d==null?void 0:d.artifacts.length)>0&&e.jsxs("aside",{children:[e.jsx("h4",{className:"font-sm font-semibold",children:"Files"}),e.jsx("ul",{className:"text-[12px] font-normal",children:b})]})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:i,className:"mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:m,loading:w,children:e.jsx("span",{children:"Confirm"})})]})]})]})}const Le={text:Re,date:Me,dropdown:Ae,upload:$e};function Ue({item:n,handleItemOnChange:a}){const s=Le[n.input_type?n.input_type:"text"],c={status:[{label:"In Progress",value:"in_progress"},{label:"Not Started",value:"not_started"},{label:"Completed",value:"completed"}],solution_type:[{label:"Opti Type-1",value:"opti_type_1"},{label:"Opti Type-5",value:"opti_type_5"},{label:"Opti Type-6",value:"opti_type_6"}]};return e.jsx(s,{name:n.key,value:n.value,handleItemOnChange:a,options:c[n.key]})}function qe({tableHeader:n,setAddNewRow:a}){const{data:s,setData:c,post:i,processing:o,errors:u,reset:d}=V({newItem:{}});console.log(s);const p=(_,C)=>{const g={...s.newItem};c("newItem",{...g,[_]:C})},y=()=>{c("newItem",{}),a(!1)},w=()=>{if(!(s!=null&&s.newItem.site_name))return console.log("this"),Q.error("Site name is required");i(route("site.field.name.add.row"),{preserveScroll:!0,onSuccess:()=>{a(!1),Q.success("Row Added successfully")}})};return e.jsxs("tr",{className:"border-b",children:[(n==null?void 0:n.length)>0&&n.map((_,C)=>e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:e.jsx(Ue,{item:_,handleItemOnChange:p})},C)),e.jsx("td",{className:"border-l h-10 px-3",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",onClick:w,children:"Save"}),e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:y,children:e.jsx(ie,{size:14})})]})})]})}function ts({auth:n,sites:a,get_data:s,batch:c,additional_columns:i,hidden_columns:o,renamed_columns:u,deleted_columns:d,arrange_columns:p}){var oe;const{role:y}=n,w=[{name:"Site Name",sortable:!0,key:"site_name",position:1,editable:!1},{name:"Cell Name",sortable:!0,key:"cell_name",position:2,editable:!0,input_type:"text"},{name:"Lon",sortable:!0,key:"lon",position:3,editable:!0,input_type:"text"},{name:"Lat",sortable:!0,key:"lat",position:4,editable:!0,input_type:"text"},{name:"BB Type",sortable:!0,key:"bb_type",position:5,editable:!0,input_type:"text"},{name:"RRU Type",sortable:!0,key:"rru_type",position:6,editable:!0,input_type:"text"},{name:"Antenna Type",sortable:!0,key:"antenna_type",position:7,editable:!0,input_type:"text"},{name:"Frequency",sortable:!0,key:"frequency",position:8,editable:!0,input_type:"text"},{name:"PCI",sortable:!1,key:"pci",position:9,editable:!0,input_type:"text"},{name:"Azimuth",sortable:!1,key:"azimuth",position:10,editable:!0,input_type:"text"},{name:"Height",sortable:!1,key:"height",position:11,editable:!0,input_type:"text"},{name:"Last EPO",sortable:!1,key:"last_epo",position:12,editable:!0,input_type:"date"},{name:"Next EPO",sortable:!1,key:"next_epo",position:13,editable:!0,input_type:"date"},{name:"Start Date",sortable:!1,key:"start_date",position:15,editable:!0,input_type:"date"},{name:"End Date",sortable:!1,key:"end_date",position:16,editable:!0,input_type:"date"},{name:"Solution Type",sortable:!1,key:"solution_type",position:14,editable:!0,input_type:"dropdown"},{name:"Status",sortable:!1,key:"status",position:17,editable:!0,input_type:"dropdown"},{name:"Remarks",sortable:!1,key:"remarks",position:18,editable:!0,input_type:"text"},{name:"Artifacts",sortable:!1,key:"artifacts",position:19,editable:!0,input_type:"upload"}];function _(r,S){return r==null?S:S==null?r:[...new Set([...r,...S])]}const C=_(o,d);function g(){const r=[...w],S=i==null?void 0:i.map(h=>({...h,editable:!0})),x=(h,k)=>h.position!==void 0&&k.position!==void 0?h.position-k.position:h.position!==void 0?-1:k.position!==void 0?1:0;return u&&(r.forEach(h=>{const k=u.find(M=>M.key===h.key);k&&(h.name=k.name)}),S.forEach(h=>{const k=u.find(M=>M.key===h.key);k&&(h.name=k.name)})),C&&(r.forEach(h=>{C.find(M=>M===h.key)&&(h.hidden=!0)}),S.forEach(h=>{C.find(M=>M===h.key)&&(h.hidden=!0)})),p&&(r.forEach(h=>{const k=p.find(M=>M.key===h.key);k&&(h.position=k.position)}),S.forEach(h=>{const k=p.find(M=>M.key===h.key);k&&(h.position=k.position)})),[...r,...S].sort(x)}const b=g(),m=j.useRef(null),[f,I]=j.useState(s!=null&&s.search?s==null?void 0:s.search:""),[B,z]=j.useState(s!=null&&s.per_page?s==null?void 0:s.per_page:10),[T]=j.useState(a),[P,F]=j.useState(!1),[$,L]=j.useState(""),[U,q]=j.useState(null),[J,A]=j.useState([]),[W,l]=j.useState(!1),v=r=>{m.current.click()},Y=async r=>{var x,N,E;const S=new FormData;S.append("import_file",r.target.files[0]);try{const h=await re.post(route("site.field.name.import"),S);h!=null&&h.data&&(L(h==null?void 0:h.data),F(!0))}catch(h){Q.error(`${(E=(N=(x=h==null?void 0:h.response)==null?void 0:x.data)==null?void 0:N.error)==null?void 0:E.message}`)}},D=async()=>{f&&G.get(route("site.field.name.index",{search:f}))},X=async(r,S)=>{G.get(route("site.field.name.index",{order_by:r,order:S}))},Z=async(r,S)=>{G.get(route("site.field.name.index",{filter_by:r,value:S}))},ee=r=>{z(r),G.get(route("site.field.name.index",{...s,per_page:r}))};j.useEffect(()=>{c!=null&&c.batch_field_id&&q(c==null?void 0:c.batch_field_id)},[]),j.useEffect(()=>{const r=async()=>{var x,N,E;try{let h=0;const k=await re.get(route("import.progress",{batchId:U}));if(k!=null&&k.data){let M=parseInt((x=k==null?void 0:k.data)==null?void 0:x.total_jobs),ce=parseInt((N=k==null?void 0:k.data)==null?void 0:N.pending_jobs),de=M-ce;parseInt((E=k==null?void 0:k.data)==null?void 0:E.failed_jobs)>0?clearInterval(S):(h=parseInt(de/M*100).toFixed(0),h<100?Q.loading(`CSV Data Import Progress: ${h}%.
 Please wait....`,{id:"loading-toast",style:{backgroundColor:"#424242",color:"#ffffff",fontSize:14,borderRadius:4,fontWeight:"bold"}}):(Q.dismiss("loading-toast"),clearInterval(S)))}}catch(h){console.log(h)}},S=setInterval(()=>{U&&r()},5e3);return()=>clearInterval(S)},[U]);const se=(r,S,x)=>{const N=J.findIndex(E=>E.site_id===r);A(N!==-1?E=>{const h=[...E];return h[N]={...h[N],items:{...h[N].items,[S]:x}},h}:E=>[...E,{site_id:r,items:{[S]:x}}])},O=r=>{let S=[];return b.forEach(x=>{const N=x.key,E=r[N];E!==void 0?x!=null&&x.position?S[x.position-1]={key:N,value:E,editable:x==null?void 0:x.editable,input_type:x!=null&&x.input_type?x==null?void 0:x.input_type:""}:S.push({key:N,value:E,editable:x==null?void 0:x.editable,input_type:x!=null&&x.input_type?x==null?void 0:x.input_type:""}):S.push({key:N,value:"",editable:x==null?void 0:x.editable,input_type:x!=null&&x.input_type?x==null?void 0:x.input_type:""})}),S};return e.jsxs(xe,{user:n==null?void 0:n.user,children:[e.jsx(ue,{title:"FW Sites"}),e.jsx("div",{className:"top-section p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"",children:[e.jsx(t.Typography,{variant:"h3",className:"tracking-tight",children:"FW Site"}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(le,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(le,{href:route("site.field.name.index"),children:"FW Site"})})]})]})})}),e.jsx("div",{className:"filter-wrapper md:px-4",children:e.jsxs("div",{className:"flex filter-details justify-end gap-1",children:[e.jsxs("div",{className:"search-wrapper w-1/5 flex relative",children:[e.jsx(te,{placeholder:"Search...",className:"w-full text-sm rounded-md rounded-r-none border-r-0 focus:ring-0 h-8",value:f,onChange:r=>I(r.target.value)}),e.jsx("div",{className:"search-icon",children:e.jsx(t.IconButton,{size:"sm",className:"rounded-l-none",onClick:D,children:e.jsx(fe,{color:"white",size:18})})})]}),e.jsx("div",{className:"status-filter",children:e.jsxs("select",{className:"w-52 text-sm rounded-md focus:ring-0 h-8 border-gray-300 py-1 text-gray-600 font-medium",onChange:r=>Z("status",r.target.value),value:(s==null?void 0:s.filter_by)==="status"?s==null?void 0:s.value:"",children:[e.jsx("option",{value:"",children:"Filter by Status"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"not_started",children:"Not Started"}),e.jsx("option",{value:"completed",children:"Completed"})]})}),e.jsx("div",{className:"filter-solution-type",children:e.jsxs("select",{className:"w-52 text-sm rounded-md focus:ring-0 h-8 border-gray-300 py-1 text-gray-600 font-medium",onChange:r=>Z("solution_type",r.target.value),value:(s==null?void 0:s.filter_by)==="solution_type"?s==null?void 0:s.value:"",children:[e.jsx("option",{value:"",children:"Filter by Solution Type"}),e.jsx("option",{value:"opti_type_1",children:"Opti Type-1"}),e.jsx("option",{value:"opti_type_5",children:"Opti Type-5"}),e.jsx("option",{value:"opti_type_6",children:"Opti Type-6"})]})}),y==="super-admin"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"import-type-field",children:[e.jsx(t.Button,{variant:"gradient",className:"capitalize",size:"sm",onClick:v,children:"Import from CSV"}),e.jsx("input",{type:"file",onChange:Y,ref:m,style:{display:"none"}})]}),e.jsx(Te,{columns:b,hidden_columns:o,deleted_columns:d||[]}),e.jsx(ye,{type:"fw_site"})]}),e.jsx(ve,{route_name:"site.field.name.export",file_name:"FW Sites_Export"})]})}),e.jsxs("div",{className:"content mt-6",children:[e.jsx(t.Card,{className:"h-full w-full rounded-none",children:e.jsxs("div",{className:"overflow-x-auto overflow-hidden",children:[e.jsxs("table",{className:"w-full table-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[b.map(r=>e.jsx("th",{className:`border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer ${C!=null&&C.includes(r==null?void 0:r.key)?"hidden":""}`,children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx(t.Typography,{variant:"small",className:"leading-none text-gray-800 font-medium text-sm",children:r.name}),(r==null?void 0:r.sortable)&&e.jsxs("div",{className:"relative mt-1",children:[e.jsx("span",{className:"absolute -top-2 right-0 hover:bg-blue-gray-100 rounded-sm",children:e.jsx(je,{size:12,strokeWidth:2,onClick:()=>{X(r.key,"asc")}})}),e.jsx("span",{className:"absolute -bottom-1 right-0 hover:bg-blue-gray-100 rounded-sm",children:e.jsx(he,{size:12,strokeWidth:2,onClick:()=>{X(r.key,"desc")}})})]})]})},r.name)),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer"})]})}),e.jsxs("tbody",{children:[T==null?void 0:T.data.map((r,S)=>{const x=O(r);return e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[x==null?void 0:x.map((N,E)=>e.jsx(K.Fragment,{children:e.jsx("td",{className:`border-l h-10 text-[12px] font-medium ps-2 ${C!=null&&C.includes(N==null?void 0:N.key)?"hidden":""}`,children:(N==null?void 0:N.key)==="site_name"?e.jsx(le,{href:route("site.field.name.show",r==null?void 0:r.id),className:"font-semibold underline",children:N==null?void 0:N.value}):e.jsx(K.Fragment,{children:N!=null&&N.editable?e.jsx(K.Fragment,{children:e.jsx(Ee,{item:N,site:r,handleEditAbleItem:se})}):N==null?void 0:N.value})})},E)),e.jsx("td",{className:"border-l h-10 px-3",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(Ce,{site_id:r==null?void 0:r.id,changedItems:J,setChangedItems:A}),e.jsx(He,{site_id:r==null?void 0:r.id})]})})]},r==null?void 0:r.id)}),W&&e.jsx(qe,{tableHeader:b,setAddNewRow:l})]})]}),((oe=T==null?void 0:T.data)==null?void 0:oe.length)===0&&e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"text-center py-6",children:"No data found"}),e.jsxs("div",{className:"pagination flex justify-between items-center",children:[e.jsx("div",{className:"px-4",children:e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize rounded",onClick:()=>{l(!0)},children:"Add New Row"})}),e.jsxs("div",{className:"md:flex grid justify-start md:justify-end items-center pt-6 mb-8 gap-3 px-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Rows per Page"}),e.jsxs("select",{className:"rounded-md text-sm font-medium border-gray-400 focus:ring-0 py-2",value:B,onChange:r=>{ee(r.target.value)},children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"20",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"all",children:"All"})]})]}),e.jsx("div",{className:"text-sm font-medium",children:`${a==null?void 0:a.from}-${a==null?void 0:a.to} of ${a==null?void 0:a.total} Records`}),e.jsx(pe,{links:T==null?void 0:T.links,perPage:B})]})]})]})}),e.jsx(we,{mappingDialog:P,setMappingDialog:F,mappingData:$,setBatchId:q})]})]})}export{ts as default};