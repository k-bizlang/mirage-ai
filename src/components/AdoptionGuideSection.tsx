import React from "react";
import { 
  KeyRound, 
  FileSpreadsheet, 
  MessagesSquare, 
  ShieldCheck, 
  SlidersHorizontal, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  FolderDown, 
  ExternalLink,
  Sparkles,
  ClipboardCheck,
  Building
} from "lucide-react";
import { ADOPTION_GUIDE_DATA, COMPANY_INFO } from "../data/content";

interface AdoptionGuideSectionProps {
  onScrollToContact: () => void;
}

export const AdoptionGuideSection: React.FC<AdoptionGuideSectionProps> = ({ onScrollToContact }) => {
  const { title, subtitle, checklistTitle, checklistDescription, checklistItems, notice } = ADOPTION_GUIDE_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "KeyRound":
        return <KeyRound className="w-5 h-5 text-blue-400" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-indigo-400" />;
      case "MessagesSquare":
        return <MessagesSquare className="w-5 h-5 text-sky-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className="w-5 h-5 text-amber-400" />;
      case "Video":
        return <Video className="w-5 h-5 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="adoption-guide" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Title Section - Matching 상세페이지_8.jpg */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-black shadow-inner">
            <ClipboardCheck className="w-4 h-4 text-amber-400" />
            <span>신속하고 정확한 AI 맞춤 세팅 안내</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Outer Frame matching 상세페이지_8 Frame with Orange Header */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Subheader Banner */}
          <div className="p-6 sm:p-8 bg-slate-950/90 border-b border-slate-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-amber-400 rounded-full inline-block"></span>
                  {checklistTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {checklistDescription}
                </p>
              </div>

              {/* Resource Download link */}
              <a
                href={COMPANY_INFO.driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-xs font-bold border border-slate-700 transition-all shrink-0 self-start sm:self-auto shadow"
              >
                <FolderDown className="w-4 h-4 text-sky-400" />
                <span>공식 자료실 &amp; 서식 다운로드</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Desktop/Tablet Table View (Matches 상세페이지_8 Table Exactly) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white font-black text-sm tracking-wide border-b border-amber-500">
                  <th className="py-4 px-6 w-36 text-center">분류</th>
                  <th className="py-4 px-6 w-60">필수 준비 항목</th>
                  <th className="py-4 px-6">상세 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {checklistItems.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-850/50 transition-colors bg-slate-900/40"
                  >
                    {/* 분류 */}
                    <td className="py-4 px-6 text-center font-bold text-slate-200">
                      <span className={`inline-block px-3 py-1 rounded-lg border text-xs font-bold ${item.badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'}`}>
                        {item.category}
                      </span>
                    </td>

                    {/* 필수 준비 항목 */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3 font-extrabold text-white">
                        <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 shrink-0">
                          {getIcon(item.iconName)}
                        </div>
                        <span className="text-base text-slate-100">{item.requiredItem}</span>
                      </div>
                    </td>

                    {/* 상세 내용 */}
                    <td className="py-4 px-6 text-slate-300 font-medium leading-relaxed">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List View */}
          <div className="md:hidden divide-y divide-slate-800 p-4 space-y-4">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-md border text-xs font-black ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>
                <div className="flex items-start gap-3 pt-1">
                  <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 shrink-0 mt-0.5">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">
                      {item.requiredItem}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Notice & Call-to-action */}
          <div className="p-6 sm:p-8 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {notice}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onScrollToContact}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>준비 자료 상담 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
