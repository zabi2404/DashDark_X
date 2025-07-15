import React from 'react'
import Input from '../../common/Input'
import { CiSearch } from "react-icons/ci";
export default function UserHeader() {
  return (
   <>
     <div className='flex lg:gap-15  p-6 items-center
     
     xsm:flex-col xsm:gap-5
     md:flex-row
     '>
                <h1 className='text-[20px]'>Add User</h1>
                <div>

                    <Input 
                        placeholder="Search for ..."
                    // width="w-[342px]"
                        icon={<CiSearch />}
                    />
                </div>
            </div>
            
   </>
  )
}
