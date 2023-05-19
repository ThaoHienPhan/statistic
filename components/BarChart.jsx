import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  const BarChart = (props, context) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['15/5', '16/5', '17/5', '18/5', '19/5', '20/5', '21/5'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'New Prototype',
        data: labels.map(() =>  Math.floor(Math.random()* 100)),
        backgroundColor: 'rgba(0, 80, 114, 1)',
      },
      {
        label: 'Run Prototype',
        data: labels.map(() =>  Math.floor(Math.random()* 100)),
        backgroundColor: 'rgba(174, 189, 56, 1)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default BarChart;