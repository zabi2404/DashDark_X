import React, { useState } from 'react'
import { IoIosAlert } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function NotificationDialougeBox(props) {
    const [isclick , setIsClick] = useState("");

    const HandleClick = (e)=>{
        const button = e.target.closest('button')
        if(button){

            const btn = e.target.name
            setIsClick(btn);
        }
    
    }
    
    return (
        <>
            <div className='flex items-center justify-between my-8
            xsm:flex-col xsm:gap-4
             sm:flex-row
            '>
                <div className='flex items-center gap-2 text-[12px]'>     
                    <p>{props.title}</p>
                    <IoIosAlert />
                </div>
                <div onClick={HandleClick}  className='flex bg-[#0A1330]  '>
                    <div className={`${isclick==='app'&& 'bg-[#CB3CFF] text-white'} bg-[#0A1330] flex gap-1 items-center mr-1 border-l border-transparent rounded-[4px] p-2 `}> <FaMobile /> <p className='text-nowrap'><button  className='cursor-pointer' name='app' type='submit'>In-app</button></p></div>
                    <div className={`${isclick==='email'&& 'bg-[#CB3CFF] text-white'} bg-[#0A1330] flex gap-1 items-center border-r border-transparent  rounded-[4px] p-2 `}> <MdEmail /> <p><button className='cursor-pointer' type='submit' name='email'>Email</button></p></div>
                </div>
            </div>

        </>
    )
}
