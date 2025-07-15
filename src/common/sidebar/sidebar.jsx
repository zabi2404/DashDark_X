import React from 'react'
import Data from '../../../public/Data';
import Menulink from './Menulink'
import { MenuLink2 } from '../../../public/Data';
import { FaArrowRight } from "react-icons/fa6";
import Input from '../Input';
import { CiSearch } from "react-icons/ci";

export default function sidebar(props) {

  const [activelink, setActiveLink] = React.useState(null); 


  return (
    <>

      <div className='h-full overflow-y-scroll customScroll pd-4 ' >
        <div className='mb-4'>
          <div className='flex justify-between mb-8'>
            <img src="/Logo.svg" alt="Logo" />
           
         
          </div>
<div className='mb-8'> 
<Input
placeholder="Search for ..."
icon = {<CiSearch />}
/>
</div> 
          
        </div>

        <div className=''>

          <ul className='text-[#AEB9E1] text-[14px] font-[500] w-full '>
            {
              Data.map((item, index) => (
                <Menulink key={index} title={item.title}
                  icon={item.icon}
                  to={item.to}
                  activelink={activelink}
                  setActiveLink={setActiveLink}
                />
              ))
            }
          </ul>
          <hr className='border-t-[#FFFFFF]' />
          <ul className='text-[#AEB9E1] text-[14px] font-[500] w-full '>
            {
              MenuLink2.map((item, index) => (
                <Menulink key={index} title={item.title}
                  icon={item.icon}
                  to={item.to}
                  activelink={activelink}
                  setActiveLink={setActiveLink}
                />
              ))
            }
           
            <Menulink
              title="Account Settings"
              name="John Cater"
              img="../../../public/Images/Group 39488.svg"
               to="/accountsetting"
                  activelink={activelink}
                  setActiveLink={setActiveLink}
            /> 

          </ul>
          <div className="bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB] flex items-center justify-center rounded-[4px] mt-16">
            <button type="submit" className='text-white h-[44px] cursor-pointer flex items-center justify-between '>
              Get  Template
              <FaArrowRight className='ml-2' />

            </button>
          </div>
        </div>
      </div>
    </>
  )
}

