import React from 'react'
import DialougeBox from '../../common/DialougeBox/DialougeBox'
import { FaCirclePlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import BillingCard from '../../common/Cards/BillingCard';
import Buttons from '../../common/Buttons/Buttons';

export default function
    () {
    return (
        <>
                <div className='grid-rows-[auto_auto]'>


                    <div className='mb-8  flex text-[12px] flex-col 
                     xsm:px-0
                     lg:pl-8 lg:pr-2
                    '>
                        <div className='mb-4
                          xsm:text-center
                        '> 
                            <h1 className='text-[16px]'>Payment methods</h1>
                            <p className='text-[#AEB9E1]' >Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                        </div>
                        <div className=' flex flex-col  bg-[#0B1739] text-[10px] border border-[#343B4F] rounded-[12px]
                          xsm:p-4
                          md:p-8
                        '>

                            {/* card info */}
                            <BillingCard
                                icon="Group 1000005113.svg"
                                CardName="VISA****8092"
                                Expiry="Expires on 12/16"
                            />
                            <BillingCard
                                icon="Group 1000005113 (2).svg"
                                CardName="Mastercard **** 8092"
                                Expiry="Expires on 12/16"
                            />
                            <BillingCard
                                icon="Group 1000005113 (1).svg"
                                CardName="American Express **** 8092"
                                Expiry="Expires on 12/16"
                            />


                            <div className='flex gap-2 items-center mt-3' >
                                <FaCirclePlus className='text-[#AEB9E1]' />

                                <p className='text-[#AEB9E1]'>Add a new payment method</p>
                            </div>

 

                        </div>
                    </div>




                    
                    <DialougeBox
                        title="Billing address"
                        subTitle="Lorem ipsum dolor sit amet consectetur adipiscing."
                        inputField1="Full name"
                        margin1="mr-10"
                        placeholder1="(123) 456 - 7890"
                        inputField2="Address"
                          margin2="mr-12"
                        placeholder2="CEO & Founder"
                        inputField3="State"
                          margin3="mr-16"
                        placeholder3="New York, NY"
                        inputField4="Zip code"
                          margin4="mr-11"
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
