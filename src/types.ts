export type LabTab = 'physics' | 'chemistry' | 'biology';

export type ThemeMode = 'rose-pastel' | 'editorial-teal';

export interface ProfileInfo {
  name: string;
  badge: string;
  university: string;
  department: string;
  major: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: string;
}

export interface LessonPlan {
  title: string;
  grade: string;
  subject: string;
  duration: string;
  objectives: string[];
  steps: {
    phase: string;
    activity: string;
    studentAction: string;
    teacherAction: string;
  }[];
}
