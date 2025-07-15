import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Input from '../Input'

export default function DialougeBox(props) {
    const [Icon1,Icon2,Icon3,Icon4] = props.icon
  return (
   <>
   
    <div className='  flex text-[12px] flex-col 
      xsm:px-0 
      lg:pl-8 lg:pr-2
    '>
                           <div className='mb-4
                           xsm:text-center
                           '> 
                           <h1 className='text-[16px]'>{props.title}</h1>
                               <p className='text-[#AEB9E1]' >{props.subTitle}</p>
                           </div>
                           
                           {/* Table */}
                           <div className=' flex flex-col  bg-[#0B1739] border border-[#343B4F] rounded-[12px]
                           xsm:p-4
                           sm:p-8
                           '>
                               <div className='flex pb-6 border-b  border-[#343B4F]
                               xsm:flex-col xsm:gap-2
                               sm:flex-row
                               '  >
                                   <div className={`flex gap-2  items-center ${props.margin1 || `mr-20`}`}><Icon1 />
                                   <p className='text-nowrap'> {props.inputField1}</p>
                                   </div>
                                   <Input
                                   placeholder={props.placeholder1}
                                   />
                               </div>
                               <div className='flex mt-6  pb-6 border-b  border-[#343B4F]
                                 xsm:flex-col xsm:gap-2
                                 sm:flex-row
                               '>
                                   <div className={`flex ${props.margin2 ||`mr-18`} gap-2 items-center`}>
                                       <Icon2 />
                                       <p className='text-nowrap'>{props.inputField2}</p>
                                   </div>
                                   <Input
                                    placeholder={props.placeholder2}
                                   />
                               </div>
   
                               <div className='mt-6  pb-6 border-b  border-[#343B4F] flex
                                 xsm:flex-col xsm:gap-2
                                 sm:flex-row
                               '>
                                   <div className={`flex ${props.margin3 || `mr-17`} gap-2 items-center`}>
                                       <Icon3 />
                                       <p className='text-nowrap'>{props.inputField3}</p>
                                      
                                   </div>
                                    <Input
                                     placeholder={props.placeholder3}
                                   />
                               </div>
   
                               <div className='flex mt-6  pb-6 
                                 xsm:flex-col xsm:gap-2
                                 sm:flex-row
                               '>
                                   <div className={`flex ${props.margin4 || `mr-18`} gap-2 items-center`}><Icon4 />
                                       <p className='text-nowrap'>{props.inputField4}</p></div>
                                    <Input
                                     placeholder={props.placeholder4}
                                   />
                               </div>
                           </div>
   
                       </div>
   
   </>
  )
}
