import React from "react";
import { Phone, Mail, ExternalLink, Bot, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

interface FooterProps {
  onOpenConsultant: () => void;
  onScrollToContact: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultant, onScrollToContact, onOpenAdmin }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-black text-sm">
                AiP
              </div>
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
              24시간 쉬지 않는 비즈니스 맞춤형 자동 고객 응대 홈페이지 솔루션. 
              소상공인과 중소기업의 상담 업무 자동화와 매출 성장을 견인합니다.
            </p>
          </div>

          {/* Direct Support & Agent Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_INFO.externalAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-700 transition-colors"
            >
              <Bot className="w-4 h-4 text-blue-400" />
              <span>공식 상담 AI (Google Sites)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onOpenConsultant}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-semibold border border-blue-500/30 transition-colors"
            >
              <span>실시간 AI 상담원 호출</span>
            </button>
          </div>

        </div>

        {/* Business & Legal Info from User Prompt */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">
          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">기업 정보</span>
            <div>회사명: <strong className="text-slate-200">{COMPANY_INFO.name}</strong> ({COMPANY_INFO.brandSubtitle})</div>
            <div>대표자명: <strong className="text-slate-200">{COMPANY_INFO.representative}</strong></div>
            <div>사업 분야: AI 고객응대 솔루션 개발 및 비즈니스 컨설팅</div>
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
            <div>• 예약 연계 및 방문 안내 자동화 모듈</div>
            <div>• 카카오톡 및 웹사이트 연동 기술 지원</div>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-slate-200 block text-sm">보안 및 신뢰</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>지식베이스 및 상담 데이터 무결성 보장</span>
            </div>
            <div className="text-[11px] text-slate-500 leading-relaxed">
              의학/법률/교육 표준 지침에 맞춘 책임 면책 고지 및 사전 필터링 아키텍처가 적용되어 있습니다.
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.brandSubtitle}). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300">회사소개</a>
            <a href="#features" className="hover:text-slate-300">서비스안내</a>
            <a href="#pricing" className="hover:text-slate-300">상품요금</a>
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
