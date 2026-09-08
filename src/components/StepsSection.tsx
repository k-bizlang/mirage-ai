import React from "react";
import { FileText, Search, Cpu, CalendarCheck, Users, ArrowRight } from "lucide-react";
import { ONBOARDING_STEPS } from "../data/content";

interface StepsSectionProps {
  onScrollToContact: () => void;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ onScrollToContact }) => {
  const iconMap: Record<string, React.ElementType> = {
    FileText,
    Search,
    Cpu,
    CalendarCheck,
    Users,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching image */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            간단한 절차로 시작하세요
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            전문가가 사업장 분석부터 AI 시나리오 구축, 런칭까지 모든 과정을 함께합니다.
          </p>
        </div>

        {/* 5-Step Flow Horizontal Chain matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {ONBOARDING_STEPS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || FileText;

            return (
              <div
                key={idx}
                className="relative bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-blue-600 bg-blue-100/80 px-2.5 py-1 rounded-md tracking-wider">
                      STEP {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white text-slate-700 flex items-center justify-center border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow connector indicator */}
                {idx < ONBOARDING_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner matching image screenshot */}
        <div className="mt-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              우리 사업장에도 AI 직원을 만들어보세요.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              MIRAGE AI(에이아이파트너스)가 최적의 솔루션을 제안해 드립니다.
            </p>
          </div>
          <button
            onClick={onScrollToContact}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/30 whitespace-nowrap active:scale-95 transition-all"
          >
            무료 상담 신청하기 ➔
          </button>
        </div>

      </div>
    </section>
  );
};
