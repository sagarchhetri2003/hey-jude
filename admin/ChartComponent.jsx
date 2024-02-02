// Chart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data for the chart
    const incomes = [200000, 1221233, 2344552, 1022341, 5606701, 5500000, 4000000];
    
    // Generate number of orders as 10% of incomes
    const orders = incomes.map(income => Math.round(0.1 * income));

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Total Incomes',
          data: incomes,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
        {
          label: 'Number of Orders',
          data: orders,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
        },
      ],
    };

    // Chart configuration
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Income and Orders Chart</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default ChartComponent;


