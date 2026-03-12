
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

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

const REVIEWS = [
  {
    name: "이*재",
    score: 5.0,
    text: "강의가 이해하기 쉽게 잘 짜여 있습니다. 프로그래밍 기초 과정을 쉽게 배울 수 있어 좋습니다."
  },
  {
    name: "김*환",
    score: 4.5,
    text: "처음엔 용어조차 낯설어 포기하고 싶을 때도 많았습니다. 하지만 강사님의 1:1 피드백 덕분에 끝까지 올 수 있었어요. 단순히 지식을 배운 것이 아니라, '어떻게 스스로 학습하는지' 그 방법을 배운 것 같아 정말 만족스럽습니다."
  },
  {
    name: "송*용",
    score: 5.0,
    text: "강사님의 설명이 이해하기 쉽고 기초부터 차근차근 배울 수 있어 좋았습니다. 비전공자도 따라가기 어렵지 않았고, 실습 위주 수업이라 도움이 많이 되었습니다. 전반적으로 만족스러운 교육 과정이었습니다."
  },
  {
    name: "김*준",
    score: 5.0,
    text: "코딩을 혼자 해보려다 너무 어려워서 포기했었는데, 강사님이 정말 쉽고 재밌게 알려주셔서 비전공자인 저도 어느정도 이해할 수 있었습니다. 핵심 원리를 이해하기 쉽게 알려주셔서 좋았습니다."
  },
  {
    name: "오*연",
    score: 4.5,
    text: "비전공자 입장에서 배우기 수월한 강의입니다."
  },
  {
    name: "강*정",
    score: 5.0,
    date: "26.02.02",
    text: "전반적인 커리큘럼이 체계적이라 따라가기 수월했습니다. 강사님의 전문성이 느껴지는 강의였고, 교육 환경도 쾌적해서 집중하기 좋았습니다. 유익한 시간이었습니다."
  }
];

export const ReviewSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // 반응형 화면 크기에 따른 아이템 개수 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    
    handleResize(); // 초기 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // itemsPerView 변경 시 인덱스 리셋 (레이아웃 틀어짐 방지)
  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerView]);

  // 자동 슬라이드 (화면 크기에 따라 이동 개수 조정)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // itemsPerView만큼 이동 (모바일 1칸, PC 2칸)
        const nextIndex = prev + itemsPerView;
        return nextIndex >= REVIEWS.length ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section id="reviews" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-800/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-800 mb-4">
                <MessageSquareQuote size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                수료생들의 <span className="text-purple-800">생생한 후기</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-sm">
                수강생들이 증명하는 한직교의 교육 퀄리티를 확인하세요.
            </p>
        </Reveal>

        {/* Reviews Slider Container */}
        <Reveal delay={200} className="relative max-w-6xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {REVIEWS.map((review, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-1/2 flex-shrink-0 px-3"
              >
                <div className="h-full bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl relative flex flex-col hover:border-purple-800/30 transition-colors group">
                  <Quote size={40} className="text-zinc-800 absolute top-6 right-6 group-hover:text-zinc-700 transition-colors" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(review.score) ? 'fill-purple-800 text-purple-800' : (i < review.score ? 'fill-purple-800 text-purple-800 opacity-50' : 'text-zinc-700')}`} 
                      />
                    ))}
                    <span className="ml-2 text-white font-bold text-sm">{review.score}점</span>
                  </div>

                  {/* Content */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 flex-grow break-keep">
                    {review.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between border-t border-zinc-800 pt-4 mt-auto">
                    <div className="flex flex-col">
                        <span className="font-bold text-white text-base">
                            {review.name} <span className="text-xs font-normal text-zinc-500 ml-1">수료생</span>
                        </span>
                    </div>
                    {review.date && (
                        <span className="text-xs text-zinc-600 font-mono">{review.date}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(REVIEWS.length / itemsPerView) }).map((_, idx) => {
               // 현재 보고 있는 페이지 인덱스 계산
               const isActive = Math.floor(activeIndex / itemsPerView) === idx;
               return (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx * itemsPerView)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-purple-800' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
               );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
