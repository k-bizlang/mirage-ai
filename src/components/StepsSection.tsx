import React from "react";
import { 
  ArrowRight, 
  MessageCircle, 
  Globe, 
  Send, 
  Workflow, 
  Bot, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Handshake, 
  BookOpenCheck, 
  FlaskConical, 
  Wrench,
  CheckCircle2,
  Building
} from "lucide-react";
import { CHAPTER_3_PROCEDURE, COPYRIGHT_DETAILS, COMPANY_INFO } from "../data/content";

interface StepsSectionProps {
  onScrollToContact: () => void;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ onScrollToContact }) => {
  const { chapter, headline, subtext, channels, techStack, steps } = CHAPTER_3_PROCEDURE;

  const stepIcons = [Handshake, BookOpenCheck, Cpu, FlaskConical, Wrench];

  return (
    <section id="procedure" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Image-3 */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-400 text-xs sm:text-sm font-black shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{chapter}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight">
            ✓ {headline}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Tablet Showcase Frame: Channels & Tech Stack (Matching Image-3 Top Half) */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left: Connectable Channels */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Workflow className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide">
                  CONNECTABLE CHANNELS (연동 가능 채널)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                기존 사용 중인 메신저 및 홈페이지에 단 한 줄의 스크립트로 간편하게 연동됩니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {channels.map((channel, idx) => {
                  const IconComp = idx === 0 ? MessageCircle : idx === 1 ? Globe : idx === 2 ? Send : Workflow;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-3.5 shadow-inner"
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0 border border-slate-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-sky-400">{channel.badge}</div>
                        <div className="text-sm font-black text-white truncate">{channel.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: AI Engine & Technology Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide">
                  AI ENGINE &amp; TECH STACK (검증된 기술 스택)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                글로벌 표준 최신 AI 아키텍처와 자체 RAG 검색 증강 기술을 통합하여 신뢰도 99%를 보장합니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {techStack.map((tech, idx) => {
                  const IconComp = idx === 0 ? Bot : idx === 1 ? Code2 : idx === 2 ? Cpu : ShieldCheck;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-3.5 shadow-inner"
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center shrink-0 border border-slate-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-black text-white truncate">{tech.name}</div>
                        <div className="text-[11px] text-slate-400 leading-tight truncate">{tech.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 5-Step Process Section: 체계적인 Service Offering Procedure 안내 (Matching Image-3 Bottom) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              체계적인 Service Offering Procedure 안내 (5단계 구축 프로세스)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              상담 신청부터 24시간 실시간 운영까지 전담 엔지니어가 1:1로 안전하게 구축해 드립니다.
            </p>
          </div>

          {/* 5 Steps Horizontal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((item, idx) => {
              const IconComp = stepIcons[idx] || Handshake;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-3 hover:border-blue-500/50 transition-all shadow-lg flex flex-col justify-between group relative"
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-sky-400 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-400/30">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1.5 flex-1 pt-2">
                    <h4 className="text-sm sm:text-base font-black text-white tracking-tight leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>전담 엔지니어 배정</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center pt-6">
            <button
              onClick={onScrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-95 border border-blue-400/30"
            >
              <span>1:1 맞춤형 심층 상담 신청하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Ribbon matching Image-3 */}
        <div className="mt-14 py-3 px-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">MIRAGE AI</span>
            <span>|</span>
            <span>지속가능경영연구원 (Ulsan Office)</span>
          </div>
          <div className="font-mono text-sky-400 font-bold">
            {COPYRIGHT_DETAILS.registrationNumber}
          </div>
        </div>

      </div>
    </section>
  );
};
