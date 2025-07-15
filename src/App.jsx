import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ApartmentLanding from './pages/ApartmentLanding';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ApartmentLanding />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;