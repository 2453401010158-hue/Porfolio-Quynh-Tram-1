import React, { useState } from 'react';
import { AvatarDisplay } from './AvatarDisplay';
import { UniversityLogo } from './UniversityLogo';
import {
  GraduationCap,
  Building2,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Award,
  Sparkles,
  ExternalLink,
  BookOpenCheck
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ProfileCardProps {
  theme: ThemeMode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ theme }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const isDarkTeal = theme === 'editorial-teal';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <aside
      id="profile-sidebar"
      className={`rounded-2xl p-6 transition-all duration-300 shadow-sm border ${
        isDarkTeal
          ? 'bg-[#122e36] border-[#c2a265]/30 text-[#f4efe6]'
          : 'bg-white border-[#fce4ee] text-[#4a2c3a] shadow-[#d1608c]/5'
      }`}
    >
      {/* Portrait Avatar with HCMUE badge */}
      <AvatarDisplay name="Nguyễn Ngọc Quỳnh Trâm" />

      {/* Name and Current Status */}
      <div className="text-center">
        <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${
          isDarkTeal ? 'text-[#f4efe6]' : 'text-[#b44873]'
        }`}>
          Nguyễn Ngọc Quỳnh Trâm
        </h2>

        <div className="mt-2 flex items-center justify-center">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${
              isDarkTeal
                ? 'bg-[#c2a265]/20 text-[#c2a265] border border-[#c2a265]/40'
                : 'bg-[#fbe1ec] text-[#b44873] border border-[#f3a6c4]/40'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            Sinh viên Năm 3
          </span>
        </div>
      </div>

      {/* Structured Info List matching user specification */}
      <div
        className={`mt-6 pt-5 border-t text-sm space-y-3.5 ${
          isDarkTeal ? 'border-[#c2a265]/20' : 'border-[#fbe1ec]'
        }`}
      >
        {/* Chuyên ngành */}
        <div className="flex items-start gap-3">
          <GraduationCap className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkTeal ? 'text-[#c2a265]' : 'text-[#d1608c]'}`} />
          <div className="flex-1">
            <span className="text-xs text-gray-500 block">Chuyên ngành</span>
            <span className="font-semibold">Sư phạm Khoa học Tự nhiên</span>
          </div>
        </div>

        {/* Trường đào tạo với Logo chính thức */}
        <div className={`p-2.5 rounded-xl border flex items-center gap-3 transition-colors ${
          isDarkTeal
            ? 'bg-[#183942]/70 border-[#c2a265]/30'
            : 'bg-[#fff5f9] border-[#fce4ee]'
        }`}>
          <UniversityLogo size={42} className="shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[11px] text-gray-500 block">Trường đào tạo</span>
            <span className="font-semibold text-xs sm:text-sm block truncate">ĐH Sư phạm TP.HCM</span>
            <span className={`text-[10px] font-medium block ${isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'}`}>
              Khoa Hóa Học • Khóa 2024 - 2028
            </span>
          </div>
        </div>

        {/* Email with copy action */}
        <div className="flex items-start gap-3">
          <Mail className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkTeal ? 'text-[#c2a265]' : 'text-[#d1608c]'}`} />
          <div className="flex-1 min-w-0">
            <span className="text-xs text-gray-500 block">Email liên hệ</span>
            <div className="flex items-center gap-1.5">
              <a
                href="mailto:quynhtram.hcmue@gmail.com"
                className={`truncate font-medium hover:underline text-xs sm:text-sm ${
                  isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'
                }`}
                title="Gửi email cho Quỳnh Trâm"
              >
                quynhtram.hcmue@gmail.com
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard('quynhtram.hcmue@gmail.com', 'email')}
                className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-700 transition"
                title="Sao chép email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkTeal ? 'text-[#c2a265]' : 'text-[#d1608c]'}`} />
          <div className="flex-1">
            <span className="text-xs text-gray-500 block">Số điện thoại</span>
            <div className="flex items-center gap-1.5">
              <span className="font-medium">0987.xxx.xxx</span>
              <button
                type="button"
                onClick={() => copyToClipboard('0987.xxx.xxx', 'phone')}
                className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-700 transition"
                title="Sao chép SĐT"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkTeal ? 'text-[#c2a265]' : 'text-[#d1608c]'}`} />
          <div className="flex-1">
            <span className="text-xs text-gray-500 block">Địa chỉ</span>
            <span className="font-medium">TP. Hồ Chí Minh, Việt Nam</span>
          </div>
        </div>
      </div>

      {/* Focus Teaching Areas */}
      <div className={`mt-6 pt-5 border-t ${isDarkTeal ? 'border-[#c2a265]/20' : 'border-[#fbe1ec]'}`}>
        <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
          <BookOpenCheck className="w-3.5 h-3.5 text-[#d1608c]" />
          Phân Môn Giảng Dạy (THCS)
        </h4>
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#ef8fa8]/15 text-[#b44873] border border-[#ef8fa8]/30">
            ⚡ Vật Lý 6 - 9
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#c58ce6]/15 text-[#7e3fa4] border border-[#c58ce6]/30">
            🧪 Hóa Học 8 - 9
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#7fcfa8]/15 text-[#1e6f49] border border-[#7fcfa8]/30">
            🌿 Sinh Học 6 - 9
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-amber-500/10 text-amber-800 border border-amber-500/20">
            🔬 Giáo Dục STEM
          </span>
        </div>
      </div>

      {/* Quick Direct Email Action Button */}
      <div className="mt-6 pt-2">
        <a
          href="mailto:quynhtram.hcmue@gmail.com?subject=Lien%20he%20Cong%20tac%20Giang%20day%20KHTN%20-%20Nguyen%20Ngoc%20Quynh%20Tram"
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
            isDarkTeal
              ? 'bg-[#c2a265] text-[#0f282f] hover:bg-[#d4b576]'
              : 'bg-gradient-to-r from-[#d1608c] to-[#b44873] text-white hover:brightness-105'
          }`}
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Gửi Email Tuyển Dụng / Liên Hệ</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>
    </aside>
  );
};
