import React from "react";
import { Phone, Mail, ExternalLink, Bot, ShieldCheck, UserPlus, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";

interface FooterProps {
  onOpenConsultant?: () => void;
  onScrollToContact: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToContact, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MirageLogo size="sm" />
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-blue-400 font-semibold">
                  {COMPANY_INFO.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              24시간 쉬지 않는 비즈니스 맞춤형 자동 고객 응대 솔루션. 
              미가입자는 구글 계정으로 먼저 가입 후 24시간 AI 상담을 편리하게 이용하실 수 있습니다.
            </p>
          </div>

          {/* Direct Support & Agent Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.googleSignUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700 transition-colors"
              title="미가입자 구글계정 가입"
            >
              <UserPlus className="w-4 h-4 text-sky-400" />
              <span>미가입자 구글가입</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black shadow-md shadow-blue-600/30 transition-colors"
              title="24시간 AI 상담 실시간 1:1 대화방 바로가기"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>24시간 AI 상담 바로가기</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>
          </div>

        </div>

        {/* Business & Legal Info from User Prompt */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">기업 및 저작권 정보</span>
            <div>회사명: <strong className="text-slate-200">{COMPANY_INFO.name}</strong> ({COMPANY_INFO.brandSubtitle})</div>
            <div>대표자: <strong className="text-slate-200">{COMPANY_INFO.representative}</strong></div>
            <div>개발/저작권자: <strong className="text-slate-200">{COMPANY_INFO.copyrightHolder}</strong></div>
            <div className="text-sky-400 font-mono font-bold text-[11px]">
              저작권 등록: {COMPANY_INFO.copyrightRegistrationNo} (한국저작권위원회)
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">고객 상담 센터</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>대표 전화: </span>
              <a href={COMPANY_INFO.telLink} className="text-slate-200 font-bold hover:text-blue-400">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>E-MAIL: </span>
              <a href={COMPANY_INFO.mailLink} className="text-slate-200 font-bold hover:text-blue-400">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="text-[11px] text-slate-500">
              운영 시간: {COMPANY_INFO.operatingHours}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">주요 서비스</span>
            <div>• 24시간 자동 고객응대 시스템 구축</div>
            <div>• 업종별 맞춤형 시나리오 & 사내 FAQ 연동</div>
            <div>• 방문 안내 및 문의 접수 자동화 모듈</div>
            <div>• 카카오톡 및 웹사이트 연동 기술 지원</div>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">정부 공인 소프트웨어</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>기술 독점 권리 공식 인증 완료</span>
            </div>
            <div className="text-[11px] text-slate-400 leading-relaxed">
              Global Business Integrated AI Sales Automation Engine (C-2026-017543 호). 
              지속가능경영연구원에서 독자 개발한 정부 공인 AI 엔진입니다.
            </div>
          </div>
        </div>

        {/* Bottom Copyright Ribbon matching images */}
        <div className="mb-4 py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <span className="font-medium text-slate-300">
            {COMPANY_INFO.footerCopyrightNotice}
          </span>
          <span className="text-emerald-400 font-mono font-bold">
            한국저작권위원회 정식 등록 완료
          </span>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.brandSubtitle}). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">회사소개</a>
            <a href="#features" className="hover:text-slate-300">서비스안내</a>
            <a href="#pricing" className="hover:text-slate-300">요금안내</a>
            <a href="#adoption-guide" className="hover:text-amber-400 text-amber-300">도입안내</a>
            <a href={COMPANY_INFO.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-emerald-300">블로그 안내</a>
            <a href="#contact" className="hover:text-slate-300">상담신청</a>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                신청 접수 현황 (대표자)
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
