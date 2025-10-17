// WorkoutCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function WorkoutCalendar({ workouts }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const workoutsOnDate = workouts.filter(w => w.date === selectedDate.toLocaleDateString());

  return (
    <div>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <h3>{selectedDate.toLocaleDateString()} の記録</h3>
      <ul>
        {workoutsOnDate.map(w => (
          <li key={w.id}>{w.exercise} - {w.reps}回 - {w.weight}kg</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutCalendar;