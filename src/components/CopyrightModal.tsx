import React, { useState } from "react";
import { X, ShieldCheck, Award, ExternalLink, Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { COPYRIGHT_DETAILS, COMPANY_INFO } from "../data/content";

interface CopyrightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyrightModal: React.FC<CopyrightModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl border-2 border-slate-700 overflow-hidden my-auto flex flex-col max-h-[95vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 text-white px-5 sm:px-7 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black text-white tracking-tight">
                  대한민국 저작권 등록증 원본
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-sky-400 text-xs font-mono font-bold border border-blue-400/30">
                  제 C-2026-017543 호
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                한국저작권위원회 정식 등록 · 변형 없는 원본 공인 서류
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-xl p-1 border border-slate-700">
              <button
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="축소"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-slate-300 px-1 min-w-[40px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="확대"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border-l border-slate-700 ml-0.5"
                title="원래 크기"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Viewer Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 bg-slate-950/70 flex items-center justify-center min-h-[400px]">
          <div 
            className="transition-transform duration-200 ease-out origin-top flex justify-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-2 sm:p-4 border-4 border-slate-300/80">
              <img
                src="/assets/korea-copyright-certificate.svg"
                alt="한국저작권위원회 공식 저작권 등록증 원본 - 제 C-2026-017543 호"
                className="w-full h-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Modal Bottom Information & Actions */}
        <div className="bg-slate-900 px-5 sm:px-7 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 shrink-0">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              기술 독점 권리 공식 인증 소프트웨어
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline">저작자: 지속가능경영연구원 대표 신기욱</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Direct File Download Button */}
            <a
              href="/assets/korea-copyright-certificate.svg"
              download="저작권등록증_한국저작권위원회_C-2026-017543.svg"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>등록증 다운로드</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href="/assets/korea-copyright-certificate.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>새 창에서 원본 보기</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
            >
              닫기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

