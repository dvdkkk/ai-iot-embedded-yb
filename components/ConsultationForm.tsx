import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

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
      className={`${className} transition-all duration-300 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (!isMobile) {
      e.preventDefault();
      window.open('https://naver.me/G1w8Gyro', '_blank', 'noopener,noreferrer');
    }
  };

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://naver.me/G1w8Gyro', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-purple-950 to-zinc-950 text-white scroll-mt-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-bold mb-4 backdrop-blur-md">
                <Sparkles size={14} className="text-yellow-400" />
                <span>100% 무료 국비지원 취업과정</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                망설이지 마세요.<br/>
                교육 전문가가 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-white">
                  친절하게 안내해드립니다.
                </span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-white/85 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업·교육과정까지<br/>
                <span className="border-b-2 border-purple-400 font-bold text-white">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white text-purple-900 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                          <Phone size={24} />
                      </div>
                      <div>
                          <p className="text-xs font-bold text-purple-200">교육문의 (PC: 상담신청 / 모바일: 전화연결)</p>
                          <a 
                            href="tel:15996529" 
                            onClick={handlePhoneClick}
                            className="text-2xl md:text-3xl font-black block text-white hover:text-purple-300 transition-colors cursor-pointer"
                            title="교육상담 문의"
                          >
                            1599-6529
                          </a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white text-purple-900 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                          <MapPin size={24} />
                      </div>
                      <div>
                          <p className="text-xs font-bold text-purple-200">교육장소</p>
                          <p className="text-lg md:text-xl font-bold">한국직업능력교육원 안산</p>
                      </div>
                  </div>
              </div>
              <p className="font-bold text-base text-purple-200 mt-6">여러분의 꿈과 도전을 진심으로 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right Action Card with Consultation Button */}
          <Reveal delay={200} className="h-full">
            <div className="bg-zinc-950/70 backdrop-blur-2xl border-2 border-purple-500/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(147,51,235,0.25)] flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    실시간 온라인 상담 접수중
                  </div>
                  <span className="text-xs text-purple-300/80 font-medium">선착순 마감</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                    빠르고 간편한 <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-white">
                      1:1 맞춤 무료상담 신청
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    복잡한 입력 없이 네이버 간편 예약 및 상담 신청 폼을 통해 빠르고 편리하게 상담을 받으실 수 있습니다.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    "교육비 95~100% 국비지원",
                    "매월 훈련장려금 & 식대 지급",
                    "비전공자 맞춤형 기초부터 실무",
                    "1:1 밀착 취업 연계 & 포트폴리오"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-zinc-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-gray-200">
                      <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Consultation Button */}
                <div className="pt-4">
                  <a
                    href="https://naver.me/G1w8Gyro"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleConsultationClick}
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:via-indigo-500 hover:to-purple-500 text-white font-black text-lg sm:text-xl py-4 sm:py-5 px-6 sm:px-8 rounded-2xl shadow-[0_10px_30px_rgba(147,51,235,0.45)] hover:shadow-[0_15px_45px_rgba(147,51,235,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn"
                  >
                    <span>상담신청 바로가기</span>
                    <ExternalLink size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-xs text-center text-purple-300/80 mt-3 font-medium">
                    클릭 시 네이버 공식 간편 상담신청 페이지로 새창 이동합니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
