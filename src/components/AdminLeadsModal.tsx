import React, { useState, useEffect } from "react";
import { 
  X, 
  RefreshCw, 
  Download, 
  Search, 
  Phone, 
  Mail, 
  MessageSquare, 
  Building, 
  User, 
  Clock, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  Edit3, 
  Save, 
  Layers, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ConsultationLead, LeadStatus } from "../types";

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadsUpdated?: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose, onLeadsUpdated }) => {
  const [leads, setLeads] = useState<ConsultationLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [editingMemoId, setEditingMemoId] = useState<string | null>(null);
  const [memoDraft, setMemoDraft] = useState("");
  const [selectedLead, setSelectedLead] = useState<ConsultationLead | null>(null);
  const [actionSuccessMsg, setActionSuccessMsg] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
        if (onLeadsUpdated) onLeadsUpdated();
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        if (selectedLead?.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
        showToast("상담 상태가 업데이트되었습니다.");
        if (onLeadsUpdated) onLeadsUpdated();
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleSaveMemo = async (leadId: string) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminMemo: memoDraft }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, adminMemo: memoDraft } : l))
        );
        if (selectedLead?.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, adminMemo: memoDraft } : null));
        }
        setEditingMemoId(null);
        showToast("상담 메모가 저장되었습니다.");
      }
    } catch (err) {
      console.error("Error updating memo:", err);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!window.confirm("정말 이 신청 내역을 삭제하시겠습니까?")) return;
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
        if (selectedLead?.id === leadId) {
          setSelectedLead(null);
        }
        showToast("신청 내역이 삭제되었습니다.");
        if (onLeadsUpdated) onLeadsUpdated();
      }
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  const showToast = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => {
      setActionSuccessMsg("");
    }, 2500);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert("다운로드할 신청 내역이 없습니다.");
      return;
    }

    const headers = ["접수번호", "접수일시", "상태", "사업장명", "성함/직책", "연락처", "업종", "희망상품", "고객문의내용", "관리자메모"];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleString("ko-KR"),
      getStatusLabel(l.status),
      `"${(l.companyName || "").replace(/"/g, '""')}"`,
      `"${(l.contactName || "").replace(/"/g, '""')}"`,
      l.phone,
      `"${(l.industry || "").replace(/"/g, '""')}"`,
      `"${(l.plan || "").replace(/"/g, '""')}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      `"${(l.adminMemo || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `MIRAGE_AI_상담신청목록_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusLabel = (status: LeadStatus) => {
    switch (status) {
      case "new":
        return "신규 접수 (대기)";
      case "contacting":
        return "상담 진행중";
      case "completed":
        return "상담 완료";
      case "hold":
        return "보류/차후";
      default:
        return "신규 접수";
    }
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case "new":
        return "bg-rose-100 text-rose-700 border-rose-200";
      case "contacting":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "hold":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      (lead.message && lead.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesIndustry = industryFilter === "all" || lead.industry === industryFilter;

    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const countNew = leads.filter((l) => l.status === "new").length;
  const countContacting = leads.filter((l) => l.status === "contacting").length;
  const countCompleted = leads.filter((l) => l.status === "completed").length;

  const industries = Array.from(new Set(leads.map((l) => l.industry).filter(Boolean)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[90vh] max-h-[850px]">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  고객 상담 및 시연 신청 접수 현황
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  대표자 관리자 모드
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                홈페이지 '무료 상담 및 시연 신청서'를 통해 고객이 작성한 실시간 접수 내역입니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
              title="엑셀(CSV) 다운로드"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">엑셀 다운로드</span>
            </button>

            <button
              onClick={fetchLeads}
              disabled={loading}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="새로고침"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-blue-400" : ""}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick KPI Stats Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center gap-3 overflow-x-auto text-xs font-semibold">
          <span className="text-slate-500 shrink-0">접수 요약:</span>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
              전체 <strong className="text-slate-900">{leads.length}</strong>건
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              신규 미확인 <strong className="text-rose-800">{countNew}</strong>건
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
              상담 진행 <strong className="text-amber-900">{countContacting}</strong>건
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              완료 <strong className="text-emerald-900">{countCompleted}</strong>건
            </span>
          </div>
        </div>

        {/* Toast Notification Banner */}
        {actionSuccessMsg && (
          <div className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 text-center transition-all animate-fade-in flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { key: "all", label: "전체", count: leads.length },
              { key: "new", label: "신규 접수", count: countNew },
              { key: "contacting", label: "진행중", count: countContacting },
              { key: "completed", label: "완료", count: countCompleted },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  statusFilter === tab.key
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  statusFilter === tab.key ? "bg-white/20 text-white" : "bg-white text-slate-700"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input & Industry Select */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {industries.length > 0 && (
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="text-xs px-2.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
              >
                <option value="all">모든 업종</option>
                {industries.map((ind, i) => (
                  <option key={i} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            )}

            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="상호, 성함, 번호 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          {filteredLeads.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-700">신청 내역이 없습니다.</p>
                <p className="text-xs text-slate-400">
                  {searchQuery || statusFilter !== "all"
                    ? "검색 조건에 일치하는 접수 건이 없습니다."
                    : "아직 접수된 무료 상담 및 시연 신청이 없습니다."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                const isEditingMemo = editingMemoId === lead.id;

                return (
                  <div
                    key={lead.id}
                    className={`bg-white rounded-2xl border transition-all p-4 sm:p-5 shadow-xs ${
                      lead.status === "new"
                        ? "border-blue-300 ring-2 ring-blue-50/70"
                        : "border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    {/* Top Row: Meta Info & Status Dropdown */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(lead.status)}`}>
                          {getStatusLabel(lead.status)}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(lead.createdAt).toLocaleString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Status Change Selector */}
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className="text-xs font-bold px-2 py-1 rounded-lg border border-slate-300 bg-white text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="new">신규 접수 (대기)</option>
                          <option value="contacting">상담 진행중</option>
                          <option value="completed">상담 완료</option>
                          <option value="hold">보류/차후</option>
                        </select>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="신청 내역 삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Customer Main Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                      
                      {/* Left: Contact Details (8 cols) */}
                      <div className="md:col-span-8 space-y-2.5">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                            <Building className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{lead.companyName || "사업장명 미입력"}</span>
                          </h3>
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            {lead.contactName} 고객님
                          </span>
                          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                            {lead.industry}
                          </span>
                          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                            관심: {lead.plan}
                          </span>
                        </div>

                        {/* Direct Contact Buttons */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <a
                            href={`tel:${lead.phone.replace(/[^0-9]/g, "")}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors active:scale-95"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>직통 통화: {lead.phone}</span>
                          </a>

                          <a
                            href={`sms:${lead.phone.replace(/[^0-9]/g, "")}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                            <span>문자 보내기</span>
                          </a>
                        </div>

                        {/* Customer Message / Note */}
                        {lead.message ? (
                          <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1">
                            <span className="font-bold text-slate-500 block">
                              💬 고객 문의 및 희망 사항:
                            </span>
                            <p className="text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                              "{lead.message}"
                            </p>
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400 italic">
                            * 별도 작성된 상세 문의사항 없음
                          </div>
                        )}
                      </div>

                      {/* Right: Representative Admin Memo (4 cols) */}
                      <div className="md:col-span-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                            <Edit3 className="w-3 h-3 text-blue-600" />
                            <span>대표자 상담 기록 메모</span>
                          </span>

                          {!isEditingMemo && (
                            <button
                              onClick={() => {
                                setEditingMemoId(lead.id);
                                setMemoDraft(lead.adminMemo || "");
                              }}
                              className="text-[11px] font-semibold text-blue-600 hover:underline"
                            >
                              {lead.adminMemo ? "수정" : "+ 메모 작성"}
                            </button>
                          )}
                        </div>

                        {isEditingMemo ? (
                          <div className="space-y-2">
                            <textarea
                              rows={3}
                              placeholder="예: 9/8 15시 1차 전화 통화 완료. 맞춤 시나리오 제안서 송부."
                              value={memoDraft}
                              onChange={(e) => setMemoDraft(e.target.value)}
                              className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-600 resize-none"
                            />
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setEditingMemoId(null)}
                                className="px-2 py-1 rounded-md text-xs text-slate-500 hover:bg-slate-200"
                              >
                                취소
                              </button>
                              <button
                                onClick={() => handleSaveMemo(lead.id)}
                                className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 flex items-center gap-1"
                              >
                                <Save className="w-3 h-3" />
                                <span>저장</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-slate-600 min-h-[48px] whitespace-pre-line leading-relaxed">
                            {lead.adminMemo || (
                              <span className="text-slate-400 italic">
                                아직 등록된 상담 메모가 없습니다.
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Bottom Guide */}
        <div className="bg-white border-t border-slate-200 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>고객이 폼을 제출하면 실시간으로 본 관리창에 즉시 등록 및 영구 보관됩니다.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
