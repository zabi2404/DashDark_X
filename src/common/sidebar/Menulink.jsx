import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiHomeFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import Dropdown from './Dropdown';
import { Submenu } from '../../../public/Data';
import { useLocation } from 'react-router-dom';

export default function Menulink(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activelink, setActiveLink] = useState(null); 

  let Icon = props.icon
const location = useLocation();
//  const basePath = location.pathname.split('/').slice(0, 2).join('/'); 

 
  const matchedSubmenu = Submenu.find(item => item.title === props.title);
  
  function handleClick() { 
    if (matchedSubmenu) {

      setIsOpen(prev => !prev); 
    }
    else { 
      setIsOpen(false);
    } 

  }

  // function handleActiveLink() {

  //      props.setIsOpen(false);
  //   props.setActiveLink(props.title);

  // }
  return (
   
    <>


    {/* MENU LINK */}
      {/* <li className='flex my-6  items-center' > */}
<li className="flex items-center cursor-pointer py-4  first:mt-6 last:mb-6">

        {/* ICON */}

        {Icon && <Icon className={`${  location.pathname === props.to ? 'text-[#CB3CFF]' : null} inline-block w-5 h-5 mr-2`} />}
        
        {/* IMG */}
        {props.img && <img className='mr-4' src={`${props.img}`} alt="profilepic" />}
       

        <Link to={props.to} className={`${ location.pathname === props.to ? 'text-[#CB3CFF]' : null} flex-1`} onClick={()=>{

          
        }}>
          {props.name && <span className='text-white text-[14px] block'>{props.name}</span>}
          {props.title}
        </Link>


        <FaChevronRight className={`transition-all duration-600 ease-in-out ml-auto ${isOpen && `rotate-90`}`} onClick={handleClick} />


      </li>
 


{/* SUBMENU */}
      {

        Submenu.map((item, index) =>
          item.title === props.title ? (

            <ul key={index} className={`
        ml-6 overflow-hidden transition-all duration-600 ease-in-out 
        ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0 ' : 'max-h-0 opacity-0 -translate-y-2'}
      `}>
              {item.items.map((sub, i) => (
                <Dropdown key={i} title={sub.name}
                  to={sub.path}
                  parentpath={props.to}
  activelink={activelink}
  setActiveLink={setActiveLink}
                 setIsOpen={props.setIsOpen}
                />
              ))}
            </ul>
          ) : null
        )
      }
    </>
  )
}
