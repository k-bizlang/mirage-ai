import React from "react";
import { ExternalLink, Sparkles, FileText, UserPlus, CheckCircle2, Bot, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { COMPANY_INFO, OFFICIAL_RESOURCES } from "../data/content";
import { MirageLogo } from "./MirageLogo";

interface OfficialAgentBannerProps {
  onOpenConsultant?: () => void;
}

export const OfficialAgentBanner: React.FC<OfficialAgentBannerProps> = () => {
  return (
    <section id="official-agent" className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Portal Card */}
        <div className="relative rounded-3xl bg-slate-900/90 border-2 border-blue-500/40 p-8 sm:p-12 shadow-2xl shadow-blue-900/40 overflow-hidden backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold shadow-inner">
                <MirageLogo size="xs" />
                <span>공식 24시간 AI 상담 시스템</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-tight text-white">
                [MIRAGE AI] 24시간 AI 상담 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                  실시간 1:1 대화 즉시 시작
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                제작된 전용 상담 AI는 <strong className="text-white font-semibold">24시간 AI 상담 시스템</strong>으로 
                즉시 연결되어 24시간 실시간 1:1 맞춤형 비즈니스 상담과 자동화 시뮬레이션을 시작할 수 있습니다.
                <br className="hidden sm:inline" />
                귀사의 업종에 맞춘 최적 시나리오, 실시간 사내 FAQ 연동 및 도입 견적을 즉각 확인해 보세요.
              </p>

              {/* Login & Launch 3-step Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                
                <a
                  href={COMPANY_INFO.googleSignUpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border-2 border-slate-700 hover:border-blue-400 transition-all text-xs block group text-left"
                  title="미가입자 구글 계정 가입"
                >
                  <div className="font-bold text-sky-400 mb-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center font-black text-[10px] border border-blue-400/40">1</span>
                      <span className="text-slate-200 group-hover:text-white">구글계정 가입</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <p className="text-slate-400 leading-relaxed">미가입자는 구글 계정으로 먼저 가입 후 솔루션을 이용하실 수 있습니다.</p>
                </a>

                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 text-xs text-left">
                  <div className="font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center font-black text-[10px]">2</span>
                    <span>AI 상담원 접속</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">공식 링크를 통해 24시간 실시간 1:1 대화방으로 즉시 입장합니다.</p>
                </div>

                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 text-xs text-left">
                  <div className="font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center font-black text-[10px]">3</span>
                    <span>1:1 맞춤 상담</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">사내 문서 및 FAQ가 연동된 AI 상담원과 자유롭게 실시간 대화합니다.</p>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* 1단계: 미가입자 구글계정 가입 */}
                <a
                  href={COMPANY_INFO.googleSignUpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all active:scale-95 group"
                  title="AI 24시 고객응대 미가입자는 구글 계정으로 가입 후 이용 가능합니다"
                >
                  <UserPlus className="w-4 h-4 text-sky-400" />
                  <span>1단계 · 구글계정 가입 (미가입자)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
                </a>

                {/* 2단계: 24시간 AI 상담 바로가기 */}
                <a
                  href={COMPANY_INFO.aiChat24hUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all hover:shadow-blue-500/50 active:scale-95 group border border-blue-400/30"
                  title="24시간 AI 상담 실시간 1:1 대화방으로 즉시 연결됩니다"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                  <span>2단계 · 24시간 AI 상담 바로가기</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>

            {/* Right: Quick Links / Resources from PDF instructions */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-black text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  MIRAGE AI 공식 자료 및 시연 링크
                </span>
                <span className="text-[11px] font-bold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-2 py-0.5 rounded-md">
                  실시간 연동
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                {OFFICIAL_RESOURCES.slice(0, 5).map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all group"
                  >
                    <span className="font-semibold truncate pr-2 group-hover:text-sky-300 transition-colors">
                      {res.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 shrink-0 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google AI Studio / Gemini 인프라 연동</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
