
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Briefcase } from 'lucide-react';

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
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const EmploymentSupport: React.FC = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "1:1 상담으로 취업전략 설계",
      items: ["취업역량 진단", "취업 니즈 분석", "맞춤형 채용정보 제공"]
    },
    {
      step: "STEP 2",
      title: "실전 취업 준비",
      items: ["취업역량 강화 교육", "이력서·자기소개서 1:1 첨삭", "면접특강 & 모의면접"]
    },
    {
      step: "STEP 3",
      title: "취업활동 지원",
      items: ["동행면접", "채용행사 & 현장면접", "대외 취업정보 제공"]
    },
    {
      step: "STEP 4",
      title: "6개월 사후관리",
      items: ["취업 후 적응 상담", "경력 개발 코칭", "6개월 지속 모니터링"]
    }
  ];

  return (
    <section id="employment-support" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-4">
                <Briefcase size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Employment Support</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
              수료 후까지 이어지는<br />
              <span className="text-purple-800">취업지원시스템</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                체계적인 1:1 맞춤형 컨설팅으로 여러분의 취업 성공을 끝까지 지원합니다.
            </p>
          </Reveal>
        </div>

        {/* Timeline Content */}
        <div className="relative pl-8 md:pl-32">
          {/* Vertical Line */}
          <div className="absolute left-10 md:left-[82px] top-0 bottom-0 w-[1px] bg-zinc-800"></div>

          <div className="space-y-24">
            {steps.map((item, idx) => (
              <Reveal key={idx} delay={idx * 150} className="relative group">
                
                {/* Timeline Marker (Step text and dot) */}
                <div className="absolute -left-10 md:-left-40 top-2 flex items-center w-32 md:w-40 justify-end pr-4 md:pr-10">
                  <span className="text-zinc-500 font-bold text-sm tracking-tighter mr-4 hidden md:block">{item.step}</span>
                  <div className="w-3 h-3 rounded-full bg-purple-800 shadow-[0_0_10px_rgba(107,33,168,0.5)] z-10 transition-transform duration-300 group-hover:scale-125"></div>
                </div>

                {/* Content Area */}
                <div>
                   <span className="text-zinc-500 font-bold text-xs tracking-tighter mb-2 block md:hidden">{item.step}</span>
                   <div className="inline-block bg-zinc-900 border border-zinc-800 px-4 py-2 mb-6 rounded-lg hover:border-purple-800/50 transition-colors">
                      <h3 className="text-white font-black text-xl md:text-2xl tracking-tight">
                        {item.title}
                      </h3>
                   </div>
                   
                   <ul className="space-y-3">
                      {item.items.map((li, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-400 font-medium md:text-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-800"></span>
                          {li}
                        </li>
                      ))}
                   </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};
