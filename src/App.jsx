import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ApartmentLanding from './pages/ApartmentLanding';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApartmentLanding />} />
      </Routes>
    </Router>
  );
}

export default App;