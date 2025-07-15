import React from 'react'
import UserHeader from '../../section/User/UserHeader'
import { FaUserAlt } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import { FaCirclePlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Cards from "../../common/Cards/Cards";
import AllUserTable from '../../common/Tables/ AllUserTable';
import Cards2 from '../../common/Cards/Cards2';

export default function User() {
  return (
   <>
   
   <UserHeader/>
    <div className=" min-[1120px]:flex    gap-4   justify-between py-6
       xsm:grid xsm:grid-cols-1
       sm:grid-cols-2
       
      ">
           <Cards2 title="Total User" value="250" img='../../../public/Images/Group 38685 (1).svg' />
           <Cards2 title="New User" value="15" img='../../../public/Images/Group 38685 (2).svg' />
           <Cards2 title="Top Users" value="200" img='../../../public/Images/Group 38685 (3).svg' />
           <Cards2 title="Other Users" value="35" img='../../../public/Images/Group 38685 (4).svg' />
         </div>

<div className='bg-[#0B1739] rounded-[12px]' >
  <div className='flex justify-between p-8 border-b border-[#343B4F]'>
<div>
  <h1>All Users</h1>
</div>
<div>
  <p>1-10 of 256</p>
</div>
  </div>

<div className=' mt-4'>
 <AllUserTable/>
</div>

  
</div>

   </>

  )
}
