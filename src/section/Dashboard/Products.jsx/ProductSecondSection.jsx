import React from 'react'
import { IoMdHeart } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";
import Cards from '../../../common/Cards/Cards';
export default function ProductSecondSection() {
  return (
   <>
    <div className="min-[1120px]:flex    gap-4   justify-between py-6
    xsm:grid xsm:grid-cols-1
    sm:grid-cols-2
    
    ">
          <Cards title="Save Products" value="50.8K" growth="28.4%" icon={<IoMdHeart className='text-[#CB3CFF]' />} isGrowthUp={true} />
          <Cards title="Stock Products" value="23.6K" growth="14.1%" icon={< GiShoppingBag className='text-[#CB3CFF]' />} />
          <Cards title="Average Revnue" value="2.3k" growth="5.6%" icon={< PiBagSimpleFill className='text-[#CB3CFF]' />} isGrowthUp={true} />
          <Cards title="Average Revnue" value="2.3k" growth="5.6%" icon={<FaDollarSign className='text-[#CB3CFF]' />} isGrowthUp={true} />
        </div>
   </>
  )
}
