import React from 'react';
import { Sprout, Plus, ExternalLink, Calendar, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../utils/translations';

export default function MyGarden({ currentLang = 'en' }) {
  const navigate = useNavigate();
  const t = translations[currentLang] || translations.en;

  // Sample garden data
  const plants = [
    {
      id: 1,
      name: 'Malabar Spinach',
      botanical: 'Basella alba',
      health: '58%',
      disease: 'Cercospora Leaf Spot',
      addedDate: 'Aug 7, 2026',
      statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-6xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2.5">
            <Sprout className="w-7 h-7 text-emerald-400" />
            {t.navGarden}
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Track and manage your saved plant diagnostic history and care plans.
          </p>
        </div>

        <button
          onClick={() => navigate('/scan')}
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer w-fit"
        >
          <Plus className="w-4 h-4" />
          {t.scanTitle}
        </button>
      </div>

      {/* Garden Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-[#0e1626] border border-gray-800 rounded-2xl p-5 space-y-4 hover:border-emerald-500/40 transition-all shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-base text-white">{plant.name}</h3>
                <p className="text-xs text-gray-400 italic">{plant.botanical}</p>
              </div>
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${plant.statusColor}`}>
                {plant.disease}
              </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
                  {t.healthStatus}
                </span>
                <span className="font-semibold text-amber-400">{plant.health}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Saved Date
                </span>
                <span className="text-gray-300">{plant.addedDate}</span>
              </div>
            </div>

            <button
              onClick={() =>
                navigate('/dashboard', {
                  state: { plant: plant.name, disease: plant.disease }
                })
              }
              className="w-full bg-[#090d16] hover:bg-[#172033] border border-gray-800 text-emerald-400 text-xs font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{t.askAiChat}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}