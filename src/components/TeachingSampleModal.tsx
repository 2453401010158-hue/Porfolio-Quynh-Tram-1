import React from 'react';
import { X, BookOpen, CheckCircle, Clock, Users, Award, FileText } from 'lucide-react';
import { ThemeMode } from '../types';

interface TeachingSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const TeachingSampleModal: React.FC<TeachingSampleModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  if (!isOpen) return null;

  const isDarkTeal = theme === 'editorial-teal';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl border ${
          isDarkTeal
            ? 'bg-[#0f282f] text-[#f4efe6] border-[#c2a265]/40'
            : 'bg-white text-[#4a2c3a] border-pink-100'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b pb-4 mb-5 border-pink-100 dark:border-[#c2a265]/30">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d1608c] uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Kế hoạch bài dạy chuẩn Công văn 5512/BGDĐT</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            BÀI HỌC: AXIT - BAZƠ & THANG ĐO pH (KHTN 8)
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">
            Người thiết kế: <strong>Nguyễn Ngọc Quỳnh Trâm</strong> • Thời lượng: 02 tiết • Phân môn Hóa học
          </p>
        </div>

        {/* I. MỤC TIÊU DẠY HỌC */}
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-bold text-[#b44873] dark:text-[#c2a265] text-sm sm:text-base mb-2">
              I. Mục Tiêu Cần Đạt (Theo chuẩn năng lực KHTN)
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-gray-700 dark:text-gray-200">
              <li>
                <strong>Nhận thức khoa học tự nhiên:</strong> Nêu được khái niệm axit, bazơ; sử dụng được quỳ tím và dung dịch phenolphthalein để nhận biết.
              </li>
              <li>
                <strong>Tìm hiểu tự nhiên:</strong> Tiến hành được thí nghiệm nhỏ giọt dung dịch NaOH và HCl vào chất chỉ thị màu, ghi chép hiện tượng trung thực.
              </li>
              <li>
                <strong>Vận dụng kiến thức, kỹ năng:</strong> Giải thích được hiện tượng đau dạ dày và tác dụng của thuốc muối Nabica; xử lý đất chua trong nông nghiệp.
              </li>
            </ul>
          </div>

          {/* II. TIẾN TRÌNH DẠY HỌC 4 BƯỚC */}
          <div>
            <h4 className="font-bold text-[#b44873] dark:text-[#c2a265] text-sm sm:text-base mb-2">
              II. Chuỗi Hoạt Động Dạy Học (4 Bước CV 5512)
            </h4>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-pink-50/60 dark:bg-[#183942] border border-pink-100 dark:border-[#c2a265]/20">
                <span className="font-bold text-[#d1608c] text-xs uppercase block mb-1">
                  1. Hoạt động Khởi động (5 - 7 phút)
                </span>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong>Tình huống thực tế:</strong> Giáo viên cho học sinh quan sát cốc nước chanh và nước xà phòng, đặt câu hỏi: <em>"Làm thế nào phân biệt chất mang tính axit và chất mang tính bazơ mà không được nếm trực tiếp?"</em>
                </p>
              </div>

              <div className="p-3 rounded-xl bg-purple-50/60 dark:bg-[#183942] border border-purple-100 dark:border-[#c2a265]/20">
                <span className="font-bold text-purple-600 text-xs uppercase block mb-1">
                  2. Hoạt động Hình thành kiến thức (20 - 25 phút)
                </span>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong>Thực hành nhóm:</strong> Các nhóm học sinh nhận bộ hóa chất (NaOH, HCl, quỳ tím, Phenolphthalein), tự tay nhỏ giọt, quan sát sự chuyển màu kỳ diệu sang hồng tím trong môi trường bazơ và ghi kết quả vào Phiếu học tập số 1.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-[#183942] border border-blue-100 dark:border-[#c2a265]/20">
                <span className="font-bold text-blue-600 text-xs uppercase block mb-1">
                  3. Hoạt động Luyện tập (8 - 10 phút)
                </span>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Tổ chức trò chơi tương tác nhanh qua nền tảng <strong>Kahoot / Quizizz</strong> kiểm tra nhận biết môi trường Axit - Bazơ và thang đo pH của một số dung dịch quen thuộc (giấm ăn, sữa chua, xà phòng).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-[#183942] border border-emerald-100 dark:border-[#c2a265]/20">
                <span className="font-bold text-emerald-600 text-xs uppercase block mb-1">
                  4. Hoạt động Vận dụng & Mở rộng (5 phút)
                </span>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Dự án STEM tại nhà: Tự chiết xuất chất chỉ thị màu tự nhiên từ <strong>Bắp cải tím / Hoa dâm bụt</strong> để kiểm tra pH đất trồng cây cảnh trong gia đình.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 rounded-xl font-bold text-xs bg-[#d1608c] text-white hover:bg-[#b44873] transition"
          >
            Đóng Xem Trước
          </button>
        </div>
      </div>
    </div>
  );
};
