export type EventType = 
  | 'Mehndi & Dholak'
  | 'Baraat & Walima Reception'
  | 'Birthday & Anniversary'
  | 'Corporate & Conference'
  | 'Qawwali & Sufi Night'
  | 'Concert & College Festival'
  | 'Farmhouse & Pool Party'
  | 'Commercial Launch & Exhibition';

export interface SoundPackage {
  id: string;
  name: string;
  tagline: string;
  basePricePKR: number;
  marketPricePKR?: number;
  discountNote?: string;
  capacityText: string;
  popular?: boolean;
  badge?: string;
  image: string;
  equipment: string[];
  features: string[];
  bestFor: string;
  powerRequirement: string;
}

export interface EquipmentAddOn {
  id: string;
  name: string;
  category: 'Sound' | 'Lighting' | 'Special FX' | 'DJ & Crew';
  pricePKR: number;
  description: string;
  recommendedFor?: string;
}

export interface KarachiArea {
  id: string;
  name: string;
  shortName: string;
  zone: 'South' | 'East' | 'Central' | 'West' | 'Malir / Highway' | 'Korangi';
  dispatchTimeMinutes: number;
  setupTeam: string;
  coverageNote: string;
  deliveryRatePKR: number; // Transit & logistics fee (0 if free/subsidized)
  standardSoundSetupRatePKR: number; // Base sound system rental in this area
  djPartyRigRatePKR: number; // DJ + Party Beast rig starting rate
  weddingGrandRigRatePKR: number; // Line array wedding rig starting rate
  generatorBackupRatePKR: number; // Standby generator rate for this area
  popularVenues: string[]; // Prominent banquets, lawns, clubs, farmhouses
  powerGridStability: 'Stable Grid' | 'Frequent Load Shedding (Gen Recommended)' | 'Off-Grid (Gen Mandatory)';
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  whatsapp: string;
  eventType: EventType;
  eventDate: string;
  eventTime: 'Morning (10am - 3pm)' | 'Evening (4pm - 9pm)' | 'Night (8pm - 2am)' | 'Full Day (12 Hours)';
  guestCount: number;
  venueArea: string;
  venueNameOrAddress: string;
  selectedPackageId: string;
  selectedAddOns: string[];
  specialRequests: string;
  needsDj: boolean;
  needsSoundEngineer: boolean;
  needsGeneratorBackup: boolean;
  areaDeliveryRatePKR?: number;
}

export interface BookingReceipt extends BookingFormState {
  bookingId: string;
  createdAt: string;
  totalEstimatedPricePKR: number;
  whatsappMessageUrl: string;
}

export interface EquipmentSpec {
  id: string;
  name: string;
  category: 'Speakers & Line Arrays' | 'Subwoofers & Bass' | 'DJ Consoles & Mixers' | 'Stage & Effect Lighting' | 'Microphones & Audio Rig';
  brand: string;
  specs: string[];
  image: string;
  description: string;
  punchline: string;
}

export interface AudioSample {
  id: string;
  title: string;
  vibe: string;
  genre: string;
  description: string;
  audioToneType: 'desi_dhol' | 'club_bass' | 'qawwali_vocal' | 'corporate_speech';
  bpm: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  event: string;
  venueArea: string;
  date: string;
  rating: number;
  review: string;
  verifiedBooking: boolean;
}
