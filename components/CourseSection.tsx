import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Code2, Terminal, Database, Cpu, BookOpen, Server, Camera, Layout, Rocket, CheckCircle2 } from 'lucide-react';

// Animation Component
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CourseSection: React.FC = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "프로그래밍 실습",
      category: "기초 프로그래밍",
      icon: Terminal,
      content: "프로그래밍 기초 요소 학습 / 파일 조작과 문서 탐색 / 오픈소스 활용 및 실습",
      stack: ["프로그래밍 언어", "HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 2",
      title: "서버 프로그래밍과 데이터베이스 구현",
      category: "백엔드 & DB",
      icon: Database,
      content: "서버프로그래밍 기초 요소 / 데이터베이스 구현과 관리 / 서버와 데이터베이스 실습",
      stack: ["서버와 데이터베이스 실습", "SQL", "jQuery"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 3",
      title: "임베디드 시스템과 펌웨어 프로그래밍",
      category: "임베디드 펌웨어",
      icon: Cpu,
      content: "펌웨어 프로그래밍 기초 / 마이크로컨트롤러 기반 프로그래밍 / 센서와 액추에이터 활용",
      stack: ["아두이노", "센서 IF 신호처리", "MCU 프로그래밍 실습", "Server / Client / Serial 통신 터미널 GUI 프로그램"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 4",
      title: "애플리케이션개발언어",
      category: "알고리즘 & 자료구조",
      icon: BookOpen,
      content: "자료구조 파악 / 알고리즘 파악 및 실습",
      stack: ["자료구조 파악", "알고리즘 파악 및 실습", "HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2832&auto=format&fit=crop"
    },
    {
      step: "STEP 5",
      title: "임베디드시스템과 라즈베리파이 활용",
      category: "SBC & MCU 응용",
      icon: Server,
      content: "라즈베리파이로 프로그래밍 / 센서 및 데이터 활용 / MCU(STM32, ESP32) 활용",
      stack: ["라즈베리파이", "USB Web 카메라 영상처리 제어 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 6",
      title: "리눅스 기초와 활용",
      category: "임베디드 리눅스",
      icon: Terminal,
      content: "리눅스 환경구축 / 리눅스 운영체제 소개와 기본 명령어 / 파일 시스템 관리 및 권한 설정",
      stack: ["ESP32 펌웨어 제어 프로그램 실습", "UART / USART 시리얼 통신 제어 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 7",
      title: "컴퓨터 비전 활용",
      category: "AI & 영상인식",
      icon: Camera,
      content: "컴퓨터 비전 기초 / OpenCV 활용 프로그래밍 / 응용 프로젝트 / 딥러닝을 통한 이미지 분류 / 확장된 이미지 처리 기술",
      stack: ["OpenCV활용 프로그래밍 실습", "영상처리 및 인식 프로그램 개발 실습"],
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "STEP 8",
      title: "웹 대시보드 디자인과 활용",
      category: "IoT 관제 & 대시보드",
      icon: Layout,
      content: "웹 프론트엔드 기초 / 데이터 시각화와 대시보드 구현",
      stack: ["데이터 시각화와 대시보드 구현 실습", "Network 소켓 통신 프로그램 실습"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/40 text-purple-300 mb-4 backdrop-blur-md">
            <Code2 size={16} />
            <span className="text-xs font-bold tracking-wide uppercase">CURRICULUM ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            체계적인 <span className="text-purple-400">9단계 실무 완성</span> 로드맵
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            기초 프로그래밍부터 임베디드 펌웨어, 컴퓨터 비전, 최종 스마트팜 캡스톤 프로젝트까지 완벽 마스터합니다.
          </p>
        </Reveal>

        {/* 1 ~ 8 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 80} className="h-full">
                <div className="h-full bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/50 hover:bg-zinc-900/80 transition-all duration-300 group shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl group-hover:bg-purple-600/10 transition-colors pointer-events-none"></div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 rounded-full bg-purple-950 border border-purple-500/30 text-purple-300 text-xs font-black tracking-wider">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold text-gray-400 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80">
                    <p className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wide">실습 및 기술 스택</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((s, sIdx) => (
                        <span key={sIdx} className="text-xs font-medium text-gray-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* STEP 9 - Wide Highlight Card */}
        <Reveal delay={700}>
          <div className="relative bg-gradient-to-br from-purple-950/80 via-zinc-950 to-zinc-950 border-2 border-purple-500/50 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(147,51,235,0.15)] overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500 text-white text-xs font-black tracking-widest uppercase shadow-lg">
                  <Rocket size={14} /> STEP 9 (최종 캡스톤 프로젝트)
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  SmartFarm 통합 IoT관리 시스템<br />
                  <span className="text-purple-400">개발 프로젝트</span>
                </h3>
                <p className="text-gray-200 text-base leading-relaxed font-medium">
                  SmartFarm제작 / 컴퓨터비전 SmartFarm제작 / 화재감지 모니터링시스템 SmartFarm제작 등 현업 실무 역량을 입증할 수 있는 최고난도 종합 캡스톤 프로젝트를 수행합니다.
                </p>
                
                <div className="pt-2">
                  <p className="text-xs font-bold text-purple-300 mb-2 uppercase tracking-wider">프로젝트 실습 및 구현 스택</p>
                  <div className="flex flex-wrap gap-2">
                    {["스마트팜 제작", "컴퓨터비전 스마트팜 제작", "화재감지 모니터링 시스템 스마트팜 제작"].map((st, idx) => (
                      <span key={idx} className="text-xs font-bold text-white bg-purple-900/60 border border-purple-500/40 px-3 py-1.5 rounded-xl shadow-md">
                        ✓ {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center shrink-0">
                <a
                  href="#consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-base px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(147,51,235,0.4)] hover:shadow-[0_0_40px_rgba(147,51,235,0.7)] hover:scale-105 transition-all duration-300"
                >
                  과정 문의 및 신청하기
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
