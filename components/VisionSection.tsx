
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Cpu, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

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
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const VisionSection: React.FC = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimate(true);
        }
      },
      { threshold: 0.4 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="py-32 bg-black relative border-b border-zinc-900 overflow-hidden min-h-[900px] flex flex-col justify-center">
      
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(107,33,168,0.05)_0%,_transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <Reveal className="mb-16 max-w-4xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-800/10 border border-purple-800/30 text-purple-800 mb-6 shadow-[0_0_15px_rgba(107,33,168,0.2)]">
              <Cpu size={16} className="animate-pulse" />
              <span className="text-sm font-black tracking-widest uppercase">VISION</span>
           </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            왜 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">MCU</span>가<br />
            취업에 중요할까?
          </h2>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed break-keep font-medium">
             온 디바이스AI, 스마트팩토리, 스마트팜, 모빌리티 환경, 휴먼로봇 등에 활용하고<br className="hidden md:block" />
             엣지컴퓨팅 환경을 구현하는 데 주로 사용되는 <span className="text-purple-800 font-bold">Cortex-M4/Mx ARM MCU인 STM32, ESP32</span>는<br className="hidden md:block" />
             임베디드/펌웨어 개발자의 실력을 검증하는 절대적인 기준입니다.
           </p>
        </Reveal>

        {/* Salary Comparison Chart Section */}
        <div ref={chartRef} className="w-full max-w-4xl mx-auto mb-24 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-800/10 via-transparent to-purple-800/10 blur-2xl -z-10 rounded-[3rem]"></div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            
            {/* Without MCU */}
            <div className="flex flex-col items-center gap-6 relative">
              <div className="w-full flex justify-center mb-16">
                <div className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 font-bold flex items-center gap-2">
                  <AlertCircle size={16} />
                  MCU 기술 미보유자
                </div>
              </div>
              
              <div className="relative w-full max-w-[200px] flex justify-center items-end h-[200px]">
                <div 
                  className="w-full bg-gradient-to-t from-zinc-800 to-zinc-600 rounded-t-2xl transition-all duration-1000 ease-out origin-bottom shadow-lg"
                  style={{ height: startAnimate ? '120px' : '0px' }}
                >
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-full text-center transition-opacity duration-500 delay-700 ${startAnimate ? 'opacity-100' : 'opacity-0'} flex items-baseline justify-center gap-2`}>
                    <span className="text-zinc-500 text-sm font-bold">연봉</span>
                    <span className="text-3xl font-black text-zinc-300 tracking-tighter">3,000<span className="text-lg">~</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* With MCU */}
            <div className="flex flex-col items-center gap-6 relative">
              <div className="w-full flex justify-center mb-16">
                <div className="px-4 py-2 rounded-full bg-purple-800/20 border border-purple-800/50 text-purple-800 font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(107,33,168,0.2)]">
                  <CheckCircle2 size={16} />
                  MCU 기술 보유자
                </div>
              </div>
              
              <div className="relative w-full max-w-[200px] flex justify-center items-end h-[200px]">
                {/* Dramatic Glow */}
                <div className={`absolute inset-0 bg-purple-800/20 blur-3xl transition-opacity duration-1000 delay-500 ${startAnimate ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div 
                  className="w-full bg-gradient-to-t from-purple-950 via-purple-800 to-purple-700 rounded-t-2xl transition-all duration-1000 ease-out origin-bottom shadow-[0_0_40px_rgba(107,33,168,0.4)] relative z-10"
                  style={{ height: startAnimate ? '200px' : '0px', transitionDelay: '300ms' }}
                >
                  <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-full text-center transition-all duration-700 delay-1000 ${startAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex items-baseline justify-center gap-2`}>
                    <span className="text-purple-800/80 text-lg font-bold uppercase tracking-widest">연봉</span>
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(107,33,168,0.8)]">
                      3,500<span className="text-2xl text-purple-800">~</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA Text */}
        <Reveal delay={600} className="w-full mb-32">
          <div className="relative py-12 px-4 border-y border-white/10 bg-gradient-to-r from-transparent via-purple-800/5 to-transparent">
            <h4 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_15px_rgba(0,0,0,1)]">
              어디에서도 알려주지 않는 MCU,<br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900 mt-2 md:mt-4 block">
                오로지 한국직업능력교육원에서만 배울 수 있습니다!
              </span>
            </h4>
          </div>
        </Reveal>

        {/* New Employment Success Section */}
        <Reveal className="w-full max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              <span className="text-purple-800">500+</span> 취업자가 증명한<br />
              한직교의 전문성
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">
              AI/IoT · 임베디드 · 펌웨어 분야에서 활약 중인<br className="md:hidden" /> 수강생들의 실제 취업사례 일부입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { company: "PNPSECURE", role: "보안 시스템 개발자" },
              { company: "HL Mando", role: "IoT 시스템 개발자" },
              { company: "서울스탠다드", role: "IoT 시스템 개발자" },
              { company: "DONG-AH", role: "임베디드 개발자" },
              { company: "APSI", role: "위성통신 모듈 개발자" }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-zinc-800/80 hover:border-purple-800/50 transition-all group">
                <div className="text-lg md:text-xl font-black text-white mb-2 group-hover:text-purple-800 transition-colors break-all">
                  {item.company}
                </div>
                <div className="text-sm text-gray-400 font-medium break-keep">
                  {item.role}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* New Education Features Section */}
        <Reveal className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              언어, 실습, 실전까지<br />
              <span className="text-purple-800">균형 잡힌 IOT 기술 교육</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                num: "01",
                title: "30년 경력의 프로그래밍 강사와\n전자공학 박사 출신 강사",
                desc: "전문성과 실무 경험을 모두 갖춘 베테랑 강사진이 직접 강의합니다."
              },
              {
                num: "02",
                title: "Python을 활용한 AI 프로그래밍과 C를 활용한 임베디드/펌웨어 개발자 교육",
                desc: "AI/IOT 시스템 개발에 주력인 Python과 임베디드/펌웨어 제어의 기반인 C언어를 실무 위주로 강의합니다."
              },
              {
                num: "03",
                title: "MCU(STM32, ESP32) 기반\n실무 교육",
                desc: "임베디드/펌웨어 개발자 기술의 핵심인 MCU(STM32, ESP32) 활용을 실무 위주로 강의합니다."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-800/30 transition-colors">
                <div className="absolute top-0 right-0 text-8xl font-black text-white/5 -mt-4 -mr-4 group-hover:text-purple-800/10 transition-colors">
                  {feature.num}
                </div>
                <div className="text-purple-800 font-black text-2xl mb-6">{feature.num}</div>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug whitespace-pre-line">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed font-medium break-keep">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Education Inquiry Button */}
        <Reveal className="w-full mt-24 mb-12 flex justify-center">
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-black text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(107,33,168,0.4)] hover:shadow-[0_0_50px_rgba(107,33,168,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }}></span>
            상담신청하기
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
};
