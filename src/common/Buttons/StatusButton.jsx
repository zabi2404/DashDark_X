import React from 'react'

export default function StatusButton(props) {
    
  return (
       <div className= {`border ${props.title==='Paid'?`border-[#05C16880]`:`border-[#FFB01633]`} h-[30px] w-fit whitespace-nowrap  p-4 rounded-[4px] flex items-center shadow-md cursor-pointer`}
     style={{ backgroundColor: props.title==='Paid'?'#05C16833':'#FFB01633'}}
    >
        <p className={`text-[14px] ${props.title==='Paid'?`text-[#14CA74]`:`text-[#FDB52A]`} `}>{props.title}</p>

    </div>
  )

  
}


