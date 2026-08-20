import React, { useState } from 'react';
import { FAQS, BOSS_CONTACT } from '../data/bossData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              08 / FAQ & DETAILS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            FREQUENTLY <span className="text-stroke-white hover:text-white transition-colors">ASKED QUESTIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Everything you need to know about sound system rentals, generator backups, DJ playlists, and Karachi venue coordination.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#111111] border-orange-500 shadow-xl'
                    : 'bg-[#111111] border-white/10 hover:border-white/30'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-black uppercase text-sm sm:text-base text-white font-heading tracking-wide"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp helper box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#111111] border border-white/10 text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-black uppercase text-white font-heading">HAVE A CUSTOM KARACHI VENUE REQUIREMENT?</h4>
            <p className="text-xs text-neutral-400 font-mono mt-1">Chat directly with the sound crew on WhatsApp ({BOSS_CONTACT.phoneDisplay}).</p>
          </div>
          <a
            href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound%20System!%20I%20have%20a%20question%20about%20your%20sound%20rental%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-lg shadow-orange-500/20"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};

