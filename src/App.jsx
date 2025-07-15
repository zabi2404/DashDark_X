import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
const Dashboard = lazy(() => import('./pages/Dashbaord/Dashboard'));
const AllPages = lazy(() => import('./pages/Dashbaord/AllPages'));
export const Reports = lazy(() => import('./pages/Dashbaord/Reports'));
export const Product = lazy(() => import('./pages/Dashbaord/Products'));

import CloseSIdeBar from './common/sidebar/CloseSIdeBar';
/* Features */
export const Feature = lazy(() => import('./pages/Features/Feature'));
export const Board = lazy(() => import('./pages/Features/Boaard'));
export const Table = lazy(() => import('./pages/Features/Table')); 
export const Contacts = lazy(() => import('./pages/Features/Contacts'));

/* Other top‑level pages */
export const Integration = lazy(() => import('./pages/Integration/Integration'));
export const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
export const Setting = lazy(() => import('./pages/Setting/Setting'));
export const TemplatePage = lazy(() => import('./pages/TemplatePage/TemplatePage'));
export const User = lazy(() => import('./pages/User/User'));

/* Common layout */
export const Sidebar = lazy(() => import('./common/sidebar/sidebar'));

import { FaChevronRight } from "react-icons/fa";


export const Team = lazy(() => import('./pages/User/Team'));
export const Billing = lazy(() => import('./pages/User/Billing'));
export const Notification = lazy(() => import('./pages/User/Notification'));
export const AddUser = lazy(() => import('./pages/User/PersonalInformation'));


export default function App() {
  const [isopen, setIsOpen] = React.useState(true);


  useEffect(() => {

    const handleResize = () => { setIsOpen(window.innerWidth >= 768) }
    handleResize();
    window.addEventListener('resize', handleResize); // Step 2: Watch for window size changes

    return () => window.removeEventListener('resize', handleResize);

  }, []);     

  // ok so in this useeffect we call the handleresize function in which we check windows size if the size is upto our requirment then it become true
  // otherwise false and below we use eventlisnter to check size if size changes again run handleresize simple

  return (
    <>


      <Suspense fallback={<div className='flex justify-center items-center'>Loading...</div>}>

        <Router>
          <div className="flex min-h-screen ">


            <div className={`fixed top-0 h-screen left-0 bg-[#081028]  z-40 shadow-xl min-h-screen transform transition-transform duration-1000 ease-in-out py-8 pl-7 pr-10 w-[344px]  ${isopen ? '  translate-x-0' : '  -translate-x-[305px] '}
          max-[768px]:z-10 
          `} >
              <Sidebar
                 setIsOpen={setIsOpen}
           
              />
            </div>


            {/* SIDEBAR OPEN CLOSE BUTTON */}
            <div
              className={`rounded-md flex items-center justify-center bg-[#0b173978] p-2 h-[40px] w-[40px]  shadow-lg  fixed top-3 z-50 transform transition-all ease-in-out duration-1000 
    ${isopen ? 'left-[300px] ' : 'left-2'}  max-[767px]:z-50`}>

              <FaChevronRight onClick={() => setIsOpen(prev => !prev)}
                className={` text-white cursor-pointer  ${isopen ? 'rotate-180' : ''}`}
              />

              {/* close side bar icons */}
              {
                !isopen && <CloseSIdeBar className={`transform transition-all opacity-100 duration-1000`}
                  isopen={isopen}
                  setIsOpen={setIsOpen}
                />
              }

            </div>

            {/* Main content on the right */}

            <div
              className={`transition-all duration-1000 ease-in-out ml-4 md:p-6 overflow-y-auto w-full  max-[767px]:pl-0 ${isopen ? ' md:pl-[344px] ' : 'pl-[39px]'} md:pl-10
            xsm:p-1 xsm:pl-8
            
            `}
            >
              {/* Routes */}

              <Routes>


                {/* Top-level route (optional) */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/all-pages" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/products" element={<Product />} />
              

                {/* You can also do the same for /feature */}
                <Route path="/feature" element={<Feature />} />
                <Route path="/feature/contacts" element={<Contacts />} />
                <Route path="/feature/board" element={<Board />} />
                <Route path="/feature/table" element={<Table />} />
                <Route path="/user" element={<User />} />




                <Route path="/Integration" element={<Integration />} />
                <Route path="/Pricing" element={<Pricing />} />

                <Route path="/setting" element={<Setting />} >
                  <Route path="adduser" element={<AddUser />} />
                  <Route path="team" element={<Team />} />
                  <Route path="billing" element={<Billing />} />
                  <Route path="notification" element={<Notification />} />

                </Route>

                <Route path="/template-pages" element={<TemplatePage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Suspense>

    </>
  )
}



