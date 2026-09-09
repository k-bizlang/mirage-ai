import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User, Sparkles, ExternalLink, RefreshCw, Phone, ShieldCheck, ChevronRight, UserPlus } from "lucide-react";
import { COMPANY_INFO, OFFICIAL_RESOURCES } from "../data/content";
import { ChatMessage } from "../types";

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with initial State A from PDF instructions, Google signup, and 24시간 AI 상담 link
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome-1",
          sender: "ai",
          text: `[MIRAGE AI] 고객응대 시스템은 24시간 실시간 고객 문의를 자동화하여 매출과 상담 전환율을 극대화합니다.
업종별 맞춤형 시나리오와 자주 묻는 질문(FAQ)을 완벽히 연동하여 야간 및 주말 상담 이탈률을 0%에 가깝게 낮출 수 있습니다.

💡 안내: AI 24시 고객응대 미가입자는 구글 계정으로 먼저 가입 후 솔루션을 이용하실 수 있습니다. 가입 완료 후 24시간 AI 상담 실시간 1:1 대화방으로 바로 연결됩니다.`,
          timestamp: "방금 전",
          links: [
            {
              title: "👤 [1단계] 미가입자 구글 계정 가입하기",
              url: COMPANY_INFO.googleSignUpUrl,
            },
            {
              title: "🚀 [2단계] 24시간 AI 상담 실시간 1:1 대화방 바로 연결",
              url: COMPANY_INFO.aiChat24hUrl,
            },
          ],
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  if (!isOpen) return null;

  const quickPills = [
    "⚡ 24시간 AI 상담 연결",
    "도입 비용",
    "병원 데모",
    "숙박업 데모",
    "학원 데모",
    "법률 데모",
    "자료 다운로드",
    "카카오톡 연동",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);

    try {
      const lower = query.toLowerCase();

      // If user directly clicked or asked for 24시간 AI 상담 connection
      if (
        lower.includes("24시간") ||
        lower.includes("ai상담") ||
        lower.includes("ai 상담") ||
        lower.includes("실시간 상담") ||
        lower.includes("상담 연결")
      ) {
        const directAiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: `[MIRAGE AI] 24시간 AI 상담 실시간 1:1 대화방으로 바로 연결해 드립니다.
AI 24시 고객응대 솔루션 미가입자는 구글 계정으로 먼저 가입 후 이용 가능하며, 가입 완료 후 24시간 AI 상담에서 자유롭게 실시간 대화를 나누실 수 있습니다.`,
          timestamp: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          links: [
            {
              title: "👤 [1단계] 미가입자 구글 계정 가입하기",
              url: COMPANY_INFO.googleSignUpUrl,
            },
            {
              title: "👉 [2단계] 24시간 AI 상담 실시간 1:1 대화 바로 시작",
              url: COMPANY_INFO.aiChat24hUrl,
            },
          ],
        };
        setMessages((prev) => [...prev, directAiMsg]);
        setLoading(false);
        return;
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          turnCount: turnCount,
          history: messages.slice(-4),
        }),
      });

      const data = await res.json();
      let reply = data.reply || "";

      // Attach relevant official link if matched keywords from PDF
      let matchedLinks: { title: string; url: string }[] | undefined = undefined;

      if (lower.includes("자료") || lower.includes("다운로드") || lower.includes("제안서") || lower.includes("소개서")) {
        matchedLinks = [
          {
            title: "MIRAGE AI 공식 자료실 다운로드",
            url: "https://docs.google.com/document/d/1aPPDFYSuyKBNEOeG83TZBaRy7xmkwFhp9HUL29GhZeo/edit?usp=sharing",
          },
          {
            title: "24시간 자동 요약 제안서 메일 발송 신청",
            url: "https://docs.google.com/document/d/1Kj2D6UVTzeGRqrrnwB_YbFZCxGgnoqs-J_ypc0XZ1Sw/edit?usp=sharing",
          },
        ];
      } else if (lower.includes("영상") || lower.includes("유튜브") || lower.includes("시연")) {
        matchedLinks = [
          {
            title: "AI 자동화 엔진 시연 영상 (YouTube)",
            url: "https://www.youtube.com/watch?v=vp6ogRVMyo8",
          },
        ];
      } else if (lower.includes("시나리오") || lower.includes("데모")) {
        matchedLinks = [
          {
            title: "산업군별 세부 데모 시나리오 구성",
            url: "https://docs.google.com/document/d/14d9Tx30szUcMHzbSB124MA6679XoEAxcgBhMuQQNzJ8/edit?usp=sharing",
          },
        ];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: reply,
        timestamp: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        links: matchedLinks,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setTurnCount((prev) => prev + 1);
    } catch (err) {
      const fallbackAiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: `문의해 주신 내용에 대해 [MIRAGE AI]의 비즈니스 컨설턴트가 최적의 맞춤 솔루션을 설계해 드립니다.
상세한 견적 및 사내 데이터 연동은 대표자 최호열, 신기욱(010-8267-3733) 또는 mymirage1@naver.com으로 연락 주시면 즉시 안내해 드리겠습니다.`,
        timestamp: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackAiMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setTurnCount(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[650px] max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-4 sm:p-5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shadow-inner">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight">
                  MIRAGE AI 전문 비즈니스 컨설턴트
                </span>
                <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-blue-100 font-medium">
                표준 지침서 기반 24시 고객응대 실시간 시뮬레이션
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
              title="대화 초기화"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top 24시간 AI 상담 Callout Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border-b border-blue-200/90 px-3 sm:px-4 py-2 flex items-center justify-between gap-2 text-xs flex-wrap">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="font-extrabold text-slate-800 text-[11px] sm:text-xs truncate">
              미가입자는 구글 가입 후 24시간 AI 상담 이용 가능
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={COMPANY_INFO.googleSignUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 font-bold text-[11px] border border-slate-300 transition-all active:scale-95"
              title="미가입자 구글 계정 가입"
            >
              <UserPlus className="w-3 h-3 text-blue-600" />
              <span>구글가입</span>
            </a>
            <a
              href={COMPANY_INFO.aiChat24hUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-black text-[11px] shadow-xs transition-all active:scale-95"
              title="24시간 AI 상담 실시간 1:1 대화를 시작합니다"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>24시간 AI 상담</span>
              <ExternalLink className="w-3 h-3 text-blue-200" />
            </a>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50/70">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-white text-slate-800 border border-slate-200/90 rounded-tl-none space-y-2"
                }`}
              >
                <div className="whitespace-pre-line font-normal">{msg.text}</div>

                {/* Optional Links attached to message */}
                {msg.links && msg.links.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 mt-2">
                    <span className="text-[11px] font-bold text-blue-600 block">
                      관련 공식 자료 바로가기:
                    </span>
                    {msg.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-blue-50 hover:bg-blue-100/70 border border-blue-200/70 text-blue-800 text-xs font-semibold transition-colors"
                      >
                        <span className="truncate pr-2">{link.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                      </a>
                    ))}
                  </div>
                )}

                <div
                  className={`text-[10px] mt-1 text-right ${
                    msg.sender === "user" ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 shadow-xs text-xs text-slate-500 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.4s" }} />
                <span className="ml-1 font-medium">MIRAGE AI 비즈니스 지식베이스 조회 중...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2.5 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto">
          {quickPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(pill)}
              disabled={loading}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 whitespace-nowrap transition-colors border border-slate-200/70"
            >
              #{pill}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="궁금하신 주제를 입력하세요 (예: 도입 비용, 병원 데모, 카톡 연동)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            disabled={loading}
            className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !inputText.trim()}
            className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md shadow-blue-600/20 shrink-0 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
