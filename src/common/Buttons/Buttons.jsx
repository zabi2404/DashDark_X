import React from 'react'

export default function Buttons(props) {
  return (
    <div className=' h-[30px] whitespace-nowrap  p-4 rounded-[4px] flex items-center shadow-md cursor-pointer'
     style={{ backgroundColor: props.color || '#CB3CFF' }}
    >
        <p className='text-[14px] text-white'>{props.title}</p>
       {props.icon && (
  <span className='ml-2'>
    {props.icon}
  </span>
)}

    </div>
  )
}
