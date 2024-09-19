import{j as e,Y as i,a as j,R as v}from"./app-DzalHcVU.js";import{A as _}from"./AuthenticatedLayout-DdSPs-UH.js";import{r as a}from"./index-D4XrngbZ.js";import{U as w}from"./UploadItem-DlIhJg59.js";import{f as u,F as T,I}from"./index-DDCp2-z9.js";import"./transition-C5FwFN3G.js";function M({auth:p,site:l,trackings:m}){const f=["LOCID","WNTD","IMSI","VERSION","AVC","BW Profile","Lon","Lat","SiteName","HomeCell","HomePCI","Traffic Profile","Start Date","End Date","Solution Type","Status","Remarks","Artifacts"],n=(d,o)=>{var x,c;if(d)return o==="start_date"||o==="end_date"?t((x=d[o])==null?void 0:x.value):(c=d[o])==null?void 0:c.value},t=d=>{if(d){const o=new Date(d);return u(o,"dd/MM/yyyy")}},N=({files:d})=>{if(d){const o=JSON.parse(d),x=r=>r.split(".").pop(),c=r=>{const h=r.split("/");let s=h[h.length-1];return s=s.replace(/^\d+_/,""),s},b=(r,h)=>{const s=document.createElement("a");s.href=r,s.download=h,document.body.appendChild(s),s.click(),document.body.removeChild(s)};return e.jsx("div",{className:"flex mt-3",children:o==null?void 0:o.map((r,h)=>e.jsxs(v.Fragment,{children:[x(r)==="csv"&&e.jsx(a.Tooltip,{content:c(r),children:e.jsx(T,{onClick:()=>b(r,c(r)),className:"cursor-pointer"})}),x(r)==="txt"&&e.jsx("img",{src:"txt-icon.png",alt:"Text File Icon"}),x(r)==="pdf"&&e.jsx(a.Tooltip,{content:c(r),children:e.jsx(I,{})})]},h))})}},y=d=>{if(d)return d.replace(/_/g," ")};return e.jsxs(_,{user:p==null?void 0:p.user,children:[e.jsx(i,{title:"Site"}),e.jsx("div",{className:"top-section p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"",children:[e.jsx(a.Typography,{variant:"h3",className:"tracking-tight",children:l==null?void 0:l.loc_id}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(j,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(j,{href:route("wireless.sites.index"),children:"WNTD"})})]})]})})}),e.jsx("div",{className:"content mt-6",children:e.jsx(a.Card,{className:"h-full w-full rounded-none",children:e.jsx("div",{className:"overflow-x-auto overflow-hidden",children:e.jsxs("table",{className:"w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsx("tr",{children:f.map(d=>e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer",children:e.jsx("div",{className:"flex justify-between",children:e.jsx(a.Typography,{variant:"small",className:"leading-none text-gray-800 font-medium text-sm",children:d})})},d))})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.loc_id}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.wntd}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.imsi}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.version}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.avc}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.bw_profile}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-20",children:l==null?void 0:l.lon}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-20",children:l==null?void 0:l.lat}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.site_name}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.home_cell}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.home_pci}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:l==null?void 0:l.traffic_profile}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:n(l==null?void 0:l.tracking,"start_date")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2",children:n(l==null?void 0:l.tracking,"end_date")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"solution_type")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"status")}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:n(l==null?void 0:l.tracking,"remarks")}),e.jsx("td",{className:"border-l h-10",children:e.jsx(w,{value:n(l==null?void 0:l.tracking,"artifacts"),name:"artifacts",locId:l.loc_id,siteId:l.id,single:!0})})]},l==null?void 0:l.id)})]})})})}),e.jsx("div",{children:e.jsx("div",{className:"py-12 px-12 relative z-10",children:e.jsx(a.Timeline,{children:m==null?void 0:m.map((d,o)=>e.jsxs(a.TimelineItem,{children:[o+1!==(m==null?void 0:m.length)&&e.jsx(a.TimelineConnector,{}),e.jsxs(a.TimelineHeader,{className:"h-3",children:[e.jsx(a.TimelineIcon,{}),e.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"leading-none",children:u(new Date(d.created_at),"MMMM dd, yyyy HH:mm:ss")})]}),e.jsx(a.TimelineBody,{className:"pb-8",children:(d==null?void 0:d.key)==="artifacts"?e.jsxs(a.Typography,{variant:"small",color:"gray",className:"font-normal text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:d==null?void 0:d.user.name})," Uploaded New  ",e.jsx("span",{className:"capitalize font-semibold",children:d.key?d.key.replace(/_/g," "):""}),(d==null?void 0:d.value)&&e.jsx(N,{files:d==null?void 0:d.value})]}):e.jsxs(a.Typography,{variant:"small",color:"gray",className:"font-normal text-gray-600",children:[e.jsx("span",{className:"font-semibold",children:d==null?void 0:d.user.name})," changed value of ",e.jsx("span",{className:"capitalize font-semibold",children:d.key?d.key.replace(/_/g," "):""})," to",e.jsx("span",{className:"capitalize block",children:(d==null?void 0:d.key)==="start_date"||(d==null?void 0:d.key)==="end_date"?t(d.value):e.jsx(e.Fragment,{children:(d==null?void 0:d.key)==="status"||(d==null?void 0:d.key)==="solution_type"?y(d.value):d.value})})]})})]},o))})})})]})}export{M as default};