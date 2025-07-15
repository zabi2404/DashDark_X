import{r as c,j as e}from"./index-HyFbeki4.js";import{d as l,M as g}from"./Mcalendar-SzThIS3k.js";import{B as t}from"./Buttons-CD2tmVLW.js";import{I as N}from"./Input-Co_jsBrU.js";function s({initialMonth:n,initialYear:d}){const[i,x]=c.useState(l());c.useEffect(()=>{if(n&&d){const r=l().set("month",n-1).set("year",d);x(r)}},[n,d]);const o=i.startOf("month"),m=i.endOf("month"),h=o.day(),j=m.date(),b=["S","M","T","W","T","F","S"],v=()=>{const r=Array(h).fill(null),a=Array.from({length:j},(f,p)=>p+1);return[...r,...a]};return e.jsxs("div",{className:"max-w rounded-2xl shadow p-4",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsx("h2",{className:"text-[14px] text-white",children:i.format("MMMM YYYY")})}),e.jsx("div",{className:"grid grid-cols-7 gap-2 text-center text-[12px] text-white",children:b.map(r=>e.jsx("div",{className:"py-1",children:r},r))}),e.jsx("div",{className:"grid grid-cols-7 gap-2 mt-2 text-center text-[12px]",children:v().map((r,a)=>e.jsx("div",{className:`h-6 flex items-center justify-center rounded-lg ${r===i.date()&&i.isSame(l(),"month"),"text-white"} ${r?"":"invisible"}`,children:r},a))})]})}function A(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`flex justify-between items-center md:mb-4
   xsm:flex-col xsm:gap-5
         md:flex-row
         xsm:mb-4 sm:mb-0
`,children:[e.jsx("div",{children:e.jsx("h1",{children:"Calendar"})}),e.jsx("div",{children:e.jsx(t,{title:"Monthly"})})]}),e.jsxs("div",{className:`grid  min-[1300px]:grid-cols-[25%_75%] min-[1300px]:gap-4
  xsm:grid-col-1 
      `,children:[e.jsxs("div",{className:`bg-[#0B1739] p-6 flex flex-col 
       
        gap-4
        min-[1300px]:justify-between
        
        xsm:mb-8

        `,children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"p-4 w-[200px]",children:e.jsx(t,{title:"Create Schedule"})}),e.jsx("div",{className:"border border-[#F1F4FA] rounded-[7px]",children:e.jsx(g,{})}),e.jsxs("div",{className:"mt-8 flex flex-col justify-between",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"mb-4",children:"People"}),e.jsx(N,{})]}),e.jsx("div",{className:" mt-4",children:e.jsxs("ul",{className:"text-[12px]",children:[e.jsxs("li",{className:"p-2 flex gap-2 ",children:[e.jsx("div",{children:e.jsx("img",{src:"../../../public/Images/Ellipse 96.svg",alt:""})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Eddie Lobanovskiy"}),e.jsx("p",{className:"text-[#AEB9E1]",children:"laboanovskiy@gmail.com"})]})]}),e.jsxs("li",{className:"p-2 flex gap-2 ",children:[e.jsx("div",{children:e.jsx("img",{src:"../../../public/Images/Ellipse 96.svg",alt:""})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Eddie Lobanovskiy"}),e.jsx("p",{className:"text-[#AEB9E1]",children:"laboanovskiy@gmail.com"})]})]}),e.jsxs("li",{className:"p-2 flex gap-2 ",children:[e.jsx("div",{children:e.jsx("img",{src:"../../../public/Images/Ellipse 96.svg",alt:""})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Eddie Lobanovskiy"}),e.jsx("p",{className:"text-[#AEB9E1]",children:"laboanovskiy@gmail.com"})]})]})]})})]})]}),e.jsx("div",{children:e.jsx(t,{title:"My Schedule"})})]}),e.jsxs("div",{className:`grid md:grid-cols-3 md:gird-row-4
        xsm:grid-cols-2 xsm:grid-row-6

        
        `,children:[e.jsx("div",{className:` border-b md:border-r  border-[#7E89AC]
   xsm:border-r
         `,children:e.jsx(s,{initialMonth:1,initialYear:2025})}),e.jsx("div",{className:`border-b md:border-r  border-[#7E89AC]
           
           
           `,children:e.jsx(s,{initialMonth:2,initialYear:2025})}),e.jsx("div",{className:`border-b   border-[#7E89AC]
           xsm:border-r
           md:border-r-0
           `,children:e.jsx(s,{initialMonth:3,initialYear:2025})}),e.jsx("div",{className:`border-b md:border-r border-[#7E89AC]
           
           `,children:e.jsx(s,{initialMonth:4,initialYear:2025})}),e.jsx("div",{className:`border-b md:border-r border-[#7E89AC]
           xsm:border-r
           
           `,children:e.jsx(s,{initialMonth:5,initialYear:2025})}),e.jsx("div",{className:`border-b   border-[#7E89AC]
           
           `,children:e.jsx(s,{initialMonth:6,initialYear:2025})}),e.jsx("div",{className:`border-b md:border-r  border-[#7E89AC]
           xsm:border-r
           `,children:e.jsx(s,{initialMonth:7,initialYear:2025})}),e.jsx("div",{className:`border-b md:border-r border-[#7E89AC]
           
           `,children:e.jsx(s,{initialMonth:8,initialYear:2025})}),e.jsx("div",{className:`border-b   border-[#7E89AC]
           xsm:border-r
            md:border-r-0
           `,children:e.jsx(s,{initialMonth:9,initialYear:2025})}),e.jsx("div",{className:"border-b md:border-r  border-[#7E89AC]",children:e.jsx(s,{initialMonth:10,initialYear:2025})}),e.jsx("div",{className:`md:border-b md:border-r border-[#7E89AC]
           xsm:border-r
           `,children:e.jsx(s,{initialMonth:11,initialYear:2025})}),e.jsx("div",{className:"md:border-b   border-[#7E89AC]",children:e.jsx(s,{initialMonth:12,initialYear:2025})})]})]})]})}export{A as default};
