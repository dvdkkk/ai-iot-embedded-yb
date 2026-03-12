
import React, { useEffect, useRef, useState } from 'react';
import { Users, Zap, Target } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const IntroSection: React.FC = () => {
  const { content } = useContent();
  const { intro } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionBase = "transition-all duration-500 ease-out transform";
  
  const getStyle = (delay: string) => ({
    className: `${transitionBase} ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-black relative border-b border-zinc-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Badge */}
          <div className={getStyle("delay-0").className}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-8 shadow-[0_0_15px_rgba(107,33,168,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-900"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">{intro.badge}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className={`text-2xl md:text-4xl lg:text-6xl font-black text-white leading-[1.3] md:leading-[1.1] mb-10 tracking-tight break-keep ${getStyle("delay-100").className}`}>
            {intro.title1}<br />
            <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-purple-800 rounded-lg transform translate-y-1"></span>
                <span className="relative text-black">{intro.highlight}</span>
            </span>{intro.title2}
          </h2>

          {/* Description */}
          <p className={`text-base md:text-xl text-zinc-400 font-light leading-relaxed mb-16 break-keep ${getStyle("delay-200").className}`}>
            {intro.description}
          </p>

          {/* Field Photos Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 px-2 md:px-0 ${getStyle("delay-300").className}`}>
            {intro.images.map((src, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                <img 
                  src={src} 
                  alt={`교육 현장 사진 ${index + 1}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
              </div>
            ))}
          </div>

          {/* Stats / Icons Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 text-left ${getStyle("delay-400").className}`}>
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-purple-800/30 transition-colors group backdrop-blur-sm">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-purple-800 group-hover:text-black transition-colors shadow-lg">
                <Users size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">경력 무관</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">경력상관없이 기술을 배워서 AI개발 직무로 진출이 가능합니다.</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-purple-800/30 transition-colors group backdrop-blur-sm">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-purple-800 group-hover:text-black transition-colors shadow-lg">
                <Target size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">전공 무관</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">인문계, 비전공자도 기초부터 확실하게 실력을 쌓아드립니다.</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-purple-800/30 transition-colors group backdrop-blur-sm">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-purple-800 group-hover:text-black transition-colors shadow-lg">
                <Zap size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">실무중심</h3>
              <p className="text-zinc-500 text-sm leading-relaxed"> 실무 중심 교육으로 즉시 현장 투입이 가능합니다.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
