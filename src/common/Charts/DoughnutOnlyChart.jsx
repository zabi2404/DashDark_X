import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Sell', 'Distribute', 'Return'];
const colors = ['#CB3CFF', '#0038FF', '#00C2FF'];
const values = [15624, 5546, 2478];

const data = {
  labels,
  datasets: [
    {
      label: 'Traffic',
      data: values,
      backgroundColor: colors,
      hoverOffset: 8,
      borderColor: 'transparent',
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: false,
  cutout: '90%',
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`,
      },
    },
  },
};

export default function DoughnutOnlyChart({ width = '300px' }) {
  return (
    <div
      style={{ width }}
      className="text-[#AEB9E1] text-[14px] flex flex-col items-center"
    >
      {/* Chart */}
         <div
         className="
           flex justify-center items-center
           w-full max-w-[500px] min-w-[150px]
           h-full max-h-[420px] min-h-[120px]
           relative 
         "
       >
         <Doughnut 
           data={data}
           options={{ ...options, maintainAspectRatio: false }}
           style={{ width: '100%', height: '100%' }}
           
         />
       </div>

      {/* Total Count */}
      <div className="text-[36px] text-white font-bold mt-[-80px]">
        {values.reduce((a, b) => a + b, 0).toLocaleString()}
      </div>
      <div className="text-[14px] mb-4">Users by device</div>

      {/* Horizontal Custom Legend */}
      <div className=" mt-8 flex justify-center items-center gap-8 flex-wrap">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></span>
            <span>{label}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
}
