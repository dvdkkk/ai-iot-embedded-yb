import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Calendar, MousePointer2 } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

// 스크롤 애니메이션 컴포넌트 (다른 섹션과 동일한 방식)
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
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ExamSchedule: React.FC = () => {
  const { content } = useContent();
  const { technician, engineer } = content.examSchedule;
  
  // 각 테이블별 스크롤 참조
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // 스크롤 감지 (어느 하나라도 스크롤되면 힌트 숨김)
  const handleScroll = () => {
    if (
      (scrollRef1.current && scrollRef1.current.scrollLeft > 20) ||
      (scrollRef2.current && scrollRef2.current.scrollLeft > 20)
    ) {
      setShowScrollHint(false);
    }
  };

  const Table = ({ data, title, scrollRef }: { data: any[], title: string, scrollRef: React.RefObject<HTMLDivElement> }) => (
    <div className="mb-12 last:mb-0">
      <h4 className="text-xl md:text-2xl font-bold text-white mb-4 pl-3 border-l-4 border-purple-800">
        {title}
      </h4>
      <div className="relative rounded-xl border border-zinc-700 bg-black overflow-hidden shadow-2xl">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto custom-scrollbar"
          style={{ 
            scrollbarColor: '#facc15 #18181b', 
            scrollbarWidth: 'thin' 
          }}
        >
          <table className="w-full text-sm min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-zinc-800 text-white border-b border-zinc-700">
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[15%]">구분</th>
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[14%]">필기원서접수</th>
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[14%] text-purple-800">필기시험</th>
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[14%]">필기발표</th>
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[14%]">실기원서접수</th>
                <th className="py-4 px-4 font-bold text-center border-r border-zinc-700 w-[14%] text-purple-800">실기시험</th>
                <th className="py-4 px-4 font-bold text-center w-[15%]">실기발표</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-zinc-800">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                  <td className="py-4 px-4 text-center font-bold text-white border-r border-zinc-800 whitespace-pre-line">
                    {row.round}
                  </td>
                  <td className="py-4 px-4 text-center border-r border-zinc-800 text-xs md:text-sm whitespace-pre-line">
                    {row.writtenApp}
                  </td>
                  <td className="py-4 px-4 text-center border-r border-zinc-800 text-xs md:text-sm font-bold text-purple-800">
                    {row.writtenExam}
                  </td>
                  <td className="py-4 px-4 text-center border-r border-zinc-800 text-xs md:text-sm">
                    {row.writtenRes}
                  </td>
                  <td className="py-4 px-4 text-center border-r border-zinc-800 text-xs md:text-sm">
                    {row.practicalApp}
                  </td>
                  <td className="py-4 px-4 text-center border-r border-zinc-800 text-xs md:text-sm font-bold text-purple-800">
                    {row.practicalExam}
                  </td>
                  <td className="py-4 px-4 text-center text-xs md:text-sm">
                    {row.practicalRes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <section id="schedule" className="py-20 bg-zinc-900 border-b border-zinc-800 relative">
      <div className="container mx-auto px-4">
        {/* Header with Animation */}
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/10 border border-purple-800/30 text-purple-800 mb-4">
            <Calendar size={14} />
            <span className="text-xs font-bold tracking-wide uppercase">Schedule</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            2026년 정기시험 일정
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            자격증 취득의 첫걸음은 정확한 일정 파악입니다.<br className="hidden md:block" />
            한국직업능력교육원과 함께 완벽한 합격 플랜을 세워보세요.
          </p>
        </Reveal>

        {/* Scroll Hint (Mobile) */}
        <div className={`md:hidden flex justify-end mb-4 transition-opacity duration-300 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-1 text-xs text-purple-800 animate-pulse">
            <MousePointer2 size={12} className="rotate-90" />
            <span>좌우로 스크롤하여 확인하세요</span>
          </div>
        </div>

        {/* Technician Table with Animation */}
        <Reveal delay={200} className="mb-16">
          <Table data={technician} title="전기기능사 일정(1~5달 전 대비)" scrollRef={scrollRef1} />
        </Reveal>

        {/* Engineer Table with Animation */}
        <Reveal delay={400}>
          <Table data={engineer} title="전기(산업)기사 일정(1~5달 전 대비)" scrollRef={scrollRef2} />
        </Reveal>

        <Reveal delay={600} className="mt-12 text-center">
            <p className="text-[10px] md:text-xs text-zinc-500">
                ※ 상기 일정은 한국산업인력공단(Q-Net)의 사정에 따라 변경될 수 있습니다.<br />
                ※ 정확한 접수 기간 및 시험 장소는 큐넷 공식 홈페이지를 통해 반드시 다시 확인하시기 바랍니다.
            </p>
        </Reveal>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #18181b;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #facc15;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #eab308;
        }
      `}</style>
    </section>
  );
};