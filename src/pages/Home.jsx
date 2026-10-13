import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Camera, Shield, Stethoscope, Sparkles } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white flex flex-col items-center justify-between px-4 py-10 md:py-14 text-center">
      
      {/* Hero Container */}
      <div className="max-w-3xl space-y-6 my-auto">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-POWERED PLANT INTELLIGENCE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Your Plant's <br />
          <span className="text-emerald-400">Personal Doctor</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Snap a photo, get instant AI diagnostics. Detect diseases, identify pests, and receive personalized care plans powered by advanced machine learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto pt-2">
          <button
            onClick={() => navigate('/scan')}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <Upload className="w-4 h-4" />
            Upload Plant Image
          </button>

          <button
            onClick={() => navigate('/scan')}
            className="w-full sm:w-auto bg-[#0e1626] hover:bg-[#172033] text-white border border-gray-800 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-emerald-400" />
            Live Camera Scan
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6">
          <div className="bg-[#0e1626]/80 border border-gray-800 p-4 rounded-xl text-left flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">AI Diagnosis</h3>
              <p className="text-[11px] text-gray-400">Deep-learning disease detection</p>
            </div>
          </div>

          <div className="bg-[#0e1626]/80 border border-gray-800 p-4 rounded-xl text-left flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Pest Guard</h3>
              <p className="text-[11px] text-gray-400">Real-time threat protection</p>
            </div>
          </div>

          <div className="bg-[#0e1626]/80 border border-gray-800 p-4 rounded-xl text-left flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Instant Care</h3>
              <p className="text-[11px] text-gray-400">Personalized treatment plans</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl pt-8 border-t border-gray-800/60 mt-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white">50K+</h2>
          <p className="text-xs text-gray-400 mt-0.5">Plants Scanned</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-emerald-400">99.2%</h2>
          <p className="text-xs text-gray-400 mt-0.5">Accuracy Score</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white">200+</h2>
          <p className="text-xs text-gray-400 mt-0.5">Species Database</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-emerald-400">24/7</h2>
          <p className="text-xs text-gray-400 mt-0.5">AI Care Assistant</p>
        </div>
      </div>

    </div>
  );
}