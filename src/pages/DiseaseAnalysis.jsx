import React from 'react';
import { Activity, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../utils/translations';

export default function DiseaseAnalysis({ currentLang = 'en' }) {
  const navigate = useNavigate();
  const t = translations[currentLang] || translations.en;

  const diseaseData = {
    name: 'Cercospora Leaf Spot',
    botanical: 'Basella alba (Malabar Spinach)',
    severity: 'Moderate (58% Health Impact)',
    symptoms: [
      'Small, dark circular spots on leaves with pale centers',
      'Yellowing around affected leaf margins',
      'Premature leaf dropping in severe cases'
    ],
    causes: [
      'High humidity combined with warm temperatures',
      'Excess overhead watering leaving leaf surfaces damp',
      'Poor air circulation between dense foliage'
    ],
    treatments: [
      'Prune and safely destroy infected leaves immediately',
      'Spray organic Neem Oil (5ml per 1L water) every 7 days',
      'Apply copper-based fungicide if fungal spread continues',
      'Water plants at the root level rather than spraying leaves'
    ]
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="border-b border-gray-800 pb-5">
        <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-xs mb-1">
          <Activity className="w-4 h-4" />
          <span>{t.navDisease}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {diseaseData.name}
        </h1>
        <p className="text-xs md:text-sm text-gray-400 italic mt-1">
          Affected Plant: {diseaseData.botanical}
        </p>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Symptoms Card */}
        <div className="bg-[#0e1626] border border-gray-800 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Identified Symptoms</span>
          </div>
          <ul className="space-y-2">
            {diseaseData.symptoms.map((item, i) => (
              <li key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Environmental Causes Card */}
        <div className="bg-[#0e1626] border border-gray-800 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Possible Causes</span>
          </div>
          <ul className="space-y-2">
            {diseaseData.causes.map((item, i) => (
              <li key={i} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Treatment Plan */}
      <div className="bg-[#0e1626] border border-gray-800 p-6 rounded-2xl space-y-4">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Recommended Treatment Steps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {diseaseData.treatments.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#090d16] border border-gray-800/80 p-3.5 rounded-xl text-xs text-gray-300 flex gap-3 items-start"
            >
              <span className="w-5 h-5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={() =>
              navigate('/dashboard', {
                state: { plant: 'Malabar Spinach', disease: 'Cercospora Leaf Spot' }
              })
            }
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer"
          >
            {t.askAiChat}
          </button>
        </div>
      </div>

    </div>
  );
}