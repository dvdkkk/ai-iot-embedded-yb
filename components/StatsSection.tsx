
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  separator?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "", separator = false }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    if (!separator) return num.toString();
    return num.toLocaleString();
  };

  return (
    <span ref={countRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#1a1a1e] relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-800/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <Reveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-4">
              <TrendingUp size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">왜 한직교인가?</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            숫자가 말해주는<br />
            <span className="text-purple-800">한직교 실력</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm">
            압도적인 성과로 증명하는 대한민국 대표 직업능력교육원
          </p>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          {/* Stat 1: Graduates */}
          <div className="group">
            <Reveal delay={200} className="mb-4">
              <div className="text-white text-5xl md:text-7xl font-black tracking-tighter drop-shadow-[0_0_30px_rgba(107,33,168,0.2)]">
                <CountUp end={2538} suffix="명" separator={true} />
              </div>
            </Reveal>
            <Reveal delay={300} className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">AI 교육 수료생</h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium">한국직업능력교육원 AI 교육 수료생</p>
            </Reveal>
          </div>

          {/* Stat 2: Salary */}
          <div className="group">
            <Reveal delay={400} className="mb-4">
              <div className="text-white text-5xl md:text-7xl font-black tracking-tighter drop-shadow-[0_0_30px_rgba(107,33,168,0.2)]">
                <CountUp end={3900} suffix="만원" separator={true} />
              </div>
            </Reveal>
            <Reveal delay={500} className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">AI 과정 수료생 평균 연봉</h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium">한직교 취업전담팀</p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};
