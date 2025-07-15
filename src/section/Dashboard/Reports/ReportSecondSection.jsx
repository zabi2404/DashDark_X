import React from 'react'
import Button from "../../../common/Buttons/Buttons";
import MultiRingDonut from '../../../common/Charts/MultiRingDonut';
import { FaArrowDownLong } from "react-icons/fa6";
import BarChart2 from '../../../common/Charts/Barchart2';
import GrowthButton from '../../../common/Buttons/GrowthButton';

export default function ReportSecondSection() {
  return (
    <>
    
     <div className='grid min-[1300px]:grid-cols-[.5fr_2fr] gap-4
     xsm:grid-cols-1
     
     '>


        <div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] px-6'>

          <div className='flex justify-between mb-6 pt-12'>
            <h1 className=''>Website Visitors</h1>
            <Button
              title="Export "
              color="#0A1330"
            />
          </div>

          <div className='min-[1300px]:px-10
         xsm:px-0 
          '>
            <MultiRingDonut />
          </div>
        </div >

   
        <div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] p-4'>
          <div >

            <div className='pt-8'>

              <h1 className='text-[#AEB9E1] *:
              xsm:text-center
              min-[1300px]:text-start
              '>Revenue by customer type</h1>
            </div>

            <div className='flex items-center
            xsm:flex-col
            min-[1300px]:flex-row
            '>
              <div className='flex items-center'>
                <p className='text-[24px] font-bold'>$240.8K
                </p>
               <div>
                <GrowthButton
              growth="28.5%"
              isGrowthUp={true}
              />
              </div>
                </div>

              <div className='flex items-center gap-4 min-[1300px]:ml-auto text-[10px]
              min-[1300px]:flex-row 

              xsm:flex-col  xsm:justify-center xsm:items-center  xsm:ml-0
              '>
                <p>Current clients</p>
                <p>Subscribers</p>
                <p>New customers</p>
                <Button
                  title="Jan 2024 - Dec 2024"
                  color="#0A1330"
                  icon={<FaArrowDownLong className="text-white" />}
                />
              </div>


            </div>


          </div>


          <div className=''>
     
              <BarChart2 />
           
          </div>
        </div>


      </div>
    
    </>
  )
}
