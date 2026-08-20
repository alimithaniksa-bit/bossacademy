import React, { useState } from 'react';
import { EQUIPMENT_CATALOG, BOSS_CONTACT } from '../data/bossData';
import { EquipmentSpec } from '../types';
import { Disc, Zap, Volume2, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';

export const EquipmentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'Subwoofers & Bass', label: 'Subwoofers & Bass' },
    { id: 'Speakers & Line Arrays', label: 'Line Arrays' },
    { id: 'DJ Consoles & Mixers', label: 'DJ Decks' },
    { id: 'Stage & Effect Lighting', label: 'Beams & Pyros' },
    { id: 'Microphones & Audio Rig', label: 'Wireless Mics' }
  ];

  const filteredEquipment = activeCategory === 'all'
    ? EQUIPMENT_CATALOG
    : EQUIPMENT_CATALOG.filter(item => item.category === activeCategory);

  return (
    <section id="equipment" className="py-24 bg-[#0D0D0D] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              04 / HARDWARE ARSENAL
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            CONCERT-GRADE <span className="text-stroke-white hover:text-white transition-colors">AUDIO RIGS</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Zero cheap unbranded speakers. Every Boss Sound System setup is powered by world-class touring gear from Pioneer DJ, RCF Italy, JBL Professional, and Shure.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-black border-orange-500 shadow-md'
                  : 'bg-neutral-900/80 border-white/10 text-neutral-300 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item: EquipmentSpec, idx: number) => (
            <div
              key={item.id}
              className="bg-[#111111] border border-white/10 hover:border-orange-500 transition-all duration-200 overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-52 w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-black px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-orange-500 border border-white/10 font-mono">
                  {item.brand}
                </div>

                <div className="absolute top-3 right-3 text-white/40 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-neutral-400 block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-black uppercase text-white leading-tight font-heading">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs bullets */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-neutral-400">HARDWARE SPECS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 bg-neutral-900 border border-white/10 text-neutral-300 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Punchline Highlight */}
                <div className="p-3 bg-neutral-950 border border-orange-500/30 text-xs text-orange-400 font-mono flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="uppercase tracking-wide font-bold">{item.punchline}</span>
                </div>

                {/* WhatsApp button for this gear */}
                <a
                  href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound!%20I%20want%20to%20rent%20the%20${encodeURIComponent(item.name)}%20for%20an%20event%20in%20Karachi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-neutral-900 hover:bg-orange-500 hover:text-black text-neutral-200 border border-white/10 hover:border-orange-500 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-mono"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-orange-500 group-hover:text-black" />
                  <span>CHECK GEAR AVAILABILITY</span>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

