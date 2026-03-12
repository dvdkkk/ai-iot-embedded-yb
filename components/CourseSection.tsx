import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { BookOpen, Database, Smartphone, Brain, Rocket, CheckCircle2, Code2, Terminal, Server, Camera } from 'lucide-react';

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
  return (
    <section id="courses" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-800/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-800/10 border border-purple-800/30 text-purple-800 mb-4">
            <Code2 size={14} />
            <span className="text-xs font-bold tracking-wide uppercase">CURRICULUM</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            최종 프로젝트를 향한<br />
            <span className="text-purple-800">실무 위주의 커리큘럼</span>
          </h2>
        </Reveal>

        <div className="space-y-32">
          {/* Phase 1 */}
          <CurriculumPhase 
            phase="PHASE 1"
            title="C언어"
            subtitle="프로그래밍의 뼈대를 이루는 기초언어인 C언어를 기초부터 실무 프로젝트까지 깊이 있게 이해합니다."
            icon={Terminal}
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2832&auto=format&fit=crop"
            projects={[
              { title: "프로그램 구현", desc: "기초, 심화, 고급에서 배운 내용들을 바탕으로 계산기, 문자열 처리 프로그램 등을 구현", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop" },
              { title: "팀 프로젝트", desc: "팀원들과 협력하여 중간 규모의 프로젝트를 진행 및 협업 능력 개발", image: "https://postfiles.pstatic.net/MjAyNjAzMTJfMTQx/MDAxNzczMjg5MTA2MTQ2.aRnkXeER2ROy_L4D7-sAjPL3aWqBtta0-Iv5nyMlru4g.URyAoUPZObdfpLrgUV3TuOHoEcElQ2o4wuKPTJF9sCMg.JPEG/20260312_130550.jpg?type=w966" }
            ]}
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "01 변수와 자료형", desc: "C언어에서 데이터를 저장하기 위한 변수의 선언과 기본 자료형(int, float, char 등)과 특징 및 사용법 학습" },
                  { label: "02 제어문", desc: "조건문(if, switch)과 반복문(for, while)의 사용법과 프로그램의 흐름 제어 방법 학습" },
                  { label: "03 함수와 포인터", desc: "함수의 정의 및 호출 방법과 포인트의 개념을 통해 메모리 주소를 다루는 기초 학습" },
                  { label: "04 배열과 문자열", desc: "배열의 정의, 초기화 및 사용 방법과 문자열 처리에 대한 기초 지식 학습" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "동적 메모리 할당", desc: "malloc, calloc, realloc, free 함수를 통해 런타임에 매모리를 관리하는 방법 학습" },
                  { label: "파일 입출력", desc: "파일을 읽고 쓰는 방법과 데이터를 영구적으로 저장하고 불러오는 기법 학습" },
                  { label: "전처리기 지시문", desc: "#define, #include 등의 전처리기 지시문을 통해 코드의 가독성 상승과 매크로 사용 방법 학습" },
                  { label: "비트 연산", desc: "비트 단위의 연산을 통해 데이터를 효율적으로 처리하는 기법과 미트 마스크를 활용하는 방법 학습" }
                ]
              }
            ]}
          />

          {/* Phase 2 */}
          <CurriculumPhase 
            phase="PHASE 2"
            title="Python" 
            subtitle="데이터 분석부터 자동화까지 확장성이 뛰어난 파이썬을 활용 중심으로 배울 수 있습니다."
            icon={BookOpen}
            image="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2832&auto=format&fit=crop"
            projects={[
              { title: "GUI, Tkinter 활용 프로그램 구현", desc: "Tkinter 라이브러리와 JSON 파일을 사용하여 사용자 인터페이스와 파일 입출력 학습", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" },
              { title: "BeautifulSoup, Requests 활용 웹 구현", desc: "특정 웹에서 자동으로 정보를 수집하는 프로그램 및 웹 개발", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" }
            ]}
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "Python 설치 및 환경 설정", desc: "파이썬을 설치하고 IDE(통합 개발 환경) 설정 방법 학습" },
                  { label: "기본 문법", desc: "변수, 자료형, 연산자, 주석 등을 통해 파이썬 기본 문법 학습" },
                  { label: "제어문", desc: "조건문(if, elif, else)과 반복문(for, while)을 사용하여 프로그램의 흐름 제어 방법 학습" },
                  { label: "함수", desc: "함수 정의 및 호출 방법과 매개변수, 변환값 학습" },
                  { label: "리스트", desc: "리스트의 생성, 수정, 삭제 및 다양한 메서드 사용법 학습" },
                  { label: "튜플", desc: "튜플의 특징과 사용법을 배우고 불변의 데이터 구조에 대한 이해" },
                  { label: "딕셔너리", desc: "키-값 쌍으로 데이터를 저장하는 방법과 다양한 메서드 학습" },
                  { label: "집합", desc: "집합의 특징과 활용 방법 학습" },
                  { label: "파일 읽기와 쓰기", desc: "텍스트 파일 및 CSV 파일을 읽고 쓰는 방법과 데이터 저장 및 불러오기 기법 학습" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "모듈", desc: "표준 라이브러리 및 사용자 정의 모듈을 사용하는 방법 학습" },
                  { label: "패키지", desc: "패키지를 생성하고 사용하는 방법과 코드 재사용성을 높이는 기법 학습" },
                  { label: "클래스와 객체", desc: "객체 지향 프로그래밍의 기본 개념인 클래스와 객채 이해 및 상속과 다형성을 배우며 코드의 구조 개선 학습" },
                  { label: "예외 처리", desc: "try, except 구문을 통해 오류를 처리하는 방법과 프로그램의 안정성 상승 학습" },
                  { label: "라이브러리 활용", desc: "NumPy, Pandas, Matplotlib 등 데이터 분석과 시각화를 위한 라이브러리 사용법 학습" },
                  { label: "웹 프로그래밍", desc: "Flask 또는 Django와 같은 웹 프레임워크를 사용하여 웹 어플리케이션 개발 방법 학습" },
                  { label: "데이터베이스", desc: "SQLite 또는 MySQL을 이용한 데이터베이스 연결 및 쿼리 작성법 학습" }
                ]
              }
            ]}
          />

          {/* Phase 3 */}
          <CurriculumPhase 
            phase="PHASE 3"
            title="MySQL·DB" 
            subtitle="데이터 저장부터 조회, 분석까지 SQL로 데이터베이스 실무의 기본을 직접 다뤄볼 수 있습니다."
            icon={Database}
            image="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2832&auto=format&fit=crop"
            projects={[
              { title: "Python과 MySQL", desc: "C언어에서 데이터를 저장하기 위한 변수의 선언과 기본 자료형(int, float, char 등)과 특징 및 사용법 학습", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop" }
            ]}
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "MySQL 설치 및 설정", desc: "MySQL 서버 설치 및 기본 설정 방법 학습" },
                  { label: "DB 개념", desc: "데이터베이스, 테이블, 레코드의 기본 개념 이해" },
                  { label: "SQL 기초", desc: "SQL 기본 문법과 SELECT, INSERT, UPDATE, DELETE 문법 학습" },
                  { label: "트랜잭션 제어 명령어", desc: "COMMIT, ROLLBACK" }
                ]
              },
              {
                title: "STEP 2 심화",
                items: [
                  { label: "JOIN 연산", desc: "INNER JOIN, LEFT JOIN, RIGHT JOIN 등 다양한 JOIN 방식 학습" },
                  { label: "서브쿼리", desc: "서브쿼리의 개념과 활용 방법 학습" },
                  { label: "집계 함수", desc: "COUNT, SUM, AVG 등 집계 함수 사용법 학습" },
                  { label: "그룹화 및 정렬", desc: "GROUP BY, ORDER BY" }
                ]
              }
            ]}
          />

          {/* Phase 4 */}
          <CurriculumPhase 
            phase="PHASE 4"
            title="Linux" 
            subtitle="리눅스를 통해 명령어 기반 운영체제를 익히며 개발 환경에 대한 감각을 키울 수 있습니다."
            icon={Server}
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
            projects={[]}
            steps={[
              {
                title: "STEP 1 기초",
                items: [
                  { label: "Ubuntu 개념 이해", desc: "리눅스 운영 체제 개요, 우분투의 역사, 특징, 설치 및 기본 설정 방법 학습" },
                  { label: "파일 및 디렉토리 관리", desc: "ls, cp, mv, rm, mkdir, rmdir → 파일 및 폴더 생성/복사/이동/삭제 등" },
                  { label: "텍스트 파일 처리", desc: "cat, less, more, grep, nano → 터미널에서 텍스트 파일 읽기/검색/편집" },
                  { label: "시스템 정보 확인", desc: "uname, top, df, du, free → 시스템 상태 및 메모리·디스크 사용량 확인" },
                  { label: "사용자 계정 생성 및 관리", desc: "useradd, userdel, passwd" },
                  { label: "파일 및 디렉토리 권한 설정", desc: "chmod, chown, chgrp" }
                ]
              },
              {
                title: "STEP 2 고급",
                items: [
                  { label: "APT(Advanced Package Tool) 사용법", desc: "apt-get, apt-cache, apt-update → 소프트웨어 설치/업데이트를 위한 명령어" },
                  { label: "소프트웨어 설치 및 제거", desc: "리눅스 환경에서의 프로그램 설치 및 제거 실습" },
                  { label: "네트워크 설정", desc: "ifconfig, ip, ping 등 명령어를 활용한 네트워크 설정 방법 학습" },
                  { label: "SSH 및 방화벽 설정", desc: "SSH(Secure Shell) 사용법 및 UFW(Uncomplicated Firewall) 방화벽 설정" }
                ]
              }
            ]}
          />

          {/* Phase 5 */}
          <CurriculumPhase 
            phase="PHASE 5"
            title="OpenCV" 
            subtitle="컴퓨터 비전 라이브러리인 OpenCV를 활용하여 이미지 및 영상 처리 기술을 학습합니다."
            icon={Camera}
            image="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2940&auto=format&fit=crop"
            projects={[
              { title: "Project 1 얼굴인식 시스템구축", desc: "KNN, SVM, CNN을 활용한 인공지능 개념과 딥러닝 기반 얼굴 인식(TensorFlow, Keras)라이브러리 이용, DNN 기반 얼굴 감지(YOLO, SSD 등) 구현", image: "https://postfiles.pstatic.net/MjAyNjAzMTJfMTc3/MDAxNzczMjg5ODY0MDE4.P77olCnerqiORoVB2C98C2uUWjvHA-VxnfK6GqOjX2og.BWH-O02W8wid63ZgQPLrnveF_800nm-HLZxIIEbpuNwg.PNG/20260312_132224_(1).png?type=w966" },
              { title: "Project 2 실시간 객체 추적 프로그램 개발", desc: "OpenCV 라이브러리와 이미지 및 비디오 처리 기본 기능 학습, OpenCV 주요 함수 및 매서드 활용 DNN(Deep Neural Network)기반 객체 감지 개발", image: "https://postfiles.pstatic.net/MjAyNjAzMTJfMTQ0/MDAxNzczMjg5MTA2MTQ4.H1w2eQKkGKAJ0KQGL7vNWG3ibMZz9FlulB-98hc2Hlgg.Tn-XtOHsnkocwBaeJMmSX_5ZjvBdjin5Z4rByRXTq0og.JPEG/20260312_130632.jpg?type=w966" },
              { title: "Project 3 이미지 필터링 및 변환 프로그램 개발", desc: "색상 공간 변환(BGR, RGB, Grayscale, HSV)이미지 처리 기술과 가우시안 블러 및 미디안 블러 적용 비선형 필터(Bilateral Filter, Non-Local Means)를 개선하고 이미지 노이즈 제거와 필터 적용을 통한 이미지 품질 향상 구현", image: "https://postfiles.pstatic.net/MjAyNjAzMTJfNzgg/MDAxNzczMjg5ODY0MDM2.RNHHLT1B1YVN3iw299mkvprDwgxkPtLrxk3-43M3vUUg.vg_8D6aCvvAsudj1HLYTmckqCFiCofGJi0y98cMbI-sg.PNG/20260312_132320_ALTools_AIUpscaler.png?type=w966" }
            ]}
            steps={[
              {
                title: "Part 1 기초 및 이미지 처리",
                items: [
                  { label: "01 OpenCV 개념 이해", desc: "OpenCV 역사와 발전, 설치 및 환경 설정, 기본 구조와 사용 목적" },
                  { label: "02 기본 이미지 처리", desc: "이미지 읽기 및 표시(imread, imshow), 저장(imwrite), 크기 조정(resize), 변환(회전 반전 자르기)" },
                  { label: "03 색상 공간 변환", desc: "BGR에서 그레이스케일로 변환, cvtColor() 함수 사용법" },
                  { label: "04 필터링 및 엣지 검출", desc: "블러링 GaussianBlur(), medianBlur() 함수, 엣지 검출 Canny() 함수 및 Sobel 필터 사용법" }
                ]
              },
              {
                title: "Part 2 심화 및 하드웨어 연동",
                items: [
                  { label: "05 특징 검출 및 매칭", desc: "OpenCV 역사와 발전, 설치 및 환경 설정, 기본 구조와 사용 목적" },
                  { label: "06 객체 인식 및 추적", desc: "Haar Cascade Classifier 이용한 얼굴 인식, YOLO, SSD와 같은 딥러닝 기반 객체 탐지" },
                  { label: "07 기계 학습 및 딥러닝", desc: "OpenCV와 TensorFlow, Keras 연동, 머신러닝을 이용한 이미지 분류 및 예측" },
                  { label: "08 Raspberry Pi와 OpenCV", desc: "Raspberry Pi에 OpenCV 설치 및 환경설정, 카메라 모듈을 이용한 이미지 캡처 및 처리, 실시간 객체 인식 및 추적 시스템 구현" },
                  { label: "09 Arduino와 OpenCV 연동", desc: "Arduino를 이용한 센서 데이터 수집, OpenCV와 Arduino 간의 시리얼 통신 설정, 이미지 처리 결과에 따른 하드웨어 제어" }
                ]
              }
            ]}
          />

        </div>

        {/* Education Inquiry Button */}
        <Reveal className="w-full mt-32 flex justify-center">
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-black text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(107,33,168,0.4)] hover:shadow-[0_0_50px_rgba(107,33,168,0.6)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }}></span>
            상담신청하기
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </Reveal>

      </div>
    </section>
  );
};

