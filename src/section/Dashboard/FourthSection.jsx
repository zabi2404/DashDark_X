import React from 'react'
import Button from "../../common/Buttons/Buttons";
import { FaArrowDownLong } from "react-icons/fa6";
import CalendarButton from '../../common/Buttons/CalendarButton';

export default function FourthSection() {
  return (
<>
 <div className="flex flex-col gap-4  py-6
 



 ">
        <div>
          <h1 className="text-[24px] text-white 
          xsm:text-center
          lg:text-start
          ">
            Reports Overview</h1>
       
        </div>

        <div className="flex items-center justify-between  
        xsm:flex-col xsm:gap-6 
        lg:flex-row
        ">

 <CalendarButton
 title="Select date"
      color="#0A1330"
        />

         <div className="flex items-center  gap-6 max-[480px]:flex-col" >
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
      </div>
</>
  )
}
