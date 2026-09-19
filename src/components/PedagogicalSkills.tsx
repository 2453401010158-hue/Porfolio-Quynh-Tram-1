import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  FileSpreadsheet,
  MonitorCheck,
  HeartHandshake,
  ExternalLink,
  BookOpenCheck
} from 'lucide-react';
import { ThemeMode } from '../types';
import { TeachingSampleModal } from './TeachingSampleModal';

interface PedagogicalSkillsProps {
  theme: ThemeMode;
}

export const PedagogicalSkills: React.FC<PedagogicalSkillsProps> = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDarkTeal = theme === 'editorial-teal';

  return (
    <>
      <section
        id="pedagogical-skills"
        className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm border ${
          isDarkTeal
            ? 'bg-[#122e36] border-[#c2a265]/30 text-[#f4efe6]'
            : 'bg-white border-[#fce4ee] text-[#4a2c3a] shadow-[#d1608c]/5'
        }`}
      >
        <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-pink-100 dark:border-[#c2a265]/20">
          <h2 className={`text-lg sm:text-xl font-bold flex items-center gap-2.5 ${
            isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'
          }`}>
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span>Kỹ Năng Sư Phạm & Năng Lực Chuyên Môn</span>
          </h2>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            isDarkTeal ? 'bg-[#183942] text-[#c2a265]' : 'bg-[#fbe1ec] text-[#b44873]'
          }`}>
            Chuẩn CV 5512
          </span>
        </div>

        {/* 4 Core Competencies from user specification */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-pink-100 dark:bg-[#183942] text-[#d1608c] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Thiết kế kế hoạch bài dạy (Giáo án) theo chuẩn phát triển năng lực KHTN
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                Nắm vững Công văn 5512/BGDĐT, xây dựng mục tiêu dạy học bám sát 3 thành phần năng lực KHTN (Nhận thức, Tìm hiểu tự nhiên, Vận dụng kiến thức).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-pink-100 dark:bg-[#183942] text-[#d1608c] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Sử dụng thành thạo các thiết bị & dụng cụ thí nghiệm Lý - Hóa - Sinh THCS
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                Thao tác chuẩn xác với các thiết bị cảm biến, mạch điện, kính hiển vi quang học, hóa chất chỉ thị và dụng cụ đo lường thực nghiệm tại phòng bộ môn.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-pink-100 dark:bg-[#183942] text-[#d1608c] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Tích hợp CNTT và ứng dụng mô phỏng trực quan vào bài giảng
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                Ứng dụng linh hoạt <strong>PhET Interactive Simulations, Kahoot, Canva for Education, Padlet, Google Classroom</strong> để tăng tương tác và tạo hứng khởi học tập.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-pink-100 dark:bg-[#183942] text-[#d1608c] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Quản lý lớp học và kỹ năng truyền cảm hứng khoa học
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                Giọng nói truyền cảm, phương pháp kỷ luật tích cực, khéo léo kết nối các câu chuyện khoa học đời sống giúp học sinh lứa tuổi THCS say mê khám phá.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button to Open Sample Lesson Plan Modal */}
        <div className="mt-6 pt-4 border-t border-pink-100 dark:border-[#c2a265]/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
              PhET Simulations
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-200">
              Kahoot!
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-200">
              Canva Edu
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200">
              Padlet
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className={`text-xs font-bold py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all shadow-sm ${
              isDarkTeal
                ? 'bg-[#c2a265] text-[#0f282f] hover:bg-[#d4b576]'
                : 'bg-[#d1608c] text-white hover:bg-[#b44873]'
            }`}
          >
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Xem Trích Đoạn Giáo Án Mẫu (CV 5512)</span>
          </button>
        </div>
      </section>

      {/* Interactive Modal Viewer */}
      <TeachingSampleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
      />
    </>
  );
};
