import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import Quiz from './components/QuizPage';
import Visualization from './components/Visualization';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/visualization" element={<Visualization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;