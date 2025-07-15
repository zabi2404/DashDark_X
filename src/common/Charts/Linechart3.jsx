import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

export default function LineChart3() {
  const chartRef = useRef();
  const [chartData, setChartData] = useState({ datasets: [] });

  const labels = ["Jan 1", "Jan 8", "Jan 16", "Jan 31", "Feb 1"];
  const values = [
    0, 500, 200, 350, 110, 5, 450, 60,
    420, 600, 60, 0, 500, 95, 150, 220,
    300, 180, 90, 80, 120, 140, 500, 50,
  ];

  useEffect(() => {
    const canvas = chartRef.current?.ctx;
    if (!canvas) return;


const gradient = canvas.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(0, 194, 255, 0.3)');
gradient.addColorStop(1, 'rgba(0, 194, 255, 0)');
    setChartData({
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: values,
          fill: true,
          backgroundColor: gradient,
          borderColor: '#00C2FF',
          borderWidth: 1,
          tension: 0,
          pointRadius: 0,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },
    scales: {
      x: {
        offset: true,
        ticks: {
          color: '#AEB9E1',
          maxTicksLimit: 6,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#AEB9E1',
          maxTicksLimit: 4,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
}
