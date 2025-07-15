import React from 'react'
import Input from '../Input';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function PersonalInformationDIalougeBox() {
    return (

        <>
            <div className=' px-8 flex text-[12px] flex-col mb-12
                    xsm:p-1
                     lg:pl-8 lg:pr-2
                    '>
                <div className='mb-4 
                               xsm:text-center
                               
                        '>
                    <h1 className='text-[16px]'>Personal information</h1>
                    <p className='text-[#AEB9E1]' >Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>


                <div className=' flex flex-col p-8 bg-[#0B1739] border border-[#343B4F] rounded-[12px]
xsm:p-4

                        '>
                    <div className='flex pb-6 border-b  border-[#343B4F]
                                                     xsm:flex-col xsm:gap-2
                                                     sm:flex-row
                            '  >
                        <div className='flex gap-2 mr-20 items-center'><FaUser /><p className='text-nowrap'>  Full name</p></div>
                        <Input
                        />
                    </div>
                    <div className='flex mt-6  pb-6 border-b  border-[#343B4F]
                                                     xsm:flex-col xsm:gap-2
                                                     sm:flex-row
                            '>
                        <div className='flex mr-14 gap-2 items-center'>
                            <MdEmail />
                            <p className='text-nowrap'>Email address</p>
                        </div>
                        <Input
                        />
                    </div>

                    <div className='mt-6  pb-[120px] border-b  border-[#343B4F] flex
                                                     xsm:flex-col xsm:gap-2
                                                     sm:flex-row
                            '>
                        <div className='flex mr-25 gap-2 items-center'>
                            <MdInsertPhoto />
                            <p className='text-nowrap'>Photo</p>
                           
                        </div>
                     <input className='flex cursor-pointer justify-between items-center' type="file" />
                    </div>

                    <div className='flex mt-6  pb-6
                                                     xsm:flex-col xsm:gap-2
                                                     sm:flex-row
                            '>
                        <div className='flex mr-10 gap-2 items-center'><FaPen />
                            <p className='text-nowrap'>Short description</p></div>
                        <textarea className='bg-[#0B1739] border border-[#343B4F] w-full p-4  flex justify-center items-center pl-4 rounded-[4px] shadow-sm' rows={3} placeholder='Write a short bio about you...' name="" id=""></textarea>
                    </div>
                </div>
            </div>


        </>
    )
}
