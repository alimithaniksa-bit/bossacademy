import React, { useState } from 'react';
import { PACKAGES, BOSS_CONTACT } from '../data/bossData';
import { generatePackageWhatsAppUrl } from '../utils/whatsappHelper';
import { SoundPackage } from '../types';
import { CheckCircle2, MessageSquare, CalendarCheck, Zap, Users, Sparkles, ArrowUpRight } from 'lucide-react';

interface PackageCardGridProps {
  onSelectPackageForBooking: (packageId: string) => void;
}

export const PackageCardGrid: React.FC<PackageCardGridProps> = ({ onSelectPackageForBooking }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'weddings' | 'parties' | 'corporate'>('all');

  const filteredPackages = PACKAGES.filter(pkg => {
    if (filterCategory === 'weddings') return pkg.id === 'pkg-mehndi' || pkg.id === 'pkg-grand-wedding' || pkg.id === 'pkg-qawwali';
    if (filterCategory === 'parties') return pkg.id === 'pkg-dj-farmhouse' || pkg.id === 'pkg-concert';
    if (filterCategory === 'corporate') return pkg.id === 'pkg-corporate' || pkg.id === 'pkg-concert';
    return true;
  });

  return (
    <section id="packages" className="py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
                03 / SOUND CATALOG & PACKAGES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
              CALIBRATED <span className="text-stroke-white hover:text-white transition-colors">RIG PACKAGES</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
              Complete professional packages featuring active line arrays, chest-punch dual 18" subwoofers, Pioneer CDJ decks, moving beam lighting, and on-site acoustic sound engineers.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-neutral-900/90 p-1.5 border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-orange-500 text-black shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setFilterCategory('weddings')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === 'weddings'
                  ? 'bg-orange-500 text-black shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              Weddings & Mehndi
            </button>
            <button
              onClick={() => setFilterCategory('parties')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === 'parties'
                  ? 'bg-orange-500 text-black shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              DJ & Farmhouse
            </button>
            <button
              onClick={() => setFilterCategory('corporate')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                filterCategory === 'corporate'
                  ? 'bg-orange-500 text-black shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              Corporate
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg: SoundPackage, idx: number) => (
            <div
              key={pkg.id}
              className={`bg-[#111111] border transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-orange-500 relative ${
                pkg.popular
                  ? 'border-orange-500/80 shadow-2xl shadow-orange-500/5'
                  : 'border-white/10'
              }`}
            >
              {/* Top Accent Line */}
              <div className={`h-1 w-full ${pkg.popular ? 'bg-orange-500' : 'bg-transparent group-hover:bg-orange-500'} transition-colors`}></div>

              {/* Media Thumbnail */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>

                {pkg.badge && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-black font-black text-[10px] uppercase tracking-widest px-2.5 py-1 flex items-center gap-1 shadow-lg">
                    <Zap className="w-3 h-3 fill-black" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div className="absolute top-3 right-3 text-white/40 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] text-orange-400 font-mono font-bold tracking-widest uppercase block mb-0.5">
                    {pkg.bestFor}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white leading-tight font-heading">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Package Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6 text-left">
                
                {/* Price and guest capacity */}
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[11px] uppercase font-mono text-neutral-400">STARTS AT</span>
                    <span className="text-3xl font-black text-orange-500 font-heading">
                      PKR {pkg.basePricePKR.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-neutral-900 px-3 py-2 border border-white/10">
                    <Users className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="uppercase font-bold">{pkg.capacityText}</span>
                  </div>
                  
                  <p className="text-xs text-neutral-400 mt-2.5 italic leading-relaxed">
                    "{pkg.tagline}"
                  </p>
                </div>

                {/* Equipment Included */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-black uppercase tracking-wider text-neutral-300 font-mono">
                    RIG SPECIFICATIONS:
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {pkg.equipment.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                    {pkg.equipment.length > 4 && (
                      <li className="text-[11px] text-orange-400 font-mono pl-5">
                        + {pkg.equipment.length - 4} MORE HARDWARE ITEMS
                      </li>
                    )}
                  </ul>
                </div>

                {/* Power details */}
                <div className="text-[11px] text-neutral-400 bg-neutral-950 p-2.5 border border-white/5 font-mono">
                  <span className="font-bold text-white uppercase">POWER:</span> {pkg.powerRequirement}
                </div>

                {/* Dual Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onSelectPackageForBooking(pkg.id)}
                    className="w-full py-3.5 px-4 bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
                  >
                    <CalendarCheck className="w-4 h-4 text-black" />
                    <span>SELECT & CUSTOMIZE</span>
                  </button>

                  <a
                    href={generatePackageWhatsAppUrl(pkg.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 border border-white/20 hover:border-white text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors font-mono"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
                    <span>WhatsApp Quote ({BOSS_CONTACT.phoneDisplay})</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom requirements callout */}
        <div className="mt-14 bg-[#111111] border border-white/10 p-8 sm:p-10 text-left flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-orange-500 pointer-events-none"></div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              BESPOKE ACOUSTICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading">
              NEED A CUSTOM SOUND & TRUSS RIG IN KARACHI?
            </h3>
            <p className="text-sm text-neutral-400 max-w-2xl font-normal leading-relaxed">
              From multi-day weddings to international artists, school festivals, or private farmhouse DJ staging, our audio engineers design custom sound arrays tailored to your exact venue dimensions.
            </p>
          </div>
          <a
            href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound%20System!%20I%20have%20a%20custom%20sound%20and%20stage%20requirement%20for%20an%20event%20in%20Karachi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-orange-500 text-black hover:text-black font-black py-4 px-8 text-xs uppercase tracking-wider flex items-center gap-3 whitespace-nowrap transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>DISCUSS CUSTOM RIG</span>
          </a>
        </div>

      </div>
    </section>
  );
};

