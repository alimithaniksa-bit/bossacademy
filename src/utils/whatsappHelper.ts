import { BOSS_CONTACT, PACKAGES, ADD_ONS, KARACHI_AREAS } from '../data/bossData';
import { BookingFormState } from '../types';

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BOSS_CONTACT.whatsappNumber}?text=${encoded}`;
}

export function generateQuickInquiryUrl(topic: string = 'General Inquiry'): string {
  const text = `Assalam o Alaikum Boss Sound System Karachi! 🔊\n\nI want to inquire about your sound system and DJ rental services in Karachi for ${topic}.\n\nPlease share available packages, local area pricing, and availability. Thank you!`;
  return createWhatsAppUrl(text);
}

export function generateAreaInquiryUrl(areaName: string, localRateText: string): string {
  const text = `Assalam o Alaikum Boss Sound System! 🔊\n\nI am inquiring about sound system & DJ rental rates in *${areaName}*, Karachi (${localRateText}).\n\nPlease share available packages and date availability for this area.`;
  return createWhatsAppUrl(text);
}

export function generatePackageWhatsAppUrl(packageId: string): string {
  const pkg = PACKAGES.find(p => p.id === packageId) || PACKAGES[0];
  const text = `Assalam o Alaikum Boss Sound System! 🎵\n\nI am interested in booking the *"${pkg.name}"* package (PKR ${pkg.basePricePKR.toLocaleString()}).\n\n- Ideal For: ${pkg.bestFor}\n- Capacity: ${pkg.capacityText}\n\nPlease let me know if my event date is available in Karachi.`;
  return createWhatsAppUrl(text);
}

export function getAreaDeliveryFee(venueAreaName: string): number {
  const area = KARACHI_AREAS.find(a => a.name === venueAreaName || a.shortName === venueAreaName || venueAreaName.includes(a.id));
  return area ? area.deliveryRatePKR : 0;
}

export function generateBookingWhatsAppMessage(booking: BookingFormState, totalPKR: number): string {
  const pkg = PACKAGES.find(p => p.id === booking.selectedPackageId);
  const addOnsSelected = ADD_ONS.filter(a => booking.selectedAddOns.includes(a.id));
  const areaObj = KARACHI_AREAS.find(a => a.name === booking.venueArea);
  const deliveryFee = areaObj ? areaObj.deliveryRatePKR : 0;

  const addOnsText = addOnsSelected.length > 0
    ? addOnsSelected.map(a => `  • ${a.name} (+PKR ${a.pricePKR.toLocaleString()})`).join('\n')
    : '  • None';

  const deliveryText = deliveryFee === 0 
    ? 'FREE Local Dispatch (DHA / Clifton Hub)'
    : `+PKR ${deliveryFee.toLocaleString()} (Area Transit & Staging)`;

  return `*🚨 NEW EVENT SOUND BOOKING INQUIRY - KARACHI 🚨*
------------------------------------------------
*Client Name:* ${booking.fullName || 'Valued Customer'}
*Phone:* ${booking.phone || 'N/A'}
*WhatsApp:* ${booking.whatsapp || booking.phone || 'N/A'}

*📅 Event Details:*
*Event Type:* ${booking.eventType}
*Event Date:* ${booking.eventDate || 'Date to be confirmed'}
*Time Slot:* ${booking.eventTime}
*Guest Count:* Approx. ${booking.guestCount} guests
*Karachi Venue Area:* ${booking.venueArea || 'Karachi'}
*Local Transit / Dispatch Rate:* ${deliveryText}
*Venue Name/Address:* ${booking.venueNameOrAddress || 'To be shared'}

*🔊 Sound & Setup Package:*
*Package Selected:* ${pkg ? pkg.name : 'Custom Selection'} (PKR ${pkg ? pkg.basePricePKR.toLocaleString() : '0'})

*✨ Add-Ons & Enhancements:*
${addOnsText}

*🎛️ Special Requirements:*
- Dedicated DJ: ${booking.needsDj ? 'YES' : 'No'}
- On-site Sound Engineer: ${booking.needsSoundEngineer ? 'YES' : 'No'}
- Silent Generator Standby: ${booking.needsGeneratorBackup ? 'YES' : 'No'}
${booking.specialRequests ? `*Special Notes:* ${booking.specialRequests}` : ''}

*💰 ESTIMATED TOTAL (WITH LOCAL AREA RATES):* PKR ${totalPKR.toLocaleString()}
------------------------------------------------
Please confirm availability and booking procedure. Sent via Boss Sound System Website.`;
}

export function calculateBookingTotal(booking: BookingFormState): number {
  const pkg = PACKAGES.find(p => p.id === booking.selectedPackageId);
  let total = pkg ? pkg.basePricePKR : 35000;

  // Add-ons
  booking.selectedAddOns.forEach(addonId => {
    const addon = ADD_ONS.find(a => a.id === addonId);
    if (addon) {
      total += addon.pricePKR;
    }
  });

  // Generator backup if selected directly
  if (booking.needsGeneratorBackup && !booking.selectedAddOns.includes('addon-silent-gen')) {
    const area = KARACHI_AREAS.find(a => a.name === booking.venueArea);
    total += area ? area.generatorBackupRatePKR : 11000;
  }

  // Add area transit fee
  const area = KARACHI_AREAS.find(a => a.name === booking.venueArea);
  if (area && area.deliveryRatePKR > 0) {
    total += area.deliveryRatePKR;
  }

  return total;
}

