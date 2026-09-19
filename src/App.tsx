import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { CareerObjective } from './components/CareerObjective';
import { InteractiveLab } from './components/InteractiveLab';
import { PedagogicalSkills } from './components/PedagogicalSkills';
import { Footer } from './components/Footer';
import { ThemeMode } from './types';
import { soundFX } from './utils/audio';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('rose-pastel');
  const [audioMuted, setAudioMuted] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'rose-pastel' ? 'editorial-teal' : 'rose-pastel'));
  };

  const toggleAudio = () => {
    const nextState = !audioMuted;
    setAudioMuted(nextState);
    soundFX.enabled = !nextState;
  };

  const isDarkTeal = theme === 'editorial-teal';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        isDarkTeal
          ? 'bg-[#0b1d22] text-[#f4efe6]'
          : 'bg-[#fdf1f6] text-[#4a2c3a]'
      }`}
    >
      {/* Top Banner & Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        audioMuted={audioMuted}
        onToggleAudio={toggleAudio}
      />

      {/* Main Container matching user grid: 320px sidebar + 1fr content */}
      <main className="flex-1 max-w-[1150px] w-full mx-auto px-4 sm:px-6 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-7 items-start">
          {/* Left Column: Profile Card */}
          <ProfileCard theme={theme} />

          {/* Right Column: Sections */}
          <div className="space-y-7">
            {/* Section 1: Career Objective */}
            <CareerObjective theme={theme} />

            {/* Section 2: Interactive KHTN Laboratory */}
            <InteractiveLab theme={theme} />

            {/* Section 3: Pedagogical Skills */}
            <PedagogicalSkills theme={theme} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
