import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import AddUser from '../User/PersonalInformation'
import { Outlet } from 'react-router-dom'
const UserSecondSection = lazy(()=> import("../../section/User/UserSecondSection"))
const UserHeader = lazy(()=> import("../../section/User/UserHeader"))


export default function Setting() {
  return (<>
<Suspense fallback={<div className='flex justify-center items-center'>Loading...</div>}>

    <UserHeader />
    <div className='grid 
    lg:grid-cols-[.5fr_1fr] 
    md:mt-20
 xsm:mt-5 xsm:grid-cols-1
 '>

      <UserSecondSection />
      <div className='grid-rows-[auto_auto]'>
        <Outlet />
      </div>

    </div>
 </Suspense>

  </>
  )
}
