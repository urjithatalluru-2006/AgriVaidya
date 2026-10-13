import React from 'react';
import { Award, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Badges({ currentLang = 'en' }) {
  const t = translations[currentLang] || translations.en;

  const badgesList = [
    {
      id: 1,
      title: 'First Scan',
      desc: 'Completed your very first AI plant health scan.',
      earned: true,
      date: 'Aug 07, 2026',
      icon: Sparkles
    },
    {
      id: 2,
      title: 'Plant Guardian',
      desc: 'Applied recommended treatments to save a diagnosed plant.',
      earned: true,
      date: 'Aug 07, 2026',
      icon: Shield
    },
    {
      id: 3,
      title: 'Green Thumb',
      desc: 'Successfully tracked 5 plants in your personal garden.',
      earned: false,
      date: 'Locked',
      icon: Award
    }
  ];

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="border-b border-gray-800 pb-5">
        <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-xs mb-1">
          <Award className="w-4 h-4" />
          <span>{t.navBadges}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Achievements & Badges
        </h1>
        <p className="text-xs md:text-sm text-gray-400 mt-1">
          Unlock rewards as you diagnose crops, manage care plans, and grow your garden.
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badgesList.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.id}
              className={`bg-[#0e1626] border p-6 rounded-2xl space-y-4 relative transition-all ${
                badge.earned
                  ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                  : 'border-gray-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-3 rounded-xl ${
                    badge.earned
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-gray-800 text-gray-500'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                {badge.earned && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Earned
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-bold text-base text-white">{badge.title}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {badge.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-800/80 text-[11px] text-gray-400">
                <span>{badge.earned ? `Unlocked: ${badge.date}` : badge.date}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}