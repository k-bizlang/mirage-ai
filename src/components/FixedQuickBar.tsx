import React, { useState } from "react";
import { UserPlus, Sparkles, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "../data/content";
import { MirageLogo } from "./MirageLogo";

interface FixedQuickBarProps {
  onOpenConsultant?: () => void;
}

export const FixedQuickBar: React.FC<FixedQuickBarProps> = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside aria-label="빠른 실행 바" className="fixed bottom-0 sm:bottom-3 left-0 right-0 z-40 px-2 sm:px-4 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        
        {/* Minimized Toggle Header */}
        {isMinimized ? (
          <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 shadow-2xl rounded-t-2xl sm:rounded-2xl px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-xs font-bold">
              <MirageLogo size="xs" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">[고정 바로가기] 미가입자 구글 가입 &amp; 24시간 AI 상담</span>
            </div>
            <button
              onClick={() => setIsMinimized(false)}
              className="flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <span>빠른 실행 열기</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-xl border-2 border-blue-500/80 shadow-2xl shadow-blue-900/20 rounded-t-2xl sm:rounded-2xl px-4 py-3 sm:py-3.5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Guidance Text */}
              <div className="flex items-start sm:items-center gap-3">
                <MirageLogo size="sm" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[11px] font-black bg-blue-600 text-white rounded-md">
                      24시간 무중단
                    </span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                      MIRAGE AI 고객응대 솔루션 빠른 접속
                    </span>
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="ml-auto md:hidden text-slate-400 hover:text-slate-700 p-1"
                      title="접기"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-tight">
                    <span className="text-blue-700 font-bold">미가입자</span>는 구글 계정으로 먼저 가입 후 <span className="font-bold text-slate-800">24시간 AI 상담</span>을 바로 이용하실 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Google Sign-up & 24h AI Chat */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Button 1: 미가입자 구글계정 가입 */}
                <a
                  id="fixed-bar-signup-btn"
                  href={COMPANY_INFO.googleSignUpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-xs transition-all active:scale-95 group"
                  title="AI 24시 고객응대 미가입자는 구글 계정으로 가입 후 이용 가능합니다"
                >
                  <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-slate-800 shrink-0">
                    G
                  </div>
                  <span className="truncate">구글계정 가입 (미가입자)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 shrink-0" />
                </a>

                {/* Button 2: 24시간 AI 상담 실시간 대화 */}
                <a
                  id="fixed-bar-ai-chat-btn"
                  href={COMPANY_INFO.aiChat24hUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-black shadow-lg shadow-blue-600/30 transition-all active:scale-95 group border border-blue-400/40"
                  title="24시간 AI 상담 실시간 1:1 대화방으로 즉시 연결됩니다"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
                  <span className="truncate">24시간 AI 상담 바로가기</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-100 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>

                {/* Minimize on desktop */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="하단 바 최소화"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </aside>
  );
};
