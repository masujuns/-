import React, { useState } from 'react';



function WorkoutForm({ onAddWorkout }) {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !reps || !weight) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      reps: parseInt(reps),
      weight: parseFloat(weight),
      date: new Date().toLocaleDateString(),
    };

    onAddWorkout(newWorkout);

    // フォームをリセット
    setExercise('');
    setReps('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>筋トレ記録</h2>
      <div>
        <label>種目:</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="例: ベンチプレス"
        />
      </div>
      <div>
        <label>回数:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <div>
        <label>重量 (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button type="submit">記録する</button>
    </form>
  );
}

export default WorkoutForm;
``