import React, { useState } from 'react';

interface AvatarDisplayProps {
  name: string;
  themeColor?: string;
}

const DEFAULT_AVATAR = '/avatar-portrait.png';
const FALLBACK_AVATAR = 'https://i.ibb.co/4xJs8pb/image.png';

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ name }) => {
  const [customAvatar] = useState<string | null>(() => {
    try {
      return localStorage.getItem('quynhtram_avatar_v2');
    } catch {
      return null;
    }
  });
  const [imgError, setImgError] = useState(false);

  const currentImageSrc = customAvatar || (imgError ? FALLBACK_AVATAR : DEFAULT_AVATAR);

  return (
    <div className="relative mx-auto w-[165px] h-[215px] rounded-2xl overflow-hidden shadow-md border-4 border-[#d1608c]/90 mb-4 bg-gradient-to-b from-[#fde8f1] to-[#f8d0e1] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-[#b44873] select-none">
      <img
        src={currentImageSrc}
        alt={`Chân dung ${name}`}
        className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 hover:scale-105 pointer-events-none"
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
    </div>
  );
};
