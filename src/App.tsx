import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ValuePillars } from "./components/ValuePillars";
import { FeaturesSection } from "./components/FeaturesSection";
import { CasesSection } from "./components/CasesSection";
import { PricingSection } from "./components/PricingSection";
import { StepsSection } from "./components/StepsSection";
import { OfficialAgentBanner } from "./components/OfficialAgentBanner";
import { ConsultationForm } from "./components/ConsultationForm";
import { AiConsultantModal } from "./components/AiConsultantModal";
import { AdminLeadsModal } from "./components/AdminLeadsModal";
import { Footer } from "./components/Footer";
import { Bot, Phone, Sparkles, MessageSquare, ArrowUp, ClipboardList } from "lucide-react";
import { COMPANY_INFO } from "./data/content";

export default function App() {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("표준형");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [leadCounts, setLeadCounts] = useState<{ total: number; newCount: number }>({
    total: 0,
    newCount: 0,
  });

  const fetchLeadCounts = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeadCounts({
          total: data.total || 0,
          newCount: data.newCount || 0,
        });
      }
    } catch (err) {
      console.error("Failed to fetch lead counts:", err);
    }
  };

  useEffect(() => {
    fetchLeadCounts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar
        onOpenConsultant={() => setIsConsultantOpen(true)}
        onScrollToContact={scrollToContact}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        leadCount={leadCounts.total}
        newLeadCount={leadCounts.newCount}
      />

      {/* Main landing sections */}
      <main className="flex-1">
        {/* Hero Section matching image.png */}
        <HeroSection
          onOpenConsultant={() => setIsConsultantOpen(true)}
          onScrollToContact={() => scrollToContact()}
        />

        {/* 4 Value Pillars Bar & Company Intro */}
        <ValuePillars />

        {/* Section 2: AI 24시 고객응대 프로그램 */}
        <FeaturesSection
          onOpenConsultant={() => setIsConsultantOpen(true)}
          onScrollToContact={() => scrollToContact()}
        />

        {/* Section 4: 상품 및 요금 (Placed before/after cases as in image) */}
        <PricingSection onSelectPlan={(plan) => scrollToContact(plan)} />

        {/* Section 3: 적용사례 */}
        <CasesSection
          onOpenConsultant={() => setIsConsultantOpen(true)}
          onScrollToContact={() => scrollToContact()}
        />

        {/* 5-Step Process */}
        <StepsSection onScrollToContact={() => scrollToContact()} />

        {/* Dedicated Google Sites Official Agent Section */}
        <OfficialAgentBanner onOpenConsultant={() => setIsConsultantOpen(true)} />

        {/* Consultation Form Section */}
        <ConsultationForm
          initialPlan={selectedPlan}
          onOpenAdmin={() => setIsAdminModalOpen(true)}
          onLeadSubmitted={fetchLeadCounts}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultant={() => setIsConsultantOpen(true)}
        onScrollToContact={() => scrollToContact()}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Interactive AI Consultant Modal / Drawer */}
      <AiConsultantModal
        isOpen={isConsultantOpen}
        onClose={() => setIsConsultantOpen(false)}
      />

      {/* Admin Consultation Leads Manager Modal */}
      <AdminLeadsModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onLeadsUpdated={fetchLeadCounts}
      />

      {/* Floating Action Elements (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            title="맨 위로"
            aria-label="맨 위로"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Admin Quick Access Floating Button */}
        <button
          id="floating-admin-leads-btn"
          onClick={() => setIsAdminModalOpen(true)}
          className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg border border-slate-700 text-xs font-bold transition-all hover:scale-105 active:scale-95 group"
          title="고객이 작성한 상담 및 시연 신청서 접수 현황 보기 (대표자용)"
        >
          <ClipboardList className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span>신청 접수 현황</span>
          {leadCounts.newCount > 0 ? (
            <span className="px-1.5 py-0.2 text-[10px] font-black bg-rose-500 text-white rounded-full animate-pulse">
              {leadCounts.newCount}
            </span>
          ) : (
            <span className="text-[10px] text-slate-400">({leadCounts.total})</span>
          )}
        </button>

        {/* Direct Phone Call Button */}
        <a
          href={COMPANY_INFO.telLink}
          className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 shadow-md border border-slate-200 text-xs font-bold transition-all hover:scale-105 group"
          title="최호열 대표 직통 전화 연결"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Phone className="w-3 h-3" />
          </div>
          <span>010-8267-3733</span>
        </a>

        {/* Primary AI Consultant Launcher Floating Button */}
        <button
          id="floating-ai-consultant-btn"
          onClick={() => setIsConsultantOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl shadow-blue-600/35 border-2 border-white/20 transition-all hover:scale-105 active:scale-95"
          title="24시 MIRAGE AI 상담원 호출"
        >
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky-500 border-2 border-white"></span>
          </span>

          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-black tracking-tight leading-none">
              24시 AI 상담원
            </div>
            <div className="text-[10px] text-blue-200 font-medium leading-tight mt-0.5">
              실시간 무료 체험
            </div>
          </div>
        </button>
      </div>

    </div>
  );
}
