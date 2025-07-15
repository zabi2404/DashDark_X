import React from 'react'
import { FaUser } from "react-icons/fa";
import DialougeBox from '../../common/DialougeBox/DialougeBox'
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Buttons from '../../common/Buttons/Buttons';

export default function Team() {
  return (

    <>
    
 <div className='grid-rows-[auto_auto]'>
    <DialougeBox
     title="Team information"
                        subTitle="Lorem ipsum dolor sit amet consectetur adipiscing."
                        inputField1="Team Num"
                        margin1="mr-10"
                       placeholder1="(123) 456 - 7890"
                        inputField2="Rank"
                         placeholder2="CEO & Founder"
                        inputField3="Office"
                         placeholder3="New York, NY"
                        inputField4="email"
                         placeholder4="dashdark.com"
                        icon={[FaUser, MdEmail, MdInsertPhoto, FaPen]}
    />
    </div>
     <div className='flex justify-end mt-8 pr-2 '>
              <Buttons
             title="Submit"
             
             />
             </div>
    </>
  )
}
