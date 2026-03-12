
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { CreditCard, Handshake, Briefcase, Gift } from 'lucide-react';

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

export const HanjikgyoBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      badge: "혜택 1",
      title: "수강료 95~100% 지원",
      description: "국민내일배움카드를 통해 교육비 부담을 최소화하여 실무 위주의 전문 교육을 수강할 수 있습니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-[0_20px_50px_rgba(59,130,246,0.3)] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
          <CreditCard className="text-white w-16 h-16" />
          <div className="absolute bottom-4 left-4 text-white/80 font-bold text-[10px] tracking-widest uppercase">NATIONAL CARD</div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-purple-800 rounded-full blur-[2px] opacity-80 animate-pulse"></div>
          <div className="absolute -left-4 -bottom-4 w-6 h-6 bg-purple-900 rounded-full border-b-2 border-yellow-700 animate-bounce"></div>
          <div className="absolute -right-2 -top-2 w-4 h-4 bg-purple-900 rounded-full border-b-2 border-yellow-700 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      )
    },
    {
      id: 2,
      badge: "혜택 2",
      title: "매월 최대 80만원 지급",
      description: "훈련장려금과 국취제도 수당을 합쳐 매월 최대 80만원의 생활비를 지원받으며 학습에만 집중하세요.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-6 flex items-center justify-center">
          <div className="relative bg-emerald-500 w-40 h-20 rounded-lg flex items-center justify-center shadow-xl z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-2xl">₩</div>
            <div className="absolute -left-8 top-0 w-12 h-16 bg-white/30 rounded-full blur-[1px] transform -rotate-45 animate-pulse"></div>
            <div className="absolute -right-8 top-0 w-12 h-16 bg-white/30 rounded-full blur-[1px] transform rotate-45 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      id: 3,
      badge: "혜택 3",
      title: "협약 기업 우선 면접",
      description: "한직교와 파트너십을 맺은 우수한 IT/AI 협약 기업들에 우선적으로 면접 기회를 제공합니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-6 flex items-center justify-center">
          <div className="p-8 bg-zinc-900 rounded-full border-2 border-[#a855f7] shadow-[0_0_30px_rgba(107,33,168,0.2)] text-[#a855f7] group-hover:scale-110 transition-transform duration-500">
            <Handshake size={48} />
          </div>
          <div className="absolute inset-0 bg-purple-800/5 blur-3xl rounded-full"></div>
        </div>
      )
    },
    {
      id: 4,
      badge: "혜택 4",
      title: "수료 후에도 취업 지원",
      description: "과정이 끝나도 취업할 때까지! 1:1 맞춤 상담과 채용 정보 제공 등 사후 관리를 철저히 보장합니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-6 flex items-center justify-center">
          <div className="p-8 bg-zinc-900 rounded-2xl border-2 border-purple-800 shadow-[0_0_30px_rgba(107,33,168,0.2)] text-purple-800 group-hover:rotate-6 transition-transform">
            <Briefcase size={48} />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-50"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      badge: "혜택 5",
      title: "빌라 원룸 1인 1실 숙소",
      description: "원거리 수강생들을 위해 쾌적하고 독립된 공간인 빌라형 원룸 1인 1실 숙소를 운영합니다.",
      icon: (
        <div className="relative w-48 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
           <div className="relative w-32 h-32 bg-sky-100 rounded-lg border-b-4 border-sky-300 flex flex-col items-center justify-end overflow-hidden shadow-2xl">
              <div className="absolute top-0 w-full h-1/2 bg-sky-400 transform -skew-y-12 -translate-y-4"></div>
              <div className="w-8 h-12 bg-white border-x border-t border-sky-200 rounded-t-sm mb-4 z-10"></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-sky-200 rounded-sm"></div>
           </div>
           <div className="absolute inset-0 bg-sky-400/10 blur-2xl rounded-full"></div>
           <div className="absolute -bottom-2 px-3 py-1 bg-sky-600 text-white text-[10px] font-bold rounded-full">Premium Room</div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-4">
                <Gift size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
              수강생의 성장을 위한<br />
              <span className="text-purple-800">한직교 맞춤 혜택</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                교육비부터 장비, 취업 지원까지 아낌없이 지원합니다.
            </p>
          </Reveal>
        </div>

        {/* Benefit Items Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <div key={benefit.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <Reveal delay={idx * 100} className="h-full">
                    <div className="flex flex-col items-center h-full p-8 bg-zinc-900/30 rounded-3xl border border-zinc-800 hover:border-[#a855f7]/50 transition-all duration-300 hover:-translate-y-2 group">
                        {/* Badge */}
                        <div className="inline-block bg-[#a855f7] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(107,33,168,0.3)]">
                        {benefit.badge}
                        </div>

                        {/* Icon/Illustration Area */}
                        <div className="mb-6 transform scale-90 md:scale-100">
                        {benefit.icon}
                        </div>

                        {/* Text Area */}
                        <div className="text-center mt-auto">
                            <h3 className="text-white text-xl md:text-2xl font-black mb-4 tracking-tight leading-snug break-keep">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed break-keep font-medium">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
