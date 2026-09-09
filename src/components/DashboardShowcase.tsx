import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Play, 
  Layers, 
  ArrowUpRight,
  Clock,
  Award,
  ChevronRight
} from "lucide-react";
import { DASHBOARD_METRICS, COPYRIGHT_DETAILS, COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";
import { CopyrightModal } from "./CopyrightModal";

interface DashboardShowcaseProps {
  onOpenConsultant: () => void;
  onScrollToContact: () => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({
  onOpenConsultant,
  onScrollToContact,
}) => {
  const [isCopyrightModalOpen, setIsCopyrightModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chart" | "scroll">("scroll");

  return (
    <section id="dashboard-engine" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Dynamic Background Mesh & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-sky-400/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header matching Main Image */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold shadow-inner">
            <MirageLogo size="xs" />
            <span className="font-extrabold text-white">MIRAGE AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>글로벌 비즈니스 통합 AI 세일즈 자동화 엔진</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-tight">
            GLOBAL SALES AUTOMATION &amp; CS BUSINESS INSIGHT
            <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-indigo-300 mt-2">
              (Global Business Integrated AI Engine)
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            국내 최초 <strong className="text-white font-semibold">한국저작권위원회 정식 등록(C-2026-017543)</strong>을 완료한
            검증된 고성능 AI 엔진으로 실시간 24시간 고객 상담과 세일즈 전환을 자동화합니다.
          </p>
        </div>

        {/* The Main High-End Dashboard Frame */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border-2 border-blue-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-950/80 backdrop-blur-xl">
          
          {/* Top Bar with Live Indicator & Demo Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <span className="text-xs sm:text-sm font-black text-white tracking-wide">
                  MIRAGE AI LIVE METRICS DASHBOARD
                </span>
                <span className="ml-2 text-[11px] text-emerald-400 font-mono font-bold">
                  ● 24시간 실시간 가동 중
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCopyrightModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white border border-slate-700 text-xs font-bold transition-all"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>정부 저작권 등록증 확인</span>
              </button>

              <a
                href="#adoption-guide"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-all"
              >
                <span>도입 준비 체크리스트</span>
              </a>
            </div>
          </div>

          {/* 3 Metric Cards Grid (Matching Main Image top 3 panels) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Card 1: 총체 상담 1,200건 */}
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 space-y-4 hover:border-blue-500/50 transition-all shadow-inner">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center border border-blue-500/30">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-sky-300 border border-blue-500/30">
                  AI 처리율 85%
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">총체 상담</div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                  1,200건
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  Total 상담: <strong className="text-sky-300 font-bold">1,200건</strong> | AI 처리율: <strong className="text-emerald-400">85%</strong>
                </div>
              </div>

              {/* Monthly Bar Chart Graphics */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="h-20 flex items-end justify-between gap-3 pt-2">
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full bg-blue-500/40 rounded-t h-[25%] transition-all"></div>
                    <span className="text-[10px] text-slate-500">1월</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full bg-blue-500/60 rounded-t h-[45%] transition-all"></div>
                    <span className="text-[10px] text-slate-500">2월</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full bg-blue-500/80 rounded-t h-[70%] transition-all"></div>
                    <span className="text-[10px] text-slate-500">3월</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full bg-gradient-to-t from-blue-600 to-sky-400 rounded-t h-[100%] shadow-lg shadow-blue-500/30"></div>
                    <span className="text-[10px] text-sky-400 font-bold">4월</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: AI 상담 요약 323.0% */}
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 space-y-4 hover:border-indigo-500/50 transition-all shadow-inner">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  자동 분류 100%
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">AI 상담 요약</div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                  323.0%
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  최다 문의 유형: <strong className="text-amber-300 font-bold">배송 문의(30%)</strong>
                </div>
              </div>

              {/* Inquiry Type Horizontal Bars */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                    <span>배송 문의</span>
                    <span className="text-sky-400 font-bold">30%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full rounded-full w-[30%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                    <span>주문·접수</span>
                    <span className="text-blue-400 font-bold">25%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-[25%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                    <span>상품·스펙</span>
                    <span className="text-indigo-400 font-bold">22%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full w-[22%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: 고객 CS 4,895명 & 만족도 */}
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 space-y-4 hover:border-emerald-500/50 transition-all shadow-inner">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  만족도 4.8 / 5.0
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">고객 CS 누적</div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                  4,895명
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  고객 만족도: <strong className="text-amber-300 font-bold">4.8 / 5.0</strong> (96점)
                </div>
              </div>

              {/* Donut Style Visual Graphic */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <div className="relative w-16 h-16 rounded-full border-4 border-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-400 border-t-transparent -rotate-45"></div>
                  <span className="text-xs font-black text-white">96%</span>
                </div>
                <div className="space-y-1 text-[10px] text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>신속 즉각 응대 (92%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    <span>정확한 FAQ 안내 (95%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>상담 및 수주 전환 (88%)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Central Scroll Banner (Matching Main Image Scroll Effect) */}
          <div className="relative rounded-2xl bg-gradient-to-r from-amber-50/95 via-white to-amber-50/95 text-slate-900 p-6 sm:p-8 border-4 border-amber-300 shadow-2xl overflow-hidden my-6">
            
            {/* Scroll Roll Edges */}
            <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-amber-200 to-amber-400 shadow-md"></div>
            <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-l from-amber-200 to-amber-400 shadow-md"></div>

            <div className="max-w-4xl mx-auto">
              {/* Banner Top Title */}
              <div className="text-center border-b-2 border-amber-200 pb-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>대한민국 정부 공인</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  저작권 등록 완료 (Copyright Registered)
                </h3>
              </div>

              {/* Core Information Grid inside Scroll */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans mb-4">
                <div className="space-y-1.5 bg-white/80 p-3 rounded-xl border border-amber-200">
                  <div className="text-[11px] font-bold text-slate-500">제호 (명칭):</div>
                  <div className="font-extrabold text-blue-950 leading-tight">
                    {COPYRIGHT_DETAILS.titleEn}
                  </div>
                  <div className="text-xs text-slate-600">({COPYRIGHT_DETAILS.titleKo})</div>
                </div>

                <div className="space-y-1.5 bg-white/80 p-3 rounded-xl border border-amber-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">저작물의 종류:</span>
                    <span className="font-bold text-slate-800">{COPYRIGHT_DETAILS.workCategory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">저작자:</span>
                    <span className="font-bold text-slate-900">{COPYRIGHT_DETAILS.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold">등록번호:</span>
                    <span className="font-mono font-black text-blue-700">{COPYRIGHT_DETAILS.registrationNumber}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp & CTA inside scroll */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex flex-col items-center justify-center text-[7px] font-bold leading-none p-1 shrink-0">
                    <span>한국저작권</span>
                    <span>위원회인</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-slate-900">한국저작권위원회 정식 발급</div>
                    <div className="text-[11px] text-slate-600">등록일자: {COPYRIGHT_DETAILS.registeredDate} (창작: {COPYRIGHT_DETAILS.createdDate})</div>
                  </div>
                </div>

                <button
                  onClick={() => setIsCopyrightModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <span>등록증 원본 전체보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Action Bar: 도입을 위한 안내 바로가기 */}
          <div className="text-center pt-4">
            <a
              href="#adoption-guide"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 border border-blue-400/40 group"
            >
              <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>MIRAGE AI 도입을 위한 안내 페이지 바로가기</span>
              <ChevronRight className="w-5 h-5 text-slate-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Footer Bar matching Main Image Bottom Bar */}
        <div className="mt-6 py-3 px-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400 font-medium">
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

      <CopyrightModal 
        isOpen={isCopyrightModalOpen} 
        onClose={() => setIsCopyrightModalOpen(false)} 
      />
    </section>
  );
};
