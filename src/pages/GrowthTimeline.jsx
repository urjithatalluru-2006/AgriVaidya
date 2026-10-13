import React from 'react';
import { Calendar, CheckCircle, Clock, Sprout, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../utils/translations';

export default function GrowthTimeline({ currentLang = 'en' }) {
  const navigate = useNavigate();
  const t = translations[currentLang] || translations.en;

  const timelineEvents = [
    {
      stage: 'Planting & Germination',
      date: 'July 15, 2026',
      status: 'Completed',
      desc: 'Seeds sown in rich organic soil with optimal moisture retention.'
    },
    {
      stage: 'Vegetative Stage',
      date: 'August 01, 2026',
      status: 'Completed',
      desc: 'First true leaves appeared. Regular monitoring and light pruning established.'
    },
    {
      stage: 'Health Scan & Treatment',
      date: 'August 07, 2026',
      status: 'In Progress',
      desc: 'Detected Cercospora Leaf Spot (58% Health). Neem oil treatment applied.'
    },
    {
      stage: 'Expected Recovery & Harvest',
      date: 'August 20, 2026',
      status: 'Upcoming',
      desc: 'Follow-up health assessment scheduled to confirm full leaf recovery.'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="border-b border-gray-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-xs mb-1">
            <Sprout className="w-4 h-4" />
            <span>{t.navGrowth}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Malabar Spinach Growth Journey
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Track key milestones, treatment schedules, and health progress over time.
          </p>
        </div>

        <button
          onClick={() => navigate('/scan')}
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer w-fit"
        >
          <span>{t.scanTitle}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 my-6 space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative pl-6 md:pl-8">
            
            {/* Dot Icon */}
            <span className="absolute -left-[17px] top-1 bg-[#090d16] p-1 rounded-full border border-gray-800">
              {event.status === 'Completed' ? (
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              ) : event.status === 'In Progress' ? (
                <Clock className="w-5 h-5 text-amber-400" />
              ) : (
                <Calendar className="w-5 h-5 text-gray-500" />
              )}
            </span>

            {/* Event Box */}
            <div className="bg-[#0e1626] border border-gray-800 p-5 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-base text-white">{event.stage}</h3>
                <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {event.date}
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">{event.desc}</p>

              <div className="pt-2">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    event.status === 'Completed'
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      : event.status === 'In Progress'
                      ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      : 'text-gray-400 bg-gray-800/50 border-gray-700'
                  }`}
                >
                  {event.status}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}