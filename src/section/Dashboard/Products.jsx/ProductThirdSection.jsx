import React from 'react'
import { GoClockFill } from "react-icons/go";
import Buttons from "../../../common/Buttons/Buttons";
import { FaArrowDownLong } from "react-icons/fa6";
import Linechart3 from '../../../common/Charts/Linechart3';
import GrowthButton from '../../../common/Buttons/GrowthButton';


export default function ProductThirdSection() {
  return (
  <div className='  grid min-[1300px]:grid-cols-[.9fr_2fr] pt-4 
  xsm:grid-cols-1 xsm:gap-4 
  min-[1300px]:gap-0
 
  '>


<div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] p-6 min-w-[300px]'>
  <div className='mb-6'><h1>Products</h1></div>
<table className='w-full'>
  <thead className='text-[10px]'>
    <tr ><td className='pb-8'>Products</td>
    <td className='pb-8'>Price</td></tr>
  </thead>
  <tbody>
    <tr className='mb-6'>
      <td className='flex pb-8 '>
         <img src="/public/images/Mask Group.svg" alt="" />
       <div>
         <h1>Iphone 14 pro max</h1>
        <p  className='text-[10px]'>524 in stocks</p>
       </div>
      </td>
      <td className=' pb-8'>
       
<div  className='text-[10px]'> $ 1,099.00</div>
      </td>
    </tr>
    <tr>
      <td className='flex '>
        <img src="/public/images/Mask Group (1).svg" alt="" />
       
      <div>  <h1>Iphone 14 pro max</h1>
        <p className='text-[10px]'>524 in stocks</p></div>
      </td>
      <td>
        <p  className='text-[10px]'>$ 1,099.00</p>

      </td>
    </tr>
  </tbody>
</table>
</div>

<div className=' bg-[#0B1739] border border-[#343B4F] rounded-[14px] min-[1300px]:ml-5 p-2
xsm:ml-0

' >
<div className='p-4'>
  <div className='flex items-center gap-2 mb-4'><GoClockFill />
    <p className='text-[12px] text-[#AEB9E1]'> 
Completed tasks over time</p>
  </div>
<div className='flex items-center justify-between'>
 <div className='flex items-center'>
   <h1 className='text-[24px]'>257 </h1>
      <div>
      <GrowthButton
    growth="28.5%"
    isGrowthUp={true}
    />
    </div>
 
 </div>
 <Buttons
            title="Export data"
            color="#0A1330"
            icon={<FaArrowDownLong className="text-white" />}
          />
</div>
</div>
<div className='h-[150px] w-full flex items-center pl-4'>
  <Linechart3/>
</div>
</div>

</div>
  )
}
