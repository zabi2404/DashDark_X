import React from 'react'

export default function StatusButton2(props) {
    
  return (
       <div className= {`border ${props.title==='Delivered'?`border-[#05C16880]`:`border-[#FF5A6533]`} h-[30px] w-fit whitespace-nowrap  p-4 rounded-[4px] flex items-center shadow-md cursor-pointer`}
     style={{ backgroundColor: props.title==='Delivered'?'#05C16833':'#FF5A6533'}}
    >
        <p className={`text-[14px] ${props.title==='Delivered'?`text-[#14CA74]`:`text-[#FF5A65]`} `}>{props.title}</p>

    </div>
  )

  
}


