import React from 'react';
import { BookingReceipt } from '../types';
import { PACKAGES, ADD_ONS, BOSS_CONTACT } from '../data/bossData';
import { X, Printer, MessageSquare, ShieldCheck, MapPin, Calendar } from 'lucide-react';

interface BookingReceiptModalProps {
  receipt: BookingReceipt | null;
  onClose: () => void;
}

export const BookingReceiptModal: React.FC<BookingReceiptModalProps> = ({ receipt, onClose }) => {
  if (!receipt) return null;

  const pkg = PACKAGES.find(p => p.id === receipt.selectedPackageId);
  const selectedAddons = ADD_ONS.filter(a => receipt.selectedAddOns.includes(a.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#111111] border border-orange-500 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-neutral-900 text-neutral-400 hover:text-black hover:bg-orange-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Voucher Header */}
        <div className="border-b border-white/10 pb-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black uppercase text-white font-heading tracking-tight">
                BOSS <span className="text-orange-500">SOUND SYSTEM</span>
              </span>
              <span className="px-2 py-0.5 bg-orange-500 text-black text-[10px] font-mono font-black uppercase">
                OFFICIAL VOUCHER
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono mt-1">
              KARACHI EVENT SOUND & ENTERTAINMENT DISPATCH SLIP
            </p>
          </div>

          <div className="text-left sm:text-right font-mono">
            <div className="text-[10px] uppercase font-bold text-neutral-500">REFERENCE ID</div>
            <div className="text-base font-black text-orange-500">{receipt.bookingId}</div>
            <div className="text-[10px] text-neutral-500">{receipt.createdAt}</div>
          </div>
        </div>

        {/* Customer & Event Details Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-5 border border-white/10 text-xs mb-6 font-mono">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block">HOST & CONTACT</span>
            <div className="font-bold text-white text-sm uppercase">{receipt.fullName || 'VALUED CLIENT'}</div>
            <div className="text-neutral-300">TEL: {receipt.phone}</div>
            <div className="text-orange-400">WHATSAPP: {receipt.whatsapp || receipt.phone}</div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block">EVENT LOGISTICS</span>
            <div className="flex items-center gap-1.5 text-neutral-200">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              <span>{receipt.eventDate || 'DATE TBD'} ({receipt.eventTime})</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-200">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span className="uppercase">{receipt.venueArea}</span>
            </div>
            {receipt.venueNameOrAddress && (
              <div className="text-[11px] text-neutral-400 pl-5 uppercase">
                ADDR: {receipt.venueNameOrAddress}
              </div>
            )}
          </div>
        </div>

        {/* Itemized breakdown */}
        <div className="space-y-2 text-xs mb-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
            EQUIPMENT & CREW BREAKDOWN
          </span>

          <div className="p-4 bg-neutral-900 border border-white/10 flex justify-between items-center">
            <div>
              <span className="font-black uppercase text-white block font-heading">{pkg ? pkg.name : 'Custom Rig'}</span>
              <span className="text-[11px] text-neutral-400 font-mono">{receipt.eventType} • {receipt.guestCount} Guests</span>
            </div>
            <span className="font-mono font-bold text-orange-500 text-sm">
              PKR {pkg ? pkg.basePricePKR.toLocaleString() : '0'}
            </span>
          </div>

          {selectedAddons.map(a => (
            <div key={a.id} className="p-3 bg-neutral-950 border border-white/10 flex justify-between items-center text-neutral-300 font-mono text-xs">
              <span>+ {a.name} ({a.category})</span>
              <span className="text-white">+PKR {a.pricePKR.toLocaleString()}</span>
            </div>
          ))}

          {/* Area Transit Breakdown */}
          {(() => {
            const area = (window as any).BOSS_AREAS?.find((a: any) => a.name === receipt.venueArea);
            const deliveryFee = receipt.areaDeliveryRatePKR !== undefined ? receipt.areaDeliveryRatePKR : 0;
            return (
              <div className="p-3 bg-neutral-950 border border-white/10 flex justify-between items-center text-neutral-300 font-mono text-xs">
                <span>📍 Karachi Area Transit ({receipt.venueArea.split('(')[0].trim()})</span>
                <span className="text-orange-400 font-bold">
                  {deliveryFee === 0 ? 'FREE (Included)' : `+PKR ${deliveryFee.toLocaleString()}`}
                </span>
              </div>
            );
          })()}

          {receipt.needsGeneratorBackup && !receipt.selectedAddOns.includes('addon-silent-gen') && (
            <div className="p-3 bg-neutral-950 border border-white/10 flex justify-between items-center text-neutral-300 font-mono text-xs">
              <span>+ 15kVA Silent Generator Standby (with fuel & ATS)</span>
              <span className="text-white">+PKR 22,000</span>
            </div>
          )}

          {/* Grand Total */}
          <div className="p-5 bg-black border border-orange-500 flex justify-between items-center mt-3">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-neutral-400 block">TOTAL ESTIMATED INVESTMENT</span>
              <span className="text-xs text-neutral-500 font-mono">Includes transit, soundcheck crew & hardware</span>
            </div>
            <div className="text-3xl font-black text-orange-500 font-heading">
              PKR {receipt.totalEstimatedPricePKR.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={receipt.whatsappMessageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-4 bg-orange-500 hover:bg-orange-400 text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>CONFIRM VOUCHER VIA WHATSAPP</span>
          </a>

          <button
            onClick={handlePrint}
            className="py-3.5 px-6 bg-neutral-900 hover:bg-white hover:text-black text-neutral-200 border border-white/20 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4 text-orange-500" />
            <span>PRINT / PDF</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-5 text-[10px] text-neutral-500 text-center flex items-center justify-center gap-2 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
          <span>BOSS SOUND SYSTEM KARACHI • 24/7 HELPLINE: {BOSS_CONTACT.phoneDisplay}</span>
        </div>

      </div>
    </div>
  );
};

