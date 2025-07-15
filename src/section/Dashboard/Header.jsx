import React from 'react'
import Button from "../../common/Buttons/Buttons";
import { FaArrowDownLong } from "react-icons/fa6";



export default function Header() {
  return (
    <>

      <div className="flex justify-between pt-6 items-center
     lg:flex-row
     xsm:flex-col 
     
     
     ">
        <div className='    xsm:text-center xsm:pb-4
          lg:text-start
            '>
          <h1 className="text-[24px] text-white">Welcome back, John</h1>
          <p className="text-[12px] text-[#AEB9E1]">Measure your advertising ROI and report website traffic.</p>
        </div>
        <div className="flex items-center gap-6
            sm:flex-row
            xsm:flex-col            
            ">

          <Button
            title="Export data"
            color="#0A1330"
            icon={<FaArrowDownLong className="text-white" />}
          />
          <Button
            title="Create report"
            color="#CB3CFF"
          />
        </div>
      </div>
    </>
  )
}
