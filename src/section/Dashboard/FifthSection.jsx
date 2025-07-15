import React from 'react'
import DoughnutChart from "../../common/Charts/DoughnotChart";
import OrderTable from "../../common/Tables/orderTable";

export default function FifthSection() {
  return (
  <>
  <div className="grid gap-4 md:grid-cols-2 
  xsm:grid-col-1
  ">

<div className=" bg-[#0B1739] flex justify-center pt-16 rounded-[12px] min-w-0
xsm:p-2
sm:p-0
">
<DoughnutChart/>
</div>


<OrderTable/>

</div>
  
  </>
  )
}
