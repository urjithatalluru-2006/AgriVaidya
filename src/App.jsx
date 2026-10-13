import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Dashboard from './pages/Dashboard';
import MyGarden from './pages/MyGarden';
import DiseaseAnalysis from './pages/DiseaseAnalysis';
import WeatherIntel from './pages/WeatherIntel';
import GrowthTimeline from './pages/GrowthTimeline';
import Badges from './pages/Badges';

export default function App() {
  const [currentLang, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-[#090d16] text-white">
      <Navbar currentLang={currentLang} setLanguage={setLanguage} />

      <Routes>
        <Route path="/" element={<Home currentLang={currentLang} />} />
        <Route path="/scan" element={<Scan currentLang={currentLang} />} />
        <Route path="/dashboard" element={<Dashboard currentLang={currentLang} />} />
        <Route path="/my-garden" element={<MyGarden currentLang={currentLang} />} />
        <Route path="/disease" element={<DiseaseAnalysis currentLang={currentLang} />} />
        <Route path="/weather" element={<WeatherIntel currentLang={currentLang} />} />
        <Route path="/growth" element={<GrowthTimeline currentLang={currentLang} />} />
        <Route path="/badges" element={<Badges currentLang={currentLang} />} />
      </Routes>
    </div>
  );
}