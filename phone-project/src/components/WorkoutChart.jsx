// WorkoutChart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import React from 'react'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function WorkoutChart({ workouts }) {
  const data = {
    labels: workouts.map(w => w.date),
    datasets: [
      {
        label: '重量 (kg)',
        data: workouts.map(w => w.weight),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
}

export default WorkoutChart;

