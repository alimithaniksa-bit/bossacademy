import React, { useState, useEffect } from 'react';
import { BOSS_CONTACT } from '../data/bossData';
import { generateQuickInquiryUrl } from '../utils/whatsappHelper';
import { Volume2, Phone, MessageSquare, CalendarCheck, Menu, X, Radio } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenAudioTest: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenAudioTest }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-4'
    }`}>
      {/* Top micro banner for Karachi WhatsApp direct reach */}
      <div className="hidden lg:block bg-neutral-900/90 border-b border-white/10 text-xs py-1.5 px-6 mb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-neutral-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="font-black text-orange-500 uppercase tracking-widest text-[10px]">24/7 Dispatch Live:</span>
            <span className="text-neutral-400 text-xs font-mono">DHA • Clifton • Gulshan • PECHS • Johar • Highway Farmhouses</span>
          </div>
          <div className="flex items-center gap-5 text-neutral-300">
            <a 
              href={`tel:${BOSS_CONTACT.phoneLocal}`}
              className="hover:text-orange-500 transition-colors flex items-center gap-1.5 font-mono text-xs font-bold"
            >
              <Phone className="w-3 h-3 text-orange-500" />
              <span>TEL: {BOSS_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-neutral-700">/</span>
            <a 
              href={generateQuickInquiryUrl('Karachi Event Inquiry')}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white font-bold flex items-center gap-1.5 text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: {BOSS_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Bold Typography Style */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-orange-500 text-black font-black flex items-center justify-center text-lg tracking-tighter shadow-lg shadow-orange-500/20 group-hover:bg-white group-hover:text-black transition-colors">
              B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tighter text-white uppercase font-heading">
                  BOSS <span className="text-orange-500">SOUND</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] bg-white/10 text-white border border-white/20">
                  KHI
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Physical DJ & Event Sound</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-300">
            <a href="#packages" className="hover:text-orange-500 transition-colors">Packages</a>
            <a href="#equipment" className="hover:text-orange-500 transition-colors">Rig Specs</a>
            <a href="#calculator" className="hover:text-orange-500 transition-colors">Quote Engine</a>
            <a href="#coverage" className="hover:text-orange-500 transition-colors text-orange-400 font-black flex items-center gap-1">
              <span>Local Rates</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            </a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
            <button 
              onClick={onOpenAudioTest}
              className="flex items-center gap-1.5 text-orange-400 hover:text-white bg-orange-500/10 hover:bg-orange-500/20 px-3 py-1.5 border border-orange-500/30 transition-all font-mono text-[11px]"
            >
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>TEST DECK</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound%20System!%20I%20want%20to%20inquire%20about%20event%20sound%20booking%20in%20Karachi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 border border-white/20 hover:border-white text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono">{BOSS_CONTACT.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-black" />
              <span>Book System</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-orange-500 text-black font-bold"
              title="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-white/10 px-5 pt-4 pb-6 space-y-4 mt-3">
          <div className="flex flex-col gap-2 font-bold uppercase tracking-wider text-xs text-neutral-300">
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 hover:bg-neutral-900 border-b border-white/5 flex items-center justify-between"
            >
              <span>Sound & DJ Packages</span>
              <span className="text-orange-500 font-mono">From Rs. 35,000</span>
            </a>
            <a 
              href="#equipment" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 hover:bg-neutral-900 border-b border-white/5"
            >
              Physical Equipment & Rigs
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 hover:bg-neutral-900 border-b border-white/5"
            >
              Instant Quote Calculator
            </a>
            <a 
              href="#coverage" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 hover:bg-neutral-900 border-b border-white/5 flex items-center justify-between"
            >
              <span>Karachi Area Rates & Transit</span>
              <span className="text-orange-500 font-mono text-[11px]">13+ Areas</span>
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 hover:bg-neutral-900 border-b border-white/5"
            >
              Customer Reviews
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudioTest();
              }}
              className="p-2.5 bg-orange-500/10 text-orange-400 border border-orange-500/30 text-left flex items-center gap-2"
            >
              <Radio className="w-4 h-4" />
              <span>Test Audio & Bass Beats Live</span>
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 border border-white/20 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-orange-500" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 bg-orange-500 text-black font-black text-xs uppercase tracking-wider"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

