export interface PricingPlan {
  id: "basic" | "standard" | "premium";
  name: string;
  price: string;
  monthlyPrice: number;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  buttonText: string;
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
