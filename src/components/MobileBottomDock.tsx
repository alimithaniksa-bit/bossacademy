import React from 'react';
import { BOSS_CONTACT } from '../data/bossData';
import { Phone, MessageSquare, CalendarCheck, Zap, Sparkles } from 'lucide-react';

interface MobileBottomDockProps {
  onOpenBooking: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-orange-500/30 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${BOSS_CONTACT.phoneLocal}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 bg-neutral-900 border border-white/10 hover:border-orange-500/50 text-white transition-all active:scale-95 group rounded-none"
          aria-label="Direct Call to Boss Sound"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-[11px] font-black uppercase tracking-tight text-white font-mono">CALL</span>
          </div>
          <span className="text-[9px] text-neutral-400 font-mono tracking-tighter">0334 353843</span>
        </a>

        {/* WhatsApp Direct Inquiry Button */}
        <a
          href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound%20System!%20I%20want%20to%20check%20affordable%20rates%20and%20availability%20for%20an%20event%20in%20Karachi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.2] flex flex-col items-center justify-center py-2 px-1 bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 text-[#25D366] transition-all active:scale-95 group rounded-none"
          aria-label="WhatsApp Chat"
        >
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span className="text-[11px] font-black uppercase tracking-tight text-[#25D366] font-mono">WHATSAPP</span>
          </div>
          <span className="text-[9px] text-[#25D366]/80 font-mono tracking-tighter">Instant 24/7 Reply</span>
        </a>

        {/* Book / Instant Quote Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] flex flex-col items-center justify-center py-2 px-2 bg-orange-500 hover:bg-orange-400 text-black font-black transition-all active:scale-95 shadow-md shadow-orange-500/20 rounded-none"
          aria-label="Open Quote Calculator"
        >
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 fill-black text-black" />
            <span className="text-[11px] font-black uppercase tracking-tight text-black font-heading">RESERVE RIG</span>
          </div>
          <span className="text-[9px] text-black/80 font-mono font-bold tracking-tighter">From PKR 16,500</span>
        </button>

      </div>
    </div>
  );
};
