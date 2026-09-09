export interface PricingPlan {
  id: "entry" | "standard" | "deluxe" | "premium" | string;
  name: string;
  price: string; // 월 이용료 (예: "월 69,000원")
  monthlyPrice: number;
  setupFee?: string; // 초기 세팅비 (예: "220,000원")
  contractPeriod?: string; // 의무계약기간
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  buttonText: string;
}

export interface AdoptionChecklistItem {
  category: string; // 분류 (계정, 지식 베이스, 상담 로직, 정책/인증, 운영 설정, 홍보 자료)
  requiredItem: string; // 필수 준비 항목
  description: string; // 상세 내용
  iconName?: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  userQuestion: string;
  aiAnswer: string;
  tag: string;
  iconName: string;
  imageBg: string;
}

export interface IndustryScenario {
  id: string;
  title: string;
  persona: string;
  keywords: string[];
  sampleQ: string;
  sampleA: string;
  ruleSummary: string;
}

export interface ConsultationFormData {
  companyName: string;
  contactName: string;
  phone: string;
  industry: string;
  plan: string;
  message: string;
}

export type LeadStatus = "new" | "contacting" | "completed" | "hold";

export interface ConsultationLead {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  industry: string;
  plan: string;
  message?: string;
  createdAt: string;
  status: LeadStatus;
  adminMemo?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  links?: { title: string; url: string }[];
}
