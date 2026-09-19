import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDarkTeal = theme === 'editorial-teal';

  return (
    <footer
      id="cv-footer"
      className={`py-6 px-4 text-center text-xs transition-colors duration-300 border-t ${
        isDarkTeal
          ? 'bg-[#0a1c21] text-gray-400 border-[#c2a265]/20'
          : 'bg-[#fdf1f6] text-[#b4839a] border-pink-100'
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-medium">
          Hồ sơ năng lực cá nhân — <span className="font-bold text-[#b44873] dark:text-[#c2a265]">Nguyễn Ngọc Quỳnh Trâm</span>
        </p>

        <p className="flex items-center gap-1 text-[11px] opacity-80">
          <span>Sư phạm Khoa học Tự nhiên • Trường ĐH Sư Phạm TP.HCM (HCMUE)</span>
        </p>
      </div>
    </footer>
  );
};
