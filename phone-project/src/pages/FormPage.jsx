import React from 'react';
import WorkoutForm from '../components/WorkoutForm';

function FormPage({ onAddWorkout }) {
  return (
    <div>
      <h2>筋トレ記録フォーム</h2>
      <WorkoutForm onAddWorkout={onAddWorkout} />
    </div>
  );
}

export default FormPage;