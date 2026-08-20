import React, { useState, useEffect } from 'react';
import { AUDIO_SAMPLES } from '../data/bossData';
import { soundEngine } from '../utils/audioSynth';
import { Volume2, VolumeX, Play, Square, Activity, Radio, Sparkles, ArrowRight } from 'lucide-react';

interface AudioTestBarProps {
  onSelectForBooking?: (genre: string) => void;
}

export const AudioTestBar: React.FC<AudioTestBarProps> = ({ onSelectForBooking }) => {
  const [activeSampleId, setActiveSampleId] = useState<string>('audio-desi');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const selectedSample = AUDIO_SAMPLES.find(s => s.id === activeSampleId) || AUDIO_SAMPLES[0];

  useEffect(() => {
    return () => {
      soundEngine.stop();
    };
  }, []);

  const handlePlayToggle = (sampleId?: string) => {
    const targetId = sampleId || activeSampleId;
    const sample = AUDIO_SAMPLES.find(s => s.id === targetId);
    if (!sample) return;

    if (isPlaying && activeSampleId === targetId) {
      soundEngine.stop();
      setIsPlaying(false);
      return;
    }

    setActiveSampleId(targetId);
    const success = soundEngine.playTrack(sample.audioToneType, (step) => {
      setCurrentStep(step);
    });

    if (success) {
      setIsPlaying(true);
    }
  };

  return (
    <section id="audio-demo" className="py-20 bg-[#0D0D0D] border-b border-white/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Typography */}
        <div className="text-left max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              02 / DSP ACOUSTIC BENCHMARK
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            TEST THE <span className="text-stroke-white hover:text-white transition-colors">FREQUENCY</span> PUNCH
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Real acoustic synthesis engine running in your browser. Test sub-bass warmth, Dhol punchiness, and Sufi acoustic clarity calibrated for Karachi wedding halls and farmhouses.
          </p>
        </div>

        {/* Audio Player Container */}
        <div className="max-w-5xl mx-auto bg-[#111111] border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          {/* Genre selector tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {AUDIO_SAMPLES.map((sample, idx) => {
              const isCurrent = activeSampleId === sample.id;
              const isCurrentAndPlaying = isCurrent && isPlaying;
              
              return (
                <button
                  key={sample.id}
                  onClick={() => {
                    setActiveSampleId(sample.id);
                    if (isPlaying) {
                      soundEngine.playTrack(sample.audioToneType, (step) => setCurrentStep(step));
                    }
                  }}
                  className={`p-4 text-left border transition-all relative overflow-hidden ${
                    isCurrent
                      ? 'bg-orange-500 text-black border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-neutral-900/90 border-white/10 text-neutral-300 hover:text-white hover:border-white/30'
                  }`}
                >
                  {isCurrentAndPlaying && (
                    <div className="absolute top-3 right-3 flex items-end gap-1 h-3">
                      <div className="w-1 bg-black h-2 animate-[equalizer_0.6s_ease-in-out_infinite]"></div>
                      <div className="w-1 bg-black h-3 animate-[equalizer_0.4s_ease-in-out_infinite]"></div>
                      <div className="w-1 bg-black h-1.5 animate-[equalizer_0.8s_ease-in-out_infinite]"></div>
                    </div>
                  )}
                  <div className={`text-[10px] font-mono font-black uppercase tracking-widest mb-1 ${isCurrent ? 'text-black/70' : 'text-orange-500'}`}>
                    0{idx + 1} • {sample.bpm} BPM
                  </div>
                  <div className="text-base font-black uppercase tracking-tight font-heading truncate">
                    {sample.genre}
                  </div>
                  <div className={`text-xs mt-0.5 truncate ${isCurrent ? 'text-black/80 font-medium' : 'text-neutral-400'}`}>
                    {sample.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Player Deck */}
          <div className="bg-[#0A0A0A] p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Info & Tone description */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-orange-500 text-black">
                  {selectedSample.genre}
                </span>
                <span className="text-xs text-neutral-400 font-mono">{selectedSample.bpm} BPM</span>
              </div>
              <h3 className="text-xl font-black uppercase text-white font-heading tracking-tight mb-1">
                {selectedSample.title}
              </h3>
              <p className="text-xs text-neutral-400">{selectedSample.description}</p>
              <div className="mt-2 text-xs text-orange-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider font-bold">{selectedSample.vibe}</span>
              </div>
            </div>

            {/* Middle: Frequency Visualizer Wave Bars */}
            <div className="flex items-center gap-1.5 h-14 px-5 py-2 bg-neutral-950 border border-white/10 w-full md:w-auto justify-center">
              {Array.from({ length: 16 }).map((_, i) => {
                const isActiveBeat = isPlaying && currentStep === i;
                const isKickBeat = isPlaying && (i === 0 || i === 4 || i === 8 || i === 12);
                
                let height = '15%';
                if (isPlaying) {
                  if (isActiveBeat) height = '95%';
                  else if (isKickBeat) height = '80%';
                  else height = `${25 + ((i * 13) % 55)}%`;
                }

                return (
                  <div
                    key={i}
                    className={`w-1.5 transition-all duration-100 ${
                      isActiveBeat
                        ? 'bg-orange-400 shadow-[0_0_10px_#f97316]'
                        : isPlaying
                        ? 'bg-orange-500/70'
                        : 'bg-neutral-800'
                    }`}
                    style={{ height }}
                  ></div>
                );
              })}
            </div>

            {/* Right: Master Play / Stop CTA */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <button
                onClick={() => handlePlayToggle()}
                className={`flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-7 py-4 font-black uppercase text-xs tracking-wider transition-all shadow-lg ${
                  isPlaying
                    ? 'bg-red-600 hover:bg-red-500 text-white'
                    : 'bg-orange-500 hover:bg-orange-400 text-black shadow-orange-500/20'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-4 h-4 fill-current" />
                    <span>MUTE ENGINE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>PLAY SOUND TEST</span>
                  </>
                )}
              </button>

              {onSelectForBooking && (
                <a
                  href="#calculator"
                  onClick={() => onSelectForBooking(selectedSample.title)}
                  className="hidden sm:flex items-center gap-1.5 px-5 py-4 bg-neutral-900 hover:bg-white hover:text-black text-neutral-200 text-xs font-bold uppercase tracking-wider border border-white/20 transition-all whitespace-nowrap"
                >
                  <span>RESERVE RIG</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-500 uppercase">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-orange-500" />
              DSP ACOUSTIC SUB-BASS EMULATION ACTIVE
            </span>
            <span>KARACHI BANQUET ACOUSTIC PROFILE</span>
          </div>

        </div>

      </div>
    </section>
  );
};

