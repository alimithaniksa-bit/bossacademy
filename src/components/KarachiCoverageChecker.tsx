import React, { useState, useMemo } from 'react';
import { KARACHI_AREAS, BOSS_CONTACT } from '../data/bossData';
import { 
  MapPin, Clock, Truck, ShieldCheck, MessageSquare, CheckCircle2, 
  Search, Zap, Banknote, Building2, Flame, Sparkles, Filter 
} from 'lucide-react';

export const KarachiCoverageChecker: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('dha');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeZone, setActiveZone] = useState<string>('All');
  const [showMatrix, setShowMatrix] = useState<boolean>(true);

  const zones = ['All', 'South', 'East', 'Central', 'Malir / Highway', 'Korangi', 'West'];

  const filteredAreas = useMemo(() => {
    return KARACHI_AREAS.filter(area => {
      const matchesZone = activeZone === 'All' || area.zone === activeZone;
      const matchesSearch = area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.popularVenues.some(v => v.toLowerCase().includes(searchQuery.toLowerCase())) ||
        area.zone.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesZone && matchesSearch;
    });
  }, [activeZone, searchQuery]);

  const selectedArea = KARACHI_AREAS.find(a => a.id === selectedAreaId) || KARACHI_AREAS[0];

  const getDeliveryBadge = (rate: number) => {
    if (rate === 0) {
      return (
        <span className="px-2 py-0.5 bg-orange-500 text-black font-mono font-black text-[10px] uppercase">
          FREE TRANSIT
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 bg-neutral-800 text-orange-400 font-mono font-bold text-[10px] uppercase border border-orange-500/30">
        PKR {rate.toLocaleString()}
      </span>
    );
  };

  const getPowerGridColor = (status: string) => {
    if (status === 'Stable Grid') return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20';
    if (status.includes('Off-Grid')) return 'text-orange-400 border-orange-500/40 bg-orange-950/30';
    return 'text-amber-400 border-amber-500/30 bg-amber-950/20';
  };

  return (
    <section id="coverage" className="py-24 bg-[#0D0D0D] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              06 / LOCAL KARACHI RATES & LOGISTICS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            KARACHI LOCAL <span className="text-stroke-white hover:text-white transition-colors">AREA RATES</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Transparent district-wise equipment rental rates, local transit fees, power grid assessments, and verified venue staging across all 7 districts of Karachi and Super Highway farmhouses.
          </p>
        </div>

        {/* Zone Filter & Search Controls */}
        <div className="bg-[#111111] border border-white/10 p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Zone Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-orange-500 shrink-0 hidden sm:block mr-1" />
            {zones.map(z => (
              <button
                key={z}
                onClick={() => setActiveZone(z)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase whitespace-nowrap transition-all border ${
                  activeZone === z
                    ? 'bg-orange-500 text-black border-orange-500'
                    : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {z}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search area (e.g. DHA, Johar, Dua Farm)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-white/20 pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 font-mono"
            />
          </div>

        </div>

        {/* Interactive Area Selector and Dispatch Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Area List Selector (5 cols) */}
          <div className="lg:col-span-5 bg-[#111111] border border-white/10 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
                  SELECT KARACHI NEIGHBORHOOD ({filteredAreas.length}):
                </span>
                <span className="text-[10px] font-mono text-orange-400 font-bold uppercase">
                  ZONE: {activeZone}
                </span>
              </div>

              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredAreas.length === 0 ? (
                  <div className="p-8 text-center text-xs font-mono text-neutral-500 border border-dashed border-white/10">
                    No areas found matching "{searchQuery}".
                  </div>
                ) : (
                  filteredAreas.map((area) => {
                    const isSelected = area.id === selectedAreaId;
                    return (
                      <button
                        key={area.id}
                        onClick={() => setSelectedAreaId(area.id)}
                        className={`w-full p-3.5 text-left border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-orange-500 text-black border-orange-500 font-bold shadow-md'
                            : 'bg-neutral-900/90 border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-black' : 'text-orange-500'}`} />
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wide leading-tight">{area.shortName || area.name}</div>
                            <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-black/80' : 'text-neutral-500'}`}>
                              Zone: {area.zone} • ~{area.dispatchTimeMinutes}m ETA
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          {isSelected ? (
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-black text-orange-400 font-black">
                              {area.deliveryRatePKR === 0 ? 'FREE' : `+PKR ${area.deliveryRatePKR.toLocaleString()}`}
                            </span>
                          ) : (
                            getDeliveryBadge(area.deliveryRatePKR)
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-left text-xs text-neutral-400 flex items-center justify-between font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>All Karachi zones covered 24/7</span>
              </div>
              <button
                onClick={() => setShowMatrix(!showMatrix)}
                className="text-[11px] text-orange-400 hover:underline uppercase font-bold"
              >
                {showMatrix ? 'Hide Rates Table' : 'View Full Rates Matrix ↓'}
              </button>
            </div>
          </div>

          {/* Area Dispatch & Local Rates Details Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
            
            {/* Ambient background badge */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-orange-500 pointer-events-none font-heading font-black text-9xl">
              PKR
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Header with Title and Zone Status */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-orange-500">
                      ZONE: {selectedArea.zone} KARACHI
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 border ${getPowerGridColor(selectedArea.powerGridStability)}`}>
                      {selectedArea.powerGridStability}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading">
                    {selectedArea.name}
                  </h3>
                </div>

                <div className="px-3.5 py-2 bg-neutral-950 border border-orange-500/50 text-left">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase block">LOCAL TRANSIT FEE</span>
                  <span className="text-sm font-black font-mono text-orange-400 uppercase">
                    {selectedArea.deliveryRatePKR === 0 ? 'FREE / INCLUDED' : `PKR ${selectedArea.deliveryRatePKR.toLocaleString()}`}
                  </span>
                </div>
              </div>

              {/* Local Area Rates Breakdown Cards */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-500 block mb-2.5">
                  LOCAL SOUND & RIG RENTAL RATES IN {selectedArea.shortName.toUpperCase()}:
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* Standard Setup */}
                  <div className="p-3.5 bg-neutral-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">Standard Mehndi</span>
                    <div className="text-base font-black text-white font-mono mt-1">
                      PKR {selectedArea.standardSoundSetupRatePKR.toLocaleString()}
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500 block mt-0.5">2x Tops + Subs + Mics</span>
                  </div>

                  {/* DJ Party Beast */}
                  <div className="p-3.5 bg-neutral-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">DJ Party Rig</span>
                    <div className="text-base font-black text-orange-500 font-mono mt-1">
                      PKR {selectedArea.djPartyRigRatePKR.toLocaleString()}
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500 block mt-0.5">Pro DJ + Pyros + Bass</span>
                  </div>

                  {/* Royal Wedding Line Array */}
                  <div className="p-3.5 bg-neutral-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">Barat Line Array</span>
                    <div className="text-base font-black text-white font-mono mt-1">
                      PKR {selectedArea.weddingGrandRigRatePKR.toLocaleString()}
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500 block mt-0.5">Line Arrays + Moving Heads</span>
                  </div>

                  {/* Generator Backup */}
                  <div className="p-3.5 bg-neutral-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block font-bold">Silent Gen (15kVA)</span>
                    <div className="text-base font-black text-neutral-300 font-mono mt-1">
                      PKR {selectedArea.generatorBackupRatePKR.toLocaleString()}
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500 block mt-0.5">With fuel & auto switch</span>
                  </div>

                </div>
              </div>

              {/* Metrics & Logistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-950 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="uppercase font-bold">AVERAGE DISPATCH ETA</span>
                  </div>
                  <div className="text-2xl font-black text-white font-heading">
                    {selectedArea.dispatchTimeMinutes} MINUTES
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    From nearest Karachi staging warehouse hub
                  </div>
                </div>

                <div className="p-4 bg-neutral-950 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
                    <Truck className="w-4 h-4 text-orange-500" />
                    <span className="uppercase font-bold">STAGING CREW</span>
                  </div>
                  <div className="text-sm font-black uppercase text-white font-heading">
                    {selectedArea.setupTeam}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Includes 2 Audio Engineers & Rig Supervisor
                  </div>
                </div>
              </div>

              {/* Popular Venues in this Area */}
              <div>
                <div className="flex items-center gap-2 text-neutral-300 text-xs font-mono font-bold uppercase mb-2">
                  <Building2 className="w-4 h-4 text-orange-500" />
                  <span>PROMINENT VENUES & LAWNS SERVED IN {selectedArea.shortName.toUpperCase()}:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArea.popularVenues.map((venue, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-neutral-900 text-neutral-300 border border-white/10 text-xs font-mono uppercase"
                    >
                      • {venue}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coverage Note */}
              <div className="p-3.5 bg-neutral-900 border border-orange-500/30 text-xs text-neutral-200 space-y-1 font-mono">
                <span className="font-bold text-orange-400 uppercase tracking-wider block">LOGISTICS & ACOUSTICS SUMMARY:</span>
                <p className="text-neutral-300 leading-relaxed font-normal">{selectedArea.coverageNote}</p>
              </div>

            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 font-mono">
                BOOKING RIG IN <strong className="text-white uppercase">{selectedArea.shortName}</strong>?
              </div>
              <a
                href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum%20Boss%20Sound!%20I%20want%20to%20inquire%20about%20sound%20rental%20rates%20for%20${encodeURIComponent(selectedArea.name)}%20(Local%20Rate:%20PKR%20${selectedArea.standardSoundSetupRatePKR.toLocaleString()}%20+%20Transit:%20PKR%20${selectedArea.deliveryRatePKR.toLocaleString()}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>GET {selectedArea.shortName.toUpperCase()} QUOTE ON WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>

        {/* Full Karachi Neighborhoods Local Rates Matrix (Directory Table) */}
        {showMatrix && (
          <div className="bg-[#111111] border border-white/10 p-6 sm:p-8 text-left shadow-2xl animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-orange-500 block">
                  ALL-DISTRICT RATE MATRIX
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                  KARACHI NEIGHBORHOOD RENTAL RATES DIRECTORY
                </h3>
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Official Rates in Pakistani Rupees (PKR) • 24/7 Dispatch
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-white/20 text-neutral-400 font-bold uppercase text-[11px]">
                    <th className="py-3 px-3">District / Area</th>
                    <th className="py-3 px-3">Zone</th>
                    <th className="py-3 px-3">Local Transit Fee</th>
                    <th className="py-3 px-3">Standard Rig</th>
                    <th className="py-3 px-3">DJ Party Rig</th>
                    <th className="py-3 px-3">Grand Line Array</th>
                    <th className="py-3 px-3">Gen Backup</th>
                    <th className="py-3 px-3">Dispatch ETA</th>
                    <th className="py-3 px-3 text-right">Inquiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {KARACHI_AREAS.map((area) => {
                    const isSelected = area.id === selectedAreaId;
                    return (
                      <tr
                        key={area.id}
                        onClick={() => setSelectedAreaId(area.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-orange-500/10 text-white font-bold' : 'hover:bg-neutral-900 text-neutral-300'
                        }`}
                      >
                        <td className="py-3 px-3 font-bold text-white flex items-center gap-2">
                          <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-orange-500' : 'text-neutral-500'}`} />
                          <span>{area.shortName || area.name}</span>
                        </td>
                        <td className="py-3 px-3 text-neutral-400">{area.zone}</td>
                        <td className="py-3 px-3">
                          {area.deliveryRatePKR === 0 ? (
                            <span className="text-orange-400 font-bold">FREE (DHA/Clifton)</span>
                          ) : (
                            <span>PKR {area.deliveryRatePKR.toLocaleString()}</span>
                          )}
                        </td>
                        <td className="py-3 px-3 font-bold text-white">PKR {area.standardSoundSetupRatePKR.toLocaleString()}</td>
                        <td className="py-3 px-3 text-orange-400 font-bold">PKR {area.djPartyRigRatePKR.toLocaleString()}</td>
                        <td className="py-3 px-3 text-white">PKR {area.weddingGrandRigRatePKR.toLocaleString()}</td>
                        <td className="py-3 px-3 text-neutral-400">PKR {area.generatorBackupRatePKR.toLocaleString()}</td>
                        <td className="py-3 px-3 text-neutral-400">~{area.dispatchTimeMinutes} mins</td>
                        <td className="py-3 px-3 text-right">
                          <a
                            href={`https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=Assalam%20o%20Alaikum!%20I%20am%20inquiring%20about%20sound%20system%20rental%20rates%20in%20${encodeURIComponent(area.name)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2.5 py-1 bg-orange-500 hover:bg-orange-400 text-black text-[10px] font-black uppercase"
                          >
                            WhatsApp
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
              <span>* All rates include complete cabling, audio operator, and pre-event acoustic soundcheck.</span>
              <span>Need custom quotes for other Sindh venues? WhatsApp: {BOSS_CONTACT.phoneDisplay}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


