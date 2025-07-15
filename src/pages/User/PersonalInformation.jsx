import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import DialougeBox from '../../common/DialougeBox/DialougeBox';
import PersonalInformationDIalougeBox from '../../common/DialougeBox/PersonalInformationDIalougeBox';
import Buttons from '../../common/Buttons/Buttons';

export default function AddUser() {

    return (
        <>
            <PersonalInformationDIalougeBox />
            <DialougeBox
                title="Basic information"
                subTitle="Lorem ipsum dolor sit amet consectetur adipiscing."
                inputField1="Phone"
                icon={[FaUser, MdEmail, MdInsertPhoto, FaPen]}
                placeholder1="(123) 456 - 7890"
                inputField2="Position"
                placeholder2="CEO & Founder"
                inputField3="Location"
                placeholder3="New York, NY"
                inputField4="Website"
                placeholder4="dashdark.com"
            />
               <div className='flex justify-end mt-8 pr-2 '>
                        <Buttons
                       title="Submit"
                       
                       />
                       </div>
        </>
    )
}
