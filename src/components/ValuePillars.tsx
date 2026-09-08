import React from "react";
import { Clock, Zap, TrendingUp, Sliders, ShieldCheck, CheckCircle2, Award, Users } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Clock,
      title: "24시간 고객응대",
      desc: "영업시간 이후에도 AI가 고객 문의에 대응합니다.",
      badge: "365일 무휴",
      color: "from-blue-500/10 to-sky-500/10 text-blue-600",
    },
    {
      icon: Zap,
      title: "빠른 상담",
      desc: "고객이 기다리지 않고 필요한 정보를 바로 확인할 수 있습니다.",
      badge: "0.3초 즉시 답변",
      color: "from-amber-500/10 to-yellow-500/10 text-amber-600",
    },
    {
      icon: TrendingUp,
      title: "업무 효율 향상",
      desc: "반복적인 질문과 기본 안내를 AI가 대신합니다.",
      badge: "업무량 80% 감소",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
    },
    {
      icon: Sliders,
      title: "사업 맞춤형 구성",
      desc: "업종과 사업장 특성에 맞춰 상담 내용을 구성할 수 있습니다.",
      badge: "커스텀 시나리오",
      color: "from-indigo-500/10 to-purple-500/10 text-indigo-600",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Introduction Header from Prompt */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <span>1. 회사소개 · {COMPANY_INFO.brandSubtitle} ({COMPANY_INFO.name})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            AI 기술로 더 편리한 고객응대를 만듭니다
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-bold">{COMPANY_INFO.name}</strong>는 기업과 자영업자의 
            고객응대 업무를 보다 쉽고 효율적으로 만들어주는 AI 솔루션 전문기업입니다.
            <br className="hidden sm:inline" />
            고객 문의에 24시간 대응할 수 있는 AI 고객응대 시스템을 통해 반복적인 문의 업무를 줄이고, 
            사업자가 중요한 업무와 고객관리에 더 집중할 수 있도록 돕습니다.
          </p>

          {/* Key Executive / Verification Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              <span>대표자: <strong className="text-slate-900">{COMPANY_INFO.representative}</strong></span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>직통 상담: <strong className="text-slate-900">{COMPANY_INFO.phone}</strong></span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" />
              <span>누적 소상공인·기업 맞춤 컨설팅 진행</span>
            </div>
          </div>
        </div>

        {/* 4 Core Value Cards Bar from Image */}
        <div className="mb-4 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
            {COMPANY_INFO.brandSubtitle}({COMPANY_INFO.name})가 추구하는 가치
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center border border-slate-200/50 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 shadow-2xs">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                  <span>실시간 적용 지원</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
