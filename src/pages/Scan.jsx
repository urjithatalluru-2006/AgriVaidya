import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Camera, Sparkles, AlertTriangle, ShieldCheck, MessageSquare, Plus, RefreshCw } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Scan({ currentLang = 'en' }) {
  const navigate = useNavigate();
  const t = translations[currentLang] || translations.en;

  const [selectedImage, setSelectedImage] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setAnalyzed(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-[#0e1626] border border-gray-800 rounded-2xl p-6 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-white">{t.scanTitle}</h1>
          <p className="text-xs text-gray-400">{t.scanSub}</p>
        </div>

        {!selectedImage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="border-2 border-dashed border-gray-700 hover:border-emerald-500 bg-[#090d16] p-8 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all">
              <Upload className="w-8 h-8 text-emerald-400" />
              <span className="text-sm font-semibold text-white">{t.uploadPhoto}</span>
              <span className="text-[11px] text-gray-400">{t.uploadPhotoDesc}</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>

            <button className="border border-gray-800 hover:border-emerald-500/50 bg-[#090d16] p-8 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all">
              <Camera className="w-8 h-8 text-emerald-400" />
              <span className="text-sm font-semibold text-white">{t.liveCamera}</span>
              <span className="text-[11px] text-gray-400">{t.liveCameraDesc}</span>
            </button>
          </div>
        ) : !analyzed ? (
          <div className="space-y-4 text-center">
            <div className="relative max-h-72 rounded-xl overflow-hidden border border-emerald-500/50 shadow-lg">
              <img src={selectedImage} alt="Uploaded leaf" className="w-full h-64 object-cover" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedImage(null)}
                className="w-1/2 bg-[#090d16] border border-gray-800 hover:bg-gray-800 text-white text-xs font-semibold py-3 rounded-xl transition-all cursor-pointer"
              >
                {t.changeImage}
              </button>
              <button
                onClick={() => setAnalyzed(true)}
                className="w-1/2 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold py-3 rounded-xl transition-all cursor-pointer"
              >
                {t.analyzePlant}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="border-b border-gray-800 pb-3 flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-white">Malabar Spinach</h2>
                <p className="text-xs text-gray-400 italic">Basella alba</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#090d16] border border-gray-800 p-3.5 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4" /> {t.healthStatus}
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-amber-400 h-full w-[58%]" />
                </div>
                <p className="text-right text-[10px] text-gray-400 mt-1">58%</p>
              </div>

              <div className="bg-[#090d16] border border-gray-800 p-3.5 rounded-xl space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" /> {t.diseaseDetection}
                </div>
                <p className="text-sm font-bold text-emerald-400 mt-2">Cercospora Leaf Spot</p>
              </div>
            </div>

            <div className="bg-[#090d16] border border-gray-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-4 h-4" /> {t.aiCareAdvice}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Prune infected leaves to reduce fungal spore spread. Apply neem oil spray or copper-based fungicide.
              </p>
              <p className="text-[11px] text-emerald-400 font-medium">
                Dosage: 1 Liter water + 5ml Neem Oil • Apply every 7 days
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <button
                onClick={() => navigate('/my-garden')}
                className="bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-semibold py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> {t.saveGarden}
              </button>

              <button
                onClick={() =>
                  navigate('/dashboard', {
                    state: { plant: 'Malabar Spinach', disease: 'Cercospora Leaf Spot' }
                  })
                }
                className="bg-[#172033] hover:bg-[#1f2b45] text-emerald-400 border border-emerald-500/30 text-xs font-semibold py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" /> {t.askAiChat}
              </button>

              <button
                onClick={() => {
                  setSelectedImage(null);
                  setAnalyzed(false);
                }}
                className="bg-[#090d16] hover:bg-gray-800 text-gray-300 border border-gray-800 text-xs font-semibold py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> {t.scanAnother}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}