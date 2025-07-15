import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// X-axis: 12 months
const labels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Generate mock data
const generateRandomData = () =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 20000) + 5000);

const data = {
  labels,
  datasets: [
    {
      label: 'Current Clients',
      data: generateRandomData(),
      backgroundColor: '#CB3CFF',
      stack: 'stack1',
      barPercentage: 0.3,
      categoryPercentage: 0.6,
    },
    {
      label: 'Subscribers',
      data: generateRandomData(),
      backgroundColor: '#0E43FB',
      stack: 'stack1',
      barPercentage: 0.3,
      categoryPercentage: 0.6,
    },
    {
      label: 'New Customers',
      data: generateRandomData(),
      backgroundColor: '#00C2FF',
      stack: 'stack1',
      barPercentage: 0.3,
      categoryPercentage: 0.6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
        display:false,
     
      
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toLocaleString()}`
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#AEB9E1',
      },
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        color: '#AEB9E1',
        callback: (value) => `${value / 1000}k`, // 👉 formats like 0k, 20k
        stepSize: 20000,
        beginAtZero: true,
        max: 100000,
      },
      grid: {
        color: false,
      },
    },
  },
};

export default function BarChart() {
  return (
    <div className="w-full lg:h-[350px]
    flex justify-center items-center
    xsm:max-h-[350px]
    ">
      <Bar data={data} options={options} />
    </div>
  );
}
