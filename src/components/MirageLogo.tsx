import React, { useState } from "react";

interface MirageLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export const MirageLogo: React.FC<MirageLogoProps> = ({
  className = "",
  size = "md",
  showText = false,
}) => {
  // Image candidates: try PNG first (uploaded image), fallback to SVG
  const [imgSrc, setImgSrc] = useState<string>("/mirage-ai-logo.png");
  const [useFallbackSvg, setUseFallbackSvg] = useState<boolean>(false);

  const sizeClasses = {
    xs: "w-7 h-7",
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24 sm:w-28 sm:h-28",
  };

  const handleImageError = () => {
    if (imgSrc === "/mirage-ai-logo.png") {
      // Try Korean filename alternative
      setImgSrc("/mirage ai 로그.png");
    } else if (imgSrc === "/mirage ai 로그.png") {
      // Try SVG version
      setImgSrc("/mirage-ai-logo.svg");
    } else {
      setUseFallbackSvg(true);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center filter drop-shadow-md transition-transform hover:scale-105`}
      >
        {!useFallbackSvg ? (
          <img
            src={imgSrc}
            alt="MIRAGE AI 공식 로고"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-contain rounded-md"
          />
        ) : (
          <img
            src="/mirage-ai-logo.svg"
            alt="MIRAGE AI 공식 로고"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 bg-clip-text text-transparent">
              MIRAGE AI
            </span>
          </span>
          <span className="text-[10px] text-slate-500 font-medium tracking-wide">
            에이아이파트너스 · 24시 고객응대
          </span>
        </div>
      )}
    </div>
  );
};
