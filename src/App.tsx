import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { CareerObjective } from './components/CareerObjective';
import { InteractiveLab } from './components/InteractiveLab';
import { PedagogicalSkills } from './components/PedagogicalSkills';
import { Footer } from './components/Footer';
import { ThemeMode } from './types';
import { soundFX } from './utils/audio';

export default function App() {
  // Theme is locked permanently to rose-pastel (Sư phạm Hồng)
  const theme: ThemeMode = 'rose-pastel';
  const [audioMuted, setAudioMuted] = useState(false);

  const toggleAudio = () => {
    const nextState = !audioMuted;
    setAudioMuted(nextState);
    soundFX.enabled = !nextState;
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans transition-colors duration-500 bg-[#fdf1f6] text-[#4a2c3a]"
    >
      {/* Top Banner & Header */}
      <Header
        theme={theme}
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
