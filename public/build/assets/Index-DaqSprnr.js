import{W as j,r as f,j as s,Y as g,a as x}from"./app-Boy3tGV0.js";import{I as o}from"./InputError-CSrk3bR1.js";import{I as i}from"./InputLabel-B3-51Szo.js";import{T as c}from"./TextInput-CBZJnnf6.js";import{A as v}from"./AuthenticatedLayout-DL_A8617.js";import{r}from"./index-B3CsOgEB.js";import"./transition-COmRz9M9.js";import"./index-glo4qDUc.js";import"./createLucideIcon-28HuB_8U.js";import"./floating-ui.dom-BJX5GPEt.js";function A({auth:n,db:a}){const{data:t,setData:l,post:p,processing:N,errors:m,reset:w}=j({host:a?a.host:"",port:a?a.port:"",database:a?a.database:"",username:a?a.username:"",password:a?a.password:""}),[h,d]=f.useState(""),u=e=>{e.preventDefault(),p(route("import.db.store"),{onSuccess:()=>{d("Saved Successfully")},onError:()=>{d("Something went wrong")}})};return s.jsxs(v,{user:n==null?void 0:n.user,children:[s.jsx(g,{title:"Wireless Sites"}),s.jsx("div",{className:"top-section p-4",children:s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("div",{className:"",children:[s.jsx(r.Typography,{variant:"h3",className:"tracking-tight",children:"Settings"}),s.jsxs("ul",{className:"flex gap-1 text-gray-600 text-sm",children:[s.jsx("li",{children:s.jsx(x,{href:route("dashboard"),children:"Dashboard"})}),s.jsx("li",{children:"/"}),s.jsx("li",{children:s.jsx(x,{href:route("settings.index"),children:"Settings"})})]})]})})}),s.jsx("div",{className:"filter-wrapper px-4",children:s.jsx(r.Card,{className:"mt-6 mb-6 w-full xl:w-1/4",children:s.jsxs(r.CardBody,{children:[s.jsx(r.Typography,{variant:"h5",color:"blue-gray",className:"mb-2",children:"Database Credentials"}),s.jsxs("div",{className:"form-wrapper pt-4",children:[s.jsxs("div",{className:"form-field mb-4",children:[s.jsx(i,{value:"Host",className:"mb-2"}),s.jsx(c,{className:"w-full text-sm",placeholder:"127.0.0.1",value:t.host,onChange:e=>l("host",e.target.value)}),s.jsx(o,{message:m.host,className:"mt-2"})]}),s.jsxs("div",{className:"form-field mb-4",children:[s.jsx(i,{value:"Port",className:"mb-2"}),s.jsx(c,{className:"w-full text-sm",placeholder:"3306",value:t.port,onChange:e=>l("port",e.target.value)}),s.jsx(o,{message:m.port,className:"mt-2"})]}),s.jsxs("div",{className:"form-field mb-4",children:[s.jsx(i,{value:"DB Name",className:"mb-2"}),s.jsx(c,{className:"w-full text-sm",placeholder:"database",value:t.database,onChange:e=>l("database",e.target.value)}),s.jsx(o,{message:m.database,className:"mt-2"})]}),s.jsxs("div",{className:"form-field mb-4",children:[s.jsx(i,{value:"DB User Name",className:"mb-2"}),s.jsx(c,{className:"w-full text-sm",placeholder:"root",value:t.username,onChange:e=>l("username",e.target.value)}),s.jsx(o,{message:m.username,className:"mt-2"})]}),s.jsxs("div",{className:"form-field mb-4",children:[s.jsx(i,{value:"DB Password"}),s.jsx(c,{className:"w-full text-sm",placeholder:"password",value:t.password,type:"password",onChange:e=>l("password",e.target.value)}),s.jsx(o,{message:m.password,className:"mt-2"})]}),s.jsx(r.CardFooter,{className:"pt-0 text-right px-0 py-4",children:s.jsx(r.Button,{variant:"gradient",onClick:u,children:"Save"})}),h]})]})})})]})}export{A as default};