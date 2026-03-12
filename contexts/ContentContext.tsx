
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, VisitorLog } from '../types';
import { COURSES, EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';

const defaultContent: SiteContent = {
  hero: {
    badge: "AI 미래유망직종",
    title: "미래를 여는 인공지능 기술",
    highlight: "AI사물인터넷 MCU기반\n임베디드 펌웨어 전문가로",
    description: "온 디바이스AI, 스마트팩토리, 스마트팜 등에 활용되는 Cortex-M4/Mx ARM MCU 기반 임베디드/펌웨어 실무 교육 과정입니다. 한국직업능력교육원에서 임베디드 전문가로 거듭나세요.",
    stats: [
      { label: '모집여부', value: '26년4월 ~ 26년10월(6개월과정)' },
      { label: '교육시간', value: '월~금 09:00~17:40' },
      { label: '수강료', value: '95~100% 국비지원' },
      { label: '수업형태', value: '오프라인 수업' },
      { label: '기숙사', value: '사용 가능' },
      { label: '선발방법', value: '문의 > 인터뷰 > 합격' },
    ]
  },
  intro: {
    badge: "Education Mission",
    title1: "전공·경력·성별 상관없이",
    highlight: "‘할 수 있는 사람’",
    title2: "을 만들어냅니다",
    description: "성별과 전공을 넘어 다양한 수료생들이 지금 이 순간에도 IT실무자로 활약하고 있습니다.",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMTI5/MDAxNzcwNDczMzk4MzM5.j6rX1bGlkkwNbV77txNgK14lBHAYbiKYfjFpgFzk1RAg.WXfNRwdBQeh3Zhcovjw_scv8iSDnJAuGWqby2eYoZvQg.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770466544356.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMjI5/MDAxNzcwNDczMzk5OTE3.zw8tAXItIlc5CRfOO4Q5suU3s0dKbyxIM49ParhCvqQg.I1bS28bnL015uE1pv3IkM5ToKsiZLT1XO7W_3L0UYV8g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469035959.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfNTMg/MDAxNzcwNDczMzk3NjA4.oSduxbDJ8lN2Rj54VF-pvaOKz3yoxorBpC5fdpO3qVIg.eipwPaOlxxF2j76bRk7vW_Uk_HJ1_mD0P1LOq2W3mP0g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469319485.jpg?type=w966",
      "https://postfiles.pstatic.net/MjAyNjAyMDdfMTU2/MDAxNzcwNDczMzk5MTU0.dwY7j_8HCvh85ssKo5vCmDSdfa2ynn8h6P6zSLm60lkg.CRWZXZGGUt_mnKEyLxg7F1WcWjGN1uCGMrNat_zRoy8g.JPEG/grok%EF%BC%BFimage%EF%BC%BF1770469274109.jpg?type=w966"
    ]
  },
  vision: {
    items: [
      { num: '01', title: '고연봉 전문직', desc: 'MCU 및 임베디드 펌웨어 기술력을 갖춘 개발자는 업계 최고의 대우' },
      { num: '02', title: '전 산업 수요 폭발', desc: '유통, 금융, 제조 등 모든 분야에서 AI 도입 가속화로 구인난 심화' },
      { num: '03', title: '평생 경력 자산', desc: '한번 익힌 로직과 데이터 사이언스 기술은 대체 불가능한 핵심 역량' },
      { num: '04', title: '스타트업/창업 기회', desc: '자신만의 독창적인 AI 서비스를 개발하여 1인 창업 및 도약 가능' }
    ]
  },
  courses: COURSES,
  examSchedule: {
    technician: [
      { round: '1회', writtenApp: '1.13 ~ 1.16', writtenExam: '1.25 ~ 2.3', writtenRes: '2.26', practicalApp: '3.2 ~ 3.5', practicalExam: '3.22 ~ 4.4', practicalRes: '4.18' },
      { round: '2회', writtenApp: '3.10 ~ 3.13', writtenExam: '3.22 ~ 4.4', writtenRes: '4.18', practicalApp: '5.12 ~ 5.15', practicalExam: '6.1 ~ 6.14', practicalRes: '6.27' },
      { round: '3회', writtenApp: '5.19 ~ 5.22', writtenExam: '6.15 ~ 6.21', writtenRes: '7.4', practicalApp: '7.21 ~ 7.24', practicalExam: '8.16 ~ 8.29', practicalRes: '9.12' },
      { round: '4회', writtenApp: '8.25 ~ 8.28', writtenExam: '9.20 ~ 10.5', writtenRes: '10.17', practicalApp: '10.20 ~ 10.23', practicalExam: '11.15 ~ 11.28', practicalRes: '12.12' }
    ],
    engineer: [
      { round: '1회', writtenApp: '1.13 ~ 1.16', writtenExam: '2.2 ~ 2.22', writtenRes: '3.12', practicalApp: '3.24 ~ 3.27', practicalExam: '4.19 ~ 5.2', practicalRes: '6.13' },
      { round: '2회', writtenApp: '4.14 ~ 4.17', writtenExam: '5.10 ~ 5.25', writtenRes: '6.11', practicalApp: '6.30 ~ 7.3', practicalExam: '7.26 ~ 8.13', practicalRes: '9.12' },
      { round: '3회', writtenApp: '6.9 ~ 6.12', writtenExam: '7.5 ~ 7.27', writtenRes: '8.6', practicalApp: '9.8 ~ 9.11', practicalExam: '10.11 ~ 10.26', practicalRes: '11.14' }
    ]
  },
  strategy: {
    items: [
      { title: "실전 프로젝트 중심 교육", desc: "이론에 그치지 않고 실제 MCU 기반 임베디드 시스템을 기획하고 구현하여 포트폴리오를 완성합니다." },
      { title: "비전공자 맞춤 코칭", desc: "복잡한 알고리즘도 쉽게! 파이썬 기초부터 차근차근 단계별로 실력을 향상시킵니다." },
      { title: "최신 AI 트렌드 반영", desc: "OpenAI, Django, MariaDB 등 현업에서 가장 많이 쓰이는 기술 스택을 마스터합니다." },
      { title: "1:1 취업 밀착 지원", desc: "자소서 첨삭부터 기술 면접 대비까지, IT 전문 취업 컨설턴트가 끝까지 동행합니다." }
    ],
    reviews: [
      { name: "김OO님", text: "컴퓨터의 'ㅋ'자도 몰랐는데, 6개월 만에 제 첫 펌웨어를 보드에 올렸을 때의 감동을 잊을 수 없습니다.", tag: "비전공자" },
      { name: "이OO님", text: "강사진이 현업 출신이라 그런지 실무 꿀팁을 정말 많이 배웠습니다. 취업 성공의 일등공신입니다.", tag: "최종합격" },
      { name: "박OO님", text: "커리큘럼이 빡빡하지만 그만큼 얻어가는 게 많습니다. 포트폴리오 퀄리티가 남달라졌어요.", tag: "실무역량" },
      { name: "최OO님", text: "국비지원이라 부담 없이 시작했는데, 80만원 수당 덕분에 공부에만 집중할 수 있었습니다.", tag: "경제적지원" },
      { name: "한OO님", text: "IT 개발자로 전향하고 싶으신 분들께 강추합니다. 안산 최고의 AI 교육원입니다.", tag: "이직성공" },
      { name: "정OO님", text: "혼자 공부할 때는 막막했는데 동료들과 프로젝트하며 성장하는 즐거움을 알게 되었습니다.", tag: "팀워크" }
    ]
  },
  employment: {
    status: EMPLOYMENT_STATUS,
    process: PROCESS_STEPS
  }
};

interface ContentContextType {
  content: SiteContent;
  visitorLogs: VisitorLog[];
  updateContent: (newContent: SiteContent) => void;
  addVisitorLog: (log: Omit<VisitorLog, 'id'>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// 버전을 v8로 올려서 로컬 스토리지를 강제 갱신함
const STORAGE_KEY = 'site_content_v11';
const LOG_KEY = 'visitor_logs_v11';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsed });
      } catch (e) {
        console.error("Failed to load content", e);
      }
    }

    const savedLogs = localStorage.getItem(LOG_KEY);
    if (savedLogs) {
      try {
        setVisitorLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error("Failed to load logs", e);
      }
    }

    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const addVisitorLog = (logData: Omit<VisitorLog, 'id'>) => {
    const newLog: VisitorLog = {
      ...logData,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setVisitorLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 500);
      localStorage.setItem(LOG_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetContent = () => {
    if (window.confirm("모든 변경사항을 초기화하시겠습니까?")) {
      setContent(defaultContent);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, visitorLogs, updateContent, addVisitorLog, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};
