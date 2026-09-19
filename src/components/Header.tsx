import React from 'react';
import { UniversityLogo } from './UniversityLogo';
import { Printer, Volume2, VolumeX, Sparkles, Palette } from 'lucide-react';
import { ThemeMode } from '../types';
import { soundFX } from '../utils/audio';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  audioMuted: boolean;
  onToggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  audioMuted,
  onToggleAudio,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const isDarkTeal = theme === 'editorial-teal';

  return (
    <header
      id="cv-header"
      className={`relative transition-colors duration-500 shadow-md ${
        isDarkTeal
          ? 'bg-[#0f282f] text-[#f4efe6] border-b border-[#c2a265]/30'
          : 'bg-gradient-to-r from-[#e987ab] via-[#d1608c] to-[#b44873] text-white shadow-[#d1608c]/20'
      }`}
    >
      {/* Subtle scientific grid / particle pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="headerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerGrid)" />
        </svg>
      </div>

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 py-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Main Title Block */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                isDarkTeal
                  ? 'bg-[#c2a265]/20 text-[#c2a265] border border-[#c2a265]/30'
                  : 'bg-white/20 text-white border border-white/30 backdrop-blur-sm'
              }`}>
                <Sparkles className="w-3 h-3" />
                HỒ SƠ NĂNG LỰC CÁ NHÂN & PHÒNG THÍ NGHIỆM
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              NGUYỄN NGỌC QUỲNH TRÂM
            </h1>
            <p className={`text-sm sm:text-base mt-1 ${isDarkTeal ? 'text-[#c2a265]' : 'text-pink-100'}`}>
              Sinh Viên Ngành Sư Phạm Khoa Học Tự Nhiên
            </p>
          </div>

          {/* School Badge & Controls Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* School identity pill */}
            <div className={`flex items-center gap-3 px-3.5 py-2 rounded-xl backdrop-blur-md transition-all ${
              isDarkTeal
                ? 'bg-[#183942]/80 border border-[#c2a265]/40 text-[#f4efe6]'
                : 'bg-white/20 border border-white/30 text-white shadow-sm'
            }`}>
              <UniversityLogo size={52} />
              <div className="leading-tight">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                  Trường ĐH Sư Phạm TP.HCM
                </h3>
                <p className={`text-xs ${isDarkTeal ? 'text-gray-300' : 'text-white/90'}`}>
                  Khoa Hóa Học
                </p>
                <span className={`text-[10px] font-medium inline-block mt-0.5 ${
                  isDarkTeal ? 'text-[#c2a265]' : 'text-pink-200'
                }`}>
                  HCMUE • Khóa 2024 - 2028
                </span>
              </div>
            </div>

            {/* Utility Buttons (Audio toggle, Theme toggle, Print) */}
            <div className="flex items-center gap-1.5 print:hidden">
              <button
                type="button"
                onClick={onToggleAudio}
                title={audioMuted ? 'Bật âm thanh thí nghiệm' : 'Tắt âm thanh'}
                className={`p-2 rounded-lg transition-colors border ${
                  isDarkTeal
                    ? 'bg-[#183942] border-[#c2a265]/30 text-[#c2a265] hover:bg-[#204954]'
                    : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                }`}
              >
                {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onToggleTheme}
                title="Chuyển đổi giao diện: Sư phạm Hồng phấn / Editorial Dark Teal"
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-2 rounded-lg transition-colors border ${
                  isDarkTeal
                    ? 'bg-[#c2a265] text-[#0f282f] border-[#c2a265] hover:bg-[#d4b576]'
                    : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {isDarkTeal ? 'Giao diện Hồng' : 'Editorial Teal'}
                </span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                title="In hoặc Xuất CV ra file PDF"
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all shadow-sm ${
                  isDarkTeal
                    ? 'bg-[#c2a265] text-[#0f282f] hover:bg-[#e0c487]'
                    : 'bg-white text-[#b44873] hover:bg-pink-50'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>In / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
