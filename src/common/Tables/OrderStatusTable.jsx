import React, { useState } from 'react'
import { MdIndeterminateCheckBox } from "react-icons/md";
import { BsCalendar2Fill } from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import StatusButton2 from '../Buttons/StatusButton2';
import { OrderStatusTabledata } from '../../../public/Data';

export default function OrderStatusTable() {

  const [checked , setChecked] = useState([]);
  
  const toggleRow =(id)=>{
 setChecked((prev)=>
prev.includes(id)? prev.filter((x)=>x!==id) : [...prev,id]
)
  };

  return (
   <>
    
  <div className='overflow-x-auto customScroll bg-[#0B1739]'>
    <table className='text-sm w-[1040px]'>
      <thead>
  <tr className="align-middle text-[10px]">
    <th className="pl-6 py-6 align-middle w-1/6">
      <div className="flex items-center gap-1">
        <MdIndeterminateCheckBox /> Order
      </div>
    </th>

    <th className="align-middle py-6 w-1/6">
      <div className="flex items-center gap-1">
        <FaUserAlt /> Client
      </div>
    </th>


    <th className="align-middle py-6 w-1/6">
      <div className="flex items-center gap-1">
        <BsCalendar2Fill /> Date
      </div>
    </th>

    <th className="align-middle py-6 w-1/6">
      <div className="flex items-center gap-1">
        <IoCheckbox /> Status
      </div>
    </th>

    <th className="align-middle py-6 w-1/6">
      <div className="flex items-center gap-1">
        <FaLocationDot /> Country
      </div>
    </th>

    <th className="align-middle w-1/6 pr-8">Total</th>
  </tr>
</thead>

<tbody className=''>

 


         
{OrderStatusTabledata.map((item )=>{
  const rowcheced = checked.includes(item.orderNo);
return(

<tr className={` bg-[] text-[10px] ${rowcheced && `bg-[#0A1330]`}`}>
  
        <td className='py-6 pl-6' ><div className='flex items-center'><input  onChange={()=>{toggleRow(item.orderNo)}} className=' accent-[#CB3CFF]'  type="checkbox" /> <p>{item.orderNo}</p></div></td>
        <td className=' ' ><div  className='flex flex-col'>
            <h1>{item.client}</h1>
            <p className='text-[#AEB9E1] '>{item.email}</p>
            </div></td>
        <td className='align-middle py-6' >{item.date}</td>
        <td className='align-middle py-6' >
           <StatusButton2
          title={`${rowcheced? `Delivered` : `Canceled`}`}
          />
        </td>
        <td className='align-middle py-6' >{item.country}</td>
        <td className='pl-8 py-6 pr-6' >$ {item.total}</td>
        <td className='pl-8 py-6 pr-8 text-[15px]' > <div className='flex gap-2 pl-4 cursor-pointer'> <FaPen/> <MdDelete/></div></td>
        </tr>

)

})

}

        

</tbody>

    </table>
  </div>
   </>
  )
}




