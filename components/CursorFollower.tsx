import React, { useEffect, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      // 마우스 위치로 transform 업데이트 (하드웨어 가속 사용)
      // translate(-50%, -50%)를 사용하여 커서 중심에 원이 오도록 조정
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-purple-800 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_rgba(107,33,168,0.6)]"
      style={{ 
        willChange: 'transform',
        // 초기 위치를 화면 밖으로 설정하여 깜빡임 방지
        transform: 'translate3d(-100px, -100px, 0)'
      }}
    />
  );
};