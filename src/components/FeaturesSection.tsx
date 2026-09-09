import React, { useState } from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Globe2, 
  Stethoscope, 
  GraduationCap, 
  Scale, 
  MessageSquareText, 
  BrainCircuit, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Send,
  Building,
  TrendingUp,
  Award
} from "lucide-react";
import { CHAPTER_2_FEATURES, COPYRIGHT_DETAILS, COMPANY_INFO } from "../data/content";

interface FeaturesSectionProps {
  onOpenConsultant: () => void;
  onScrollToContact: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onOpenConsultant,
  onScrollToContact,
}) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>("trade");

  const industries = CHAPTER_2_FEATURES.industries;
  const activeIndustry = industries.find((ind) => ind.id === activeIndustryId) || industries[0];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Image-2 exactly */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-14">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-400 text-xs sm:text-sm font-black shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{CHAPTER_2_FEATURES.chapter}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight">
            ✓ {CHAPTER_2_FEATURES.headline}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {CHAPTER_2_FEATURES.subtext}
          </p>
        </div>

        {/* Tablet Frame Simulation with 4 Core Industries (Matching Image-2 Top Tablet UI) */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md mb-16">
          
          {/* Industry Selection Tabs / Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {industries.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              const IconComp = ind.id === "trade" ? Globe2 : ind.id === "medical" ? Stethoscope : ind.id === "education" ? GraduationCap : Scale;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-slate-900 border-blue-400 text-white shadow-lg shadow-blue-500/20"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isActive ? "bg-blue-600 text-white border-blue-400" : "bg-slate-800 text-slate-400 border-slate-700"
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    {isActive && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/40">
                        선택됨
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-sky-400 block">{ind.tag}</span>
                    <strong className="text-sm sm:text-base font-black tracking-tight leading-snug block mt-0.5">
                      {ind.title}
                    </strong>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Industry Interactive Preview Area */}
          <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left detail */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-400 font-mono tracking-wider">
                    INDUSTRY AI OPTIMIZATION LIVE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeIndustry.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeIndustry.description}
                </p>

                {/* Multilingual / Tag bubble showcase */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 font-semibold block mb-2">실시간 지원 언어 및 자동 시나리오:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-bold shadow-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={onOpenConsultant}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
                  >
                    <span>{activeIndustry.title} AI 상담 체험</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onScrollToContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all border border-slate-700"
                  >
                    <span>도입 맞춤 견적</span>
                  </button>
                </div>
              </div>

              {/* Right Mockup Dialogue (Simulating real response) */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3.5 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs text-slate-400">
                    <span className="font-bold text-slate-300 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-sky-400" />
                      MIRAGE AI 엔진 응답 속도: <strong className="text-emerald-400">0.8초</strong>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Hallucination 방지 로직 적용</span>
                  </div>

                  {/* Sample Query from Customer */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0">
                      고객
                    </div>
                    <div className="bg-slate-800/90 text-slate-200 text-xs sm:text-sm p-3 rounded-2xl rounded-tl-none border border-slate-700/80 leading-relaxed">
                      {activeIndustry.id === "trade" && "Can you provide the heat resistance TDS and sample quotation for export?"}
                      {activeIndustry.id === "medical" && "토요일 비보험 임플란트 시술 상담 및 야간 진료 안내 가능한가요?"}
                      {activeIndustry.id === "education" && "고등부 영어/수학 레벨테스트 일정과 수강료 커리큘럼 알려주세요."}
                      {activeIndustry.id === "legal" && "상가 임대차 보증금 반환 관련 내용증명 발송 절차와 수임 상담 신청 원합니다."}
                    </div>
                  </div>

                  {/* AI Instant Accurate Response */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-none shadow-md leading-relaxed max-w-[90%] space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-sky-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                        <span>MIRAGE 전문 RAG 엔진 자동 응답</span>
                      </div>
                      <p>
                        {activeIndustry.id === "trade" && "Certainly! Our standard product meets CE certification and 350°C heat resistance. Would you like us to email the English TDS and quotation immediately?"}
                        {activeIndustry.id === "medical" && "토요일 진료는 오전 9시부터 오후 1시까지 운영됩니다. 사전 스마트 문진을 작성해 주시면 대기시간 없이 1:1 진료가 가능합니다."}
                        {activeIndustry.id === "education" && "현재 학년별 심화 도약 커리큘럼이 개설되어 있으며, 원장님 1:1 레벨진단 및 상담 일정을 바로 조율해 드릴 수 있습니다."}
                        {activeIndustry.id === "legal" && "상가임대차보호법에 따른 내용증명 작성 및 임차권등기명령 절차를 지원하며, 전담 변호사 1:1 대면 수임 일정을 신속히 확정해 드립니다."}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm">
                      AI
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Core Pillars matching Image-2 Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHAPTER_2_FEATURES.pillars.map((pillar, idx) => {
            const IconComponent = idx === 0 ? MessageSquareText : idx === 1 ? BrainCircuit : BarChart3;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-sky-400 flex items-center justify-center border border-blue-500/30">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-500/10 text-sky-300 border border-blue-500/30 font-mono">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <div className="text-xs text-sky-400 font-bold mt-0.5">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Accreditation Note matching Image-2 */}
        <div className="mt-12 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
          <span>* Sustainable Management Institute</span>
          <span>|</span>
          <strong className="text-slate-300">지속가능경영연구원 (Ulsan Office)</strong>
          <span>|</span>
          <span className="text-sky-400 font-mono font-bold">{COPYRIGHT_DETAILS.registrationNumber}</span>
        </div>

      </div>
    </section>
  );
};
