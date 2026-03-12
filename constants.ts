
import { Course, EmploymentStatus, ProcessStep } from './types';

export const COURSES: Course[] = [
  {
    id: 'course-ai-1',
    type: 'technician',
    title: 'AI사물인터넷 MCU기반(STM32,ESP32) 임베디드 펌웨어 전문가 양성',
    subTitle: '미래 IT 산업의 핵심 기술 마스터',
    description: '온 디바이스AI, 스마트팩토리, 스마트팜 등에 활용되는 Cortex-M4/Mx ARM MCU 기반 임베디드/펌웨어 실무 교육 과정입니다. 한국직업능력교육원에서 임베디드 전문가로 거듭나세요.',
    duration: '6개월 과정(122일)',
    schedule: '매달 신규 개강 예정',
    classTime: '주5회(월~금) 09:00~17:40',
    capacity: '20명(오프라인)',
    locations: '안산캠퍼스',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop',
    curriculum: [
      {
        category: '프로그래밍 기초',
        subjects: ['Python 기초 문법', '제어문 및 함수', '객체지향 프로그래밍']
      },
      {
        category: '데이터베이스',
        subjects: ['MariaDB 설치 및 환경설정', 'SQL 기초 및 심화', '데이터베이스 설계']
      },
      {
        category: '웹 프레임워크',
        subjects: ['Django 기초 아키텍처', 'MTV 패턴의 이해', '웹 UI/UX 구현']
      },
      {
        category: '인공지능 실무',
        subjects: ['머신러닝 알고리즘 분석', '데이터 전처리 및 모델링', '예측 기능 구현']
      },
      {
        category: '최종 프로젝트',
        subjects: ['임베디드 펌웨어 개발', 'DB 연동 및 서버 구축', 'AI 플랫폼 완성']
      }
    ]
  }
];

export const EMPLOYMENT_STATUS: EmploymentStatus[] = [
  { company: '엘옵틱스', name: '', branch: '', license: 'MCU 기반 펌웨어 개발' },
  { company: '플랜티팜', name: '', branch: '', license: '데이터 분석 및 AI 솔루션' },
  { company: '클래시스', name: '', branch: '', license: '스마트팩토리 제어 시스템 구축' },
  { company: '에스지엔', name: '', branch: '', license: 'Python 기반 AI 백엔드 개발' },
  { company: '케이사인', name: '', branch: '', license: '보안 시스템 및 AI 연동' },
  { company: '파우스', name: '', branch: '', license: '머신러닝 알고리즘 구현' },
  { company: '파인에스엔에스', name: '', branch: '', license: '임베디드 시스템 UI/UX' },
  { company: '알이디티', name: '', branch: '', license: '데이터베이스 설계 및 관리' },
  { company: '지그탑', name: '', branch: '', license: 'AI 플랫폼 운영 및 유지보수' },
  { company: '솔루션링크', name: '', branch: '', license: '인공지능 기반 소프트웨어 개발' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: '취업지원 컨설팅', description: '취업상담 신청 시 프로그램 설명 및 컨설팅 진행' },
  { step: '02', title: '이력서·자소서 교육', description: 'IT 직무 성격에 맞는 1:1 맞춤 코칭 및 작성' },
  { step: '03', title: '모의면접 컨설팅', description: '실전 모의면접을 통한 긍정적 이미지 메이킹' },
  { step: '04', title: '연계기업 취업매칭', description: '한국직업능력교육원 인증 우수 협약 기업 매칭' },
  { step: '05', title: '성공적인 취업/이직', description: '최적의 방향으로 컨설팅하여 AI 개발자 취업 성공' },
];

export const TARGET_AUDIENCE = [
  "IT 개발자로 커리어를 전환하고 싶은 비전공자",
  "AI사물인터넷 MCU기반(STM32,ESP32) 임베디드 펌웨어 전문가 양성 기술을 습득하여 경쟁력을 높이고 싶은 분",
  "국비지원을 통해 교육비 부담 없이 전문가가 되고 싶은 분",
  "실무 중심의 포트폴리오를 완성하여 고연봉 취업을 원하는 분",
  "최신 AI 트렌드를 배우고 현업에 바로 투입되고 싶은 구직자"
];
