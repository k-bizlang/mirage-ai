import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  UserPlus, 
  Phone, 
  Building,
  Check
} from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";

interface HeroSectionProps {
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
  // Live interactive preview questions
  const sampleScenarios = [
    {
      tab: "숙박·펜션",
      icon: "🏡",
      userQ: "주말 체크인 시간과 바베큐 이용 요금이 어떻게 되나요?",
      aiA: "입실은 오후 3시부터, 퇴실은 익일 오전 11시입니다. 바베큐 숯+그릴 세트는 2인 기준 20,000원에 이용 가능하며, 체크인 시 현장 결제 또는 사전 신청하실 수 있습니다.",
      tag: "체크인/부대시설 즉시안내"
    },
    {
      tab: "병원·의원",
      icon: "🏥",
      userQ: "토요일 야간 진료가 가능한가요? 사전 접수 없이 바로 가도 되나요?",
      aiA: "토요일은 오전 9시부터 오후 1시까지 집중 진료를 운영합니다. 대기 시간을 최소화하기 위해 진료 안내 및 접수 상담을 바로 도와드릴까요?",
      tag: "진료시간 및 내원 안내"
    },
    {
      tab: "음식점·카페",
      icon: "🍽️",
      userQ: "내일 저녁 6명 단체 룸 이용과 주차 가능한가요?",
      aiA: "네, 지하 1층 전용 주차장에 2시간 무료 주차가 가능하며 6인 단체 룸 이용이 가능합니다. 고객명과 연락처를 남겨주시면 담당 직원이 즉시 확인 후 안내해 드립니다.",
      tag: "주차 및 단체석 안내"
    },
    {
      tab: "학원·교육",
      icon: "🎓",
      userQ: "중등부 영어 수강료와 레벨테스트 일정이 궁금해요.",
      aiA: "중등부 정규과정은 주 3회(월/수/금) 운영되며, 무료 레벨테스트는 매주 화·목 5시에 신청하실 수 있습니다. 바로 테스트를 신청하시겠습니까?",
      tag: "수강료 및 테스트 접수"
    }
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const currentScenario = sampleScenarios[activeScenarioIdx];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-800">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-sky-400/20 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-blue-500/10 blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline pill with Official Logo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-inner">
              <MirageLogo size="xs" />
              <span className="font-bold text-white">MIRAGE AI</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span className="text-slate-300">24시간 비즈니스 맞춤형 고객응대 솔루션</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[1.18] text-white">
                고객 문의는 24시간 계속됩니다. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                  AI가 밤낮없이 대신 답합니다
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2 font-normal">
                새벽 2시 문의도, 주말 반복 질문도 놓치지 마세요. 
                <strong className="text-white font-semibold"> MIRAGE AI 24시 고객응대 프로그램</strong>이
                귀사만의 FAQ와 시나리오를 학습하여 전문 상담원처럼 1초 만에 응답합니다.
              </p>
            </div>

            {/* Core Value Checklist Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>365일 24시간 무중단 응대</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>0.8초 즉각 답변 체계</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>월 15.9만원 합리적 도입</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Primary Consultation Form CTA */}
              <button
                id="hero-free-consult-btn"
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all active:scale-95"
              >
                <span>무료 맞춤 컨설팅 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Service details anchor */}
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all active:scale-95 hover:border-slate-600"
              >
                <span>서비스 상세 기능 보기</span>
              </a>
            </div>

            {/* Representative & Direct Tel Info */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                <span>에이아이파트너스 (대표자: <strong className="text-white">{COMPANY_INFO.representative}</strong>)</span>
              </span>
              <span className="text-slate-600">|</span>
              <a href={COMPANY_INFO.telLink} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>직통 상담: <strong className="text-white">010-8267-3733</strong></span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Live Interactive AI Simulator & Direct Action Hub */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow frame */}
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 via-slate-900/95 to-slate-950 p-1 border-2 border-blue-500/40 shadow-2xl shadow-blue-900/40 backdrop-blur-xl">
              
              <div className="p-6 sm:p-7 space-y-6">
                
                {/* Simulator Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <MirageLogo size="sm" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-white tracking-tight">MIRAGE AI Live</span>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>24시간 가동 중</span>
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">고객응대 실시간 시뮬레이터</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded-lg">
                    1:1 자동응대
                  </span>
                </div>

                {/* Industry Selector Tabs */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>업종별 실제 상담 예시를 눌러보세요</span>
                    <span className="text-blue-400">{currentScenario.tag}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {sampleScenarios.map((sc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScenarioIdx(idx)}
                        className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                          activeScenarioIdx === idx
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400"
                            : "bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"
                        }`}
                      >
                        <span className="text-base">{sc.icon}</span>
                        <span className="text-[11px] truncate w-full text-center">{sc.tab}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Chat Window Display */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 space-y-3 shadow-inner">
                  {/* Customer Question Bubble */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="bg-blue-600 text-white text-xs sm:text-sm py-2 px-3.5 rounded-2xl rounded-tr-xs max-w-[85%] leading-relaxed shadow-sm">
                      {currentScenario.userQ}
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">
                      고객
                    </div>
                  </div>

                  {/* AI Response Bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-xs">
                      AI
                    </div>
                    <div className="bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm py-2.5 px-3.5 rounded-2xl rounded-tl-xs max-w-[88%] leading-relaxed">
                      <p>{currentScenario.aiA}</p>
                      <div className="mt-2 pt-1.5 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Check className="w-3 h-3" />
                          <span>0.8초 내 즉시 답변</span>
                        </span>
                        <span>사내 매뉴얼 연동 완료</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2 Core Action Buttons from Instructions */}
                <div className="space-y-2.5 pt-1">
                  
                  {/* Step 1: 미가입자 구글계정 가입 */}
                  <a
                    id="hero-card-signup-btn"
                    href={COMPANY_INFO.googleSignUpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 transition-all group"
                    title="미가입자는 구글 계정으로 먼저 가입 후 솔루션을 이용하실 수 있습니다"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold text-xs">
                        G
                      </div>
                      <div className="text-left">
                        <div className="font-bold flex items-center gap-1.5">
                          <span>1단계 · 미가입자 구글계정 가입</span>
                          <span className="text-[10px] font-normal text-slate-400">(10초 완료)</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-normal">미가입자는 구글 계정으로 먼저 가입 필요</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </a>

                  {/* Step 2: 24시간 AI 상담 바로가기 (공식 링크 무조건 연결) */}
                  <a
                    id="hero-card-ai-chat-btn"
                    href={COMPANY_INFO.aiChat24hUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/40 transition-all hover:shadow-blue-500/60 active:scale-95 group border border-blue-400/40"
                    title="24시간 AI 상담 실시간 대화방으로 즉시 연결됩니다"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="text-left">
                        <div className="font-extrabold flex items-center gap-1.5">
                          <span>2단계 · 24시간 AI 상담 바로가기</span>
                        </div>
                        <div className="text-[11px] text-blue-100 font-normal">실시간 1:1 맞춤 대화방 즉시 연결</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/90" />
                  </a>

                </div>

                {/* Bottom Card Footer */}
                <div className="pt-1 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <a href={COMPANY_INFO.telLink} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>전화 직통: <strong className="text-slate-200">{COMPANY_INFO.phone}</strong></span>
                  </a>
                  <span>{COMPANY_INFO.representative} 대표</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
