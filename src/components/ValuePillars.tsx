import React from "react";
import { Clock, Zap, TrendingUp, Sliders, ShieldCheck, CheckCircle2, Award, Users, Sparkles, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Clock,
      title: "24시간 고객응대",
      desc: "영업시간 이후, 심야, 공휴일에도 AI가 고객의 문의를 1초 만에 응대합니다.",
      badge: "365일 무휴",
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      accent: "blue",
    },
    {
      icon: Zap,
      title: "즉각적인 상담 응답",
      desc: "대기 시간 없이 즉시 필요한 정보와 가격, 상세 이용 안내를 정확히 제공합니다.",
      badge: "0.8초 즉시 답변",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600 bg-amber-50 border-amber-200",
      accent: "amber",
    },
    {
      icon: TrendingUp,
      title: "업무 효율 80% 극대화",
      desc: "단순 반복 질문과 위치/주차/이용 문의를 AI가 처리하여 본업에 집중할 수 있습니다.",
      badge: "상담 피로도 해소",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      accent: "emerald",
    },
    {
      icon: Sliders,
      title: "사업장 맞춤형 구성",
      desc: "업종과 매장 매뉴얼, 사내 FAQ 및 특화 시나리오를 1:1 커스텀 구축합니다.",
      badge: "1:1 커스텀 시나리오",
      gradient: "from-indigo-500/10 to-violet-500/10",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      accent: "indigo",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60 shadow-xs">
            <MirageLogo size="xs" />
            <span>회사소개 · {COMPANY_INFO.brandSubtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-snug">
            비즈니스의 성장을 돕는 <br className="hidden sm:inline" />
            <span className="text-blue-600">지능형 24시간 AI 고객응대 파트너</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <strong className="text-slate-900 font-bold">{COMPANY_INFO.name}</strong>는 
            소상공인과 중소기업이 겪는 야간·주말 상담 공백과 반복 문의 스트레스를 완벽히 해결합니다.
            <br className="hidden sm:inline" />
            정확하고 빠른 인공지능 상담으로 고객 만족도를 높이고 매출 전환율을 극대화하세요.
          </p>

          {/* Verification / Trust Indicators */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 shadow-xs">
              <Award className="w-4 h-4 text-blue-600" />
              <span>대표자: <strong className="text-slate-900 font-bold">{COMPANY_INFO.representative}</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>직통 상담: <strong className="text-slate-900 font-bold">{COMPANY_INFO.phone}</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 shadow-xs">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>전국 소상공인·기업 1:1 맞춤 세팅</span>
            </div>
          </div>
        </div>

        {/* 4 Core Value Cards Bar */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">CORE VALUE</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {COMPANY_INFO.brandSubtitle}가 제공하는 4가지 핵심 가치
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white hover:bg-slate-50/60 p-7 rounded-3xl border-2 border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform ${pillar.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Feature Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>즉시 도입 가능</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
