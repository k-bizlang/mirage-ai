import React, { useState } from "react";
import { ExternalLink, Bot, Sparkles, LogIn, FileText, Youtube, CheckCircle2, ChevronRight, Download, Calendar } from "lucide-react";
import { COMPANY_INFO, OFFICIAL_RESOURCES } from "../data/content";

interface OfficialAgentBannerProps {
  onOpenConsultant: () => void;
}

export const OfficialAgentBanner: React.FC<OfficialAgentBannerProps> = ({ onOpenConsultant }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <section id="official-agent" className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Portal Card */}
        <div className="relative rounded-3xl bg-white border-2 border-blue-600/30 p-8 sm:p-12 shadow-xl shadow-blue-500/5 overflow-hidden">
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/10 via-sky-400/10 to-transparent pointer-events-none rounded-bl-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <Bot className="w-4 h-4 text-blue-600" />
                <span>Google 계정 연동 공식 포털</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                [MIRAGE AI] 공식 상담 AI <br />
                <span className="text-blue-600">온라인 서비스 즉시 시작</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                제작된 전용 상담 AI는 <strong className="text-slate-900 font-bold">Google 계정으로 가입/로그인</strong> 후 
                본격적인 1:1 맞춤형 비즈니스 상담과 자동화 시뮬레이션을 즉시 시작할 수 있습니다.
                <br className="hidden sm:inline" />
                업종별 최적 시나리오, 실시간 사내 FAQ 연동 및 도입 견적을 즉각 확인해 보세요.
              </p>

              {/* Login & Launch 3-step Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-[10px]">1</span>
                    링크 접속
                  </div>
                  <p className="text-slate-500">공식 Google Sites 상담 AI 페이지로 이동합니다.</p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-[10px]">2</span>
                    Google 로그인
                  </div>
                  <p className="text-slate-500">안전한 구글 계정으로 간편 인증을 진행합니다.</p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-[10px]">3</span>
                    상담 AI 개시
                  </div>
                  <p className="text-slate-500">1:1 맞춤형 AI 상담원과 즉시 대화를 시작합니다.</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={COMPANY_INFO.externalAgentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl active:scale-95 group"
                >
                  <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>공식 상담 AI 바로가기 (Google 연동)</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                <button
                  onClick={onOpenConsultant}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm border border-slate-300 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>홈페이지 내 실시간 AI 체험</span>
                </button>
              </div>
            </div>

            {/* Right: Quick Links / Resources from PDF instructions */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  MIRAGE AI 공식 자료 및 시연 링크
                </span>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  표준 지침서 연동
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {OFFICIAL_RESOURCES.slice(0, 5).map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group"
                  >
                    <span className="font-semibold text-slate-700 group-hover:text-blue-700 truncate pr-2">
                      {res.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 leading-snug">
                ※ 상기 문서 및 동영상은 [MIRAGE AI] 공식 지식베이스 표준 연동 자료입니다.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