const CurriculumPhase: React.FC<{
  phase: string;
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  projects?: { title: string; desc: string; image?: string }[];
  steps: { title: string; items: { label: string; desc: string }[] }[];
}> = ({ phase, title, subtitle, icon: Icon, image, projects = [], steps }) => {
  return (
    <Reveal>
      <div className="flex flex-col gap-8">
        
        {/* Phase Header - Moved to Top */}
        <div className="flex flex-col items-start gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-800 rounded-xl text-white">
              <Icon size={24} />
            </div>
            <span className="text-purple-800 font-bold tracking-widest text-xl">{phase}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">{title}</h3>
          <p className="text-gray-300 font-medium text-lg leading-relaxed max-w-3xl">{subtitle}</p>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Visual Side (Image) */}
          <div className="lg:w-1/3 space-y-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full border border-zinc-800 group shadow-2xl">
              <img 
                src={image} 
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Content Side (Steps) */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="grid md:grid-cols-2 gap-6 flex-grow">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-purple-800/30 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">{step.title}</h4>
                  <ul className="space-y-6">
                    {step.items.map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-purple-800 font-bold text-base group-hover:text-white transition-colors">{item.label}</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects - Conditionally Rendered */}
        {projects.length > 0 && (
          <div className="mt-8 bg-zinc-900/30 rounded-3xl p-8 border border-zinc-800/50">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-zinc-800 rounded-lg">
                <Rocket className="text-purple-800" size={20} />
              </div>
              실습 프로젝트
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-zinc-800/50 border border-zinc-700 rounded-2xl flex flex-col relative overflow-hidden group hover:border-purple-800/50 transition-colors">
                  {project.image && (
                    <div className="w-full h-32 md:h-40 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6 flex items-start gap-5 relative z-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-800/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="hidden md:flex flex-col items-center justify-center w-10 h-10 bg-zinc-900 rounded-xl border border-zinc-700 shrink-0 text-purple-800 group-hover:scale-110 transition-transform">
                      <span className="font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight mb-2">{project.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </Reveal>
  );
};
