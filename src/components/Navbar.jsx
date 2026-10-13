import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Home, Scan, MessageSquare, Globe, Activity, CloudSun, Calendar, Award, ChevronDown } from 'lucide-react';

export default function Navbar({ currentLang = 'en', setLanguage }) {
  const location = useLocation();
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMoreDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/scan', label: 'Scan', icon: Scan },
    { path: '/dashboard', label: 'Dashboard', icon: MessageSquare },
    { path: '/my-garden', label: 'My Garden', icon: Sprout }
  ];

  const moreLinks = [
    { path: '/disease', label: 'Disease Analysis', icon: Activity },
    { path: '/weather', label: 'Weather Intel', icon: CloudSun },
    { path: '/growth', label: 'Growth Timeline', icon: Calendar },
    { path: '/badges', label: 'Profile & Badges', icon: Award }
  ];

  const isMoreActive = moreLinks.some((link) => location.pathname === link.path);

  return (
    <nav className="bg-[#0e1626] border-b border-gray-800 px-4 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2.5">
        <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
          <Sprout className="w-5 h-5" />
        </div>
        <span className="font-bold text-lg text-white tracking-wide">AgriVaidya</span>
      </Link>

      {/* Main Navigation Links + More Dropdown */}
      <div className="hidden lg:flex items-center gap-1 bg-[#090d16] p-1.5 rounded-xl border border-gray-800 relative">
        {mainLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-emerald-500 text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
            </Link>
          );
        })}

        {/* More Dropdown Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowMoreDropdown(!showMoreDropdown)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              isMoreActive
                ? 'bg-emerald-500 text-black'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <span>More</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showMoreDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {showMoreDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-[#0e1626] border border-gray-800 rounded-xl shadow-2xl py-1.5 z-50">
              {moreLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setShowMoreDropdown(false)}
                    className={`flex items-center gap-2.5 px-4 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                        : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Language Switcher Dropdown */}
      <div className="flex items-center gap-2 bg-[#090d16] border border-gray-800 rounded-xl px-3 py-1.5">
        <Globe className="w-4 h-4 text-emerald-400" />
        <select
          value={currentLang}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
        >
          <option value="en" className="bg-[#0e1626] text-white">English</option>
          <option value="te" className="bg-[#0e1626] text-white">తెలుగు (Telugu)</option>
          <option value="hi" className="bg-[#0e1626] text-white">हिन्दी (Hindi)</option>
        </select>
      </div>
    </nav>
  );
}