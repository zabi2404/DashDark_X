import React from 'react'
import Input from '../../common/Input'
import { CiSearch } from "react-icons/ci";
import Buttons from '../../common/Buttons/Buttons';

export default function HeaderTemplate(props) {
  return (
    <>
   <div className='flex justify-between items-center 
     xsm:flex-col xsm:gap-5
         md:flex-row
         xsm:mb-4 sm:mb-0\
          md:flex-wrap
   '>
     <div className='flex lg:gap-15  p-6 items-center
         
         xsm:flex-col xsm:gap-5
         md:flex-row
         '>
                    <h1 className='text-[20px] text-nowrap'>{props.title}</h1>
                    <div>
    
                        <Input 
                            placeholder="Search for ..."
                        width="max-w-[342px]"
                            icon={<CiSearch />}
                        />
                    </div>
                </div>

      
                  <Buttons className=""
                title="Add New Product"
            
                />
             
   </div>
    </>
  )
}
