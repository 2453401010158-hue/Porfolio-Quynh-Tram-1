import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  FlaskConical,
  Leaf,
  RotateCcw,
  Sun,
  Moon,
  Info,
  Droplets,
  HelpCircle,
  Lightbulb as BulbIcon
} from 'lucide-react';
import { LabTab, ThemeMode } from '../types';
import { soundFX } from '../utils/audio';

interface InteractiveLabProps {
  theme: ThemeMode;
}

export const InteractiveLab: React.FC<InteractiveLabProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<LabTab>('physics');

  // Physics Lab State
  const [isSwitchClosed, setIsSwitchClosed] = useState(false);
  const [voltage, setVoltage] = useState<number>(3); // 1.5, 3, 4.5 V

  // Chemistry Lab State
  const [chemState, setChemState] = useState<'neutral' | 'base' | 'acid'>('neutral');
  const [phValue, setPhValue] = useState<number>(7.0);
  const [dropEffect, setDropEffect] = useState<string | null>(null);
  const [litmusTest, setLitmusTest] = useState<boolean>(false);

  // Biology Lab State
  const [isLightOn, setIsLightOn] = useState(false);
  const [lightIntensity, setLightIntensity] = useState<number>(2); // 1: dim, 2: medium, 3: bright
  const [bubbleCount, setBubbleCount] = useState<number>(0);
  const bubbleIntervalRef = useRef<number | null>(null);

  const isDarkTeal = theme === 'editorial-teal';

  // Sound & Bubble timer for biology
  useEffect(() => {
    if (isLightOn && activeTab === 'biology') {
      const speed = lightIntensity === 1 ? 900 : lightIntensity === 2 ? 550 : 320;
      bubbleIntervalRef.current = window.setInterval(() => {
        setBubbleCount((c) => c + 1);
        soundFX.playBubble();
      }, speed);
    } else {
      if (bubbleIntervalRef.current) {
        clearInterval(bubbleIntervalRef.current);
      }
    }
    return () => {
      if (bubbleIntervalRef.current) clearInterval(bubbleIntervalRef.current);
    };
  }, [isLightOn, lightIntensity, activeTab]);

  // Physics Actions
  const toggleCircuit = () => {
    const next = !isSwitchClosed;
    setIsSwitchClosed(next);
    soundFX.playSwitch(next);
  };

  // Chemistry Actions
  const addBase = () => {
    soundFX.playLiquidDrop();
    setDropEffect('naoh');
    setTimeout(() => setDropEffect(null), 700);
    setChemState('base');
    setPhValue(11.4);
  };

  const addAcid = () => {
    soundFX.playLiquidDrop();
    setDropEffect('hcl');
    setTimeout(() => setDropEffect(null), 700);
    setChemState('acid');
    setPhValue(2.5);
  };

  const resetChem = () => {
    soundFX.playReset();
    setChemState('neutral');
    setPhValue(7.0);
    setLitmusTest(false);
  };

  // Biology Actions
  const handlePhotosynthesisToggle = (checked: boolean) => {
    setIsLightOn(checked);
    soundFX.playSwitch(checked);
  };

  return (
    <section
      id="interactive-lab"
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm border ${
        isDarkTeal
          ? 'bg-[#122e36] border-[#c2a265]/30 text-[#f4efe6]'
          : 'bg-white border-[#fce4ee] text-[#4a2c3a] shadow-[#d1608c]/5'
      }`}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-5 border-b border-pink-100 dark:border-[#c2a265]/20 gap-2">
        <div>
          <h2 className={`text-lg sm:text-xl font-bold flex items-center gap-2.5 ${
            isDarkTeal ? 'text-[#c2a265]' : 'text-[#b44873]'
          }`}>
            <FlaskConical className="w-5 h-5 text-[#d1608c]" />
            <span>Phòng Thí Nghiệm Tương Tác (KHTN)</span>
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-300 mt-0.5">
            Mô phỏng trực quan giảng dạy 3 phân môn: Vật Lý (KHTN 8) • Hóa Học (KHTN 8) • Sinh Học (KHTN 7)
          </p>
        </div>

        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-pink-100 text-pink-700 dark:bg-[#c2a265]/20 dark:text-[#c2a265] w-fit">
          Trực quan & Thực nghiệm
        </span>
      </div>

      {/* Lab Tabs (Physics, Chemistry, Biology) */}
      <div className="flex gap-2 p-1.5 rounded-xl bg-pink-50/70 dark:bg-[#0f282f] border border-pink-100 dark:border-[#c2a265]/20 mb-5">
        <button
          type="button"
          onClick={() => setActiveTab('physics')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'physics'
              ? 'bg-[#ef8fa8] text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-[#183942]'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Vật Lý</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('chemistry')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'chemistry'
              ? 'bg-[#c58ce6] text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-[#183942]'
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          <span>Hóa Học</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('biology')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'biology'
              ? 'bg-[#7fcfa8] text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-[#183942]'
          }`}
        >
          <Leaf className="w-4 h-4" />
          <span>Sinh Học</span>
        </button>
      </div>

      {/* ======================= TAB 1: VẬT LÝ ======================= */}
      {activeTab === 'physics' && (
        <div className="rounded-xl border-2 border-dashed border-[#f6c9dc] dark:border-[#c2a265]/30 bg-[#fef7fa] dark:bg-[#0f282f]/70 p-5 sm:p-6 transition-all">
          <div className="text-center mb-5">
            <h3 className="font-bold text-base sm:text-lg text-[#b44873] dark:text-[#f4efe6]">
              Thí Nghiệm: Mạch Điện Đơn Giản & Dòng Điện
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Chủ đề: Năng lượng điện & Mạch điện trong môn Khoa học Tự nhiên 8 (Bộ sách Kết nối / Chân trời / Cánh diều)
            </p>
          </div>

          {/* Interactive Circuit Canvas */}
          <div className="circuit-board flex flex-col items-center justify-center py-4 relative">
            {/* SVG Interactive Circuit Layout */}
            <div className="w-full max-w-[420px] h-[220px] relative bg-white/70 dark:bg-[#122e36] rounded-2xl p-4 shadow-inner border border-pink-100 dark:border-[#c2a265]/20 flex items-center justify-center">
              <svg viewBox="0 0 380 200" className="w-full h-full select-none">
                {/* Copper Wires */}
                <rect
                  x="40"
                  y="30"
                  width="300"
                  height="140"
                  rx="16"
                  fill="none"
                  stroke={isSwitchClosed ? '#ef8fa8' : '#cbd5e1'}
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="transition-colors duration-300"
                />

                {/* Animated Electron Current Dots when closed */}
                {isSwitchClosed && (
                  <rect
                    x="40"
                    y="30"
                    width="300"
                    height="140"
                    rx="16"
                    fill="none"
                    stroke="#ffe066"
                    strokeWidth="3"
                    strokeDasharray="12 18"
                    className="animate-[dash_1.2s_linear_infinite]"
                  />
                )}

                {/* DC Battery Symbol at Bottom */}
                <g transform="translate(160, 160)">
                  {/* Wire gap */}
                  <rect x="-30" y="-8" width="80" height="16" fill="white" className="dark:fill-[#122e36]" />
                  {/* Long positive plate */}
                  <line x1="-12" y1="-18" x2="-12" y2="18" stroke="#ef8fa8" strokeWidth="4" />
                  {/* Short negative plate */}
                  <line x1="8" y1="-10" x2="8" y2="10" stroke="#475569" strokeWidth="6" />
                  {/* Polarity labels */}
                  <text x="-24" y="-8" fontSize="12" fontWeight="bold" fill="#ef8fa8">+</text>
                  <text x="18" y="-4" fontSize="14" fontWeight="bold" fill="#64748b">-</text>
                  <text x="2" y="28" fontSize="10" fill="#64748b" textAnchor="middle">{voltage}V (Nguồn Pin)</text>
                </g>

                {/* Knife Switch at Left */}
                <g transform="translate(40, 100)">
                  <circle cx="0" cy="-22" r="5" fill="#475569" />
                  <circle cx="0" cy="22" r="5" fill="#475569" />
                  {/* Switch blade */}
                  <line
                    x1="0"
                    y1="22"
                    x2={isSwitchClosed ? '0' : '-22'}
                    y2={isSwitchClosed ? '-20' : '-10'}
                    stroke={isSwitchClosed ? '#10b981' : '#f43f5e'}
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <text x="-28" y="5" fontSize="10" fontWeight="bold" fill="#64748b">K</text>
                </g>

                {/* Ammeter symbol at Right */}
                <g transform="translate(340, 100)">
                  <circle cx="0" cy="0" r="15" fill="white" stroke="#64748b" strokeWidth="2" className="dark:fill-[#0f282f]" />
                  <text x="0" y="4" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#0284c7">A</text>
                  <text x="24" y="4" fontSize="9" fill="#0284c7">
                    {isSwitchClosed ? `${(voltage / 10).toFixed(2)}A` : '0.00A'}
                  </text>
                </g>

                {/* Light Bulb at Top Center */}
                <g transform="translate(190, 30)">
                  {/* Socket */}
                  <rect x="-16" y="4" width="32" height="14" rx="2" fill="#94a3b8" />
                  {/* Bulb Glass */}
                  <circle
                    cx="0"
                    cy="-14"
                    r="24"
                    fill={isSwitchClosed ? '#fffbeb' : '#f1f5f9'}
                    stroke={isSwitchClosed ? '#f59e0b' : '#cbd5e1'}
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />
                  {/* Glowing halo */}
                  {isSwitchClosed && (
                    <circle
                      cx="0"
                      cy="-14"
                      r={voltage === 1.5 ? 32 : voltage === 3 ? 42 : 52}
                      fill="#ffe066"
                      fillOpacity={voltage === 1.5 ? 0.35 : voltage === 3 ? 0.5 : 0.7}
                      className="animate-pulse pointer-events-none"
                    />
                  )}
                  {/* Filament */}
                  <path
                    d="M -7, -4 L -4, -18 L 4, -18 L 7, -4"
                    fill="none"
                    stroke={isSwitchClosed ? '#dc2626' : '#94a3b8'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <button
                type="button"
                onClick={toggleCircuit}
                className={`py-2.5 px-6 rounded-full font-bold text-xs sm:text-sm text-white transition-all shadow-md active:scale-95 flex items-center gap-2 ${
                  isSwitchClosed
                    ? 'bg-[#10b981] hover:bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-900/30'
                    : 'bg-[#d1608c] hover:bg-[#b44873] ring-4 ring-pink-100 dark:ring-pink-950/40'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>{isSwitchClosed ? 'Ngắt Công Tắc (Mở mạch)' : 'Đóng Công Tắc (Khép mạch)'}</span>
              </button>

              {/* Voltage Selector */}
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#183942] px-3 py-1.5 rounded-full border border-pink-100 dark:border-[#c2a265]/30 text-xs">
                <span className="text-gray-500 dark:text-gray-300">Nguồn:</span>
                {[1.5, 3, 4.5].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => {
                      setVoltage(v);
                      soundFX.playLiquidDrop();
                    }}
                    className={`px-2 py-0.5 rounded-full font-semibold transition ${
                      voltage === v
                        ? 'bg-[#ef8fa8] text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#204954]'
                    }`}
                  >
                    {v}V
                  </button>
                ))}
              </div>
            </div>

            {/* Live Scientific Status Readout matching prompt */}
            <div className="mt-4 p-3 bg-white/90 dark:bg-[#122e36] rounded-xl border border-pink-100 dark:border-[#c2a265]/20 text-center w-full max-w-md">
              <p className="text-xs sm:text-sm">
                Trạng thái:{' '}
                {isSwitchClosed ? (
                  <strong className="text-emerald-600 dark:text-emerald-400">
                    Mạch kín - Dòng điện chạy qua ({voltage}V: Đèn phát sáng rực rỡ!)
                  </strong>
                ) : (
                  <strong className="text-[#d1608c]">
                    Mạch mở (Chưa có dòng điện khép kín - Đèn tắt)
                  </strong>
                )}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                💡 <em>Ý nghĩa sư phạm:</em> Giúp học sinh phân biệt điều kiện để có dòng điện trong mạch kín và ảnh hưởng của hiệu điện thế đến độ sáng bóng đèn.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================= TAB 2: HÓA HỌC ======================= */}
      {activeTab === 'chemistry' && (
        <div className="rounded-xl border-2 border-dashed border-[#f6c9dc] dark:border-[#c2a265]/30 bg-[#fef7fa] dark:bg-[#0f282f]/70 p-5 sm:p-6 transition-all">
          <div className="text-center mb-5">
            <h3 className="font-bold text-base sm:text-lg text-[#7e3fa4] dark:text-[#f4efe6]">
              Thí Nghiệm: Sự Đổi Màu Chỉ Thị Phenolphthalein
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Chủ đề: Dung dịch Axit - Bazơ & Thang đo pH (Khoa học Tự nhiên 8)
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-2">
            {/* Realistic Laboratory Beaker */}
            <div className="relative w-36 h-48 sm:w-40 sm:h-52 flex items-end justify-center">
              {/* Chemical drop animation */}
              {dropEffect && (
                <div
                  className={`absolute top-0 w-3 h-5 rounded-full animate-bounce ${
                    dropEffect === 'naoh' ? 'bg-[#c58ce6]' : 'bg-blue-300'
                  }`}
                  style={{ animationDuration: '0.6s' }}
                />
              )}

              {/* Glass Beaker Container */}
              <div className="w-full h-full border-4 border-[#c58ce6] border-t-0 rounded-b-3xl relative overflow-hidden bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-md">
                {/* Beaker Pour Lip indicator */}
                <div className="absolute top-0 -left-2 w-4 h-2 border-b-2 border-r-2 border-[#c58ce6] transform -rotate-45" />

                {/* Graduated volumetric markings */}
                <div className="absolute right-2 top-6 bottom-6 flex flex-col justify-between text-[9px] font-mono text-gray-400 pointer-events-none select-none">
                  <div className="flex items-center gap-1"><span>200ml</span><span className="w-2 h-0.5 bg-gray-400"></span></div>
                  <div className="flex items-center gap-1"><span>150ml</span><span className="w-3 h-0.5 bg-gray-400"></span></div>
                  <div className="flex items-center gap-1"><span>100ml</span><span className="w-2 h-0.5 bg-gray-400"></span></div>
                  <div className="flex items-center gap-1"><span>50ml</span><span className="w-3 h-0.5 bg-gray-400"></span></div>
                </div>

                {/* Litmus Paper inside Beaker if tested */}
                {litmusTest && (
                  <div
                    className={`absolute bottom-4 left-6 w-4 h-24 rounded-t-sm shadow-sm transition-colors duration-500 border border-black/10 ${
                      chemState === 'base'
                        ? 'bg-blue-600'
                        : chemState === 'acid'
                        ? 'bg-red-500'
                        : 'bg-[#9370db]'
                    }`}
                    title="Giấy quỳ tím"
                  >
                    <span className="text-[7px] text-white font-bold block text-center rotate-90 mt-6">QUỲ TÍM</span>
                  </div>
                )}

                {/* Liquid Level & Dynamic Color */}
                <div
                  className="absolute bottom-0 w-full transition-all duration-700 ease-out flex items-center justify-center overflow-hidden"
                  style={{
                    height: chemState === 'neutral' ? '55%' : '68%',
                    backgroundColor:
                      chemState === 'base'
                        ? '#e91e8c'
                        : chemState === 'acid'
                        ? '#fdf5f9'
                        : '#e6e0ea',
                  }}
                >
                  {/* Subtle surface wave */}
                  <div className="absolute top-0 inset-x-0 h-2 bg-white/30 rounded-full blur-[1px]" />
                  
                  {/* Small effervescence bubbles when reaction occurs */}
                  {chemState !== 'neutral' && (
                    <div className="absolute inset-0 flex justify-around items-end opacity-40">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping mb-3" />
                      <span className="w-1 h-1 rounded-full bg-white animate-ping mb-6" />
                      <span className="w-2 h-2 rounded-full bg-white animate-ping mb-2" />
                    </div>
                  )}

                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm ${
                    chemState === 'base' ? 'text-white bg-black/20' : 'text-gray-600 bg-white/60'
                  }`}>
                    pH ~ {phValue.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Chemical Action Buttons matching user prompt */}
            <div className="chem-btns flex flex-wrap gap-2.5 justify-center mt-6">
              <button
                type="button"
                onClick={addBase}
                className="py-2 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#e91e8c] hover:bg-[#d81b60] transition shadow-sm active:scale-95 flex items-center gap-1.5"
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>+ Dung dịch NaOH (Bazơ)</span>
              </button>

              <button
                type="button"
                onClick={addAcid}
                className="py-2 px-4 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#8fb3e8] hover:bg-[#6094dd] transition shadow-sm active:scale-95 flex items-center gap-1.5"
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>+ Dung dịch HCl (Axit)</span>
              </button>

              <button
                type="button"
                onClick={() => setLitmusTest(!litmusTest)}
                className="py-2 px-3 rounded-lg font-semibold text-xs sm:text-sm text-purple-900 bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/60 dark:text-purple-200 transition shadow-sm"
              >
                {litmusTest ? 'Rút giấy quỳ ra' : 'Nhúng giấy quỳ tím'}
              </button>

              <button
                type="button"
                onClick={resetChem}
                className="py-2 px-3.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-[#c9a8b8] hover:bg-[#b08b9e] transition shadow-sm flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm sạch</span>
              </button>
            </div>

            {/* Reaction Status & Equation Box */}
            <div className="mt-5 p-3.5 bg-white/90 dark:bg-[#122e36] rounded-xl border border-pink-100 dark:border-[#c2a265]/20 text-center w-full max-w-lg">
              <p className="text-xs sm:text-sm">
                {chemState === 'base' && (
                  <span>
                    Kết quả:{' '}
                    <strong className="text-[#e91e8c]">
                      Môi trường Bazơ (pH ≈ 11.4) → Phenolphthalein chuyển sang màu Hồng Tím đặc trưng!
                    </strong>
                  </span>
                )}
                {chemState === 'acid' && (
                  <span>
                    Kết quả:{' '}
                    <strong className="text-[#0284c7]">
                      Môi trường Axit/Trung hòa (pH ≈ 2.5) → Dung dịch Không Màu!
                    </strong>
                  </span>
                )}
                {chemState === 'neutral' && (
                  <span className="text-gray-600 dark:text-gray-300">
                    Trạng thái: <strong>Dung dịch nước cất trung tính (Không màu, pH = 7.0)</strong>
                  </span>
                )}
              </p>

              {/* Chemical Equation Note */}
              <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                Phương trình phản ứng trung hòa: <span className="font-bold text-[#b44873] dark:text-[#c2a265]">NaOH + HCl → NaCl + H₂O</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================= TAB 3: SINH HỌC ======================= */}
      {activeTab === 'biology' && (
        <div className="rounded-xl border-2 border-dashed border-[#f6c9dc] dark:border-[#c2a265]/30 bg-[#fef7fa] dark:bg-[#0f282f]/70 p-5 sm:p-6 transition-all">
          <div className="text-center mb-5">
            <h3 className="font-bold text-base sm:text-lg text-[#1e6f49] dark:text-[#f4efe6]">
              Thí Nghiệm: Mô Phỏng Quang Hợp & Giải Phóng O₂
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Chủ đề: Trao đổi chất & Chuyển hóa năng lượng - Quang hợp ở thực vật (Khoa học Tự nhiên 7)
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-2">
            {/* Plant chamber apparatus */}
            <div className="relative w-48 h-56 bg-gradient-to-b from-sky-50 to-emerald-50/60 dark:from-[#183942] dark:to-[#0f282f] border-4 border-[#7fcfa8] rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-end p-3">
              {/* Sunlight Ray Simulation */}
              {isLightOn && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(ellipse at top, rgba(254, 240, 138, 0.45) 0%, rgba(254, 240, 138, 0.05) 75%, transparent 100%)',
                  }}
                >
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <Sun className="w-3 h-3 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
                    <span>Nắng chiếu</span>
                  </div>
                </div>
              )}

              {/* Rising O2 Bubbles Animation Stream */}
              {isLightOn && (
                <div className="absolute inset-0 pointer-events-none flex justify-center items-end pb-12 overflow-hidden">
                  <div className="relative w-24 h-40">
                    <span
                      className="absolute left-6 text-sm animate-[floatUp_1.8s_infinite] opacity-80"
                      style={{ animationDelay: '0.1s' }}
                    >
                      🫧
                    </span>
                    <span
                      className="absolute left-12 text-base animate-[floatUp_1.5s_infinite] opacity-90"
                      style={{ animationDelay: '0.6s' }}
                    >
                      🫧
                    </span>
                    <span
                      className="absolute left-16 text-xs animate-[floatUp_2s_infinite] opacity-70"
                      style={{ animationDelay: '1.1s' }}
                    >
                      🫧
                    </span>
                    <span
                      className="absolute left-8 text-lg animate-[floatUp_1.4s_infinite] opacity-85"
                      style={{ animationDelay: '0.4s' }}
                    >
                      🫧
                    </span>
                  </div>
                </div>
              )}

              {/* Aquatic Plant (Rong Đuôi Chó / Potted Plant) */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-5xl sm:text-6xl drop-shadow-md select-none transition-transform hover:scale-105">
                  🪴
                </span>
                <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 mt-1 bg-white/70 dark:bg-black/30 px-2 py-0.5 rounded-full">
                  Cây Thủy Sinh (Rong đuôi chó)
                </span>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
              <label className="flex items-center gap-2 cursor-pointer bg-white dark:bg-[#183942] px-4 py-2 rounded-full border border-pink-100 dark:border-[#c2a265]/30 shadow-sm hover:border-[#7fcfa8] transition">
                <input
                  type="checkbox"
                  id="light-toggle"
                  checked={isLightOn}
                  onChange={(e) => handlePhotosynthesisToggle(e.target.checked)}
                  className="w-4 h-4 accent-[#7fcfa8] cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-bold flex items-center gap-1 text-gray-700 dark:text-gray-200">
                  <Sun className={`w-4 h-4 ${isLightOn ? 'text-amber-500 animate-pulse' : 'text-gray-400'}`} />
                  Bật Ánh Sáng Mặt Trời ☀️
                </span>
              </label>

              {/* Intensity control */}
              {isLightOn && (
                <div className="flex items-center gap-1 bg-white dark:bg-[#183942] px-3 py-1.5 rounded-full border border-emerald-100 dark:border-[#c2a265]/30 text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Cường độ sáng:</span>
                  {[1, 2, 3].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setLightIntensity(level)}
                      className={`px-2 py-0.5 rounded font-semibold transition ${
                        lightIntensity === level
                          ? 'bg-[#7fcfa8] text-white'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {level === 1 ? 'Yếu' : level === 2 ? 'Vừa' : 'Mạnh'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Scientific Status & Photosynthesis Equation */}
            <div className="mt-5 p-3.5 bg-white/90 dark:bg-[#122e36] rounded-xl border border-pink-100 dark:border-[#c2a265]/20 text-center w-full max-w-lg">
              <p className="text-xs sm:text-sm" id="bio-status">
                {isLightOn ? (
                  <span>
                    Kết quả:{' '}
                    <strong className="text-emerald-700 dark:text-emerald-400">
                      Có ánh sáng: Diệp lục hấp thụ quang năng, cây thực hiện quang hợp & Giải phóng khí Oxy (O₂↑)!
                    </strong>
                  </span>
                ) : (
                  <span className="text-gray-600 dark:text-gray-400">
                    Trạng thái: <strong>Cây trong tối, chưa tiến hành quang hợp (Không giải phóng bọt khí O₂)</strong>
                  </span>
                )}
              </p>

              {/* Chemical Equation Note */}
              <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-600 dark:text-gray-300">
                Phương trình quang hợp:{' '}
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                  6CO₂ + 6H₂O —(Ánh sáng, Diệp lục)→ C₆H₁₂O₆ (Glucose) + 6O₂↑
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
