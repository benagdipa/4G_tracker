import{R as C,W as E,j as e,Y as R,a as D}from"./app-CIRcvYGN.js";import{A}from"./AuthenticatedLayout-BtjXaohP.js";import{r as a}from"./index-6jRPV5pi.js";import{u as B,F,I as S}from"./index-C6kzJobj.js";import{f as I}from"./format-D5IGutSq.js";import"./transition-prLGfJeh.js";function H({locId:j,siteId:l,name:c,value:u,single:n=!1}){const i=()=>N(!f),[f,N]=C.useState(!1),{data:s,setData:o,post:m,processing:x,reset:v}=E({site_id:l,location_id:j,field_name:c,artifacts:[]}),{getRootProps:r,getInputProps:p}=B({onDrop:h=>{o("artifacts",[...s.artifacts,...h.map(b=>Object.assign(b,{preview:URL.createObjectURL(b)}))])}}),d=s==null?void 0:s.artifacts.map(h=>e.jsxs("li",{children:[h.path," - ",h.size," bytes"]},h.path)),z=()=>{m(route("wireless.sites.update.artifacts"),{preserveScroll:!0,onSuccess:()=>{v(),N(!1)}})},O=({files:h})=>{if(h){const b=JSON.parse(h),_=t=>t.split(".").pop(),T=t=>{const y=t.split("/");let w=y[y.length-1];return w=w.replace(/^\d+_/,""),w};return e.jsx("div",{className:"flex ps-2",children:b.map((t,y)=>e.jsxs("div",{className:`${n?"pt-2":""}`,children:[_(t)==="csv"&&e.jsx(a.Tooltip,{content:T(t),children:e.jsx(F,{size:18})}),_(t)==="txt"&&e.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),_(t)==="pdf"&&e.jsx(a.Tooltip,{content:T(t),children:e.jsx(S,{})})]},y))})}};return e.jsxs("div",{className:"w-full h-full",children:[!n&&e.jsx("button",{className:"font-medium text-[12px] opacity-0",onClick:i,children:"Uplaod"}),u&&e.jsx(O,{files:u||""}),e.jsxs(a.Dialog,{open:f,handler:i,size:"xs",children:[e.jsx(a.DialogHeader,{children:"Upload Artifacts"}),e.jsxs(a.DialogBody,{children:[e.jsx("div",{className:"border-dashed border py-12 text-sm text-center font-medium rounded-md border-gray-300",children:e.jsxs("div",{...r({className:"dropzone"}),children:[e.jsx("input",{...p()}),e.jsx("p",{children:"Drag 'n' drop some files here, or click to select files"})]})}),(s==null?void 0:s.artifacts.length)>0&&e.jsxs("aside",{children:[e.jsx("h4",{className:"font-sm font-semibold",children:"Files"}),e.jsx("ul",{className:"text-[12px] font-normal",children:d})]})]}),e.jsxs(a.DialogFooter,{children:[e.jsx(a.Button,{variant:"text",color:"red",onClick:i,className:"mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(a.Button,{variant:"gradient",color:"green",onClick:z,loading:x,children:e.jsx("span",{children:"Confirm"})})]})]})]})}function J({auth:j,site:l,trackings:c}){const u=["LOCID","WNTD","IMSI","VERSION","AVC","BW Profile","Lon","Lat","SiteName","HomeCell","HomePCI","Traffic Profile","Start Date","End Date","Solution Type","Status","Remarks","Artifacts"],n=(s,o)=>{var m,x;if(s)return o==="start_date"||o==="end_date"?i((m=s[o])==null?void 0:m.value):(x=s[o])==null?void 0:x.value},i=s=>{if(s){const o=new Date(s);return I(o,"dd/MM/yyyy")}},f=({files:s})=>{if(s){const o=JSON.parse(s),m=r=>r.split(".").pop(),x=r=>{const p=r.split("/");let d=p[p.length-1];return d=d.replace(/^\d+_/,""),d},v=(r,p)=>{const d=document.createElement("a");d.href=r,d.download=p,document.body.appendChild(d),d.click(),document.body.removeChild(d)};return e.jsx("div",{className:"flex mt-3",children:o==null?void 0:o.map((r,p)=>e.jsxs(C.Fragment,{children:[m(r)==="csv"&&e.jsx(a.Tooltip,{content:x(r),children:e.jsx(F,{onClick:()=>v(r,x(r)),className:"cursor-pointer"})}),m(r)==="txt"&&e.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),m(r)==="pdf"&&e.jsx(a.Tooltip,{content:x(r),children:e.jsx(S,{})})]},p))})}},N=s=>{if(s)return s.replace(/_/g," ")};return e.jsxs(A,{user:j==null?void 0:j.user,children:[e.jsx(R,{title:"Site"}),e.jsx("div",{className:"top-section p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"",children:[e.jsx(a.Typography,{variant:"h3",className:"tracking-tight",children:l==null?void 0:l.loc_id}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(D,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(D,{href:route("wireless.sites.index"),children:"WNTD"})})]})]})})}),e.jsx("div",{className:"content mt-6",children:e.jsx(a.Card,{className:"h-full w-full rounded-none",children:e.jsx("div",{className:"overflow-x-auto overflow-hidden",children:e.jsxs("table",{className:"w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsx("tr",{children:u.map(s=>e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer",children:e.jsx("div",{className:"flex justify-between",children:e.jsx(a.Typography,{variant:"small",className:"leading-none text-gray-800 font-medium text-sm",children:s})})},s))})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.loc_id}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.wntd}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.imsi}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.version}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.avc}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.bw_profile}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-20",children:l==null?void 0:l.lon}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-20",children:l==null?void 0:l.lat}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.site_name}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.home_cell}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.home_pci}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.traffic_profile}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:n(l==null?void 0:l.tracking,"start_date")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:n(l==null?void 0:l.tracking,"end_date")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"solution_type")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"status")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"remarks")}),e.jsx("td",{className:"border-l h-10",children:e.jsx(H,{value:n(l==null?void 0:l.tracking,"artifacts"),name:"artifacts",locId:l.loc_id,siteId:l.id,single:!0})})]},l==null?void 0:l.id)})]})})})}),e.jsx("div",{children:e.jsx("div",{className:"py-12 px-12 relative z-10",children:e.jsx(a.Timeline,{children:c==null?void 0:c.map((s,o)=>e.jsxs(a.TimelineItem,{children:[o+1!==(c==null?void 0:c.length)&&e.jsx(a.TimelineConnector,{}),e.jsxs(a.TimelineHeader,{className:"h-3",children:[e.jsx(a.TimelineIcon,{}),e.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"leading-none",children:I(new Date(s.created_at),"MMMM dd, yyyy HH:mm:ss")})]}),e.jsx(a.TimelineBody,{className:"pb-8",children:(s==null?void 0:s.key)==="artifacts"?e.jsxs(a.Typography,{variant:"small",color:"gray",className:"font-normal text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:s==null?void 0:s.user.name})," Uploaded New  ",e.jsx("span",{className:"capitalize font-semibold",children:s.key?s.key.replace(/_/g," "):""}),(s==null?void 0:s.value)&&e.jsx(f,{files:s==null?void 0:s.value})]}):e.jsxs(a.Typography,{variant:"small",color:"gray",className:"font-normal text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:s==null?void 0:s.user.name})," changed value of ",e.jsx("span",{className:"capitalize font-semibold",children:s.key?s.key.replace(/_/g," "):""})," to",e.jsx("span",{className:"capitalize block",children:(s==null?void 0:s.key)==="start_date"||(s==null?void 0:s.key)==="end_date"?i(s.value):e.jsx(e.Fragment,{children:(s==null?void 0:s.key)==="status"||(s==null?void 0:s.key)==="solution_type"?N(s.value):s.value})})]})})]},o))})})})]})}export{J as default};
