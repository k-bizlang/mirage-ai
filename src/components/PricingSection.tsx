import React from "react";
import { Check, Star, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { PRICING_PLANS } from "../data/content";
import { PricingPlan } from "../types";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <span>4. 상품 및 요금 (Pricing)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            사업 규모에 맞는 상품을 선택하세요
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            합리적인 비용으로, 24시간 365일 쉬지 않는 AI 전문 고객응대 인력을 도입할 수 있습니다.
          </p>
        </div>

        {/* Pricing Cards Grid matching image.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 ring-4 ring-blue-50 -translate-y-2"
                    : "bg-slate-50/70 hover:bg-white border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
                    <span>{plan.badge || "추천 상품"}</span>
                  </div>
                )}

                <div className="p-7 sm:p-8">
                  {/* Plan Name & Tagline */}
                  <div className="border-b border-slate-200/80 pb-6 mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                    <div className="mt-5 flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      포함 서비스
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular ? "bg-blue-100 text-blue-600" : "bg-slate-200/80 text-slate-600"
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-medium leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-7 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 ${
                      isPopular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30"
                        : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote matching screenshot */}
        <div className="mt-10 text-center text-xs text-slate-500 font-medium">
          ※ 세부 기능 및 구축 범위는 사업장 운영 환경 및 상담 시나리오 요구사항에 따라 맞춤 조율될 수 있습니다.
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-slate-50 p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block sm:inline mr-2">무약정 안심 상담:</span>
              기존 번호 및 홈페이지 변경 없이 손쉽게 연동 구축해 드립니다.
            </div>
          </div>
          <button
            onClick={() => onSelectPlan("표준형")}
            className="text-blue-600 font-bold hover:underline shrink-0"
          >
            어떤 상품이 맞는지 무료 상담받기 ➔
          </button>
        </div>

      </div>
    </section>
  );
};
