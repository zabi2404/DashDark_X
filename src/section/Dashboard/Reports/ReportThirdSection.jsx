import React from 'react'
import DoughnutOnlyChart from '../../../common/Charts/DoughnutOnlyChart';




export default function ReportThirdSection() {
  return (
  
<>
<div className='  grid min-[1300px]:grid-cols-[.9fr_2fr] pt-4 
min-[1300px]:mb-0
xsm:grid-cols-1 xsm:mb-2
'>

<div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] p-6

min-[1300px]:mb-0
xsm:grid-cols-1 xsm:mb-5
'>
  <div className='mb-6'><h1>Products</h1></div>
<table className='w-full'>
  <thead className='text-[10px]'>
    <tr ><td className='pb-8'>Products</td>
    <td className='pb-8'>Price</td></tr>
  </thead>
  <tbody className='text-[12px]'>
    <tr className='mb-6'>
      <td className='flex pb-8 '>
         <img src="/public/images/Mask Group.svg" alt="" />
       <div>
         <h1>Iphone 14 pro max</h1>
        <p  className='text-[10px]'>524 in stocks</p>
       </div>
      </td>
      <td className=' pb-8'>
       
<div  className='text-[10px]'> $ 1,099.00</div>
      </td>
    </tr>
    <tr>
      <td className='flex '>
        <img src="/public/images/Mask Group (1).svg" alt="" />
       
      <div>  <h1>Iphone 14 pro max</h1>
        <p className='text-[10px]'>524 in stocks</p></div>
      </td>
      <td>
        <p  className='text-[10px]'>$ 1,099.00</p>

      </td>
    </tr>
  </tbody>
</table>
</div>


<div className='grid min-[1300px]:grid-cols-2  gap-5 
min-[1300px]:ml-5
xsm:grid-cols-1

'>

  <div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] p-6'>
    
<div className='mb-6'><h1>Team Progress</h1></div>

<div>
  <table className='w-full pt-10'>
    <tbody  className=''>
     <tr>
        <td className=' p-4 text-[10px] flex gap-2'>
          <img src="../../../../public/Images/Avatar Circle.svg" alt="" />
          <div>
            <h1 >John Carter</h1>
          <p className='text-[#AEB9E1]'>contact@soophiemore.com</p>
          </div>
        </td>
        <td className='text-[12px] pb-[6]'>60%</td>
      </tr>

     <tr>
        <td className=' p-4 text-[10px] flex gap-2'>
            <img src="../../../../public/Images/Avatar Circle.svg" alt="" />
          <div>
            <h1 >John Carter</h1>
          <p className='text-[#AEB9E1]'>contact@soophiemore.com</p>
          </div>
        </td>
        <td className='text-[12px] pb-[6]'>60%</td>
      </tr>

       <tr>
        <td className=' p-4 text-[10px] flex gap-2'>
           <img src="../../../../public/Images/Avatar Circle.svg" alt="" />
          <div>
            <h1 >John Carter</h1>
          <p className='text-[#AEB9E1]'>contact@soophiemore.com</p>
          </div>
        </td>
        <td className='text-[12px] pb-[6]'>60%</td>
      </tr>
       
    </tbody>
  </table>
</div>

  </div>

  <div className='bg-[#0B1739] border border-[#343B4F] rounded-[14px] p-6'>
    <div className='mb-4 flex justify-center items-center'>
      <h1>
      Website Vistor
    </h1>
    </div>
    <div className='min-w-[200px] flex justify-center items-center'>
      <DoughnutOnlyChart width='300px'/>
    </div>
  </div>

</div>

</div>


</>

  )
}
