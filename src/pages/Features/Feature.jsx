import React from 'react'
import HeaderTemplate from "../TemplatePage/HeaderTemplate"
import Buttons from '../../common/Buttons/Buttons'
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa6";



export default function Feature() {
  

  return (
    <>

      <div className='
        xsm:mb-4
        lg:mb-0
        '>
        <HeaderTemplate title="Messages" />
      </div>

      <div className='grid min-[1150px]:grid-cols-[30%_70%]
xsm:grid-cols-1 xsm:gap-8
min-[1150px]:gap-0


'>
        <div>

          <div>
            <h1 className='
            xsm:text-center
            md:text-start
            mb-2
            ' 
            >Active</h1>
            <ul className='flex  gap-4
             xsm:justify-center
            md:justify-start
            '>
              <li><img src="../../../public/Images/Avatar Circle.svg" alt="" /></li>
              <li><img src="../../../public/Images/Avatar Circle.svg" alt="" /></li>
              <li><img src="../../../public/Images/Avatar Circle.svg" alt="" /></li>
              <li><img src="../../../public/Images/Avatar Circle.svg" alt="" /></li>
              <li><img src="../../../public/Images/Avatar Circle.svg" alt="" /></li>
            </ul>
          </div>

          <div className='mt-10'>
            <div>
              <h1>Messages <span>40</span></h1>
            </div>
            <div className='mt-4 '>

              <ul>

                <li className='border-b border-[#0B1739] hover:bg-[#0B1739] cursor-pointer'>
                  <div className='text-[12px] p-4'>
                    <div className='flex justify-between' >

                      <div className='flex gap-2'>
                        <img src="../../../public/Images/Avatar Circle.svg" alt="" />
                        <div className=''>
                          <h1>Patrick Meyer</h1>
                          <p className='text-[#AEB9E1]'>@patrickmeyer</p>
                        </div>
                      </div>

                      <p>5 min ago</p>

                    </div>

                    <div className='mt-4'>
                      <p>Lorem ipsum dolor sit amet consectetur non arcu non mauris quis diam lectus commodo.</p>
                    </div>
                  </div>
                </li>

                <li className='border-b border-[#0B1739] hover:bg-[#0B1739] cursor-pointer'>
                  <div className='text-[12px] p-4'>
                    <div className='flex justify-between' >

                      <div className='flex gap-2'>
                        <img src="../../../public/Images/Avatar Circle.svg" alt="" />
                        <div className=''>
                          <h1>Patrick Meyer</h1>
                          <p className='text-[#AEB9E1]'>@patrickmeyer</p>
                        </div>
                      </div>

                      <p>5 min ago</p>

                    </div>

                    <div className='mt-4'>
                      <p>Lorem ipsum dolor sit amet consectetur non arcu non mauris quis diam lectus commodo.</p>
                    </div>
                  </div>
                </li>

                <li className='border-b border-[#0B1739] hover:bg-[#0B1739] cursor-pointer'>
                  <div className='text-[12px] p-4'>
                    <div className='flex justify-between' >

                      <div className='flex gap-2'>
                        <img src="../../../public/Images/Avatar Circle.svg" alt="" />
                        <div className=''>
                          <h1>Patrick Meyer</h1>
                          <p className='text-[#AEB9E1]'>@patrickmeyer</p>
                        </div>
                      </div>

                      <p>5 min ago</p>

                    </div>

                    <div className='mt-4'>
                      <p>Lorem ipsum dolor sit amet consectetur non arcu non mauris quis diam lectus commodo.</p>
                    </div>
                  </div>
                </li>




              </ul>

            </div>
          </div>
        </div>


        <div className='bg-[#0B1739] rounded-[8px] border border-[#343B4F] overflow-hidden'>
          <div className='flex justify-between items-center p-6 border-b  border-[#343B4F]'>


            <div className=' flex gap-2'>
              <div>  <img src="../../../public/Images/Group 1000004743.svg" alt="" /></div>
              <div><h1 className='text-[16px]'>Sophie Moore</h1>
                <p className='text-[12px] text-[#AEB9E1]'>@sophiemoore</p></div>

            </div>


            <div>
              <Buttons
                title="Call"
              />
            </div>

          </div>
          <div className='h-[400px] flex justify-center items-center'>
            <h1 className='text-[#AEB9E1] text-6'>  Messages </h1>
          </div>

          <div className='bg-[#081028] flex justify-between items-center p-4'>

            <div className='placeholder:text-white '>
              <input className='
              xsm:w-[90px]  xsm:mr-1
              md:min-w-[352px]
            lg:w-[550px]
              ' type="text" placeholder='Type a message' />
            </div>

            <div className='flex items-center gap-2 '>
              <BsEmojiSmileFill className='text-white' />
              <FaPaperclip className='text-white' />
              <Buttons
                title="Send Now"
              />
            </div>

          </div>


        </div>

      </div>


    </>
  )
}