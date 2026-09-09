import React, { useState } from "react";
import { MessageSquare, Phone, Sparkles, Menu, X, ExternalLink, ClipboardList, UserPlus, ShieldCheck, Award } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";

interface NavbarProps {
  onOpenConsultant?: () => void;
  onScrollToContact: (plan?: string) => void;
  onOpenAdmin: () => void;
  leadCount?: number;
  newLeadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToContact,
  onOpenAdmin,
  leadCount = 0,
  newLeadCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Fixed Guide Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.2 rounded bg-blue-500 font-black text-white text-[10px]">
              AI 24시 고객응대
            </span>
            <span className="text-slate-300">
              미가입자는 구글 계정 가입 후 솔루션을 이용하실 수 있습니다.
            </span>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <a
              href={COMPANY_INFO.googleSignUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white flex items-center gap-1 transition-colors"
              title="AI 24시 고객응대 미가입자 구글계정 가입"
            >
              <UserPlus className="w-3 h-3 text-sky-400" />
              <span className="underline underline-offset-2">미가입자 구글가입</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white flex items-center gap-1 font-bold transition-colors"
              title="24시간 AI 상담 실시간 1:1 대화방 바로가기"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>24시간 AI 상담 바로가기</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo with Official MIRAGE AI Emblem */}
          <a href="#" className="flex items-center gap-3 group" title="MIRAGE AI 공식 홈">
            <MirageLogo size="md" />
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
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              회사소개
            </a>
            <a href="#copyright-cert" className="hover:text-blue-600 transition-colors flex items-center gap-1 text-slate-900 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>정부저작권인증</span>
            </a>
            <a href="#dashboard-engine" className="hover:text-blue-600 transition-colors">
              대시보드
            </a>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              핵심기능 (제2장)
            </a>
            <a href="#procedure" className="hover:text-blue-600 transition-colors">
              구축절차 (제3장)
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">
              요금안내
            </a>
            <a href="#adoption-guide" className="hover:text-blue-600 transition-colors text-amber-600 font-bold">
              도입안내
            </a>
            <a 
              href={COMPANY_INFO.blogUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1 text-emerald-600 font-bold"
            >
              <span>블로그 안내</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors text-blue-600">
              상담신청
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Google Signup for non-members */}
            <a
              href={COMPANY_INFO.googleSignUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/90 rounded-lg transition-colors border border-slate-300"
              title="AI 24시 고객응대 미가입자는 구글 계정 가입 후 솔루션을 이용하실 수 있습니다"
            >
              <UserPlus className="w-3.5 h-3.5 text-blue-600" />
              <span>미가입자 구글가입</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Direct 24시간 AI 상담 Link */}
            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
              title="24시간 AI 상담 실시간 1:1 대화가 시작됩니다"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>24시간 AI 상담</span>
              <ExternalLink className="w-3 h-3 text-blue-200 ml-0.5" />
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
            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-blue-600 rounded-lg shadow-xs flex items-center justify-center"
              title="24시간 AI 상담 바로가기"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
            </a>
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
              href="#copyright-cert"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center gap-2 font-bold text-slate-900"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>정부저작권인증 (C-2026-017543)</span>
            </a>
            <a
              href="#dashboard-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              AI 라이브 대시보드
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              핵심기능 및 산업별 효율성 (제2장)
            </a>
            <a
              href="#procedure"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              서비스 제공 절차 &amp; 연동 채널 (제3장)
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              요금안내 (상세 이용 요금표)
            </a>
            <a
              href="#adoption-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-amber-50 text-amber-700 font-bold flex items-center justify-between"
            >
              <span>도입을 위한 안내 (체크리스트)</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">준비자료</span>
            </a>
            <a
              href={COMPANY_INFO.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-emerald-700 font-bold flex items-center justify-between"
            >
              <span>블로그 안내</span>
              <ExternalLink className="w-3.5 h-3.5" />
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
            <a
              href={COMPANY_INFO.googleSignUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300"
              title="AI 24시 고객응대 미가입자는 구글 계정으로 가입 후 솔루션을 이용하실 수 있습니다"
            >
              <UserPlus className="w-4 h-4 text-blue-600" />
              <span>미가입자 구글계정 가입</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-black text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/30"
              title="24시간 AI 상담 실시간 1:1 대화방 바로가기"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>24시간 AI 상담 바로가기</span>
              <ExternalLink className="w-4 h-4 text-blue-200" />
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
