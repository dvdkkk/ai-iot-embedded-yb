
import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { CourseSection } from './components/CourseSection';
import { VisionSection } from './components/VisionSection';
import { StatsSection } from './components/StatsSection';
import { ReviewSection } from './components/ReviewSection';
import { EmploymentSection } from './components/EmploymentSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { CursorFollower } from './components/CursorFollower';
import { EmploymentSupport } from './components/EmploymentSupport';
import { HanjikgyoBenefits } from './components/HanjikgyoBenefits';
import { InstructorsSection } from './components/InstructorsSection';
import { ContentProvider, useContent } from './contexts/ContentContext';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLogin } from './components/AdminLogin';

function VisitorTracker() {
  const { addVisitorLog } = useContent();

  useEffect(() => {
    const trackVisitor = async () => {
      const sessionKey = 'visitor_tracked_v2_' + new Date().toISOString().split('T')[0];
      if (sessionStorage.getItem(sessionKey)) return;

      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        const referrer = document.referrer || '직접 접속';
        let keyword = '없음';
        
        try {
          if (referrer.includes('naver.com')) {
            const url = new URL(referrer);
            keyword = url.searchParams.get('query') || '네이버 유입';
          } else if (referrer.includes('google')) {
            keyword = '구글 유입';
          } else if (referrer.includes('daum.net')) {
            const url = new URL(referrer);
            keyword = url.searchParams.get('q') || '다음 유입';
          }
        } catch (e) {}

        addVisitorLog({
          ip,
          referrer,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          keyword
        });

        sessionStorage.setItem(sessionKey, 'true');
      } catch (error) {
        console.error('Visitor tracking failed', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}

function AppContent() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      const isRoute = window.location.hash === '#0107761';
      setIsAdminRoute(isRoute);
      const hasAuth = sessionStorage.getItem('admin_auth') === 'true';
      setIsAuthenticated(hasAuth);
    };
    
    checkRoute();
    window.addEventListener('hashchange', checkRoute);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    window.location.hash = '';
  };

  if (isAdminRoute) {
    if (!isAuthenticated) return <AdminLogin onLogin={handleLogin} />;
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-800 selection:text-white cursor-none md:cursor-auto">
      <VisitorTracker />
      <CursorFollower />
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <VisionSection />
        <StatsSection />
        <HanjikgyoBenefits />
        <CourseSection />
        <InstructorsSection />
        <EmploymentSupport />
        <EmploymentSection />
        <ReviewSection />
        <ConsultationForm />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

export default App;
