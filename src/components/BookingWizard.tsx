import React, { useState, useEffect } from 'react';
import { PACKAGES, ADD_ONS, KARACHI_AREAS, BOSS_CONTACT } from '../data/bossData';
import { BookingFormState, BookingReceipt, EventType } from '../types';
import { generateBookingWhatsAppMessage, calculateBookingTotal, createWhatsAppUrl } from '../utils/whatsappHelper';
import confetti from 'canvas-confetti';
import { 
  CalendarCheck, MessageSquare, MapPin, Sparkles, Check, 
  HelpCircle, Receipt, ShieldCheck, Clock, Music, Zap, Phone, User
} from 'lucide-react';

interface BookingWizardProps {
  initialPackageId?: string;
  onBookingSuccess: (receipt: BookingReceipt) => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ initialPackageId, onBookingSuccess }) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    whatsapp: '',
    eventType: 'Mehndi & Dholak',
    eventDate: '',
    eventTime: 'Night (8pm - 2am)',
    guestCount: 250,
    venueArea: 'DHA (Phase 1 to Phase 8 & Creek)',
    venueNameOrAddress: '',
    selectedPackageId: initialPackageId || 'pkg-mehndi',
    selectedAddOns: ['addon-cold-pyro'],
    specialRequests: '',
    needsDj: true,
    needsSoundEngineer: true,
    needsGeneratorBackup: false
  });

  const [activeTab, setActiveTab] = useState<'details' | 'addons' | 'contact'>('details');

  useEffect(() => {
    if (initialPackageId) {
      setFormData(prev => ({ ...prev, selectedPackageId: initialPackageId }));
    }
  }, [initialPackageId]);

  const totalPKR = calculateBookingTotal(formData);
  const selectedPackage = PACKAGES.find(p => p.id === formData.selectedPackageId) || PACKAGES[0];

  const handleAddOnToggle = (addonId: string) => {
    setFormData(prev => {
      const exists = prev.selectedAddOns.includes(addonId);
      const nextAddOns = exists
        ? prev.selectedAddOns.filter(id => id !== addonId)
        : [...prev.selectedAddOns, addonId];
      return { ...prev, selectedAddOns: nextAddOns };
    });
  };

  const handleWhatsAppDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateBookingWhatsAppMessage(formData, totalPKR);
    const url = createWhatsAppUrl(msg);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const areaObj = KARACHI_AREAS.find(a => a.name === formData.venueArea);
    const areaDeliveryRatePKR = areaObj ? areaObj.deliveryRatePKR : 0;

    const receipt: BookingReceipt = {
      ...formData,
      areaDeliveryRatePKR,
      bookingId: `BOSS-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      totalEstimatedPricePKR: totalPKR,
      whatsappMessageUrl: url
    };

    onBookingSuccess(receipt);

    // Open WhatsApp in new window
    window.open(url, '_blank');
  };

  const handleGenerateReceipt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setActiveTab('contact');
      return;
    }

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 }
    });

    const msg = generateBookingWhatsAppMessage(formData, totalPKR);
    const url = createWhatsAppUrl(msg);

    const areaObj = KARACHI_AREAS.find(a => a.name === formData.venueArea);
    const areaDeliveryRatePKR = areaObj ? areaObj.deliveryRatePKR : 0;

    const receipt: BookingReceipt = {
      ...formData,
      areaDeliveryRatePKR,
      bookingId: `BOSS-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
      totalEstimatedPricePKR: totalPKR,
      whatsappMessageUrl: url
    };

    onBookingSuccess(receipt);
  };

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              05 / BOOKING & QUOTE ENGINE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            CUSTOMIZE YOUR <span className="text-stroke-white hover:text-white transition-colors">EVENT RIG</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Transparent pricing in PKR, instant DJ and staging add-ons, and date reservation directly synced to WhatsApp: {BOSS_CONTACT.phoneDisplay}.
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Left Side (8 cols) */}
          <div className="lg:col-span-8 bg-[#111111] border border-white/10 p-6 sm:p-8 shadow-2xl">
            
            {/* Step Navigation Tabs */}
            <div className="flex border-b border-white/10 pb-4 mb-8 gap-2 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap border ${
                  activeTab === 'details'
                    ? 'bg-orange-500 text-black border-orange-500 shadow-md'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>01. Event & Rig</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('addons')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap border ${
                  activeTab === 'addons'
                    ? 'bg-orange-500 text-black border-orange-500 shadow-md'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>02. DJ & FX Add-Ons ({formData.selectedAddOns.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap border ${
                  activeTab === 'contact'
                    ? 'bg-orange-500 text-black border-orange-500 shadow-md'
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                <span>03. Venue & Contact</span>
              </button>
            </div>

            {/* TAB 1: Event & Package Selection */}
            {activeTab === 'details' && (
              <div className="space-y-6 text-left">
                
                {/* Event Type Grid */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Event Type in Karachi:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Mehndi & Dholak',
                      'Baraat & Walima Reception',
                      'Farmhouse & Pool Party',
                      'Birthday & Anniversary',
                      'Qawwali & Sufi Night',
                      'Corporate & Conference',
                      'Concert & College Festival',
                      'Commercial Launch & Exhibition'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, eventType: type as EventType }))}
                        className={`p-3 text-xs font-bold text-left border transition-all ${
                          formData.eventType === type
                            ? 'bg-orange-500 text-black border-orange-500 font-black'
                            : 'bg-neutral-900 border-white/10 text-neutral-300 hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Package Choice */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Select Sound System Rig:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PACKAGES.map((pkg) => {
                      const isSelected = formData.selectedPackageId === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setFormData(prev => ({ ...prev, selectedPackageId: pkg.id }))}
                          className={`p-4 border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-neutral-900 border-orange-500 shadow-lg shadow-orange-500/10'
                              : 'bg-neutral-950 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black uppercase text-white font-heading">{pkg.name}</span>
                            <span className="text-xs font-black text-orange-500 font-mono">
                              PKR {pkg.basePricePKR.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-1 line-clamp-1">{pkg.capacityText}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Event Date:
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={e => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                      className="w-full bg-neutral-900 border border-white/20 p-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Time Slot:
                    </label>
                    <select
                      value={formData.eventTime}
                      onChange={e => setFormData(prev => ({ ...prev, eventTime: e.target.value as any }))}
                      className="w-full bg-neutral-900 border border-white/20 p-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                    >
                      <option value="Night (8pm - 2am)">Night (8pm - 2am) - Wedding Peak</option>
                      <option value="Evening (4pm - 9pm)">Evening (4pm - 9pm)</option>
                      <option value="Morning (10am - 3pm)">Morning (10am - 3pm)</option>
                      <option value="Full Day (12 Hours)">Full Day (12 Hours)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Guests: ({formData.guestCount})
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      step="50"
                      value={formData.guestCount}
                      onChange={e => setFormData(prev => ({ ...prev, guestCount: Number(e.target.value) }))}
                      className="w-full accent-orange-500 mt-2"
                    />
                  </div>
                </div>

                {/* Continue button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveTab('addons')}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-xs tracking-wider transition-all"
                  >
                    Next: Add FX & DJ →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: Add-Ons & Stage Lighting */}
            {activeTab === 'addons' && (
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white mb-1 font-mono">
                    STAGE FX, LIGHTING & POWER BACKUPS
                  </h3>
                  <p className="text-xs text-neutral-400 mb-4">
                    Equip your event with safe cold spark pyros, low fog clouds, Pioneer DJ gear, or heavy-duty silent generators.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADD_ONS.map((addon) => {
                    const isSelected = formData.selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleAddOnToggle(addon.id)}
                        className={`p-4 border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-neutral-900 border-orange-500 shadow-md'
                            : 'bg-neutral-950 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-orange-500 border-orange-500 text-black' : 'border-neutral-700 bg-neutral-900'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black uppercase text-white">{addon.name}</span>
                            <span className="text-xs font-bold text-orange-500 font-mono">
                              +PKR {addon.pricePKR.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            {addon.description}
                          </p>
                          {addon.recommendedFor && (
                            <span className="inline-block mt-2 text-[9px] px-1.5 py-0.5 bg-neutral-900 text-orange-400 border border-orange-500/20 font-mono font-bold uppercase">
                              ★ {addon.recommendedFor}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('details')}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white"
                  >
                    ← Back to Details
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase text-xs tracking-wider transition-all"
                  >
                    Next: Venue & Contact →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: Venue & Contact Details */}
            {activeTab === 'contact' && (
              <div className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Karachi Area Picker */}
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Karachi Neighborhood / Area: *
                    </label>
                    <select
                      value={formData.venueArea}
                      onChange={e => setFormData(prev => ({ ...prev, venueArea: e.target.value }))}
                      className="w-full bg-neutral-900 border border-white/20 p-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                    >
                      {KARACHI_AREAS.map(area => (
                        <option key={area.id} value={area.name}>
                          {area.name} — {area.deliveryRatePKR === 0 ? 'FREE Local Transit' : `+PKR ${area.deliveryRatePKR.toLocaleString()} transit`} (~{area.dispatchTimeMinutes}m ETA)
                        </option>
                      ))}
                    </select>
                    
                    {/* Selected Area Insight Banner */}
                    {(() => {
                      const areaObj = KARACHI_AREAS.find(a => a.name === formData.venueArea) || KARACHI_AREAS[0];
                      return (
                        <div className="mt-2 p-3 bg-neutral-950 border border-white/10 text-xs font-mono space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-orange-400 font-bold uppercase">
                              📍 {areaObj.shortName || areaObj.name} ({areaObj.zone} Zone)
                            </span>
                            <span className="text-[11px] text-neutral-300">
                              Transit / Logistics: <strong className="text-white">{areaObj.deliveryRatePKR === 0 ? 'FREE / INCLUDED' : `PKR ${areaObj.deliveryRatePKR.toLocaleString()}`}</strong>
                            </span>
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            Power Status: <span className="text-amber-400">{areaObj.powerGridStability}</span> • Dispatch Team: <span className="text-neutral-200">{areaObj.setupTeam}</span>
                          </div>
                          {areaObj.popularVenues.length > 0 && (
                            <div className="text-[10px] text-neutral-500 flex flex-wrap gap-1 pt-1">
                              <span>Frequent Venues:</span>
                              {areaObj.popularVenues.slice(0, 3).map((v, i) => (
                                <span key={i} className="text-neutral-400 bg-neutral-900 px-1.5 py-0.5 border border-white/5">{v}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Venue Name or Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Specific Venue Name or Full Address:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Creek Club Lawn / Regent Plaza Ballroom / Farmhouse #34 / Home Rooftop"
                      value={formData.venueNameOrAddress}
                      onChange={e => setFormData(prev => ({ ...prev, venueNameOrAddress: e.target.value }))}
                      className="w-full bg-neutral-900 border border-white/20 p-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Full Name: *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Khan"
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full bg-neutral-900 border border-white/20 pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Mobile / WhatsApp Number: *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value, whatsapp: e.target.value }))}
                        className="w-full bg-neutral-900 border border-white/20 pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Special requests textarea */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Music Playlist / Venue Instructions:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need heavy bass for groom entrance, playlist is mixture of Coke Studio and Punjabi hits, setup ready by 7pm..."
                    value={formData.specialRequests}
                    onChange={e => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    className="w-full bg-neutral-900 border border-white/20 p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>

                {/* Quick Toggle badges */}
                <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs text-neutral-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsDj}
                      onChange={e => setFormData(prev => ({ ...prev, needsDj: e.target.checked }))}
                      className="accent-orange-500"
                    />
                    <span>INCLUDE LIVE DJ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsSoundEngineer}
                      onChange={e => setFormData(prev => ({ ...prev, needsSoundEngineer: e.target.checked }))}
                      className="accent-orange-500"
                    />
                    <span>INCLUDE SOUND TECHNICIAN</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsGeneratorBackup}
                      onChange={e => setFormData(prev => ({ ...prev, needsGeneratorBackup: e.target.checked }))}
                      className="accent-orange-500"
                    />
                    <span>GENERATOR STANDBY</span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('addons')}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white"
                  >
                    ← Back to Add-Ons
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateReceipt}
                    className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/20 font-black uppercase tracking-wider text-xs flex items-center gap-2"
                  >
                    <Receipt className="w-4 h-4 text-orange-500" />
                    <span>GENERATE BOOKING SLIP</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Quote Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-[#111111] border border-orange-500/80 p-6 shadow-2xl space-y-6 text-left relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-500 block">
                  LIVE ESTIMATE
                </span>
                <h3 className="text-xl font-black uppercase text-white font-heading">RIG QUOTE SUMMARY</h3>
              </div>
              <div className="w-10 h-10 bg-orange-500 text-black flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5" />
              </div>
            </div>

            {/* Itemized list */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start text-neutral-300">
                <div>
                  <span className="font-black uppercase text-white block">{selectedPackage.name}</span>
                  <span className="text-[11px] text-neutral-400 font-mono">{formData.eventType}</span>
                </div>
                <span className="font-mono font-bold text-white">
                  PKR {selectedPackage.basePricePKR.toLocaleString()}
                </span>
              </div>

              {formData.selectedAddOns.map(addonId => {
                const addon = ADD_ONS.find(a => a.id === addonId);
                if (!addon) return null;
                return (
                  <div key={addon.id} className="flex justify-between items-center text-neutral-400 pl-2 border-l-2 border-orange-500">
                    <span className="line-clamp-1">{addon.name}</span>
                    <span className="font-mono text-neutral-300 shrink-0">
                      +PKR {addon.pricePKR.toLocaleString()}
                    </span>
                  </div>
                );
              })}

              {formData.needsGeneratorBackup && !formData.selectedAddOns.includes('addon-silent-gen') && (
                <div className="flex justify-between items-center text-neutral-400 pl-2 border-l-2 border-orange-500">
                  <span>Silent Generator Standby</span>
                  <span className="font-mono text-neutral-300">+PKR 22,000</span>
                </div>
              )}

              {/* Area Transit & Local Rate */}
              {(() => {
                const areaObj = KARACHI_AREAS.find(a => a.name === formData.venueArea) || KARACHI_AREAS[0];
                return (
                  <div className="flex justify-between items-center text-neutral-300 pl-2 border-l-2 border-orange-500">
                    <div>
                      <span className="block font-bold text-white uppercase">{areaObj.shortName || areaObj.name} Transit</span>
                      <span className="text-[10px] text-neutral-400 font-mono">Zone: {areaObj.zone}</span>
                    </div>
                    <span className="font-mono text-orange-400 font-bold">
                      {areaObj.deliveryRatePKR === 0 ? 'FREE' : `+PKR ${areaObj.deliveryRatePKR.toLocaleString()}`}
                    </span>
                  </div>
                );
              })()}

              {/* Delivery & Crew status */}
              <div className="pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-neutral-400 font-mono">
                <div className="flex justify-between">
                  <span>VENUE AREA:</span>
                  <span className="text-white font-bold">{formData.venueArea.split('(')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH TIME:</span>
                  <span className="text-white font-bold">
                    ~{(KARACHI_AREAS.find(a => a.name === formData.venueArea) || KARACHI_AREAS[0]).dispatchTimeMinutes} mins
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>SETUP & SOUNDCHECK:</span>
                  <span className="text-orange-400 font-bold">FREE INCLUDED</span>
                </div>
                <div className="flex justify-between">
                  <span>CHIEF ENGINEER:</span>
                  <span className="text-orange-400 font-bold">ASSIGNED</span>
                </div>
              </div>
            </div>

            {/* Total Price PKR */}
            <div className="bg-black p-5 border border-white/10 space-y-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono font-bold">
                ESTIMATED RIG TOTAL
              </div>
              <div className="text-4xl font-black text-orange-500 font-heading tracking-tight">
                PKR {totalPKR.toLocaleString()}
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                *Includes cables, mic stands, transit & technician crew
              </div>
            </div>

            {/* Direct WhatsApp Instant Action */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppDirectSubmit}
                className="w-full py-4 px-4 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>CONFIRM RIG VIA WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleGenerateReceipt}
                className="w-full py-3 px-4 bg-neutral-900 hover:bg-white hover:text-black text-neutral-300 border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-mono"
              >
                <Receipt className="w-4 h-4 text-orange-500" />
                <span>VIEW OFFICIAL BOOKING SLIP</span>
              </button>
            </div>

            {/* Contact Guarantee Note */}
            <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-2 border-t border-white/10 font-mono">
              <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span>DIRECT WHATSAPP: <strong className="text-white">{BOSS_CONTACT.phoneDisplay}</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

