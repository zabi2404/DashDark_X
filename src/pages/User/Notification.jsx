import React from 'react'
import NotificationDialougeBox from '../../common/DialougeBox/NotificationDialougeBox';


export default function Notification() {

    return (
        <>
            <div className='grid-rows-[auto_auto]'>


                <div className='mb-8 px-8 flex text-[12px] flex-col 
                     xsm:px-1
                      lg:pl-8 lg:pr-2
                    '>
                    <div className='mb-4
                          xsm:text-center
                        '>

                        <h1 className='text-[16px]'>General notifications</h1>
                        <p className='text-[#AEB9E1]' >Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </div>

                    {/* input notifications */}
                    <div className=' flex flex-col px-8 bg-[#0B1739] text-[10px] border border-[#343B4F] rounded-[12px]
                        
                        '>

                        <NotificationDialougeBox
                            title="I'm mentioned in a message"
                        />
                        <NotificationDialougeBox
                            title="Someone replies to any message"
                        />
                        <NotificationDialougeBox
                            title="I’m assigned a task"
                        />
                        <NotificationDialougeBox
                            title="A task is overdue"
                        />



                    </div>
                </div>

                {/* ... */}
                <div className='mb-8 px-8 flex text-[12px] flex-col 
      xsm:px-1
       lg:pl-8 lg:pr-2
    '>
                    <div className='mb-4
                         xsm:text-center
                        '>
                        <h1 className='text-[16px]'>Summary notifications</h1>
                        <p className='text-[#AEB9E1]' >Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                    </div>

                    {/* input notifications */}
                    <div className=' flex flex-col px-8 bg-[#0B1739] text-[10px] border border-[#343B4F] rounded-[12px]'>

                        <NotificationDialougeBox
                            title="Daily summary"
                        />
                        <NotificationDialougeBox
                            title="Weekly summary"
                        />
                        <NotificationDialougeBox
                            title="Monthly summary"
                        />
                        <NotificationDialougeBox
                            title="Annually summary"
                        />



                    </div>
                </div>



                <div className='flex  px-8
                xsm:justify-center
                sm:justify-end
                '>
                    <div className='bg-[#CB3CFF] rounded-[4px] p-2 w-[200px] flex items-center justify-center ' >
                        <button className='cursor-pointer'>Add User</button>
                    </div>
                </div>

            </div>

        </>



    )
}