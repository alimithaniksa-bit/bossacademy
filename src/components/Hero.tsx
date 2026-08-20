import React from 'react';
import { BOSS_CONTACT } from '../data/bossData';
import { generateQuickInquiryUrl } from '../utils/whatsappHelper';
import { MessageSquare, CalendarCheck, ShieldCheck, MapPin, Sparkles, Disc, Radio, Flame, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAudioTest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAudioTest }) => {
  return (
    <section className="relative min-h-[95vh] pt-32 sm:pt-36 pb-16 overflow-hidden flex flex-col justify-center bg-[#0A0A0A] border-b border-white/10">
      
      {/* Background Graphic & Subtle Ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-orange-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-neutral-800/40 blur-[120px] rounded-full"></div>
        
        {/* Subtle technical grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Copy & Hero Typography (Col 7 or 8) */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left space-y-6">
            
            {/* Top Micro Label */}
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest">
                EST. 2018 KARACHI
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
                HIGH-FIDELITY SOUND REINFORCEMENT
              </span>
            </div>

            {/* Massive Bold Typography Heading */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.88] tracking-tighter text-white font-heading">
                KARACHI<br />
                <span className="text-stroke-white hover:text-white transition-colors">
                  LOUDER.
                </span>
              </h1>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs font-mono text-orange-500 uppercase tracking-widest font-black">
                  [ PRO DJ CONSOLES • LINE ARRAY BASS • STAGE BEAMS ]
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Heavyweight concert acoustics, chest-thumping dual 18" subwoofers, Pioneer CDJ-3000 decks, stage lighting trusses, and cold pyros delivered across Karachi banquets and highway farmhouses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* WhatsApp Primary CTA */}
              <a
                href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound%20System!%20I%20want%20to%20check%20availability%20and%20book%20a%20sound%20setup%20for%20my%20event%20in%20Karachi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-black font-black py-4 px-8 text-sm sm:text-base uppercase tracking-tight flex items-center justify-center gap-3 transition-colors shadow-lg shadow-orange-500/25 group"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>INQUIRE: {BOSS_CONTACT.phoneDisplay}</span>
              </a>

              {/* Online Quote / Booking Button */}
              <button
                onClick={onOpenBooking}
                className="border-2 border-white/20 hover:border-white text-white font-black py-4 px-8 text-sm sm:text-base uppercase tracking-tight transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-orange-500" />
                <span>Calculate & Reserve</span>
              </button>
            </div>

            {/* Audio Demo & Quick Stats Row */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenAudioTest}
                className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-900 border border-white/10 hover:border-orange-500 text-neutral-300 hover:text-white transition-all text-xs font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                <span className="font-bold text-orange-400 uppercase">Live Sound Demo:</span>
                <span>Test Dhol, EDM & Qawwali Bass ▶</span>
              </button>

              <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
                <div><strong className="text-white font-bold font-heading text-sm">2,800+</strong> EVENTS</div>
                <div className="text-neutral-700">/</div>
                <div><strong className="text-white font-bold font-heading text-sm">12+ YRS</strong> EXP</div>
                <div className="text-neutral-700">/</div>
                <div><strong className="text-orange-500 font-bold font-heading text-sm">0%</strong> FAILURE</div>
              </div>
            </div>

          </div>

          {/* Right Services & Rig Specs Panel (Col 4) */}
          <div className="lg:col-span-4 bg-[#111111] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-500 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <h3 className="text-xs uppercase tracking-[0.3em] text-orange-500 font-black">
                  CORE RIG CAPABILITIES
                </h3>
                <span className="text-[10px] font-mono text-neutral-500">SYS_V2.6</span>
              </div>

              <ul className="space-y-5">
                <li className="group pb-4 border-b border-white/5">
                  <div className="text-xs text-white/40 font-mono mb-1">01 / ACOUSTICS</div>
                  <div className="text-lg font-black text-white uppercase font-heading group-hover:text-orange-500 transition-colors flex items-center justify-between">
                    <span>PHYSICAL LINE ARRAYS</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">Dual 18" subwoofers with crisp RCF & JBL line array modules.</p>
                </li>

                <li className="group pb-4 border-b border-white/5">
                  <div className="text-xs text-white/40 font-mono mb-1">02 / HARDWARE</div>
                  <div className="text-lg font-black text-white uppercase font-heading group-hover:text-orange-500 transition-colors flex items-center justify-between">
                    <span>PIONEER PRO DJ DECKS</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">CDJ-3000 players + DJM-900 NXS2 mixers with pro sound tech.</p>
                </li>

                <li className="group pb-4 border-b border-white/5">
                  <div className="text-xs text-white/40 font-mono mb-1">03 / VISUAL FX</div>
                  <div className="text-lg font-black text-white uppercase font-heading group-hover:text-orange-500 transition-colors flex items-center justify-between">
                    <span>STAGE LIGHTS & PYRO</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-orange-500 transition-all" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">Sharpie moving beams, cold indoor fireworks & dry-ice low fog.</p>
                </li>
              </ul>
            </div>

            {/* Live WhatsApp Status Box */}
            <div className="bg-orange-500/10 border border-orange-500/30 p-4 mt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-white">DISPATCH READY</span>
                </div>
                <span className="text-[10px] font-mono text-orange-400">{BOSS_CONTACT.phoneDisplay}</span>
              </div>
              <p className="text-xs text-neutral-300">
                Direct WhatsApp contact for fast rate quotes, date availability & custom rig sizing.
              </p>
              <a
                href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2 bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-wider transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Marquee Ticker at the bottom of Hero */}
      <div className="w-full overflow-hidden whitespace-nowrap py-3 mt-12 border-t border-b border-white/10 bg-neutral-950 select-none">
        <div className="animate-marquee flex items-center text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-neutral-400">
          <span className="mx-6 text-orange-500">★ BOSS SOUND SYSTEM</span>
          <span className="mx-6">KARACHI'S NUMBER 1 EVENT SOUND</span>
          <span className="mx-6 text-white">DHA • CLIFTON • GULSHAN • PECHS • JOHAR • FARMS</span>
          <span className="mx-6 text-orange-500">★ PIONEER CDJ-3000</span>
          <span className="mx-6">LINE ARRAY ACOUSTICS</span>
          <span className="mx-6 text-white">CALL / WA: {BOSS_CONTACT.phoneDisplay}</span>
          <span className="mx-6 text-orange-500">★ BOSS SOUND SYSTEM</span>
          <span className="mx-6">KARACHI'S NUMBER 1 EVENT SOUND</span>
          <span className="mx-6 text-white">DHA • CLIFTON • GULSHAN • PECHS • JOHAR • FARMS</span>
          <span className="mx-6 text-orange-500">★ PIONEER CDJ-3000</span>
          <span className="mx-6">LINE ARRAY ACOUSTICS</span>
          <span className="mx-6 text-white">CALL / WA: {BOSS_CONTACT.phoneDisplay}</span>
        </div>
      </div>

    </section>
  );
};

