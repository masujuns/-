import React from 'react';
import WorkoutChart from '../components/WorkoutChart';
import WorkoutCalendar from '../components/WorkoutCalendar';

function DashboardPage({ workouts }) {
  return (
    <div>
      <h2>筋トレデータ分析</h2>
      <WorkoutChart workouts={workouts} />
      <WorkoutCalendar workouts={workouts} />
    </div>
  );
}

export default DashboardPage;