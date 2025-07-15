import React from 'react'
import Calendar from '../../common/Calendars/Calendar'
import Buttons from '../../common/Buttons/Buttons'
import Input from '../../common/Input'
import Mcalendar from '../../common/Calendars/Mcalendar'



export default function TemplatePage() {
  return (
    <>

      <div className='flex justify-between items-center md:mb-4
   xsm:flex-col xsm:gap-5
         md:flex-row
         xsm:mb-4 sm:mb-0
'>
        <div>
          <h1>Calendar</h1>
        </div>
        <div>
          <Buttons
            title="Monthly"
          />
        </div>
      </div>

      <div className='grid  min-[1300px]:grid-cols-[25%_75%] min-[1300px]:gap-4
  xsm:grid-col-1 
      '>

        <div className='bg-[#0B1739] p-6 flex flex-col 
       
        gap-4
        min-[1300px]:justify-between
        
        xsm:mb-8

        '>

          <div className=''>
            <div className='p-4 w-[200px]' >
              <Buttons
                title="Create Schedule"
              />
            </div>
            <div className='border border-[#F1F4FA] rounded-[7px]'>
              <Mcalendar/>

            </div>

            <div className='mt-8 flex flex-col justify-between'>

              <div className=''>
                <h1 className='mb-4'>
                  People
                </h1>
                <Input />

              </div>

              <div className=' mt-4'>
                <ul className='text-[12px]'>
                  <li className='p-2 flex gap-2 '>
                    <div ><img src="../../../public/Images/Ellipse 96.svg" alt="" /></div>
                    <div><h1>Eddie Lobanovskiy</h1>
                      <p className='text-[#AEB9E1]'>laboanovskiy@gmail.com</p></div>
                  </li>

                  <li className='p-2 flex gap-2 '>
                    <div ><img src="../../../public/Images/Ellipse 96.svg" alt="" /></div>
                    <div><h1>Eddie Lobanovskiy</h1>
                      <p className='text-[#AEB9E1]'>laboanovskiy@gmail.com</p></div>
                  </li>

                  <li className='p-2 flex gap-2 '>
                    <div ><img src="../../../public/Images/Ellipse 96.svg" alt="" /></div>
                    <div><h1>Eddie Lobanovskiy</h1>
                      <p className='text-[#AEB9E1]'>laboanovskiy@gmail.com</p></div>
                  </li>

                </ul>

              </div>


            </div>
          </div>


          <div>
            <Buttons
              title="My Schedule"
            />
          </div>
        </div>

        <div className='grid md:grid-cols-3 md:gird-row-4
        xsm:grid-cols-2 xsm:grid-row-6

        
        '>
          <div className=' border-b md:border-r  border-[#7E89AC]
   xsm:border-r
         '>
          <Calendar initialMonth={1} initialYear={2025} />
          </div >
          <div className='border-b md:border-r  border-[#7E89AC]
           
           
           '>
            <Calendar initialMonth={2} initialYear={2025} />
          </div>
          <div className='border-b   border-[#7E89AC]
           xsm:border-r
           md:border-r-0
           '>
            <Calendar initialMonth={3} initialYear={2025} />
          </div>
          <div className='border-b md:border-r border-[#7E89AC]
           
           '>
            <Calendar initialMonth={4} initialYear={2025} />
          </div>
          <div className='border-b md:border-r border-[#7E89AC]
           xsm:border-r
           
           '>
            <Calendar initialMonth={5} initialYear={2025} />
          </div>
          <div className='border-b   border-[#7E89AC]
           
           '>
            <Calendar initialMonth={6} initialYear={2025} />
          </div>
          <div className='border-b md:border-r  border-[#7E89AC]
           xsm:border-r
           '>
            <Calendar initialMonth={7} initialYear={2025} />
          </div>
          <div className='border-b md:border-r border-[#7E89AC]
           
           '>
            <Calendar initialMonth={8} initialYear={2025} />
          </div>
          <div className='border-b   border-[#7E89AC]
           xsm:border-r
            md:border-r-0
           '>
            <Calendar initialMonth={9} initialYear={2025} />
          </div>
          <div className='border-b md:border-r  border-[#7E89AC]'>
            <Calendar initialMonth={ 10} initialYear={2025} />
          </div>
          <div className='md:border-b md:border-r border-[#7E89AC]
           xsm:border-r
           '>
            <Calendar initialMonth={11} initialYear={2025} />
          </div>
          <div className='md:border-b   border-[#7E89AC]'>
            <Calendar initialMonth={12} initialYear={2025} />
          </div>

        </div>

      </div>

    </>

  )
}

