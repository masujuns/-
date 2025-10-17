import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './pages/FormPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">記録フォーム</Link> | <Link to="/dashboard">グラフ・カレンダー</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FormPage onAddWorkout={handleAddWorkout} />} />
        <Route path="/dashboard" element={<DashboardPage workouts={workouts} />} />
      </Routes>
    </Router>
  );
}

export default App;