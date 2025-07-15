import React from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown (props) {

  const HandleClick = ()=>{
      props.setActiveLink(props.title);
    
  }
  
 

const fullPath =
  props.parentpath === '/'
    ? `/${props.to}`        // root level → just "/child"
    : `${props.parentpath}/${props.to}`; // nested → "/parent/child"
  return (
    <>
 {/* <li  */} 
  
   <Link to={`${props.parentpath === '/' ? '' : props.parentpath}/${props.to}` }
   onClick={HandleClick} 
   className={`  h-[44px] p-5 flex items-center rounded-[4px] border-l-4 border-transparent  cursor-pointer 
 ${props.activelink === props.title &&  `border-l-[#CB3CFF] bg-[#0b173978] text-white` }`}
   >
  {props.title}
</Link>


                {/* </li>   */}
    </>
  )
}
   