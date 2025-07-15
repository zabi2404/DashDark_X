import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

// Custom data
const labels = ['Organic', 'Social', 'Direct'];
const colors = ['#CB3CFF', '#0E43FB', '#00C2FF'];
const values = [80, 50, 30]; // Your values

const data = {
  datasets: [
    {
      label: labels[0],
      data: [values[0], 100 - values[0]],
      backgroundColor: [colors[0], 'transparent'],
      borderWidth: 0,
      cutout: '75%',
      radius: '100%',
    },
    {
      label: labels[1],
      data: [values[1], 100 - values[1]],
      backgroundColor: [colors[1], 'transparent'],
      borderWidth: 0,
      cutout: '75%',
      radius: '92%',
    },
    {
      label: labels[2],
      data: [values[2], 100 - values[2]],
      backgroundColor: [colors[2], 'transparent'],
      borderWidth: 0,
      cutout: '75%',
      radius: '84%',
    },
  ],
};

const options = {
  responsive: true,
  rotation: 270, // Start from left center
  circumference: 360,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%`,
      },
    },
  },
};

export default function MultiSeriesProgressPie() {
  const total = values.reduce((a, b) => a + b, 0);

  return (
    <div className="w-[200px] mx-auto text-[#AEB9E1] text-[14px] flex flex-col items-center relative">
      {/* Chart */}
      <Doughnut data={data} options={options} />

      {/* Center Total Value */}
     <div className="absolute top-25 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[24px] font-bold">
    {total}k
  </div>
      {/* Labels Below */}
      <div className="mt-6 w-full space-y-2">
        {labels.map((label, i) => (
          <div key={i} className="flex justify-between items-center text-sm mb-8">
            <div className="flex items-center space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i] }}
              ></span>
              <span>{label}</span>
            </div>
            <span className="text-white font-medium">{values[i]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
