import{j as e,L as i,r as m}from"./index-HyFbeki4.js";import{C as l}from"./Data-CspMoiNW.js";import"./index-Bb_VyorM.js";import"./index-DSpF7ayH.js";import"./index-BEswpvt5.js";function c(t){const r=t.icon;return e.jsxs("li",{className:`flex gap-2 items-center cursor-pointer rounded-[7px] p-4 pr-8 w-full ${t.activeLink===t.title?"bg-[#0A1330] text-white":""}`,children:[e.jsx(r,{}),e.jsx(i,{onClick:()=>t.setActiveLink(t.title),className:"text-nowrap",to:t.to,children:t.title})]})}function f(){const[t,r]=m.useState("");return e.jsx(e.Fragment,{children:e.jsxs("div",{className:` border-[#343B4F] 
 
 xsm:border-b xsm:border-r-0 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:pr-0 xsm:mb-6
 md:justify-start  md:items-start md:pr-10 
lg:border-r lg:border-b-0 
 `,children:[e.jsx("h1",{className:"mb-4",children:"Credentials"}),e.jsx("div",{children:e.jsx("ul",{className:`
                        xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:pl-0
                        md:justify-start  md:items-start md:pl-2 
                        lg:
                        `,children:l.map((s,n)=>e.jsx(c,{title:s.title,icon:s.icon,to:s.to,activeLink:t,setActiveLink:r},n))})})]})})}export{f as default};
