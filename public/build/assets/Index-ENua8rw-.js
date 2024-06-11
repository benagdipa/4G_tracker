import{r as i,W as C,j as e,R as D,b as z,Y as A,a as f}from"./app-C6jrbMoX.js";import{A as R}from"./AuthenticatedLayout-C0WuoabP.js";import{r as l}from"./index-f3svSaYE.js";import{T as v}from"./TextInput-BIPnZpur.js";import{I as m}from"./InputLabel-CSMFfQvb.js";import{I as N}from"./InputError-B7AkdK5t.js";import"./transition-0TAARjeD.js";function T({roles:n}){const[t,c]=i.useState(!1),[o,s]=i.useState(""),[r,u]=i.useState([]),[j,x]=i.useState(!1),{data:g,setData:h,post:b,processing:U,errors:p,reset:y}=C({email:"",role_name:""}),S=async a=>{if(s(a.target.value),a.target.value.length>=3){x(!0);const d=await z.post(route("roles.user.search"),{query:a.target.value});d!=null&&d.data.length&&u(d.data)}else x(!1),u([])},w=a=>{h("email",a==null?void 0:a.email),s(""),x(!1)},k=a=>{a.preventDefault(),b(route("roles.user.store"),{onSuccess:()=>{c(!1),y()}})};return e.jsxs(e.Fragment,{children:[e.jsx(l.Button,{variant:"gradient",className:"capitalize",size:"sm",onClick:()=>c(!0),children:"Add Role to user"}),e.jsxs(l.Dialog,{open:t,size:"xs",children:[e.jsx(l.DialogHeader,{children:"Add Role To User"}),e.jsxs(l.DialogBody,{children:[e.jsxs("div",{className:"field-item mb-4",children:[e.jsx(m,{value:"Search User"}),e.jsx(v,{className:"w-full text-sm font-normal",placeholder:"Search User...",value:o,onChange:a=>{S(a)}}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"search-results absolute bg-gray-50 w-full rounded shadow-xl z-50",children:[j&&(r==null?void 0:r.length)>0&&(r==null?void 0:r.map((a,d)=>e.jsx(D.Fragment,{children:e.jsx("div",{className:"py-3 px-2 border-b cursor-pointer",onClick:()=>{w(a)},children:e.jsx("p",{className:"text-sm text-gray-600",children:`${a==null?void 0:a.email}`})})},a==null?void 0:a.id))),j&&(r==null?void 0:r.length)===0&&e.jsx("div",{className:"py-4 px-2 text-center font-medium",children:e.jsx("p",{children:"No User Found"})})]})})]}),e.jsxs("div",{className:"field-item mb-4",children:[e.jsx(m,{value:"User's Email"}),e.jsx(v,{className:"w-full text-sm font-normal",placeholder:"User's Email...",value:g.email,onChange:a=>h("email",a.target.value)}),e.jsx(N,{message:p.email,className:"mt-2"})]}),e.jsxs("div",{className:"field-item mb-4",children:[e.jsx(m,{value:"Role Name"}),e.jsxs("select",{className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm text-sm w-full font-normal capitalize",value:g.role_name,onChange:a=>h("role_name",a.target.value),children:[e.jsx("option",{value:"",children:"Select"}),(n==null?void 0:n.length)>0&&n.map((a,d)=>e.jsx("option",{value:a.name,children:a.name},d))]}),e.jsx(N,{message:p.role_name,className:"mt-2 font-medium text-xs"})]})]}),e.jsxs(l.DialogFooter,{children:[e.jsx(l.Button,{variant:"text",color:"red",onClick:()=>c(!1),className:"mr-1 capitalize",children:e.jsx("span",{children:"Cancel"})}),e.jsx(l.Button,{variant:"gradient",color:"green",className:"capitalize",onClick:a=>k(a),children:e.jsx("span",{children:"Submit"})})]})]})]})}function M({auth:n,roles:t,noRoles:c}){const o=["SN","Role Name","User Count"];return e.jsxs(R,{user:n==null?void 0:n.user,children:[e.jsx(A,{title:"Wireless Sites"}),e.jsx("div",{className:"top-section p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"",children:[e.jsx(l.Typography,{variant:"h3",className:"tracking-tight",children:"Role Management"}),e.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[e.jsx("li",{children:e.jsx(f,{href:route("dashboard"),children:"Dashboard"})}),e.jsx("li",{children:"/"}),e.jsx("li",{children:e.jsx(f,{href:route("roles.index"),children:"Role Management"})})]})]})})}),e.jsx("div",{className:"filter-wrapper md:px-4",children:e.jsx("div",{className:"flex filter-details justify-end gap-3",children:e.jsx(T,{roles:t})})}),e.jsx("div",{className:"content mt-6",children:e.jsx(l.Card,{className:"h-full w-full rounded-none",children:e.jsx("div",{className:"overflow-x-auto overflow-hidden",children:e.jsxs("table",{className:"w-full table-auto",children:[e.jsx("thead",{children:e.jsx("tr",{children:o.map(s=>e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-2 border-l cursor-pointer",children:e.jsx(l.Typography,{variant:"small",className:"leading-none text-gray-800 font-medium text-sm text-left",children:s})},s))})}),e.jsx("tbody",{children:(t==null?void 0:t.length)>0&&(t==null?void 0:t.map((s,r)=>e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-20",children:r+1}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 capitalize",children:s==null?void 0:s.name}),e.jsx("td",{className:"border-l h-10 text-[12px] font-medium ps-2 w-28",children:(s==null?void 0:s.name)==="guest"?(s==null?void 0:s.users_count)+c:s==null?void 0:s.users_count})]},r)))})]})})})})]})}export{M as default};
