import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import LineChart from "../../common/Charts/Linechart";
import BarChart from "../../common/Charts/Barchart";
import LineChart2 from "../../common/Charts/Linechart2";
import { BsStopwatchFill } from "react-icons/bs";
import Button from "../../common/Buttons/Buttons";
import GrowthButton from '../../common/Buttons/GrowthButton';

export default function ThirdSection() {
  return (
    <>
    <div className="grid    bg-[#0B1739] border border-[#343B4F] rounded-[14px] 
    min-[1400px]:grid-cols-[1fr_minmax(0,370px)] min-[1400px]:gap-0
    
    xsm:grid-cols-1
  

    " >

      {/*  chart first side */}
       <div className='flex flex-col justify-between  border-[#343B4F] max-h-[580px]
        min-[1400px]:border-r
        min-[1400px]:border-b-0
        xsm:border-b
        
       ' >
      <div className="flex items-center justify-between  p-4 pb-0
      min-[1400px]:pt-12
      xsm:flex-col
       sm:flex-row
      ">
        <div >
          <p className="text-[14px] text-[#AEB9E1]">Total revenue</p>
       <div className='flex items-center'>
         <h1 className="text-[24px]">$240.8K</h1>
        <div>
  <GrowthButton
growth="28.5%"
isGrowthUp={true}
/>
</div>
       </div>
      </div>
      <div className="flex items-center justify-between  text-[12px] gap-2
      sm:flex-row
      xsm:flex-col

      
      ">
       <div className='flex justify-center items-center gap-4'> 
        <p>Revenue</p>
        <p>Expenses</p></div>
        <Button
                     title="Export data"
                     color="#0A1330"
                     icon={<FaArrowDownLong className="text-white" />}
                   />
      </div>
      </div>

      <div className=" w-full  h-full  
    sm:p-8
      xsm:pt-4 xsm:p-1
      ">
  <LineChart />
</div>

       </div>

       {/* chart second side */}
        
        <div className="grid max-h-[580px]
        min-[1400]-w-[370px]
        xsm:grid-cols-1
        lg:grid-rows-2
        xsm:pt-10
        sm:pt-0
        lg:pt-0
        ">
           {/* chart second side uper  */}
          <div className=" p-4 border-b border-[#343B4F]
          min-[1300px]:min-w[300px]
          ">
            <div className="flex flex-col text-[#AEB9E1] text-[12px] ">
              <div className="flex items-center gap-1  mb-2">
                <BsStopwatchFill />
                <h4>Total Proft
                </h4></div>
              <div className='flex 
               items-center'>
                <h2 className="text-white text-[24px]">$144.2k</h2>

<div>
  <GrowthButton
growth="28.5%"
isGrowthUp={true}
/>
</div>
              </div>
            </div>
            <div className="flex justify-center items-center "  >
              <div className=" 
            min-[1400px]:max-w-[280px] 
            max-[480px]:w-[200px]
        
            ">
                <BarChart />
            </div>
            </div>
            <div className="flex justify-between items-center pt-5">
              <div><p className="text-[#7E89AC]">Last 12 months</p></div>
              <p className="text-[#CB3CFF]">View Reports</p>
            </div>
          </div>

{/* chart second side bottom */}
          <div className=" p-4           min-[1300px]:min-w[300px]">
            <div className="flex flex-col text-[#AEB9E1] text-[12px] mb-2.5">
              <div className="flex items-center gap-1  mb-2">
                <BsStopwatchFill />
                <h4>Total sessions
                </h4></div>
              <div className='flex items-center'>
                <h2 className="text-white text-[24px]">400</h2>
<div>
  <GrowthButton
growth="28.5%"
isGrowthUp={true}
/>
</div>
              </div>
            </div>

            <div className="flex justify-center items-center " > 
              <div  className="w-[320px] 
              max-[480px]:w-[220px]
              " >
                <LineChart2 />
              </div>
              </div>
            <div className="flex justify-between items-center mt-2.5 ">
              <div><p className="text-[#7E89AC]">10k visitors</p></div>
              <p className="text-[#CB3CFF]">View Reports</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
