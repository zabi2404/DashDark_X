import React from 'react'
import { Link } from 'react-router-dom';
import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';


export default function CloseSIdeBar(props) {
  const location = useLocation();
  return (
  <>
  <div className='fixed top-30 '>
<div className='flex flex-col  gap-20 '>

    <Link onClick={()=>{props.setIsOpen(true)}}  to="/">
        <RiHomeFill className={`${  location.pathname === '/'  ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>


      <Link onClick={()=>{props.setIsOpen(true)}} to="/feature">
        <FaStar className={`${  location.pathname === '/feature'  ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>


      <Link onClick={()=>{props.setIsOpen(true)}} to="/user">
        <FaUser className={`${  location.pathname === '/user'  ? 'text-[#CB3CFF]' : "white"}`} />
      </Link>

 
      <Link onClick={()=>{props.setIsOpen(true)}} to="/pricing">
        <PiCurrencyDollarSimpleBold className={`${  location.pathname === '/pricing'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>

  
      <Link onClick={()=>{props.setIsOpen(true)}} to="/integration">
        <PiPuzzlePieceFill className={`${  location.pathname === '/integration'  ? 'text-[#CB3CFF]' : null}`} />
      </Link>
              </div>
  </div>
  
  
  </>
  )
}
