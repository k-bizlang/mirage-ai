import React, { useState } from "react";
import { MessageSquare, Phone, Sparkles, Menu, X, ExternalLink, ClipboardList } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

interface NavbarProps {
  onOpenConsultant: () => void;
  onScrollToContact: (plan?: string) => void;
  onOpenAdmin: () => void;
  leadCount?: number;
  newLeadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultant,
  onScrollToContact,
  onOpenAdmin,
  leadCount = 0,
  newLeadCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-lg tracking-tighter">AiP</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  MIRAGE <span className="text-blue-600">AI</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold bg-blue-50 text-blue-700 rounded-md border border-blue-200/60">
                  {COMPANY_INFO.brandSubtitle}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                24시간 비즈니스 맞춤형 고객응대
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              회사소개
            </a>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              AI 24시 고객응대
            </a>
            <a href="#cases" className="hover:text-blue-600 transition-colors">
              적용사례
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">
              상품안내
            </a>
            <a href="#official-agent" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              상담 AI 가이드
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              상담신청
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Google Sites AI Link */}
            <a
              href={COMPANY_INFO.externalAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200"
              title="구글 계정 로그인 후 전용 상담 AI가 시작됩니다"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              <span>공식 상담 AI (Google)</span>
            </a>

            {/* Admin Lead Inquiries Button */}
            <button
              id="nav-admin-leads-btn"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/90 border border-slate-300/80 rounded-lg transition-all active:scale-95 group"
              title="고객이 작성한 상담 및 시연 신청서 접수 목록 확인"
            >
              <ClipboardList className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>신청 내역</span>
              {newLeadCount > 0 ? (
                <span className="px-1.5 py-0.2 text-[10px] font-black bg-rose-500 text-white rounded-full animate-pulse">
                  {newLeadCount}
                </span>
              ) : (
                <span className="text-[11px] text-slate-400 font-medium">
                  ({leadCount})
                </span>
              )}
            </button>

            {/* Launch Modal AI Button */}
            <button
              id="nav-consultant-btn"
              onClick={onOpenConsultant}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span>상담 AI 호출</span>
            </button>

            {/* Main Consultation CTA */}
            <button
              id="nav-free-consult-btn"
              onClick={() => onScrollToContact()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 transition-all hover:shadow-md hover:shadow-blue-600/40 active:scale-95"
            >
              <span>무료 상담 신청</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultant}
              className="p-2 text-blue-600 bg-blue-50 rounded-lg border border-blue-200"
              title="상담 AI 호출"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              회사소개
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              AI 24시 고객응대
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              적용사례
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              상품안내
            </a>
            <a
              href="#official-agent"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between text-blue-600"
            >
              <span>공식 상담 AI 안내</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Google 연동</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              상담신청
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-blue-600" />
                <span>고객 신청 접수 현황 (관리자)</span>
              </div>
              {newLeadCount > 0 ? (
                <span className="px-2 py-0.5 text-xs font-bold bg-rose-500 text-white rounded-full">
                  신규 {newLeadCount}건
                </span>
              ) : (
                <span className="text-xs text-slate-500 font-medium">
                  총 {leadCount}건
                </span>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultant();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>실시간 상담 AI 데모 호출</span>
            </button>
            <a
              href={COMPANY_INFO.externalAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200"
            >
              <ExternalLink className="w-4 h-4 text-slate-600" />
              <span>Google 공식 상담 AI 열기</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 shadow-md shadow-blue-600/30"
            >
              <span>무료 상담 신청하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
