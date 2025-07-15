import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import { FaCirclePlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Cards from "../../common/Cards/Cards";

export default function SecondSection() {
  return (
   <>
    <div className=" min-[1120px]:flex    gap-4   justify-between py-6
    xsm:grid xsm:grid-cols-1
    sm:grid-cols-2
    
   ">
        <Cards title="Pageviews" value="50.8K" growth="28.4%" icon={<TbEyeFilled />} isGrowthUp={true} />
        <Cards title="Monthly users" value="12.3K" growth="14.1%" icon={<FaUserAlt />} isGrowthUp={true} />
        <Cards title="New sign ups" value="1.2K" growth="9.8%" icon={<FaCirclePlus />} />
        <Cards title="Subscriptions" value="$30.5K" growth="5.6%" icon={<FaStar />} isGrowthUp={true} />
      </div>
   </>
  )
}
