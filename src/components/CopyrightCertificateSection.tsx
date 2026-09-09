import React, { useState } from "react";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  ZoomIn,
  Building,
  Download
} from "lucide-react";
import { COPYRIGHT_DETAILS, COMPANY_INFO } from "../data/content";
import { CopyrightModal } from "./CopyrightModal";
import { OfficialCopyrightDocument } from "./OfficialCopyrightDocument";

interface CopyrightCertificateSectionProps {
  onScrollToContact: () => void;
  onOpenConsultant: () => void;
}

export const CopyrightCertificateSection: React.FC<CopyrightCertificateSectionProps> = ({
  onScrollToContact,
  onOpenConsultant,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="copyright-cert" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Circuit / Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title matching user's Image-1 */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-sky-300 text-xs sm:text-sm font-black shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>대한민국 정부 공인 특허·저작권 인증</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-emerald-400">✓ 공식 저작권 등록 완료 솔루션</span>
          </h2>

          <p className="text-base sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 pt-1">
            ✓ MIRAGE AI : 글로벌 비즈니스 통합 AI 세일즈 자동화 엔진
          </p>
        </div>

        {/* 2-Column Showcase Frame */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-blue-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Official Certificate Document with Zero Modification */}
            <div className="lg:col-span-6 relative">
              <div className="space-y-4">
                {/* Official Unmodified Certificate Component */}
                <OfficialCopyrightDocument
                  onOpenModal={() => setIsModalOpen(true)}
                  showZoomBadge={true}
                />

                {/* Direct Action Links for Certificate Verification */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>등록증 고화질 확대 뷰어</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href="/assets/korea-copyright-certificate.svg"
                      download="저작권등록증_한국저작권위원회_C-2026-017543.svg"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                      <span>원본 다운로드</span>
                    </a>
                    <a
                      href="/assets/korea-copyright-certificate.svg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>새 창 보기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission, Registration No & Authority Pitch (Matching Image-1) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Badge Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 text-sky-400 border border-slate-700 text-xs font-bold">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>공식 등록번호: <strong className="text-white font-mono">{COPYRIGHT_DETAILS.registrationNumber}</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>독점 권리 인증 완료</span>
                </div>
              </div>

              {/* Title & Mission */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  ✓ MIRAGE AI : 글로벌 통합 솔루션 엔진
                </h3>

                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-left space-y-2">
                  <div className="text-xs sm:text-sm text-sky-300 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    <span>미션 (Mission):</span>
                    <strong className="text-white font-bold tracking-wide font-sans">
                      "{COPYRIGHT_DETAILS.mission}"
                    </strong>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>공식 등록번호:</span>
                    <strong className="text-emerald-300 font-mono font-bold">
                      "{COPYRIGHT_DETAILS.registrationNumber}"
                    </strong>
                  </div>
                </div>
              </div>

              {/* Highlight Paragraph from user's image */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border-2 border-slate-700/80 text-left space-y-2">
                <div className="text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>지속가능경영연구원 독자 개발 기술</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  <strong className="text-white font-bold">지속가능경영연구원</strong>에서 독자 개발하고 
                  정부 기관(<strong className="text-sky-300">한국저작권위원회</strong>)을 통해 
                  <strong className="text-amber-300 font-bold"> 기술 독점 권리를 공식 인증받은 </strong>
                  고성능 상담 및 세일즈 자동화 AI 엔진입니다.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* 도입 준비 체크리스트 확인 */}
                <a
                  id="cert-guide-btn"
                  href="#adoption-guide"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-black text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all active:scale-95 group border border-blue-400/40"
                >
                  <span>도입 준비 체크리스트 확인</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* 무료 상담 신청 */}
                <button
                  onClick={onScrollToContact}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all active:scale-95"
                >
                  <span>도입 문의 및 견적서 요청</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Ribbon exactly as shown in user's image */}
        <div className="mt-6 py-3 px-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-400" />
            <span className="text-slate-200 font-bold">MIRAGE AI</span>
            <span>|</span>
            <span>지속가능경영연구원 (Ulsan Office)</span>
          </div>
          <div className="font-mono text-sky-400 font-bold">
            {COPYRIGHT_DETAILS.registrationNumber}
          </div>
        </div>

      </div>

      {/* Modal instance */}
      <CopyrightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
