import{q as o,j as e,a as s}from"./app-K7whChZx.js";import{A as i}from"./ApplicationLogo-CiuKq79F.js";import{r as n}from"./index-D_SS0Q7D.js";function h({children:r}){const{auth:t}=o().props,a=new Date;return e.jsxs("div",{className:"site-content",children:[e.jsx("header",{className:"border-b py-4 shadow-sm",children:e.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[e.jsx("div",{className:"left",children:e.jsx(s,{href:"/",children:e.jsx(i,{className:"font-semibold text-3xl tracking-tight  text-blue-gray-600"})})}),e.jsx("div",{className:"right",children:e.jsxs("nav",{className:"flex gap-4 text-blue-gray-600 font-medium",children:[e.jsx(s,{href:route("home"),children:"4G Sites"}),t.user?e.jsxs(e.Fragment,{children:[e.jsx(s,{href:route("dashboard"),children:"Dashboard"}),e.jsx(s,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{href:route("login"),children:"Log in"}),e.jsx(s,{href:route("register"),children:"Register"})]})]})})]})}),r,e.jsx("footer",{className:"border-t shadow-sm mt-12 py-6",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs(n.Typography,{color:"blue-grey",className:"text-center font-medium text-sm",children:["©",a.getFullYear()," - Wave Portal"]})})})]})}export{h as P};
