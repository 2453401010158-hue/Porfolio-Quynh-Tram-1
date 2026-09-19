import React, { useState } from 'react';

interface UniversityLogoProps {
  className?: string;
  size?: number;
  variant?: 'emblem' | 'full';
}

export const UniversityLogo: React.FC<UniversityLogoProps> = ({
  className = '',
  size = 52,
  variant = 'full',
}) => {
  const [imageError, setImageError] = useState(false);
  const primarySrc = '/logo-hcmue.webp';
  const fallbackSrc = 'https://i.ibb.co/s94Kk0Vc/Logo-Tr-ng-i-h-c-S-ph-m-Th-nh-ph-H-Ch-Minh-svg.webp';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-gray-200/60 overflow-hidden shrink-0 transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        height: size,
        minWidth: variant === 'full' ? Math.round(size * 1.8) : size,
      }}
      title="Trường Đại Học Sư Phạm TP. Hồ Chí Minh (HCMUE)"
    >
      <img
        src={imageError ? fallbackSrc : primarySrc}
        alt="Logo Trường Đại học Sư phạm TP.HCM"
        className="max-h-full max-w-full object-contain"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!imageError) {
            setImageError(true);
          }
        }}
      />
    </div>
  );
};
