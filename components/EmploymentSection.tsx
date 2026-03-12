
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { EMPLOYMENT_STATUS } from '../constants';
import { Building2 } from 'lucide-react';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const EmploymentSection: React.FC = () => {
  // Triple the list for smoother infinite loop
  const marqueeList = [...EMPLOYMENT_STATUS, ...EMPLOYMENT_STATUS, ...EMPLOYMENT_STATUS];

  return (
    <section id="employment" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <Reveal>
          <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-4">
                  <Building2 size={14} />
                  <span className="text-xs font-bold tracking-wide uppercase">Employment Status</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  꿈을 현실로 만드는<br />
                  <span className="text-purple-800">취업 현황</span>
              </h2>
              <p className="text-zinc-500 mt-4 text-sm">
                  한직교만의 압도적 취업결과!<br/>
                  많은 수료생들이 현장에서 활약하고 있습니다.
              </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee Ticker */}
      <Reveal delay={100} className="w-full bg-zinc-900 py-5 border-y border-zinc-800 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
        
        <div className="animate-marquee flex gap-5 px-4">
          {marqueeList.map((item, idx) => (
            <div 
              key={`${item.company}-${idx}`} 
              className="flex-shrink-0 bg-black border border-zinc-800 rounded-xl p-4 w-64 hover:border-purple-800 transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-purple-800 text-[10px] font-black tracking-widest uppercase bg-purple-800/10 px-2 py-0.5 rounded border border-purple-800/20">SUCCESS</span>
                <span className="text-zinc-600 text-[10px] font-bold">취업성공</span>
              </div>
              <h4 className="text-white text-base font-black truncate mb-2">{item.company}</h4>
              <div className="flex items-center gap-2">
                <div className="w-1 h-3 bg-purple-800 rounded-full"></div>
                <p className="text-zinc-400 text-xs truncate leading-tight">{item.license}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
