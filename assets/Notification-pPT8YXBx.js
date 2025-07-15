import{r as x,j as e,h as c}from"./index-BM8zKWHf.js";import{I as m}from"./index-aGtHX_rA.js";import{a as o}from"./index-j-Jgco1I.js";function s(i){const[t,r]=x.useState(""),l=n=>{if(n.target.closest("button")){const a=n.target.name;r(a)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`flex items-center justify-between my-8
            xsm:flex-col xsm:gap-4
             sm:flex-row
            `,children:[e.jsxs("div",{className:"flex items-center gap-2 text-[12px]",children:[e.jsx("p",{children:i.title}),e.jsx(m,{})]}),e.jsxs("div",{onClick:l,className:"flex bg-[#0A1330]  ",children:[e.jsxs("div",{className:`${t==="app"&&"bg-[#CB3CFF] text-white"} bg-[#0A1330] flex gap-1 items-center mr-1 border-l border-transparent rounded-[4px] p-2 `,children:[" ",e.jsx(c,{})," ",e.jsx("p",{className:"text-nowrap",children:e.jsx("button",{className:"cursor-pointer",name:"app",type:"submit",children:"In-app"})})]}),e.jsxs("div",{className:`${t==="email"&&"bg-[#CB3CFF] text-white"} bg-[#0A1330] flex gap-1 items-center border-r border-transparent  rounded-[4px] p-2 `,children:[" ",e.jsx(o,{})," ",e.jsx("p",{children:e.jsx("button",{className:"cursor-pointer",type:"submit",name:"email",children:"Email"})})]})]})]})})}function f(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid-rows-[auto_auto]",children:[e.jsxs("div",{className:`mb-8 px-8 flex text-[12px] flex-col 
                     xsm:px-1
                      lg:pl-8 lg:pr-2
                    `,children:[e.jsxs("div",{className:`mb-4
                          xsm:text-center
                        `,children:[e.jsx("h1",{className:"text-[16px]",children:"General notifications"}),e.jsx("p",{className:"text-[#AEB9E1]",children:"Lorem ipsum dolor sit amet consectetur adipiscing."})]}),e.jsxs("div",{className:` flex flex-col px-8 bg-[#0B1739] text-[10px] border border-[#343B4F] rounded-[12px]
                        
                        `,children:[e.jsx(s,{title:"I'm mentioned in a message"}),e.jsx(s,{title:"Someone replies to any message"}),e.jsx(s,{title:"I’m assigned a task"}),e.jsx(s,{title:"A task is overdue"})]})]}),e.jsxs("div",{className:`mb-8 px-8 flex text-[12px] flex-col 
      xsm:px-1
       lg:pl-8 lg:pr-2
    `,children:[e.jsxs("div",{className:`mb-4
                         xsm:text-center
                        `,children:[e.jsx("h1",{className:"text-[16px]",children:"Summary notifications"}),e.jsx("p",{className:"text-[#AEB9E1]",children:"Lorem ipsum dolor sit amet consectetur adipiscing."})]}),e.jsxs("div",{className:" flex flex-col px-8 bg-[#0B1739] text-[10px] border border-[#343B4F] rounded-[12px]",children:[e.jsx(s,{title:"Daily summary"}),e.jsx(s,{title:"Weekly summary"}),e.jsx(s,{title:"Monthly summary"}),e.jsx(s,{title:"Annually summary"})]})]}),e.jsx("div",{className:`flex  px-8
                xsm:justify-center
                sm:justify-end
                `,children:e.jsx("div",{className:"bg-[#CB3CFF] rounded-[4px] p-2 w-[200px] flex items-center justify-center ",children:e.jsx("button",{className:"cursor-pointer",children:"Add User"})})})]})})}export{f as default};
