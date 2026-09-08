import React, { useState } from "react";
import { Sparkles, ArrowRight, Bot, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, Headset, Zap } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

interface HeroSectionProps {
  onOpenConsultant: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultant, onScrollToContact }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sampleConversations = [
    {
      q: "토요일에도 진료하나요?",
      a: "토요일 진료시간은 오전 9시부터 오후 1시까지입니다. 원하시는 시간대로 예약을 도와드릴까요?",
      industry: "병원·의원",
    },
    {
      q: "반려견 동반 입실 가능한가요?",
      a: "네, 반려견 동반이 가능합니다. 10kg 미만 1마리 무료이며 객실 이용규칙을 안내해 드릴까요?",
      industry: "펜션·숙박업",
    },
    {
      q: "상담 AI 도입 비용은 얼마인가요?",
      a: "보급형 월 159,000원부터 시작하며, 업종별 맞춤형 표준형은 월 220,000원에 제공됩니다.",
      industry: "도입비용",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50 to-white pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-slate-200/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-400/10 via-sky-300/10 to-indigo-400/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>당신의 비즈니스에, 24시간 함께하는 AI</span>
            </div>

            {/* Main Headline matching image */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.2]">
              24시간 쉬지 않는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                자동 고객 응대 홈페이지 솔루션
              </span>
            </h1>

            {/* Sub-description matching prompt */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              고객이 언제 문의하더라도 즉시 답변하고, 반복적인 상담업무는 AI가 대신합니다.
              <br className="hidden sm:inline" />
              <strong className="text-slate-800 font-semibold"> AI 24시 고객응대 프로그램</strong>으로 
              상담 효율은 높이고, 고객 만족도와 매출 기회는 놓치지 마세요.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {/* Primary Consultation Form CTA */}
              <button
                id="hero-free-consult-btn"
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all active:scale-95"
              >
                <span>무료 상담 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Service details anchor */}
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-all active:scale-95"
              >
                <span>서비스 알아보기</span>
              </a>

              {/* Directly invoke AI Consultation Button (Prompt Requirement) */}
              <button
                id="hero-direct-ai-btn"
                onClick={onOpenConsultant}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-300 rounded-xl shadow-md transition-all active:scale-95 hover:border-blue-400 group"
              >
                <Sparkles className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform" />
                <span>상담 AI 직접 호출하기</span>
              </button>
            </div>

            {/* Google Sites Agent Notice Card */}
            <div className="pt-3">
              <a
                href={COMPANY_INFO.externalAgentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                    <span>공식 상담 AI 온라인 포털</span>
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">
                      Google 로그인 시작
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    내가 만든 전용 상담 AI: 구글 계정으로 접속하여 24시간 실시간 1:1 비즈니스 맞춤형 상담을 진행합니다.
                  </p>
                </div>
              </a>
            </div>

            {/* Trust badge icons */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>기업·소상공인 맞춤 구축</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>월 15.9만원 합리적 요금</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>야간·주말 100% 무중단</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Component mirroring image.png */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Consultant & Robot Theme */}
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 p-5 sm:p-6 overflow-hidden">
                
                {/* Visual Header Banner with Specialist & AI Bot */}
                <div className="relative h-52 sm:h-56 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-5 text-white flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Decorative ambient rings */}
                  <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-sky-400/20 blur-xl pointer-events-none" />

                  {/* Top Bar inside image */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-wide uppercase text-blue-100">
                        MIRAGE AI 24H ONLINE
                      </span>
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-medium">
                      응답률 99.8%
                    </span>
                  </div>

                  {/* Center Visual Persona Display */}
                  <div className="flex items-center justify-around z-10 my-auto py-2">
                    {/* Consultant with Headset Illustration */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg relative">
                        <Headset className="w-9 h-9 text-white" />
                        <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                          상담원
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-blue-100 mt-1.5">전문 컨설팅</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                      </div>
                      <span className="text-[10px] text-blue-200 mt-1">실시간 연동</span>
                    </div>

                    {/* AI Robot Companion Avatar */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-300 border border-white/40 flex items-center justify-center shadow-lg shadow-sky-500/30 relative">
                        <Bot className="w-10 h-10 text-slate-900" />
                        <span className="absolute -bottom-1 -right-1 bg-blue-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                          AI 로봇
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-blue-100 mt-1.5">24시 자동응대</span>
                    </div>
                  </div>

                  {/* Floating speech callouts matching screenshot */}
                  <div className="z-10 bg-slate-900/60 backdrop-blur-md rounded-xl px-3 py-1.5 text-xs text-blue-100 flex items-center justify-between border border-white/10">
                    <span className="font-semibold text-white truncate">
                      "궁금한 점이 있으신가요? 24시간 언제든 응답합니다!"
                    </span>
                    <span className="text-[10px] text-sky-300 shrink-0 ml-2 font-mono">0.3초 즉시 답변</span>
                  </div>
                </div>

                {/* Interactive Mini Chat Simulator on the right */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                      실시간 상담 시뮬레이션
                    </span>
                    <span className="text-[11px] text-slate-500">질문을 클릭해 보세요</span>
                  </div>

                  {/* Sample Trigger Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {sampleConversations.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg transition-all shrink-0 ${
                          activeTab === idx
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {item.industry}
                      </button>
                    ))}
                  </div>

                  {/* Conversation Display */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2.5">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-2xl rounded-tr-none shadow-xs max-w-[85%]">
                        {sampleConversations[activeTab].q}
                      </div>
                    </div>

                    {/* AI message */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div className="bg-white text-slate-800 text-xs sm:text-sm px-3 py-2.5 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-xs leading-relaxed max-w-[90%]">
                        <p>{sampleConversations[activeTab].a}</p>
                        <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-semibold">
                          <span>✓ 맞춤형 답변 자동 전송</span>
                          <span className="text-slate-400 font-normal">방금 전</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button inside mockup to open full chat */}
                  <button
                    onClick={onOpenConsultant}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200/80 text-blue-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>MIRAGE AI 실시간 챗봇과 전체 대화하기</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
