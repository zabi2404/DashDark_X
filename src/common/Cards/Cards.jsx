import React from 'react'

import { BsThreeDots } from "react-icons/bs";

import GrowthButton from '../Buttons/GrowthButton';

export default function Cards(props) {


 
  return (
    <>
    <div className=' w-full '>

<div className='p-4 bg-[#0B1739]  rounded-[8px] border border-[#343B4F]'>
<div className='flex justify-between items-center mb-4'>
<div className='flex items-center text-[#AEB9E1]' >
 
   {props.icon}
<p className=' ml-1 whitespace-nowrap pr-2'>{props.title}</p>
</div>
<BsThreeDots className="text-white" />
</div>

<div className='flex  items-center '>
    <p className='text-white text-[24px]'>{props.value}</p>

<GrowthButton
growth={props.growth}
isGrowthUp={props.isGrowthUp}
/>
</div>

</div>

    </div>
    </>
  )
}


