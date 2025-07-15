import React from 'react'
import { IoClose } from "react-icons/io5";
export default function BillingCard(props) {
  return (
    <>
      <div className=' relative bg-[#0B1739] border border-[#343B4F]  h-[44px] flex gap-2  items-center py-8 px-4 rounded-[8px] shadow-sm mb-2 '  >
    
                                   <input  className=' cursor-pointer' type="checkbox" name="" id="" />
                                   <img src={`./public/images/${props.icon}`} alt="" />
                                  <div>
                                     <p>
                                    {props.CardName}
                                   </p>
                                   <p className='text-[#AEB9E1]'>{props.Expiry}</p>
                                  </div>
                                 <IoClose className='absolute  top-2 right-2 text-[20px] cursor-pointer'/>
    
                                </div>
    </>
  )
}
