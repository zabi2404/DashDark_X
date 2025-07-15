import React from 'react'
import { BsThreeDots } from "react-icons/bs";


export default function Cards2(props) {
  return (
    <>
    
     <div className=' w-full '>
    
    <div className='p-4 bg-[#0B1739]  rounded-[8px] border border-[#343B4F]'>
    <div className='flex justify-between items-center '>
    <div className='flex justify-start text-[#AEB9E1]' >
     
       <img src={props.img} alt="" />
   <div >
     <p className=' ml-1 text-white whitespace-nowrap pr-2'>{props.title}</p>
<p className='ml-1 pr-2  text-[12px]'>{props.value}</p>
   </div>
    </div>
    <BsThreeDots className="text-white rotate-90" />
    </div>
    
   
    </div>
    
        </div>
    
    </>
  )
}
