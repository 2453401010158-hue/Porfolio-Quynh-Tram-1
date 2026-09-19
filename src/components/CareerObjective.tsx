import React from 'react';
import { Compass, Sparkles, Lightbulb, Target, BookOpen } from 'lucide-react';
import { ThemeMode } from '../types';

interface CareerObjectiveProps {
  theme: ThemeMode;
}

export const CareerObjective: React.FC<CareerObjectiveProps> = ({ theme }) => {
  const isDarkTeal = theme === 'editorial-teal';

  return (
    <section
      id="career-objective"
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm border ${
        isDarkTeal
          ? 'bg-[#122e36] border-[#c2a265]/30 text-[#f4efe6]'
          : 'bg-white border-[#fce4ee] text-[#4a2c3a] shadow-[#d1608c]/5'
      }`}
    >
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-pink-100 dark:border-[#c2a265]/20">
        <h2 className={`text-lg sm:text-xl font-bold flex items-center gap-2.5 ${
          isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'
        }`}>
          <Compass className="w-5 h-5 text-[#d1608c]" />
          <span>Mục Tiêu Nghề Nghiệp & Triết Lý Giáo Dục</span>
        </h2>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          isDarkTeal ? 'bg-[#183942] text-[#c2a265]' : 'bg-[#fbe1ec] text-[#b44873]'
        }`}>
          Định hướng THCS
        </span>
      </div>

      <p className="leading-relaxed text-sm sm:text-base font-normal text-justify">
        Chào bạn! Mình là <strong className={isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'}>Quỳnh Trâm</strong>, hiện là sinh viên năm 3 ngành Sư phạm Khoa học Tự nhiên tại <strong className="font-semibold">Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)</strong>. Với lòng nhiệt huyết giảng dạy và niềm đam mê nghiên cứu tích hợp các bộ môn <strong className="text-[#d1608c]">Vật Lý - Hóa Học - Sinh Học</strong>, mình mong muốn ứng dụng phương pháp dạy học trực quan, thực nghiệm để khơi gợi niềm yêu thích khoa học cho học sinh THCS.
      </p>

      {/* Triết lý sư phạm & Điểm nhấn phương pháp */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
        <div className={`p-3.5 rounded-xl border transition-all ${
          isDarkTeal
            ? 'bg-[#183942]/60 border-[#c2a265]/20'
            : 'bg-[#fdf7fa] border-[#f8d0e1]'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#ef8fa8]">
            <Lightbulb className="w-4 h-4 shrink-0 text-[#d1608c]" />
            <span>Thực Nghiệm Trực Quan</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
            Học sinh tự tay làm thí nghiệm, quan sát hiện tượng trước khi đúc kết khái niệm khoa học.
          </p>
        </div>

        <div className={`p-3.5 rounded-xl border transition-all ${
          isDarkTeal
            ? 'bg-[#183942]/60 border-[#c2a265]/20'
            : 'bg-[#fdf7fa] border-[#f8d0e1]'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#c58ce6]">
            <Target className="w-4 h-4 shrink-0 text-[#a855f7]" />
            <span>Tích Hợp Liên Môn</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
            Kết nối kiến thức Lý - Hóa - Sinh giải quyết các vấn đề thực tiễn đời sống và bảo vệ môi trường.
          </p>
        </div>

        <div className={`p-3.5 rounded-xl border transition-all ${
          isDarkTeal
            ? 'bg-[#183942]/60 border-[#c2a265]/20'
            : 'bg-[#fdf7fa] border-[#f8d0e1]'
        }`}>
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#7fcfa8]">
            <Sparkles className="w-4 h-4 shrink-0 text-[#10b981]" />
            <span>Chuyển Đổi Số Giáo Dục</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
            Ứng dụng mô phỏng PhET, bài tập tương tác Kahoot, Canva nâng cao sự hứng thú trong giờ học.
          </p>
        </div>
      </div>
    </section>
  );
};
