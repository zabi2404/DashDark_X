import React from 'react'
import HeaderTemplate from '../TemplatePage/HeaderTemplate'
import AllUserTable from '../../common/Tables/ AllUserTable'

export default function Integration() {
  return (
  <>
  
  <HeaderTemplate 
  title="All Products"
  />
  <div className='bg-[#0B1739] rounded-[12px]' >
    <div className='flex justify-between p-8 border-b border-[#343B4F]'>
  <div>
    <h1>All Products</h1>
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










