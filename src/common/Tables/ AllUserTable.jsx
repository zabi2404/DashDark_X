import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import {AllUserTabledata} from "../../../public/Data"

export default function  AllUserTable() {
  return (
   <>
   
    <div className='overflow-x-auto customScroll bg-[#0B1739]  '>
        <table className=' text-white text-sm w-[1040px] '>
    <thead>
      <tr>
       <th className=''>-</th>
        <th className='w-1/6'>Name</th>
        <th className='w-1/6'>Phone</th>
        <th className='w-1/6'>Location</th>
        <th className='w-1/6'>Company</th>
        <th className='w-1/6'>Status</th>
        </tr>
    </thead>

    
    <tbody>

{AllUserTabledata.map((item) => (
  <tr key={item.id} className='text-center'>
    <td className='p-8'><input type="checkbox" /></td>
    <td className='p-8'>
      <div className='flex gap-2'>
        <img src="../../../public/Images/Avatar Circle.svg" alt="" />
        <div className='text-start'>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      </div>
    </td>
    <td>{item.phone}</td>
    <td>{item.country}</td>
    <td>{item.company}</td>
    <td>{item.status}</td>
    <td>
      <div className='flex gap-2 pr-4'> <FaPen /> <MdDelete /></div>
    </td>
  </tr>
))}


      

        
    </tbody>
  </table>
    </div>
   
   </>
  )
}
