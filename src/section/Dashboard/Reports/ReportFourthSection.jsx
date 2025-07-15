import React from 'react'
import OrderStatusTable from '../../../common/Tables/OrderStatusTable';
import Button from "../../../common/Buttons/Buttons";
import { FaArrowDownLong } from "react-icons/fa6";
import CalendarButton from '../../../common/Buttons/CalendarButton';

export default function ReportFourthSection() {
  
  return (
   <>
   
   <div className='mt-4 bg-[#0B1739] border border-[#343B4F] rounded-[14px] '>
<div className='p-6 flex justify-between items-center 
 sm:flex-row
    xsm:flex-col xsm:gap-4
'>
    <div><h1>Order Status</h1></div>
    <div className='flex items-center gap-4 
    md:flex-row
    xsm:flex-col 
    '>
   
<CalendarButton
title="Jan 24"
color='#0A1330'
/>

            <Button
              title="Create Order"
              color="#CB3CFF"
             
            />
    </div>
  </div>
< OrderStatusTable/>

</div>
   </>
  )
}
