import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ApartmentLanding from './pages/ApartmentLanding';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ApartmentLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;