
import React from 'react';
import { Star, Calendar, Clock, MapPin, Home, UserCheck, Flame, Cpu } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  // Icon mapping for stats (Recruitment Summary)
  const statIcons = [
    <Flame size={18} className="text-red-500 animate-pulse" />,
    <Clock size={18} className="text-purple-400" />,
    <Calendar size={18} className="text-purple-400" />,
    <MapPin size={18} className="text-purple-400" />,
    <Home size={18} className="text-purple-400" />,
    <UserCheck size={18} className="text-purple-400" />,
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-28 pb-20">
      
      {/* Background Image Layer with absolute clarity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://postfiles.pstatic.net/MjAyNjA5MTVfNjkg/MDAxNzg5NDUzNzgwMzc3.pTnYakJdg9ORqrFyJA2NldeMvytmwI8Jh3dBu2dHLHEg.ZG44_0USliLs-SdmPNyYPp3r-QIg6Ewdzglo-ZwfkyYg.PNG/2654.png?type=w966"
          alt="Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-100 brightness-110 contrast-105"
        />
        
        {/* Soft readable vignette overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[140px]" />
      </div>

      {/* Content (z-10) - Left Aligned */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/40 text-purple-300 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,235,0.2)]">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold tracking-wide">{hero.badge}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.15] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            미래를 여는 인공지능 기술 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white whitespace-pre-line drop-shadow-[0_2px_10px_rgba(147,51,235,0.3)]">
              {hero.highlight}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed whitespace-pre-line drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {hero.description}
          </p>

          {/* Official Course Name Card */}
          <div className="mb-12 animate-fade-in-up">
            <div className="relative p-6 md:p-8 rounded-3xl bg-zinc-950/80 backdrop-blur-2xl border border-white/15 overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600"></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                    </span>
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Official Course Certification</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                    AI사물인터넷 MCU기반(STM32,ESP32)<br />
                    <span className="text-purple-400">임베디드 펌웨어 전문가 양성</span>
                  </h2>
                </div>
                <div className="p-4 bg-purple-950/50 rounded-2xl border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Cpu className="text-purple-400" size={36} />
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Info Summary (6 Items) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full p-4 md:p-6 rounded-3xl bg-zinc-950/70 backdrop-blur-xl border border-white/10 shadow-xl">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start justify-center p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/40 transition-all group">
                <div className="flex items-center gap-2 mb-1.5">
                  {statIcons[idx]}
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-black text-white break-keep group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
