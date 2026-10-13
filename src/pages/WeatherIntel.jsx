import React from 'react';
import { CloudSun, Droplets, Wind, Sun, AlertCircle } from 'lucide-react';
import { translations } from '../utils/translations';

export default function WeatherIntel({ currentLang = 'en' }) {
  const t = translations[currentLang] || translations.en;

  const weatherData = {
    temp: '31°C',
    condition: 'Partly Cloudy',
    humidity: '74%',
    wind: '14 km/h',
    uvIndex: 'High (8)',
    alert: 'High humidity levels detected. Increase leaf ventilation to reduce fungal growth risks like Cercospora.'
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="border-b border-gray-800 pb-5">
        <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-xs mb-1">
          <CloudSun className="w-4 h-4" />
          <span>{t.navWeather}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Agricultural Weather Intelligence
        </h1>
        <p className="text-xs md:text-sm text-gray-400 mt-1">
          Real-time weather insights tailored for crop health and disease prevention.
        </p>
      </div>

      {/* Advisory Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Crop Advisory</h4>
          <p className="text-xs text-gray-300 mt-1 leading-relaxed">
            {weatherData.alert}
          </p>
        </div>
      </div>

      {/* Weather Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-[#0e1626] border border-gray-800 p-4 rounded-xl flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Temperature</span>
            <CloudSun className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{weatherData.temp}</h3>
          <p className="text-[11px] text-gray-400">{weatherData.condition}</p>
        </div>

        <div className="bg-[#0e1626] border border-gray-800 p-4 rounded-xl flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Humidity</span>
            <Droplets className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{weatherData.humidity}</h3>
          <p className="text-[11px] text-emerald-400">High Moisture</p>
        </div>

        <div className="bg-[#0e1626] border border-gray-800 p-4 rounded-xl flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>Wind Speed</span>
            <Wind className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{weatherData.wind}</h3>
          <p className="text-[11px] text-gray-400">Gentle Breeze</p>
        </div>

        <div className="bg-[#0e1626] border border-gray-800 p-4 rounded-xl flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>UV Index</span>
            <Sun className="w-4 h-4 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{weatherData.uvIndex}</h3>
          <p className="text-[11px] text-amber-400">Shade Recommended</p>
        </div>

      </div>

    </div>
  );
}