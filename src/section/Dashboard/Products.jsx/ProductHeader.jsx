import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import Button from '../../../common/Buttons/Buttons';
import CalendarButton from '../../../common/Buttons/CalendarButton';
export default function ProductHeader(props) {
  return (
   <>
   
    <div className="flex justify-between py-6 items-center
    
    ">
             <h1>{props.title}</h1>
   
             <div className="flex items-center gap-6
               sm:flex-row
            xsm:flex-col  
             ">
   
              <CalendarButton
              title="May 2023"
              color="#CB3CFF"
              
              />
             </div>
           </div>
   </>
  )
}
