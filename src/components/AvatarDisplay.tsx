import React, { useState } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

interface AvatarDisplayProps {
  name: string;
  themeColor?: string;
}

const DEFAULT_AVATAR = '/avatar-portrait.png';
const FALLBACK_AVATAR = 'https://i.ibb.co/4xJs8pb/image.png';

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ name }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    try {
      return localStorage.getItem('quynhtram_avatar_v2');
    } catch {
      return null;
    }
  });
  const [imgError, setImgError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomAvatar(result);
        try {
          localStorage.setItem('quynhtram_avatar_v2', result);
        } catch {
          // ignore quota error
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomAvatar(null);
    setImgError(false);
    try {
      localStorage.removeItem('quynhtram_avatar_v2');
      localStorage.removeItem('quynhtram_avatar');
    } catch {
      // ignore
    }
  };

  const currentImageSrc = customAvatar || (imgError ? FALLBACK_AVATAR : DEFAULT_AVATAR);

  return (
    <div className="relative group mx-auto w-[165px] h-[215px] rounded-2xl overflow-hidden shadow-md border-4 border-[#d1608c]/90 mb-4 bg-gradient-to-b from-[#fde8f1] to-[#f8d0e1] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-[#b44873]">
      <img
        src={currentImageSrc}
        alt={`Chân dung ${name}`}
        className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!imgError && !customAvatar) {
            setImgError(true);
          }
        }}
      />

      {/* Subtle corner badge: Sinh viên Sư phạm KHTN */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent pt-4 pb-1.5 px-2 text-center pointer-events-none">
        <span className="text-[10px] font-semibold text-white/95 tracking-wide drop-shadow-sm uppercase">
          SP KHTN • HCMUE
        </span>
      </div>

      {/* Hover action overlay to upload or replace photo */}
      <label
        htmlFor="avatar-upload"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-medium gap-1.5 p-2 select-none"
        title="Tải lên ảnh chân dung khác"
      >
        <Camera className="w-5 h-5 text-white animate-pulse" />
        <span className="text-center font-medium">Đổi ảnh chân dung</span>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Reset button if custom avatar is active */}
      {customAvatar && (
        <button
          onClick={handleResetAvatar}
          className="absolute top-2 right-2 bg-white/90 hover:bg-white text-[#b44873] hover:text-red-600 rounded-full p-1.5 shadow transition-colors text-xs"
          title="Đặt lại ảnh chân dung gốc"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
