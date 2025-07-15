import React from 'react'

export default function Input(props) {

  return (
    <>
    <div className={` bg-[#0B1739] border border-[#343B4F]  h-[44px] flex justify-center items-center pl-4 rounded-[4px] shadow-sm  min-w-[200px] ${props.width || 'max-w-[342px]'}` }>
            {/* <img className='h-[20px] w-[20px]' src={props.icon} alt="Search Icon" /> */}
          {props.icon && <span className='pr-4'>{props.icon}</span>}
            <input className='w-full h-full outline-none caret-white  placeholder-[#AEB9E1]' placeholder={props.placeholder} type="text" name="" id="" />
          </div>
    </>
  )
}
