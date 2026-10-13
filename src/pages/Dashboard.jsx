import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, User, Volume2, Send, Sparkles } from 'lucide-react';
import { translations } from '../utils/translations';

export default function Dashboard({ currentLang = 'en' }) {
  const location = useLocation();
  const t = translations[currentLang] || translations.en;

  const passedPlant = location.state?.plant || 'Malabar Spinach (Basella alba)';
  const passedDisease = location.state?.disease || 'Cercospora Leaf Spot';

  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: `Regarding your ${passedPlant}: Keep it in indirect sunlight, maintain steady soil moisture, and isolate it if fungal spots reappear.`
    }
  ]);

  const handleSendMessage = (textToSend) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const updatedHistory = [
      ...chatHistory,
      { sender: 'user', text: messageText }
    ];

    let aiReply = `Your ${passedPlant} is affected by ${passedDisease}. Carefully prune infected leaves and apply fungicide solution to prevent further spread.`;
    if (messageText.toLowerCase().includes('sunlight') || messageText.toLowerCase().includes('water')) {
      aiReply = `Ensure 4-6 hours of indirect sunlight daily and avoid overwatering the leaves directly.`;
    }

    setChatHistory([
      ...updatedHistory,
      { sender: 'ai', text: aiReply }
    ]);

    if (!textToSend) setInputMessage('');
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#090d16] text-white p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Active Context Header */}
      <div className="bg-[#0e1626] border border-gray-800 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">{t.activeContext}</p>
            <h3 className="font-semibold text-sm text-white">
              {passedPlant} <span className="text-emerald-400">({passedDisease})</span>
            </h3>
          </div>
        </div>
        <button
          onClick={() => speakText(chatHistory[chatHistory.length - 1]?.text || '')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#090d16] border border-gray-800 hover:border-emerald-500/50 rounded-lg text-xs text-emerald-400 transition-all cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>{t.listenAudio}</span>
        </button>
      </div>

      {/* Chat Box */}
      <div className="bg-[#0e1626] border border-gray-800 rounded-2xl flex flex-col h-[500px]">
        
        {/* Messages List */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-black font-medium'
                    : 'bg-[#090d16] border border-gray-800 text-gray-200'
                }`}
              >
                <p>{msg.text}</p>
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => speakText(msg.text)}
                    className="flex items-center gap-1.5 text-[11px] text-emerald-400 hover:text-emerald-300 pt-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.listenAudio}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Action Pills */}
        <div className="px-4 py-2 border-t border-gray-800/60 flex items-center gap-2 overflow-x-auto text-xs">
          <button
            onClick={() => handleSendMessage(t.btnTreatment)}
            className="px-3 py-1.5 bg-[#090d16] hover:bg-gray-800 border border-gray-800 text-emerald-400 rounded-lg shrink-0 cursor-pointer"
          >
            {t.btnTreatment}
          </button>
          <button
            onClick={() => handleSendMessage(t.btnSunlight)}
            className="px-3 py-1.5 bg-[#090d16] hover:bg-gray-800 border border-gray-800 text-emerald-400 rounded-lg shrink-0 cursor-pointer"
          >
            {t.btnSunlight}
          </button>
          <button
            onClick={() => handleSendMessage(t.btnWatering)}
            className="px-3 py-1.5 bg-[#090d16] hover:bg-gray-800 border border-gray-800 text-emerald-400 rounded-lg shrink-0 cursor-pointer"
          >
            {t.btnWatering}
          </button>
        </div>

        {/* Message Input Box */}
        <div className="p-4 border-t border-gray-800 flex gap-2 items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={t.askAiPlaceholder}
            className="flex-1 bg-[#090d16] border border-gray-800 text-white placeholder-gray-500 text-xs md:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="bg-emerald-500 hover:bg-emerald-600 text-black p-3 rounded-xl transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}