import React, { useState } from "react";
import { ZoomIn, Download, ExternalLink, ShieldCheck } from "lucide-react";

interface OfficialCopyrightDocumentProps {
  className?: string;
  onOpenModal?: () => void;
  showZoomBadge?: boolean;
}

export const OfficialCopyrightDocument: React.FC<OfficialCopyrightDocumentProps> = ({
  className = "",
  onOpenModal,
  showZoomBadge = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* High-Resolution Original Certificate Container */}
      <div
        onClick={onOpenModal}
        className={`relative overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          onOpenModal ? "cursor-pointer hover:shadow-blue-500/25 hover:scale-[1.01]" : ""
        } border-2 border-slate-200`}
      >
        {/* Zoom In Badge */}
        {showZoomBadge && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-bold shadow-lg backdrop-blur-sm transition-all duration-200">
            <ZoomIn className="w-3.5 h-3.5 text-sky-400" />
            <span>등록증 원본 확대 보기</span>
          </div>
        )}

        {/* Certificate Origin Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/85 text-blue-100 text-[11px] font-bold shadow-md backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>한국저작권위원회 원본</span>
        </div>

        {/* Image element with SVG original certificate */}
        <div className="relative w-full aspect-[1/1.414] bg-slate-50 flex items-center justify-center p-2 sm:p-3">
          <img
            src="/assets/korea-copyright-certificate.svg"
            alt="한국저작권위원회 저작권 등록증 원본 (제 C-2026-017543 호 - 글로벌 비즈니스 통합 AI 세일즈 자동화 엔진)"
            className="w-full h-full object-contain rounded-lg shadow-sm"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Bottom hover bar */}
        {onOpenModal && (
          <div className="bg-slate-900/95 text-slate-300 py-2.5 px-4 text-center text-xs font-medium border-t border-slate-800 flex items-center justify-between group-hover:bg-blue-950 transition-colors">
            <span className="text-slate-400">등록번호: <strong className="text-white font-mono">제 C-2026-017543 호</strong></span>
            <span className="text-sky-400 font-bold flex items-center gap-1">
              클릭하여 원본 전체보기
              <ZoomIn className="w-3.5 h-3.5" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
