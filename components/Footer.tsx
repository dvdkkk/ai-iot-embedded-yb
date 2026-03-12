import React, { useEffect } from 'react';

export const Footer: React.FC = () => {
  useEffect(() => {
    // 리포트2.0 로그분석코드 시작
    const sTime = new Date().getTime();
    (function(i: any, s: any, o: any, g: any, r: any, a?: any, m?: any){
      i['webObject']=g;
      i['webUid']=r;
      a=s.createElement(o);
      m=s.getElementsByTagName(o)[0];
      a.async=1;
      a.src=g;
      m.parentNode.insertBefore(a,m)
    })(window,document,'script','//nayang81.weblog.cafe24.com/weblog.js?v='+sTime,'nayang81_9');
    // 리포트2.0 로그분석코드 완료
  }, []);

  return (
    <footer className="bg-black text-zinc-500 py-6 border-t border-zinc-900 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <h5 className="text-white font-bold mb-4 text-base">한국직업능력교육원 안산</h5>
                <p className="leading-relaxed mb-4">
                    본 과정은 고용노동부 주관 직업능력개발훈련 과정입니다.<br/>
                    최고의 시설과 강사진으로 여러분의 취업 성공을 끝까지 책임지겠습니다.
                </p>
            </div>
            <div className="md:text-right">
                <p className="font-bold text-zinc-400 mb-2">고객센터</p>
                <a 
                  href="tel:15996529" 
                  className="text-2xl font-bold text-white hover:text-purple-800 transition-colors md:pointer-events-none md:cursor-default md:hover:text-white inline-block"
                >
                  1599-6529
                </a>
            </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 space-y-2 text-xs md:text-sm">
            <p>상호명 : 한국직업능력교육원 안산</p>
            <p>지점 : 안산캠퍼스</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p>사업자등록번호 : 119-81-54852</p>
                <p>개인정보보호책임자 : 김진철</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-zinc-600">Copyright ⓒ 한국직업능력교육원 안산 All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};