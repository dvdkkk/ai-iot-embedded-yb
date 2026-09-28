import React, { useEffect, useState } from 'react';
import { MessageSquareText } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금 발생하면 버튼 표시
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://naver.me/G1w8Gyro', '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a 
        href="https://naver.me/G1w8Gyro"
        target="_blank"
        rel="noopener noreferrer" 
        onClick={handleClick}
        className="pointer-events-auto bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm px-4 py-3.5 sm:px-5 sm:py-4 rounded-full shadow-[0_6px_25px_rgba(107,33,168,0.5)] flex items-center gap-2 transition-all hover:scale-110 active:scale-95 border border-white/20"
        aria-label="상담 신청하기"
      >
        <MessageSquareText size={18} />
        <span>상담신청</span>
      </a>
    </div>
  );
};
