
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { Send, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

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
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(true);
  const [ipAddress, setIpAddress] = useState('');

  // 접속자 IP 가져오기
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        if (data.ip) {
          setIpAddress(data.ip);
        }
      } catch (error) {
        console.error('IP 수집 실패:', error);
      }
    };
    fetchIp();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("개인정보 수집 및 이용에 동의해야 합니다.");
      return;
    }
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // 낙관적 UI (Optimistic UI) 적용: 서버 응답을 기다리지 않고 즉시 성공 처리
    setStatus("SUCCESS");
    
    try {
      // 백그라운드 전송 및 keepalive 옵션 적용
      fetch("https://inputhaven.com/api/v1/submit", {
        method: "POST",
        body: data,
        keepalive: true,
        headers: {
          'Accept': 'application/json'
        }
      }).catch(error => {
        console.error('백그라운드 전송 실패:', error);
      });
      
      form.reset();
    } catch (error) {
      console.error('폼 처리 중 오류:', error);
    }
  };

  return (
    <section id="consultation" className="py-8 bg-purple-800 text-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                망설이지 마세요.<br/>
                교육 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg font-medium text-white/80 mb-6">
                국비지원 자격 여부부터 취업·교육과정까지<br/>
                <span className="border-b-2 border-white">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white text-purple-800 rounded-full flex items-center justify-center">
                          <Phone size={20} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-70">교육문의</p>
                          <a href="tel:15996529" className="text-2xl font-black block hover:opacity-80 transition-opacity md:pointer-events-none md:cursor-default">1599-6529</a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white text-purple-800 rounded-full flex items-center justify-center">
                          <MapPin size={20} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-70">교육장소</p>
                          <p className="text-lg font-bold">안산</p>
                      </div>
                  </div>
              </div>
              <p className="font-bold text-base mt-4">여러분의 꿈을 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right Form */}
          <Reveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-4 md:p-7 shadow-2xl h-full">
              {status === "SUCCESS" ? (
                  <div className="text-center py-12">
                      <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">상담 신청이 완료되었습니다!</h3>
                      <p className="text-gray-600 text-sm">빠른 시일 내에 전문 상담원이 연락드리겠습니다.</p>
                      <button onClick={() => setStatus("IDLE")} className="mt-6 text-xs text-gray-500 underline">다시 작성하기</button>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                  {/* IP 주소 및 메타데이터 */}
                  <input type="hidden" name="_form_id" value="a2145f6fe592b9cbc3dedc91df00adf1" />
                  <input type="hidden" name="user_ip" value={ipAddress} />
                  <input type="hidden" name="_subject" value="[신규 상담 신청] AI사물인터넷 MCU기반(STM32,ESP32) 임베디드 펌웨어 전문가 양성" />

                  <h3 className="text-lg font-bold text-zinc-900 mb-2 md:mb-3 flex items-center gap-2">
                      빠른 교육상담 신청
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                      <div className="space-y-0.5 md:space-y-1">
                          <label className="text-xs font-bold text-gray-700 ml-1">이름</label>
                          <input required name="name" type="text" placeholder="홍길동" className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/20 outline-none transition-all text-sm text-black" />
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                          <label className="text-xs font-bold text-gray-700 ml-1">나이</label>
                          <input required name="나이" type="text" placeholder="예: 30" className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/20 outline-none transition-all text-sm text-black" />
                      </div>
                  </div>

                  <div className="space-y-0.5 md:space-y-1">
                      <label className="text-xs font-bold text-gray-700 ml-1">연락처</label>
                      <input required name="연락처" type="tel" placeholder="010-0000-0000" className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/20 outline-none transition-all text-sm text-black" />
                  </div>

                  <div className="space-y-0.5 md:space-y-1">
                      <label className="text-xs font-bold text-gray-700 ml-1">이메일</label>
                      <input required name="email" type="email" placeholder="example@email.com" className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/20 outline-none transition-all text-sm text-black" />
                  </div>

                  <div className="space-y-0.5 md:space-y-1">
                      <label className="text-xs font-bold text-gray-700 ml-1">교육목적</label>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {['취업/이직', '자기개발', '창업', '기타'].map((purpose) => (
                              <label key={purpose} className="flex items-center gap-2 p-1.5 md:p-2 border rounded-lg cursor-pointer hover:bg-gray-50 flex-1 min-w-[80px] justify-center">
                                  <input type="radio" name="교육목적" value={purpose} required className="accent-purple-800 w-3.5 h-3.5" />
                                  <span className="text-xs font-bold text-gray-700">{purpose}</span>
                              </label>
                          ))}
                      </div>
                  </div>

                  <div className="space-y-0.5 md:space-y-1">
                      <label className="text-xs font-bold text-gray-700 ml-1">문의내용</label>
                      <textarea name="message" rows={2} placeholder="궁금하신 점을 자유롭게 적어주세요." className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/20 outline-none transition-all resize-none text-sm text-black" required></textarea>
                  </div>

                  {/* Privacy Policy */}
                  <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-1">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                              <input 
                                  type="checkbox" 
                                  checked={isAgreed}
                                  onChange={(e) => setIsAgreed(e.target.checked)}
                                  className="w-4 h-4 accent-purple-800 rounded cursor-pointer" 
                              />
                              <span className="text-xs font-bold text-gray-700">
                                  개인정보 수집 및 이용에 동의합니다.
                              </span>
                          </label>
                          <button 
                              type="button"
                              onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                              className="text-[10px] font-bold text-gray-500 hover:text-black flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                          >
                              {isPrivacyOpen ? '접기' : '자세히보기'}
                              {isPrivacyOpen ? <ChevronUp size={10}/> : <ChevronDown size={10}/>}
                          </button>
                      </div>

                      {isPrivacyOpen && (
                          <div className="bg-gray-50 p-2.5 rounded-lg text-[10px] text-black animate-fade-in-down border border-gray-200 mb-2">
                              <h5 className="font-bold mb-1.5">개인정보 수집 및 이용 동의 (필수)</h5>
                              <p className="mb-2 leading-tight">한국직업능력교육원 실시간온라인문의 신청을 위해 다음과 같이 개인정보를 수집 및 이용합니다.</p>
                              
                              <div className="grid grid-cols-[60px_1fr] gap-y-1.5 gap-x-2 border-t border-gray-200 pt-2 text-left">
                                  <div className="font-bold text-gray-600 bg-gray-100 rounded px-1 py-0.5 text-center">수집목적</div>
                                  <div className="font-medium py-0.5">온라인문의</div>
                                  
                                  <div className="font-bold text-gray-600 bg-gray-100 rounded px-1 py-0.5 text-center">수집항목</div>
                                  <div className="font-medium py-0.5">이름, 나이, 연락처, 교육목적, 문의내용</div>
                                  
                                  <div className="font-bold text-gray-600 bg-gray-100 rounded px-1 py-0.5 text-center">보유기간</div>
                                  <div className="font-medium py-0.5">60일</div>
                              </div>
                          </div>
                      )}
                  </div>

                  <button 
                      type="submit"
                      disabled={status === "SUBMITTING"}
                      className="w-full bg-purple-950 text-white font-bold py-3 rounded-lg text-base hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:bg-gray-400"
                  >
                      {status === "SUBMITTING" ? "전송 중..." : "무료상담 신청하기"}
                      <Send size={16} />
                  </button>
                  <p className="text-[10px] text-center text-gray-500 mt-2">
                      개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                  </p>
                  </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
