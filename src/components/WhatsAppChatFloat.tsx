import React, { useState } from 'react';
import { BOSS_CONTACT } from '../data/bossData';
import { createWhatsAppUrl } from '../utils/whatsappHelper';
import { MessageSquare, X, Send, Sparkles, CheckCheck, Phone, ShieldCheck } from 'lucide-react';

export const WhatsAppChatFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMsg, setCustomMsg] = useState<string>('');

  const quickPrompts = [
    {
      title: '💍 Mehndi & Wedding Rig Quote',
      msg: 'Assalam o Alaikum Boss Sound! I want to check pricing for a wedding / mehndi sound setup in Karachi.'
    },
    {
      title: '⚡ Need Emergency Rig Today',
      msg: 'URGENT: Assalam o Alaikum! I need sound system & DJ setup for today in Karachi. Is a mobile crew available?'
    },
    {
      title: '🎧 DJ + Cold Sparkulars Package',
      msg: 'Assalam o Alaikum! Please share the price for a Pro DJ setup with 4x Cold Sparkular machines and low fog.'
    },
    {
      title: '🚜 Farmhouse / Super Highway Rig',
      msg: 'Assalam o Alaikum! We are hosting a farmhouse party on Super Highway / Gadap and need heavy bass subwoofers.'
    }
  ];

  const handleSendPrompt = (text: string) => {
    const url = createWhatsAppUrl(text);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = createWhatsAppUrl(customMsg);
    window.open(url, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Mini WhatsApp Window */}
      {isOpen && (
        <div className="w-[calc(100vw-24px)] max-w-[380px] bg-[#111111] border border-white/20 shadow-2xl overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-orange-500 p-4 text-black flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-heading font-black text-base">
                  B
                </div>
                <span className="w-3 h-3 bg-white border-2 border-black absolute bottom-0 right-0"></span>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-black uppercase tracking-tight leading-tight font-heading">BOSS SOUND SYSTEM</h4>
                <p className="text-[10px] text-black/80 font-mono font-bold uppercase flex items-center gap-1">
                  <span>ONLINE • KARACHI 24/7 DISPATCH</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-black hover:bg-black/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Chat Body & Quick Options */}
          <div className="p-4 space-y-3 bg-[#0A0A0A] max-h-[360px] overflow-y-auto text-left">
            
            {/* Agent Greeting Bubble */}
            <div className="bg-[#181818] p-3 border border-white/10 max-w-[90%] text-xs text-neutral-200 space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-orange-500 font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>BOSS SOUND KARACHI LOGISTICS</span>
              </div>
              <p className="font-normal leading-relaxed">
                Assalam o Alaikum! 👋 Welcome to Boss Sound System. How can we power your Karachi event rig?
              </p>
              <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-400 font-mono">
                <span>WhatsApp: {BOSS_CONTACT.phoneDisplay}</span>
                <CheckCheck className="w-3 h-3 text-orange-500" />
              </div>
            </div>

            {/* Quick 1-Tap Buttons */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-mono font-bold text-neutral-400 block pl-1">
                TAP FOR INSTANT WHATSAPP INQUIRY:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(q.msg)}
                  className="w-full p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-orange-500 text-left text-xs text-neutral-200 font-medium transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{q.title}</span>
                  <Send className="w-3 h-3 text-neutral-500 group-hover:text-orange-500 shrink-0" />
                </button>
              ))}
            </div>

          </div>

          {/* Footer Input Box */}
          <form onSubmit={handleSendCustom} className="p-3 bg-[#111111] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type event date / venue area..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 bg-neutral-900 border border-white/20 px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500 font-mono"
            />
            <button
              type="submit"
              className="p-2 bg-orange-500 hover:bg-orange-400 text-black transition-colors"
              title="Open in WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Direct call fallback */}
          <div className="bg-black px-4 py-2 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-2 font-mono">
            <Phone className="w-3 h-3 text-orange-500" />
            <span>DIRECT CALL: <a href={`tel:${BOSS_CONTACT.phoneLocal}`} className="text-orange-400 font-bold hover:underline">{BOSS_CONTACT.phoneDisplay}</a></span>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 px-5 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider text-xs shadow-2xl shadow-orange-900/60 transition-all hover:scale-105 active:scale-95 border-2 border-black"
        aria-label="WhatsApp Support"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="w-2.5 h-2.5 bg-black absolute -top-1 -right-1 animate-ping"></span>
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[10px] uppercase font-mono font-black text-black tracking-widest leading-tight">
            WHATSAPP 24/7
          </div>
          <div className="text-xs font-mono font-bold tracking-tight leading-tight">
            {BOSS_CONTACT.phoneDisplay}
          </div>
        </div>
      </button>

    </div>
  );
};

