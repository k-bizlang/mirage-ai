import React, { useState } from "react";
import { 
  Check, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  Info,
  HelpCircle,
  FileCheck2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { 
  PRICING_TABLE_CONFIG, 
  PRICING_PLANS, 
  COPYRIGHT_DETAILS 
} from "../data/content";
import { PricingPlan } from "../types";

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const { title, unit, exactPriceNotice, summaryHeaders, summaryRows, detailHeaders, detailRows, notes, importantNotice } = PRICING_TABLE_CONFIG;
  const [activeTab, setActiveTab] = useState<"table" | "cards">("table");

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching 상세페이지_6.jpg */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-400 text-xs sm:text-sm font-black shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>투명하고 합리적인 공식 이용 요금</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight">
            {title}
          </h2>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="text-amber-300 font-bold">{unit}</span>
            <span>·</span>
            <span>사업장 규모 및 필요한 연동 기능에 따른 4단계 맞춤 티어</span>
          </div>

          {/* Prominent Consultation Pricing Notice */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/15 border-2 border-amber-400/60 text-amber-200 text-xs sm:text-sm md:text-base font-black shadow-xl shadow-amber-500/10 animate-pulse">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span>※ {exactPriceNotice || "정확한 금액은 상담을 통하여 최종 금액이 결정됩니다."}</span>
            </div>
          </div>
        </div>

        {/* View Mode Switcher (테이블 전체 보기 vs 카드형 선택) */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("table")}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === "table"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            }`}
          >
            공식 요금 비교표 전체보기
          </button>
          <button
            onClick={() => setActiveTab("cards")}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === "cards"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            }`}
          >
            플랜별 카드 보기
          </button>
        </div>

        {/* TABLE 1 & TABLE 2 (Exact representation of 상세페이지_6.jpg) */}
        {activeTab === "table" && (
          <div className="space-y-8 mb-14">
            
            {/* Table 1: 요금 요약표 (설치비 & 월 이용료) */}
            <div className="rounded-3xl bg-slate-900/90 border-2 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-sky-400" />
                  <h3 className="text-base sm:text-lg font-black text-white">
                    1. 설치비 및 월 이용료 요약
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-400/30">
                    ※ 정확한 금액은 상담을 통하여 최종 금액이 결정됩니다.
                  </span>
                  <span className="text-xs text-slate-400 font-bold">{unit}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-800/90 text-slate-200 font-bold border-b border-slate-700 text-center">
                      <th className="py-3.5 px-4">{summaryHeaders[0]}</th>
                      <th className="py-3.5 px-4">{summaryHeaders[1]}</th>
                      <th className="py-3.5 px-4 text-sky-300 bg-sky-950/40">{summaryHeaders[2]}</th>
                      <th className="py-3.5 px-4 text-blue-300 bg-blue-950/40">{summaryHeaders[3]}</th>
                      <th className="py-3.5 px-4 text-indigo-300 bg-indigo-950/40">{summaryHeaders[4]}</th>
                      <th className="py-3.5 px-4 text-purple-300 bg-purple-950/40">{summaryHeaders[5]}</th>
                      <th className="py-3.5 px-4">{summaryHeaders[6]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {summaryRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-850/60 transition-colors text-center font-medium">
                        <td className="py-4 px-4 font-bold text-white bg-slate-900/50">{row.category}</td>
                        <td className="py-4 px-4 text-slate-300">{row.item}</td>
                        <td className="py-4 px-4 font-black text-white bg-sky-950/20 text-base">
                          {row.entry}
                        </td>
                        <td className="py-4 px-4 font-black text-white bg-blue-950/20 text-base">
                          {row.standard}
                        </td>
                        <td className="py-4 px-4 font-black text-white bg-indigo-950/20 text-base">
                          {row.deluxe}
                        </td>
                        <td className="py-4 px-4 font-black text-white bg-purple-950/20 text-base">
                          {row.premium}
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-400">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: 상세 제공 내역 비교표 */}
            <div className="rounded-3xl bg-slate-900/90 border-2 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-black text-white">
                    2. 상세 스펙 및 제공 기능 비교표
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-400/30">
                    ※ 정확한 금액은 상담을 통하여 최종 금액이 결정됩니다.
                  </span>
                  <span className="text-xs text-slate-400">티어별 포함 사양</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-800/90 text-slate-200 font-bold border-b border-slate-700">
                      <th className="py-3.5 px-6 w-1/4">{detailHeaders[0]}</th>
                      <th className="py-3.5 px-4 text-center text-sky-300 bg-sky-950/40">{detailHeaders[1]}</th>
                      <th className="py-3.5 px-4 text-center text-blue-300 bg-blue-950/40">{detailHeaders[2]}</th>
                      <th className="py-3.5 px-4 text-center text-indigo-300 bg-indigo-950/40">{detailHeaders[3]}</th>
                      <th className="py-3.5 px-4 text-center text-purple-300 bg-purple-950/40">{detailHeaders[4]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {detailRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                        <td className="py-3.5 px-6 font-bold text-slate-200 bg-slate-900/50">
                          {row.item}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-300 bg-sky-950/10 font-semibold">
                          {row.entry}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-300 bg-blue-950/10 font-semibold">
                          {row.standard}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-300 bg-indigo-950/10 font-semibold">
                          {row.deluxe}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-300 bg-purple-950/10 font-semibold">
                          {row.premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* Action row at bottom of table */}
                  <tfoot>
                    <tr className="bg-slate-950/90 border-t border-slate-800">
                      <td className="py-4 px-6 font-bold text-slate-400">상담 및 신청</td>
                      <td className="py-4 px-4 text-center bg-sky-950/20">
                        <button
                          onClick={() => onSelectPlan("Entry level (보급형)")}
                          className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow transition-all"
                        >
                          Entry 신청
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center bg-blue-950/20">
                        <button
                          onClick={() => onSelectPlan("STANDARD (기본형)")}
                          className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow transition-all"
                        >
                          Standard 신청
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center bg-indigo-950/20">
                        <button
                          onClick={() => onSelectPlan("DELUXE (고급형)")}
                          className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow transition-all"
                        >
                          Deluxe 신청
                        </button>
                      </td>
                      <td className="py-4 px-4 text-center bg-purple-950/20">
                        <button
                          onClick={() => onSelectPlan("PREMIUM (최상품)")}
                          className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow transition-all"
                        >
                          Premium 신청
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Detailed 4-Tier Pricing Cards Grid (Always available or when cards active) */}
        <div className="mb-12">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              플랜별 핵심 사양 및 신청
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              사업장의 업종과 상담 발생 빈도에 맞춰 최적의 티어를 선택하실 수 있습니다.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-400/30">
                ※ 정확한 금액은 상담을 통하여 최종 금액이 결정됩니다.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan: PricingPlan) => {
              const isPopular = plan.isPopular;

              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl transition-all duration-300 flex flex-col justify-between p-6 relative ${
                    isPopular
                      ? "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-2"
                      : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-lg"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black px-3.5 py-0.5 rounded-full shadow-md flex items-center gap-1.5 tracking-wide whitespace-nowrap">
                      {isPopular && <Star className="w-3 h-3 fill-current text-amber-300" />}
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="pt-2">
                      <h4 className="text-lg font-black text-white">{plan.name}</h4>
                      <div className="text-xs text-sky-400 font-semibold mt-1">
                        {plan.contractPeriod}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-slate-400">월 사용료</span>
                        <div className="text-xl sm:text-2xl font-black text-amber-300">
                          {plan.price}
                        </div>
                      </div>
                      {plan.setupFee && (
                        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-900">
                          <span>초기 설치비</span>
                          <span className="font-bold text-white">{plan.setupFee}</span>
                        </div>
                      )}
                      <div className="text-[10px] text-amber-400/90 font-medium text-center pt-1 border-t border-slate-900/60">
                        ※ 상담을 통하여 최종 금액 결정
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                        isPopular
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border border-blue-400/40 shadow-blue-500/30"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700"
                      }`}
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnotes & Online Delivery Notice (Matching 상세페이지_6.jpg bottom) */}
        <div className="space-y-4 mb-10">
          {/* Footnotes */}
          <div className="text-xs text-slate-400 space-y-1">
            {notes.map((note, idx) => (
              <p key={idx} className="flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">*</span>
                <span>{note}</span>
              </p>
            ))}
          </div>

          {/* Important Notice Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {importantNotice}
            </p>
          </div>
        </div>

        {/* Copyright Footer Ribbon */}
        <div className="py-3 px-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400 font-medium">
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
