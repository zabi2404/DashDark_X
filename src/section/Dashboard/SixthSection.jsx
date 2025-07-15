import React from 'react'
import Buttons from '../../common/Buttons/Buttons'
import MyProgressBar from "../../common/MyProgressBar"
import WorldMap from "../../common/Charts/WorldMap";
import { FaArrowDownLong } from "react-icons/fa6";
import GrowthButton from '../../common/Buttons/GrowthButton';

export default function SixthSection() {
  return (
    <>
      <div className="grid lg:grid-cols-[30%_70%]  bg-[#0B1739] mt-4 p-8 rounded-[12px]
    xsm:grid-cols-1



    ">

{/* first part */}

        <div>
          <div>
            <h1>Users by country</h1>

            <div className='flex justify-between'>
              <div className='flex items-center'>
                <p className='text-[24px]'>12.4k</p>
                 <div>
                  <GrowthButton
                growth="28.5%"
                isGrowthUp={true}
                />
                </div>
                </div>
              <div><Buttons
                title="Exports"
                color='#0A1330'
              icon={<FaArrowDownLong className="text-white" />}
              /></div>
            </div>

          </div>

<div className='flex items-end justify-between text-[12px] mt-8'>
  
  <div className='lg:min-w-[200px]'>
<h1 className='mb-3'>United states</h1>
     <MyProgressBar
     growth="60"
color="#CB3CFF" 

     />
  </div>

  <div className=''>



    <p className='pl-10'>60%</p>
  </div>
</div>

<div className='flex items-end justify-between text-[12px] mt-8'>
  
  <div className='lg:min-w-[200px]'>
<h1 className='mb-3'>United Kigdom</h1>
     <MyProgressBar
     growth="90"
color="#7E89AC" 

     />
  </div>


  <div className=''>



    <p className='pl-10'>90%</p>
  </div>
</div>

<div className='flex items-end justify-between text-[12px] mt-8'>
  
  <div className='lg:min-w-[200px]'>
<h1 className='mb-3'>Canada</h1>
     <MyProgressBar
     growth="30"
color="#9A91FB" 

     />
  </div>

  <div className=''>



    <p className='pl-10'>30%</p>
  </div>
</div>


<div className='flex items-end justify-between text-[12px] mt-8'>
  
  <div className='lg:min-w-[200px]'>
<h1 className='mb-3'>Australia</h1>
     <MyProgressBar
     growth="20"
color="#00C2FF" 

     />
  </div>

  <div className=''>



    <p className='pl-10'>20%</p>
  </div>
</div>


<div className='flex items-end justify-between text-[12px] mt-8'>
  
  <div className='lg:min-w-[200px]'>
<h1 className='mb-3'>Spain</h1>
     <MyProgressBar
     growth="10"
color="#D9E1FA" 

     />
  </div>

  <div className=''>



    <p className='pl-10'>10%</p>
  </div>
</div>

        </div>

{/* Second part chart */}
       
    
 <div className='overflow-hidden max-h-[400px]'>
     <div className=" relative  top-[-98px] lg:left-[-100px]
     xsm:left-[-250px]
     
     ">
        <WorldMap />  {/* swap with <RadialChart /> if you prefer */}
      </div>
 </div>
    
      </div>
    </>
  )
}

