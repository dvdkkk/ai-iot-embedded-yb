export interface CurriculumItem {
  category: string;
  subjects: string[];
}

export interface Course {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  schedule: string;
  classTime: string;
  capacity: string;
  locations: string;
  curriculum: CurriculumItem[];
  type: 'technician' | 'engineer';
  image?: string;
  video?: string;
}

export interface EmploymentStatus {
  company: string;
  name: string;
  branch: string;
  license: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface VisitorLog {
  id: string;
  ip: string;
  referrer: string;
  timestamp: string;
  userAgent: string;
  keyword: string;
}

// Admin Content Types
export interface HeroContent {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface IntroContent {
  badge: string;
  title1: string;
  highlight: string;
  title2: string;
  description: string;
  images: string[];
}

export interface VisionItem {
  num: string;
  title: string;
  desc: string;
}

export interface ExamScheduleItem {
  round: string;
  writtenApp: string;
  writtenExam: string;
  writtenRes: string;
  practicalApp: string;
  practicalExam: string;
  practicalRes: string;
}

export interface StrategyItem {
  title: string;
  desc: string;
}

export interface ReviewItem {
  name: string;
  text: string;
  tag: string;
}

export interface SiteContent {
  hero: HeroContent;
  intro: IntroContent;
  vision: {
    items: VisionItem[];
  };
  courses: Course[];
  examSchedule: {
    technician: ExamScheduleItem[];
    engineer: ExamScheduleItem[];
  };
  strategy: {
    items: StrategyItem[];
    reviews: ReviewItem[];
  };
  employment: {
    status: EmploymentStatus[];
    process: ProcessStep[];
  };
}