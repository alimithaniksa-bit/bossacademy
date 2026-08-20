import React from 'react';
import { BOSS_CONTACT, PACKAGES, KARACHI_AREAS } from '../data/bossData';
import { MessageSquare, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-neutral-400 text-xs text-left relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="bg-[#111111] border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold block mb-2">
              READY TO LOCK IN YOUR DATE?
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white font-heading tracking-tighter leading-[0.9]">
              UNLEASH MAXIMUM SOUND FOR YOUR <span className="text-stroke-white hover:text-white transition-colors">KARACHI EVENT</span>
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 font-normal">
              Direct phone or WhatsApp booking with instant date reservation and setup dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 shrink-0">
            <a
              href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl shadow-orange-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP: {BOSS_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`tel:${BOSS_CONTACT.phoneLocal}`}
              className="px-6 py-3.5 bg-neutral-900 hover:bg-white hover:text-black text-neutral-200 border border-white/20 font-black uppercase tracking-wider text-xs flex items-center gap-2 transition-all font-mono"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>CALL: {BOSS_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 text-black flex items-center justify-center font-heading font-black text-lg">
                B
              </div>
              <span className="text-xl font-black uppercase text-white font-heading tracking-tight">
                BOSS <span className="text-orange-500">SOUND SYSTEM</span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed font-normal">
              Karachi's premier physical sound system rentals, line array acoustics, wedding DJs, stage lighting trusses, cold sparkulars, and corporate audio visual production.
            </p>

            <div className="space-y-2 pt-2 text-neutral-300 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>HOTLINE: <a href={`tel:${BOSS_CONTACT.phoneLocal}`} className="hover:text-orange-400 text-white font-bold">{BOSS_CONTACT.phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>WHATSAPP: <a href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-orange-400 hover:underline font-bold">{BOSS_CONTACT.phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>KARACHI, SINDH, PAKISTAN (ALL ZONES)</span>
              </div>
            </div>
          </div>

          {/* Sound Packages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              EVENT SOUND RIGS
            </div>
            <ul className="space-y-2 text-neutral-400 font-mono text-xs">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <a
                    href="#calculator"
                    onClick={onOpenBooking}
                    className="hover:text-orange-400 transition-colors flex items-center justify-between"
                  >
                    <span className="uppercase">{pkg.name}</span>
                    <span className="text-[10px] text-neutral-500">
                      PKR {pkg.basePricePKR.toLocaleString()}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Karachi Delivery Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              KARACHI COVERAGE ZONES
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-neutral-400 font-mono">
              {KARACHI_AREAS.slice(0, 10).map((area) => (
                <a key={area.id} href="#coverage" className="hover:text-orange-400 truncate uppercase">
                  • {area.name.split('(')[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Hours & Assurance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              OPERATIONS
            </div>
            <div className="p-4 bg-neutral-950 border border-white/10 space-y-2 text-[11px] font-mono">
              <div className="text-orange-400 font-bold flex items-center gap-2 uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>24/7 DISPATCH</span>
              </div>
              <p className="text-neutral-400 font-normal leading-snug">
                Round-the-clock sound tech response for weekend weddings and overnight farmhouse parties across Karachi.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} BOSS SOUND SYSTEM KARACHI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1 text-neutral-400 uppercase">
            <span>HEAVYWEIGHT BASS & PROFESSIONAL ACOUSTICS IN KARACHI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

