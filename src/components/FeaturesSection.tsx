import React, { useState } from "react";
import { 
  CheckCircle2, 
  Smartphone, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Stethoscope, 
  Home, 
  Utensils, 
  GraduationCap, 
  Building2, 
  Car, 
  Scale, 
  ShoppingBag, 
  Briefcase, 
  UserCheck, 
  ArrowRight,
  Headphones
} from "lucide-react";
import { MAIN_FEATURES, TARGET_INDUSTRIES, COMPANY_INFO } from "../data/content";

interface FeaturesSectionProps {
  onOpenConsultant: () => void;
  onScrollToContact: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenConsultant, onScrollToContact }) => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);

  const phoneDemos = [
    {
      industry: "숙박업·펜션",
      q: "주말 체크인 시간과 바베큐 이용 가능한가요?",
      a: "입실은 오후 3시부터이며, 바베큐 그릴 세트는 오후 5시~8시 사이에 이용 가능합니다. 예약 일정 조율을 도와드릴까요?",
    },
    {
      industry: "병원·의원",
      q: "토요일 비보험 시술 상담 및 예약 되나요?",
      a: "토요일 오전 9시~오후 1시까지 진료 및 1:1 상담이 가능합니다. 원하시는 진료 과목과 성함을 남겨주시면 우선 배정해 드립니다.",
    },
    {
      industry: "음식점·카페",
      q: "내일 저녁 6명 룸 예약 가능한가요?",
      a: "네, 단체 룸 예약이 가능합니다. 방문 예정일과 인원을 확인하여 확정 문자를 전송해 드릴까요?",
    },
    {
      industry: "학원·교육",
      q: "중등부 영어 수강료와 레벨테스트 일정은 어떻게 되나요?",
      a: "주 3회 정규과정 수강료 안내와 무료 레벨테스트 일정을 즉시 확인해 드립니다. 학생 학년을 선택해 주세요.",
    },
  ];

  const industryIcons: Record<string, React.ElementType> = {
    "병원 · 의원": Stethoscope,
    "펜션 · 숙박업": Home,
    "음식점 · 카페": Utensils,
    "학원 · 교육기관": GraduationCap,
    부동산: Building2,
    "자동차 관련 업체": Car,
    "법무 · 세무 · 컨설팅": Scale,
    "온라인 쇼핑몰": ShoppingBag,
    중소기업: Briefcase,
    "1인 사업장 및 자영업자": UserCheck,
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
            <span>2. AI 24시 고객응대 프로그램</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            고객이 질문하면 AI가 바로 답변합니다
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            홈페이지 또는 온라인 상담 채널을 통해 들어오는 고객 문의에 AI가 자동으로 응답합니다.
          </p>
        </div>

        {/* Feature Highlights & Phone Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-18">
          
          {/* Left Column: 8 Core Features Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Core Capabilities</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                업무는 가볍게, 상담은 완벽하게
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                단순 반복 문의부터 정밀 예약 안내까지, 사업장 맞춤형 AI가 실시간으로 고객을 응대하여 
                놓칠 뻔한 상담 이탈과 매출 기회를 완벽하게 지켜드립니다.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {MAIN_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/50">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to action inside features */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultant}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI 상담 기능 직접 테스트</span>
              </button>
              <button
                onClick={onScrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-200 transition-all"
              >
                <span>도입 상담 신청</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Glowing backdrop circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-sky-400/15 rounded-3xl blur-2xl pointer-events-none" />

              {/* Smartphone Frame */}
              <div className="relative rounded-[2.5rem] bg-slate-900 p-3.5 shadow-2xl ring-1 ring-slate-800">
                {/* Phone Notch/Speaker */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[2rem] bg-white overflow-hidden flex flex-col h-[520px] text-slate-900 border border-slate-200">
                  
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-4 pt-7 pb-3 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">MIRAGE AI 24시 상담원</div>
                        <div className="text-[10px] text-blue-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          실시간 응답 준비 완료
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md font-semibold">
                      {phoneDemos[activeDemoIndex].industry}
                    </span>
                  </div>

                  {/* Industry Tabs inside Phone */}
                  <div className="bg-slate-100 p-1.5 flex gap-1 overflow-x-auto border-b border-slate-200">
                    {phoneDemos.map((demo, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveDemoIndex(idx)}
                        className={`text-[11px] font-bold px-2 py-1 rounded-md whitespace-nowrap transition-all ${
                          activeDemoIndex === idx
                            ? "bg-white text-blue-700 shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {demo.industry}
                      </button>
                    ))}
                  </div>

                  {/* Chat Messages Area */}
                  <div className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-slate-50/50">
                    {/* Timestamp */}
                    <div className="text-center text-[10px] text-slate-400 font-medium my-1">
                      오늘 23:45 (영업시간 외 야간 문의)
                    </div>

                    {/* Customer Question Bubble */}
                    <div className="flex items-end justify-end gap-1.5">
                      <div className="max-w-[85%] bg-blue-600 text-white text-xs p-3 rounded-2xl rounded-tr-none shadow-xs leading-relaxed">
                        {phoneDemos[activeDemoIndex].q}
                      </div>
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0 mb-0.5">
                        <User className="w-3 h-3" />
                      </div>
                    </div>

                    {/* AI Response Bubble */}
                    <div className="flex items-start gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div className="max-w-[85%] bg-white text-slate-800 text-xs p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-xs leading-relaxed">
                        <p>{phoneDemos[activeDemoIndex].a}</p>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-blue-600 font-medium">
                          <span>✓ 자동 응대 완료</span>
                          <span className="text-slate-400">0.2초 소요</span>
                        </div>
                      </div>
                    </div>

                    {/* Follow-up CTA inside phone */}
                    <div className="bg-blue-50/80 rounded-xl p-2.5 border border-blue-200/80 text-[11px] text-blue-800 text-center font-medium">
                      고객 이탈 없이 예약 및 방문 접수로 즉시 연결됩니다.
                    </div>
                  </div>

                  {/* Simulated Input Field at bottom of Phone */}
                  <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      placeholder="질문 내용을 입력하세요..."
                      className="flex-1 bg-slate-100 text-xs px-3 py-2 rounded-full border border-slate-200 text-slate-500 cursor-default focus:outline-hidden"
                    />
                    <button
                      onClick={onOpenConsultant}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs hover:bg-blue-700 transition-colors"
                      title="전체 AI 상담창 열기"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Recommended Industries Section ("이런 사업장에 추천합니다") */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              이런 사업장에 추천합니다
            </h3>
            <p className="text-sm text-slate-600">
              다양한 업종별 특성에 최적화된 맞춤 상담 로직을 즉시 적용할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {TARGET_INDUSTRIES.map((ind, idx) => {
              const IconComp = industryIcons[ind.name] || Briefcase;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 font-medium bg-slate-50 px-2 py-0.5 rounded-full">
                    {ind.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-conversion Reassurance Callout Box */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
                <Headphones className="w-3.5 h-3.5 text-blue-300" />
                <span>골든타임을 지키는 AI 고객응대</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                고객이 궁금해하는 순간을 놓치지 않습니다
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                직원이 퇴근한 저녁이나 주말에도 고객 문의는 계속됩니다.
                <br className="hidden sm:inline" />
                <strong className="text-white font-bold">MIRAGE AI 고객응대 프로그램</strong>은 
                고객이 필요한 정보를 즉시 제공하여 상담 이탈을 줄이고 실제 방문·예약·상담으로 연결될 가능성을 대폭 높여줍니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onScrollToContact}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-sm sm:text-base shadow-lg transition-all text-center active:scale-95"
              >
                우리 사업장 맞춤 무료 상담 받기
              </button>
              <button
                onClick={onOpenConsultant}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-sm border border-blue-400/40 transition-all text-center"
              >
                AI 상담원과 지금 대화해보기
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
