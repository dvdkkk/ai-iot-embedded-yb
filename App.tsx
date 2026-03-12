
import React from 'react';
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
import { ContentProvider } from './contexts/ContentContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-800 selection:text-white cursor-none md:cursor-auto">
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
