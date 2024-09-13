import{r as x,j as e,R as re,b as ce,y as X,u as ae,W as K,c as de,s as ue,d as oe,e as fe,Y as me,a as ie}from"./app-WkBXpZXB.js";import{r as t}from"./index-BdxLiRtc.js";import{_ as Z,A as je}from"./AuthenticatedLayout-B2Q2tEih.js";import{M as Ne,T as he,P as ve}from"./Pagination-M_c4zJmY.js";import{T as ne}from"./TextInput-BE3mHMfg.js";import{I as P}from"./InputLabel-CNeNwbmW.js";import{I}from"./InputError-D9oZ4FLU.js";import{A as xe,E as ye,P as pe}from"./ag-theme-quartz-BD6pcVZF.js";/* empty css                         */import{U as ge}from"./UploadItem-QWMGf5We.js";import"./transition-B4wjXVot.js";import"./ApplicationLogo-B9VjgrMe.js";import"./index-CxRZoBKD.js";import"./download-B316ynM4.js";function we({mappingDialog:i,setMappingDialog:a,mappingData:s,setBatchId:c}){var z,O,b,T,H,R,S,M,J,L,V,$,q;const n=()=>a(!i),[u,N]=x.useState({file_path:s?s==null?void 0:s.filePath:"",site_name:"",cell_name:"",lon:"",lat:"",bb_type:"",rru_type:"",antenna_type:"",frequency:"",pci:"",azimuth:"",height:"",last_epo:"",next_epo:""}),[h,A]=x.useState({}),[y,g]=x.useState(!1),[F,B]=x.useState(""),[p,v]=x.useState(""),m=(l,f)=>{N(U=>({...U,[l]:f}))};x.useEffect(()=>{m("file_path",s!=null&&s.filePath?s==null?void 0:s.filePath:"")},[s]);const j=async l=>{var U,D,Y,ee,se,le;l.preventDefault();let f={};if(["site_name","cell_name","lon","lat","bb_type","rru_type","antenna_type","frequency","pci","azimuth","height","last_epo","next_epo"].forEach(k=>{u[k]||(f[k]="This field is required.")}),A(f),Object.keys(f).length>0){console.log(f);return}try{g(!0);const k=await ce.post(route("site.field.map.save"),u);k!=null&&k.data&&(v((D=(U=k==null?void 0:k.data)==null?void 0:U.success)==null?void 0:D.message),c((Y=k==null?void 0:k.data)==null?void 0:Y.batch_id),setTimeout(()=>{a(!1),v(""),B("")},3e3),X.visit(route("site.field.name.index")))}catch(k){console.log("error:",k),B(`${(le=(se=(ee=k==null?void 0:k.response)==null?void 0:ee.data)==null?void 0:se.error)==null?void 0:le.message}`)}finally{g(!1)}};return e.jsx(re.Fragment,{children:e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"CSV Mapping"}),F&&e.jsx("p",{className:"text-red-500 font-medium text-[12px] px-4",children:F}),p&&e.jsx("p",{className:"text-green-500 font-medium text-[12px] px-4",children:p}),e.jsxs(t.DialogBody,{className:"px-6 overflow-scroll",children:[e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Site Name",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.site_name,onChange:l=>m("site_name",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((z=s==null?void 0:s.header)==null?void 0:z.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.site_name,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Cell Name",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.cell_name,onChange:l=>m("cell_name",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((O=s==null?void 0:s.header)==null?void 0:O.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.cell_name,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Lon",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.lon,onChange:l=>m("lon",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((b=s==null?void 0:s.header)==null?void 0:b.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.lon,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Lat",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.lat,onChange:l=>m("lat",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((T=s==null?void 0:s.header)==null?void 0:T.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.lat,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"BB Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.bb_type,onChange:l=>m("bb_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((H=s==null?void 0:s.header)==null?void 0:H.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.bb_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"RRU Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.rru_type,onChange:l=>m("rru_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((R=s==null?void 0:s.header)==null?void 0:R.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.rru_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Antenna Type",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.antenna_type,onChange:l=>m("antenna_type",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((S=s==null?void 0:s.header)==null?void 0:S.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.antenna_type,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Frequency",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.frequency,onChange:l=>m("frequency",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((M=s==null?void 0:s.header)==null?void 0:M.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.frequency,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"PCI",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.pci,onChange:l=>m("pci",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((J=s==null?void 0:s.header)==null?void 0:J.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.pci,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Azimuth",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.azimuth,onChange:l=>m("azimuth",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((L=s==null?void 0:s.header)==null?void 0:L.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.azimuth,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Height",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.height,onChange:l=>m("height",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((V=s==null?void 0:s.header)==null?void 0:V.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.height,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Last EPO",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.last_epo,onChange:l=>m("last_epo",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),(($=s==null?void 0:s.header)==null?void 0:$.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.last_epo,className:"!text-[12px] font-medium"})]})]})}),e.jsx("div",{className:"form-item mb-4",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(P,{value:"Next EPO",className:"w-1/3"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("select",{className:"w-full font-medium text-[12px] py-1 rounded-md border-gray-300",value:u.next_epo,onChange:l=>m("next_epo",l.target.value),children:[e.jsx("option",{value:"",children:"Select"}),((q=s==null?void 0:s.header)==null?void 0:q.length)>0&&(s==null?void 0:s.header.map((l,f)=>e.jsx("option",{value:l,children:l},f)))]}),e.jsx(I,{message:h.next_epo,className:"!text-[12px] font-medium"})]})]})})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:n,className:"mr-1",disabled:y,children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:j,loading:y,children:e.jsx("span",{children:"Confirm"})})]})]})})}function be(i){const{changedDataFW:a}=ae(c=>c.table),s=async()=>{var c,n,u;if(a.length>0){let N=a.filter(h=>h.site_id===i.data.id)[0];if(N){const h=await axios.post(route("site.field.name.save.item"),{site_id:N==null?void 0:N.site_id,items:N==null?void 0:N.items});(c=h==null?void 0:h.data)!=null&&c.success&&Z.success((u=(n=h==null?void 0:h.data)==null?void 0:n.success)==null?void 0:u.message)}}};return e.jsx(t.Button,{size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",onClick:()=>{s()},children:"Save"})}function Ce({addColumnDialog:i,setAddColumnDialog:a}){const{data:s,setData:c,post:n,processing:u,errors:N,reset:h}=K({type:"fw_site",name:"",key:"",input_type:"",options:""}),A=y=>{y.preventDefault(),n(route("additional.columns.save.item"),{onSuccess:()=>{a(!1),h()}})};return e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Add New Column"}),e.jsxs(t.DialogBody,{children:[e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(P,{value:"Column Name",className:"mb-1"}),e.jsx(ne,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column Name...",value:s.name,onChange:y=>c("name",y.target.value)}),e.jsx(I,{message:N.name,className:"text-sm font-medium"})]}),e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(P,{value:"Column Key",className:"mb-1"}),e.jsx(ne,{className:"w-full text-sm font-medium text-gray-600",placeholder:"Column key...",value:s.key,onChange:y=>c("key",y.target.value)}),e.jsx(I,{message:N.key,className:"text-sm font-medium"})]}),e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(P,{value:"Column Input Type",className:"mb-1"}),e.jsxs("select",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-medium text-gray-600 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",value:s.input_type,onChange:y=>c("input_type",y.target.value),children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"text",children:"Text"}),e.jsx("option",{value:"date",children:"Date"}),e.jsx("option",{value:"dropdown",children:"DropDown"})]}),e.jsx(I,{message:N.input_type,className:"text-sm font-medium"})]}),(s==null?void 0:s.input_type)==="dropdown"&&e.jsxs("div",{className:"form-item mb-4",children:[e.jsx(P,{value:"Dropdown Options seprated by (|)",className:"mb-1"}),e.jsx("textarea",{className:"w-full rounded text-sm border-gray-300 shadow-sm font-normal focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600",placeholder:"Dropdown Options seprated by | ...",rows:4,value:s.options,onChange:y=>c("options",y.target.value)}),e.jsx(I,{message:N.options,className:"text-sm font-medium"})]})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:()=>a(!i),className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:y=>A(y),className:"capitalize",loading:u,children:e.jsx("span",{children:"Submit"})})]})]})}function Se({hideColumnDialog:i,setHideColumnDialog:a,columns:s,hidden_columns:c,deleted_columns:n}){console.log(s);const u=()=>a(!i),[N,h]=x.useState([]),{data:A,setData:y,post:g,processing:F,errors:B,reset:p}=K({type:"fw_site",key:"hide",items:(c==null?void 0:c.length)>0?c:[]});x.useEffect(()=>{i&&h(j=>[...s])},[i]);const v=(j,z)=>{const O=j.target.checked;y(b=>O?{...b,items:[...b.items,z]}:{...b,items:b.items.filter(T=>T!==z)})},m=j=>{j.preventDefault(),g(route("hide.columns.item"),{onSuccess:()=>{a(!1),p()}})};return e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Hide Column"}),e.jsx(t.DialogBody,{children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to hide"}),e.jsx("div",{className:"form-item grid grid-cols-2",children:(N==null?void 0:N.length)>0&&N.map((j,z)=>e.jsx(re.Fragment,{children:e.jsx(t.Checkbox,{containerProps:{className:"py-3"},className:"w-5 h-5 rounded-md",label:e.jsx(t.Typography,{color:"blue-gray",className:"font-medium text-sm",children:j==null?void 0:j.headerName}),onChange:O=>v(O,j==null?void 0:j.field),defaultChecked:c==null?void 0:c.includes(j==null?void 0:j.field)})},z))})]})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",onClick:u,className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(t.Button,{variant:"gradient",color:"green",onClick:j=>{m(j)},className:"capitalize",children:e.jsx("span",{children:"Confirm"})})]})]})}function _e({renameColumnDialog:i,setRenameColumnDialog:a,columns:s,deleted_columns:c}){var B;const{data:n,setData:u,post:N,processing:h,errors:A,reset:y}=K({type:"fw_site",key:"rename",items:[]});x.useEffect(()=>{i&&u(p=>{const v=[...s.filter(m=>!c.includes(m.key)).map(m=>({key:m.key,name:m.name}))];return{...p,items:v}})},[i]);const g=(p,v)=>{u(m=>({...m,items:m.items.map(j=>j.key===p?{...j,name:v}:j)}))},F=p=>{p.preventDefault(),N(route("rename.columns.item"),{onSuccess:()=>{a(!1),y()}})};return e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Rename Columns"}),e.jsx(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsx("div",{className:"grid grid-cols-2 gap-3",children:(n==null?void 0:n.items.length)>0&&((B=n==null?void 0:n.items)==null?void 0:B.map((p,v)=>e.jsx("div",{className:"form-item mb-2",children:e.jsx(ne,{className:"w-full text-sm font-medium text-gray-600",value:p==null?void 0:p.name,onChange:m=>g(p==null?void 0:p.key,m.target.value)})},v)))})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:p=>F(p),loading:h,children:"Submit"})]})]})}function ke({deleteColumnDialog:i,setDeleteColumnDialog:a,columns:s,deleted_columns:c}){const{data:n,setData:u,post:N,processing:h,errors:A,reset:y}=K({type:"fw_site",key:"delete",items:[]}),[g,F]=x.useState([]);x.useEffect(()=>{i&&F(v=>[...s.filter(j=>!c.includes(j.key)).map(j=>({key:j.key,name:j.name}))])},[i]);const B=(v,m)=>{const j=v.target.checked;u(z=>j?{...z,items:[...z.items,m]}:{...z,items:z.items.filter(O=>O!==m)})},p=v=>{v.preventDefault(),N(route("delete.columns.item"),{onSuccess:()=>{a(!1),y()}})};return e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Delete Columns"}),e.jsx(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:e.jsxs("div",{className:"form-item",children:[e.jsx("p",{className:"text-[#333] font-semibold",children:"Please select the column you want to delete."}),e.jsx("div",{className:"grid grid-cols-2",children:(g==null?void 0:g.length)>0&&g.map((v,m)=>e.jsx(re.Fragment,{children:e.jsx(t.Checkbox,{containerProps:{className:"py-3"},className:"w-5 h-5 rounded-md",label:e.jsx(t.Typography,{color:"blue-gray",className:"font-medium text-sm",children:v==null?void 0:v.name}),onChange:j=>{B(j,v==null?void 0:v.key)}})},m))})]})}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:v=>{p(v)},loading:h,children:"Submit"})]})]})}function Ee({arrangeColumnDialog:i,setArrangeColumnDialog:a,columns:s,deleted_columns:c}){const[n,u]=x.useState([]),[N,h]=x.useState(null),{data:A,setData:y,post:g,processing:F,errors:B,reset:p}=K({type:"fw_site",key:"arrange",items:[]});x.useEffect(()=>{i&&u(b=>[...(R=>R.map((S,M)=>({...S,position:M+1})))(s.filter(R=>!c.includes(R.key)).map(R=>({key:R.key,name:R.name})))])},[i]);const v=(b,T)=>{h(T)},m=()=>{h(null)},j=b=>{b.preventDefault()},z=(b,T)=>{if(!N)return;const H=n.indexOf(N),R=n.indexOf(T);if(H!==-1&&R!==-1){const M=[...($=>$.map((q,l)=>({...q,position:l+1})))(n)],[J]=M.splice(H,1);M.splice(R,0,J);const L=M.map(($,q)=>({...$,position:q+1}));u(L);const V=L.map($=>({key:$.key,position:$.position}));y("items",V)}},O=b=>{b.preventDefault(),g(route("rearrange.columns.item"),{onSuccess:()=>{a(!1),p()}})};return e.jsxs(t.Dialog,{open:i,size:"xs",children:[e.jsx(t.DialogHeader,{children:"Re-arrange Columns"}),e.jsxs(t.DialogBody,{className:"max-h-[42rem] overflow-scroll",children:[e.jsx("p",{className:"text-[#333] font-semibold mb-3",children:"Please drag and drop the column you want to arrange."}),e.jsx("div",{className:"draggable-wrapper border rounded-md py-2",children:(n==null?void 0:n.length)>0&&(n==null?void 0:n.map((b,T)=>e.jsx("div",{className:"text-gray-600 font-medium py-1 px-2 text-sm  cursor-move",draggable:"true",onDragStart:H=>v(H,b),onDragEnd:m,onDragOver:j,onDrop:H=>z(H,b),children:e.jsxs("div",{className:"flex items-center gap-3 border py-2 px-2 rounded-md ",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx(Ne,{strokeWidth:1.5,size:18})}),b.name]})},T)))})]}),e.jsxs(t.DialogFooter,{children:[e.jsx(t.Button,{variant:"text",color:"red",className:"mr-1 capitalize",onClick:()=>a(!1),children:"cancel"}),e.jsx(t.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:b=>O(b),loading:F,children:"Submit"})]})]})}function ze({columns:i,hidden_columns:a,deleted_columns:s,hideColumnDialog:c,setHideColumnDialog:n}){const[u,N]=x.useState(!1),[h,A]=x.useState(!1),[y,g]=x.useState(!1),[F,B]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize rounded text-sm",onClick:()=>{N(!0)},children:"Add New Column"}),e.jsx(Ce,{addColumnDialog:u,setAddColumnDialog:N}),e.jsx(Se,{hideColumnDialog:c,setHideColumnDialog:n,columns:i,hidden_columns:a,deleted_columns:s}),e.jsx(_e,{renameColumnDialog:h,setRenameColumnDialog:A,columns:i,deleted_columns:s}),e.jsx(ke,{deleteColumnDialog:y,setDeleteColumnDialog:g,columns:i,deleted_columns:s}),e.jsx(Ee,{arrangeColumnDialog:F,setArrangeColumnDialog:B,columns:i,deleted_columns:s})]})}function Pe({site_id:i}){const{processing:a,delete:s}=K(),[c,n]=x.useState(!1),u={onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1)},N=()=>{s(route("site.field.name.destroy",i),{preserveScroll:!0,onSuccess:()=>{X.visit(route("site.field.name.index"))}})};return e.jsx(re.Fragment,{children:e.jsxs(t.Popover,{placement:"top-end",open:c,handler:n,children:[e.jsx(t.PopoverHandler,{...u,children:e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:()=>setOpen(!0),children:e.jsx(he,{size:14})})}),e.jsxs(t.PopoverContent,{...u,className:"px-3",children:[e.jsx(t.Typography,{variant:"h6",className:"text-center",children:"Are you sure?"}),e.jsx(t.Typography,{variant:"small",className:"font-normal",children:"This cannot be reverted back."}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx(t.Button,{variant:"text",color:"red",size:"sm",className:"capitalize rounded",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize rounded",onClick:N,children:"Delete"})]})]})]})})}const Ie=()=>{const i=de(),{addNewRowDataFW:a}=ae(n=>n.table),s=n=>{if(console.log(a),n.preventDefault(),!a.site_name)return Z.error("Site name is required");X.post(route("site.field.name.add.row"),{newItem:a},{onSuccess:()=>{i(oe(!1)),Z.success("Row Added successfully")}})},c=()=>{i(oe(!1)),ue({})};return e.jsxs("div",{className:"flex gap-2 mt-1",children:[e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize py-1 px-2 rounded font-semibold",onClick:s,children:"Save"}),e.jsx(t.Button,{variant:"gradient",color:"red",size:"sm",className:"capitalize py-1 px-2 rounded",onClick:c,children:e.jsx(he,{size:14})})]})};function Be({setAddNewRow:i}){const a=de(),{addNewRowDataFW:s}=ae(g=>g.table),c=["opti_type_1","opti_type_5","opti_type_6"],n=["in_progress","not_started","completed"],u=x.useMemo(()=>({editable:!0})),[N]=x.useState([{headerName:"Site Name",field:"site_name"},{headerName:"Cell Name",field:"cell_name"},{headerName:"Lon",field:"lon"},{headerName:"Lat",field:"lat"},{headerName:"BB Type",field:"bb_type"},{headerName:"RRU Type",field:"rru_type"},{headerName:"Antenna Type",field:"antenna_type"},{headerName:"Frequency",field:"frequency"},{headerName:"PCI",field:"pci"},{headerName:"Azimuth",field:"azimuth"},{headerName:"Height",field:"height"},{headerName:"Last EPO",field:"last_epo"},{headerName:"Next EPO",field:"next_epo"},{headerName:"Start Date",field:"start_date"},{headerName:"End Date",field:"end_date"},{headerName:"Solution Type",field:"solution_type",cellEditor:"agSelectCellEditor",filterParams:{caseSensitive:!0,defaultOption:"startsWith"},cellEditorParams:{values:c}},{headerName:"Status",field:"status",cellEditor:"agSelectCellEditor",filterParams:{caseSensitive:!0,defaultOption:"startsWith"},cellEditorParams:{values:n}},{headerName:"Remarks",field:"remarks"},{headerName:"Artifacts",field:"artifacts",editable:!1},{headerName:"",field:"",editable:!1,filter:!1,cellRenderer:Ie}]),[h,A]=x.useState([{loc_id:"",wntd:"",imsi:"",version:"",avc:"",bw_profile:"",lon:"",lat:"",site_name:"",home_cell:"",home_pci:"",traffic_profile:"",deleted_at:null,remarks:"",artifacts:"",solution_type:"",start_date:new Date,status:"",end_date:new Date}]),y=g=>{var B;const F={...s};a(ue({...F,[(B=g==null?void 0:g.colDef)==null?void 0:B.field]:g==null?void 0:g.value}))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-x-auto overflow-hidden",children:e.jsx("div",{className:"ag-theme-quartz",style:{height:100},children:e.jsx(xe,{rowData:h,columnDefs:N,defaultColDef:u,onCellValueChanged:y})})})})}const Fe=i=>e.jsxs("div",{className:"flex gap-5 my-2",children:[e.jsx(be,{...i}),e.jsx(Pe,{...i})]});function Ge({auth:i,sites:a,get_data:s,batch:c,additional_columns:n,hidden_columns:u,renamed_columns:N,deleted_columns:h,arrange_columns:A}){var k;const[y,g]=x.useState(!1),p=[{headerName:"Site Name",field:"site_name",position:1},{headerName:"Cell Name",field:"cell_name",position:2},{headerName:"Lon",field:"lon",position:3},{headerName:"Lat",field:"lat",position:4},{headerName:"BB Type",field:"bb_type",position:5},{headerName:"RRU Type",field:"rru_type",position:6},{headerName:"Antenna Type",field:"antenna_type",position:7},{headerName:"Frequency",field:"frequency",position:8},{headerName:"PCI",field:"pci",position:9},{headerName:"Azimuth",field:"azimuth",position:10},{headerName:"Height",field:"height",position:11},{headerName:"Last EPO",field:"last_epo",position:12},{headerName:"Next EPO",field:"next_epo",position:13},{headerName:"Start Date",field:"start_date",input_type:"date",valueFormatter:r=>{if(!r.value)return"";const d=r.value.getMonth()+1,w=r.value.getDate();return`${r.value.getFullYear()}-${d<10?"0"+d:d}-${w<10?"0"+w:w}`},cellEditor:"agDateCellEditor",filter:!1,position:14},{headerName:"End Date",field:"end_date",valueFormatter:r=>{if(!r.value)return"";const d=r.value.getMonth()+1,w=r.value.getDate();return`${r.value.getFullYear()}-${d<10?"0"+d:d}-${w<10?"0"+w:w}`},cellEditor:"agDateCellEditor",filter:!1,position:15},{headerName:"Solution Type",field:"solution_type",cellEditor:"agSelectCellEditor",filterParams:{caseSensitive:!0,defaultOption:"startsWith"},cellEditorParams:{values:["opti_type_1","opti_type_5","opti_type_6"]},position:16},{headerName:"Status",field:"status",cellEditor:"agSelectCellEditor",filterParams:{caseSensitive:!0,defaultOption:"startsWith"},cellEditorParams:{values:["in_progress","not_started","completed"]},position:17},{headerName:"Remarks",field:"remarks",position:18},{headerName:"Artifacts",field:"artifacts",cellRenderer:ge,editable:!1,position:19}],v=x.useRef(),{role:m}=i,j=de(),{addNewRowFW:z}=ae(r=>r.table),O=x.useMemo(()=>({editable:!0,filter:!0}));x.useEffect(()=>{var r;((r=a==null?void 0:a.data)==null?void 0:r.length)>0&&(a==null||a.data.map(d=>{if(d.end_date||d.start_date){let w=d!=null&&d.end_date?new Date(d==null?void 0:d.end_date):new Date,C=d!=null&&d.start_date?new Date(d==null?void 0:d.start_date):new Date;d.start_date=C,d.end_date=w}return d}),M(a))},[a==null?void 0:a.data]);const[b,T]=x.useState();x.useRef(null),x.useState(s!=null&&s.search?s==null?void 0:s.search:"");const[H,R]=x.useState(s!=null&&s.per_page?s==null?void 0:s.per_page:10),[S,M]=x.useState([]),[J,L]=x.useState(!1),[V,$]=x.useState(""),[q,l]=x.useState(null),[f,U]=x.useState([]);function D(r){if(r==null)return[];let d=[];return r.forEach(C=>{C&&d.push(C)}),[...new Set([...d])]}const Y=D(u);x.useEffect(()=>{function r(d){const w=[...p],C=d==null?void 0:d.map((o,E)=>{let W={};return(o==null?void 0:o.input_type)==="date"?W={headerName:o==null?void 0:o.name.toUpperCase(),field:o==null?void 0:o.key,position:p.length+E+1,valueFormatter:G=>{if(!G.value)return"";const Q=G.value.getMonth()+1,te=G.value.getDate();return`${G.value.getFullYear()}-${Q<10?"0"+Q:Q}-${te<10?"0"+te:te}`},cellEditor:"agDateCellEditor",filter:!1}:(o==null?void 0:o.input_type)==="text"?W={headerName:o==null?void 0:o.name.toUpperCase(),field:o==null?void 0:o.key,position:p.length+E+1}:(o==null?void 0:o.input_type)==="dropdown"&&(W={headerName:o==null?void 0:o.name.toUpperCase(),field:o==null?void 0:o.key,position:p.length+E+1,cellEditorParams:{values:JSON.parse(o==null?void 0:o.options)}}),W});Y&&(w.forEach(o=>{Y.find(W=>o.field===W)?o.hide=!0:o.hide=!1}),C.forEach(o=>{Y.find(W=>W===o.field)?o.hide=!0:o.hide=!1}));const _=[...w,...C,{headerName:"",field:"",editable:!1,filter:!1,cellRenderer:Fe}];T(_)}(n==null?void 0:n.length)>0&&(console.log(n,"additional_columns"),r(n))},[n]),x.useEffect(()=>{f.length>0&&j(fe(f))},[f]);const ee=r=>{const d=f.findIndex(w=>{var C,_;return w.site_id===((C=r==null?void 0:r.data)==null?void 0:C.id)&&w.loc_id===((_=r==null?void 0:r.data)==null?void 0:_.loc_id)});U(d!==-1?w=>{var _;const C=[...w];return C[d]={...C[d],items:{...C[d].items,[(_=r==null?void 0:r.colDef)==null?void 0:_.field]:r==null?void 0:r.value}},C}:w=>{var C,_,o;return[...w,{site_id:(C=r==null?void 0:r.data)==null?void 0:C.id,loc_id:(_=r==null?void 0:r.data)==null?void 0:_.loc_id,items:{[(o=r==null?void 0:r.colDef)==null?void 0:o.field]:r==null?void 0:r.value}}]})},se=r=>{R(r),X.get(route("site.field.name.index",{...s,per_page:r}))};x.useEffect(()=>{c!=null&&c.batch_field_id&&l(c==null?void 0:c.batch_field_id)},[]),x.useEffect(()=>{const r=async()=>{var w,C,_;try{let o=0;const E=await ce.get(route("import.progress",{batchId:q}));if(E!=null&&E.data){let W=parseInt((w=E==null?void 0:E.data)==null?void 0:w.total_jobs),G=parseInt((C=E==null?void 0:E.data)==null?void 0:C.pending_jobs),Q=W-G;parseInt((_=E==null?void 0:E.data)==null?void 0:_.failed_jobs)>0?clearInterval(d):(o=parseInt(Q/W*100).toFixed(0),o<100?Z.loading(`CSV Data Import Progress: ${o}%.
 Please wait....`,{id:"loading-toast",style:{backgroundColor:"#424242",color:"#ffffff",fontSize:14,borderRadius:4,fontWeight:"bold"}}):(Z.dismiss("loading-toast"),clearInterval(d)))}}catch(o){console.log(o)}},d=setInterval(()=>{q&&r()},5e3);return()=>clearInterval(d)},[q]);const le=()=>{var d;((d=v.current.props)==null?void 0:d.columnDefs).forEach(w=>{const C=w.field,_=v.current.api.getColumnFilterModel(C);console.log(_),_!=null&&_.filter&&X.get(route("site.field.name.index",{search:_==null?void 0:_.filter}))})};return e.jsxs(je,{user:i==null?void 0:i.user,children:[e.jsx(me,{title:"FW Sites"}),e.jsx("div",{className:"top-section p-4",children:e.jsxs("div",{className:"bg-white shadow rounded py-3 px-5 flex justify-between items-center",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"",children:[e.jsx(t.Typography,{variant:"h3",className:"tracking-tight",children:"FW Site"}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(ie,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(ie,{href:route("site.field.name.index"),children:"FW Site"})})]})]})}),e.jsx("div",{className:"filter-wrapper md:px-4",children:e.jsxs("div",{className:"flex filter-details justify-end gap-1",children:[m==="super-admin"&&e.jsx(e.Fragment,{}),e.jsx(ye,{route_name:"site.field.name.export",file_name:"FW Sites_Export"})]})})]})}),e.jsxs("div",{className:"content mt-6",children:[e.jsx(t.Card,{className:"h-full w-full rounded-none",children:e.jsxs("div",{className:"overflow-x-auto overflow-hidden",children:[(S==null?void 0:S.data)&&((k=S==null?void 0:S.data)==null?void 0:k.length)>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"ag-theme-quartz w-full",style:{height:500},children:e.jsx(xe,{ref:v,rowData:S==null?void 0:S.data,columnDefs:b,defaultColDef:O,onCellValueChanged:ee,onFilterChanged:le})}),e.jsx("div",{className:"w-[40px]",children:e.jsx("div",{className:"border flex justify-center rounded cursor-pointer",onClick:()=>g(!0),children:e.jsxs("p",{className:"column-hide-show py-10 flex gap-2",children:[e.jsx(pe,{size:22}),"Columns"]})})})]}),z&&e.jsx(Be,{tableHeader:b})]}),(S==null?void 0:S.length)===0&&e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"text-center py-6",children:"No data found"}),e.jsxs("div",{className:"pagination flex justify-between items-center",children:[e.jsxs("div",{className:"px-4 flex gap-5",children:[e.jsx(t.Button,{variant:"gradient",size:"sm",className:"capitalize rounded text-sm",onClick:()=>{j(oe(!0))},children:"Add New Row"}),e.jsx(ze,{setHideColumnDialog:g,hideColumnDialog:y,columns:b,hidden_columns:u,deleted_columns:h||[]})]}),e.jsxs("div",{className:"md:flex grid justify-start md:justify-end items-center pt-6 mb-8 gap-3 px-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Rows per Page"}),e.jsxs("select",{className:"rounded-md text-sm font-medium border-gray-400 focus:ring-0 py-2",value:H,onChange:r=>{se(r.target.value)},children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"15",children:"15"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"20",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"all",children:"All"})]})]}),e.jsx("div",{className:"text-sm font-medium",children:`${a==null?void 0:a.from}-${a==null?void 0:a.to} of ${a==null?void 0:a.total} Records`}),e.jsx(ve,{links:S==null?void 0:S.links,perPage:H})]})]})]})}),e.jsx(we,{mappingDialog:J,setMappingDialog:L,mappingData:V,setBatchId:l})]})]})}export{Ge as default};