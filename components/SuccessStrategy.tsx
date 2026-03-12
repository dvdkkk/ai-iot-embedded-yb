import React, { useRef, useState, useEffect } from 'react';
import { Target, Zap, BookOpen, ThumbsUp, Quote } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const SuccessStrategy: React.FC = () => {
  const { content } = useContent();
  const { items: strategies, reviews } = content.strategy;
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer hook
  const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);
    return isIntersecting;
  };
  
  const isVisible = useOnScreen(scrollRef);

  // Icon mapping
  const icons = [
    <Target className="w-8 h-8 text-black" />,
    <BookOpen className="w-8 h-8 text-black" />,
    <Zap className="w-8 h-8 text-black" />,
    <ThumbsUp className="w-8 h-8 text-black" />
  ];

  return (
    <section ref={scrollRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-purple-800 text-xs font-bold tracking-widest uppercase mb-3">SUCCESS STRATEGY</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            합격을 만드는 <span className="text-purple-800">확실한 전략</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            수많은 합격생들이 증명하는 한국직업능력교육원 안산만의 합격 비결을 공개합니다.
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {strategies.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-800/50 transition-all duration-300 group hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-purple-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                {icons[idx] || icons[0]}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed word-keep break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-10">
            <Quote className="text-purple-800 fill-purple-800" size={24} />
            <h3 className="text-2xl font-bold text-white">수강생 리얼 후기</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 relative flex flex-col justify-between hover:border-zinc-600 transition-colors duration-300">
                <div>
                  <div className="text-zinc-700 mb-4">
                    <Quote size={20} className="transform scale-x-[-1]" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10 break-keep min-h-[80px]">
                    {review.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-purple-800 font-medium">#{review.tag}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-800"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};