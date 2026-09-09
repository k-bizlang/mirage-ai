import React, { useState } from "react";
import { 
  MessageCircle, 
  Bot, 
  User, 
  Stethoscope, 
  Home, 
  Utensils, 
  GraduationCap, 
  Building2, 
  Briefcase,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  ExternalLink
} from "lucide-react";
import { CASE_STUDIES, DEEP_SCENARIOS, COMPANY_INFO } from "../data/content";

interface CasesSectionProps {
  onOpenConsultant?: () => void;
  onScrollToContact: () => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ onScrollToContact }) => {
  const [selectedScenarioTab, setSelectedScenarioTab] = useState<string>("medical");

  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Home,
    Utensils,
    GraduationCap,
    Building2,
    Briefcase,
  };

  const activeScenario = DEEP_SCENARIOS.find((s) => s.id === selectedScenarioTab) || DEEP_SCENARIOS[0];

  return (
    <section id="cases" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <span>3. 적용사례 (Case Studies)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            다양한 업종에서 이미 시작하고 있습니다
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            실제 현장에서 고객이 묻는 질문에 정확하게 답변하고 상담 및 매출로 연결합니다.
          </p>
        </div>

        {/* 6 Grid Industry Cards matching image.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CASE_STUDIES.map((study) => {
            const IconComp = iconMap[study.iconName] || Briefcase;

            return (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">
                          {study.category}
                        </h3>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {study.title}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {study.tag}
                    </span>
                  </div>

                  {/* Dialogue Bubble Box */}
                  <div className="space-y-3 bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs">
                    {/* User Question */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-500 flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" /> 고객 문의
                      </span>
                      <p className="text-slate-800 font-semibold bg-white p-2.5 rounded-lg border border-slate-200/70 shadow-2xs leading-relaxed">
                        {study.userQuestion}
                      </p>
                    </div>

                    {/* AI Answer */}
                    <div className="space-y-1 pt-1">
                      <span className="font-bold text-blue-600 flex items-center gap-1">
                        <Bot className="w-3 h-3 text-blue-500" /> AI 즉시 응답
                      </span>
                      <p className="text-blue-900 font-medium bg-blue-50/80 p-2.5 rounded-lg border border-blue-200/60 leading-relaxed">
                        {study.aiAnswer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">24시간 자동 응대</span>
                  <a
                    href={COMPANY_INFO.aiChat24hUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                    title="24시간 AI 상담 실시간 대화방에서 테스트하기"
                  >
                    <span>24시간 AI 상담에서 질문하기</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Industry Scenarios (24시간 AI 상담) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MIRAGE AI 전문 지식베이스(RAG) 특화 솔루션</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                산업군별 심층 전문 AI 페르소나 설계
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg">
              고객사 내부 매뉴얼·사내 규정 100% 반영
            </span>
          </div>

          {/* Scenario Tab Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {DEEP_SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenarioTab(scenario.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedScenarioTab === scenario.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {scenario.title}
              </button>
            ))}
          </div>

          {/* Active Scenario Details */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
              <div>
                <span className="text-xs font-bold text-slate-500 block">전환 페르소나:</span>
                <span className="text-sm sm:text-base font-extrabold text-blue-700">
                  {activeScenario.persona}
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {activeScenario.keywords.map((kw, idx) => (
                  <span key={idx} className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded-md font-mono text-slate-700">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Q&A Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" /> 고객 질문 예시
                </span>
                <p className="text-slate-900 font-semibold leading-relaxed">
                  "{activeScenario.sampleQ}"
                </p>
              </div>

              <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200/80 space-y-1.5">
                <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5 text-blue-600" /> MIRAGE AI 표준 응대 로직
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  {activeScenario.sampleA}
                </p>
              </div>
            </div>

            {/* Rule Summary */}
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
              <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>핵심 설계 규칙:</strong> {activeScenario.ruleSummary}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
