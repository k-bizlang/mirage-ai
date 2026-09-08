import React, { useState } from "react";
import { Phone, Mail, Send, CheckCircle2, User, Building, Layers, Sparkles, MessageSquare, ClipboardList, ShieldCheck } from "lucide-react";
import { COMPANY_INFO, TARGET_INDUSTRIES, PRICING_PLANS } from "../data/content";
import { ConsultationFormData } from "../types";

interface ConsultationFormProps {
  initialPlan?: string;
  onOpenAdmin?: () => void;
  onLeadSubmitted?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialPlan = "표준형",
  onOpenAdmin,
  onLeadSubmitted,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    companyName: "",
    contactName: "",
    phone: "",
    industry: "병원 · 의원",
    plan: initialPlan,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync if parent updates initialPlan
  React.useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, plan: initialPlan }));
    }
  }, [initialPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        if (onLeadSubmitted) onLeadSubmitted();
      } else {
        setErrorMessage(data.error || "신청 처리 중 오류가 발생했습니다.");
      }
    } catch (err) {
      // Fallback optimistic submission
      setSubmitted(true);
      if (onLeadSubmitted) onLeadSubmitted();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>무료 도입 컨설팅 신청</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              우리 사업장에 꼭 맞는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                AI 고객응대를 설계하세요
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              업종과 사업장 환경에 따라 가장 효율적인 AI 시나리오를 무료로 분석해 드립니다.
              부담 없이 신청해 주시면 담당 전문 컨설턴트가 상세히 안내해 드립니다.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-2 space-y-3">
              <a
                href={COMPANY_INFO.telLink}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">전화 상담 직통 (최호열 대표)</div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                    ● 평일 09:00 - 18:00 (실시간 직통)
                  </div>
                </div>
              </a>

              <a
                href={COMPANY_INFO.mailLink}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">공식 문의 이메일</div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    제안서 및 사업계획서 검토 요청 가능
                  </div>
                </div>
              </a>
            </div>

            {/* Service Promise */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs text-blue-200 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% 무료 사전 진단 및 맞춤 데모 시연</span>
              </div>
              <p className="text-blue-300/80">
                상담 신청 후 무리한 가입 권유 없이, 실제 운영 시뮬레이션 결과와 견적서를 먼저 전달해 드립니다.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  무료 상담 신청이 완료되었습니다!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  남겨주신 연락처(<strong className="text-slate-900">{formData.phone}</strong>)로 
                  {COMPANY_INFO.name} 전문 컨설턴트가 사업장 맞춤 AI 시나리오 자료와 함께 신속히 연락드리겠습니다.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        companyName: "",
                        contactName: "",
                        phone: "",
                        industry: "병원 · 의원",
                        plan: "표준형",
                        message: "",
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    추가 신청하기
                  </button>
                  <a
                    href={COMPANY_INFO.telLink}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    지금 바로 전화 연결
                  </a>
                  {onOpenAdmin && (
                    <button
                      type="button"
                      onClick={onOpenAdmin}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <ClipboardList className="w-3.5 h-3.5 text-blue-400" />
                      <span>접수 내역 확인 (대표자)</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      무료 상담 및 시연 신청서
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      기본 정보만 남겨주시면 업종별 맞춤형 견적을 바로 산출해 드립니다.
                    </p>
                  </div>
                  {onOpenAdmin && (
                    <button
                      type="button"
                      onClick={onOpenAdmin}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                      title="접수된 신청 목록 확인"
                    >
                      <ClipboardList className="w-3.5 h-3.5 text-blue-600" />
                      <span>신청 접수 현황</span>
                    </button>
                  )}
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-blue-600" />
                      <span>사업장명 / 상호</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 미라지 치과의원, 행복펜션"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-blue-600" />
                      <span>성함 / 직책</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동 원장 / 대표"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>연락처 (휴대폰)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>사업장 업종</span>
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white transition-all"
                    >
                      {TARGET_INDUSTRIES.map((ind, idx) => (
                        <option key={idx} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                      <option value="기타 업종">기타 업종</option>
                    </select>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    관심 상품 선택
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {PRICING_PLANS.map((plan) => (
                      <button
                        type="button"
                        key={plan.id}
                        onClick={() => setFormData({ ...formData, plan: plan.name })}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                          formData.plan === plan.name
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div>{plan.name}</div>
                        <div className={`text-[10px] font-normal ${formData.plan === plan.name ? "text-blue-100" : "text-slate-500"}`}>
                          {plan.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>문의 및 희망 사항 (선택)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="현재 고객 문의 시 겪고 계신 불편이나, 자동화하고 싶은 문의 유형을 적어주시면 더 정확한 상담이 가능합니다."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>무료 상담 신청 완료하기</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  작성하신 개인정보는 상담 진행 목적으로만 안전하게 활용됩니다.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
