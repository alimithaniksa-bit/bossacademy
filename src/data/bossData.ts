import { SoundPackage, EquipmentAddOn, KarachiArea, EquipmentSpec, AudioSample, ReviewItem } from '../types';

export const BOSS_CONTACT = {
  phoneDisplay: '0334 3538432',
  phoneRaw: '+923343538432',
  phoneLocal: '03343538432',
  whatsappNumber: '923343538432',
  whatsappLink: 'https://wa.me/923343538432',
  email: 'bookings@bosssoundsystem.pk',
  city: 'Karachi, Sindh, Pakistan',
  serviceHours: '24/7 Event Booking & Emergency Sound Dispatch',
  tagline: 'Karachi’s Undisputed Sound, DJ & Event Entertainment Powerhouse',
  experienceYears: 12,
  eventsCompleted: '2,800+',
  coverage: 'All 7 Districts of Karachi + Highway Farmhouses'
};

export const PACKAGES: SoundPackage[] = [
  {
    id: 'pkg-mehndi',
    name: 'Mehndi & Dholak Pulse',
    tagline: 'High-energy punchy desi beats, dhol clarity & dancefloor sound',
    basePricePKR: 16500,
    marketPricePKR: 25000,
    discountNote: 'Affordable Best Seller (Save 34%)',
    capacityText: 'Up to 250 Guests (Indoor Hall / Lawn / Rooftop)',
    popular: true,
    badge: 'Super Affordable Choice',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
    bestFor: 'Mehndi, Mayun, Sangeet, Dholki & House Parties',
    powerRequirement: 'Standard 220V Single Phase / 2.5kVA',
    equipment: [
      '2x High-Power Active 15" Mid-High Cabinets (RCF / JBL)',
      '1x High-Excursion 18" Subwoofer for punchy dholak beats',
      '1x Digital 8-Channel Mixer with Bluetooth, Aux & USB',
      '2x Shure UHF Wireless Microphones for Dhol & Family Singing',
      '4x RGBW LED Slim Par Stage Lights with Sound Sync',
      'On-site Sound Operator & Complete Setup Technician'
    ],
    features: [
      'Bass tuned specifically for Pakistani wedding tracks & Bollywood/Desi mixes',
      'Zero-delay wireless microphone clarity with backup batteries',
      'Complete cables, heavy stands, and wire concealing included',
      'Free Karachi city delivery within DHA & Clifton hub'
    ]
  },
  {
    id: 'pkg-grand-wedding',
    name: 'Royal Barat & Walima Rig',
    tagline: 'Concert-grade line array sound, crystal speeches & grand ambiance',
    basePricePKR: 38000,
    marketPricePKR: 60000,
    discountNote: 'Karachi Wedding Special (Save 36%)',
    capacityText: '250 - 800 Guests (Banquets, PAF / Golf Club Lawns)',
    popular: true,
    badge: 'Banquets & Lawns Favorite',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    bestFor: 'Barat, Walima, Grand Marquees, Hotel Ballrooms & Large Lawns',
    powerRequirement: '5kVA to 7.5kVA (Generator compatible)',
    equipment: [
      '4x Compact Line Array Module Cabinets with Precision Waveguides',
      '2x Dual 18" Earth-Shaking Subwoofer Bins (Ground Stacked)',
      '1x Digital 16-Channel Console with Live EQ Tuning & USB',
      '4x Premium Shure Beta Wireless Mics for Entrances & Speeches',
      '6x Beam Moving Heads + Stage Warm Wash Lights',
      '1x Heavy Low Fog Cloud Machine for Couple Entry Walkway',
      '2x Lead Audio Engineers + On-Site Stage Technicians'
    ],
    features: [
      'Uniform sound coverage across large lawn without deafening front rows',
      'Dedicated audio delay zones for banquet dining area',
      'Stage wash lighting for flawless photography and 4K videography',
      'Includes backup amplifier rack on standby'
    ]
  },
  {
    id: 'pkg-dj-farmhouse',
    name: 'Club & Farmhouse Party Beast',
    tagline: 'Pro DJ console, laser beam effects, cold pyros & non-stop EDM/HipHop drops',
    basePricePKR: 48000,
    marketPricePKR: 75000,
    discountNote: 'Paisa Vasool Package (Save 36%)',
    capacityText: '300 - 1,200 Guests (Farmhouse / Rooftops / Beach Venues)',
    popular: true,
    badge: 'Ultimate Party Experience',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    bestFor: 'Super Highway Farmhouses, Beach Huts, Birthday Bashes & DJ Ravers',
    powerRequirement: '8kVA - 12kVA',
    equipment: [
      'Full Sound Rig with 4x Dual 18" High-SPL Subwoofers',
      'Pioneer Pro DJ Console / Controller with High-Bitrate Processing',
      'Live Professional Karachi DJ (Desi, EDM, Tech House, Punjabi, Hip-Hop)',
      'Lighting Rig with 4x 10R Beam Sharpies & Strobe Blinders',
      '4x Cold Sparkular Pyro Machines (Safe Indoor/Outdoor Sparks)',
      'High Output Haze Machine + Multibeam Laser Effects',
      'Pro DJ + Dedicated Audio Crew (all event duration up to 6 hours)'
    ],
    features: [
      'Maximum bass impact tuned for outdoor open skies and poolside lawns',
      'Cold pyro sparks sync with DJ drops for unforgettable countdowns',
      'Full DJ playlist customization & live mic hype',
      'Complete heavy-duty power distribution and spike protection'
    ]
  },
  {
    id: 'pkg-corporate',
    name: 'Corporate Gala & Conference Pro',
    tagline: 'Whisper-quiet noise floor, pristine acoustic clarity & zero feedback',
    basePricePKR: 24000,
    marketPricePKR: 35000,
    discountNote: 'Budget Business Rate (Save 31%)',
    capacityText: '100 - 500 Attendees (Hotels, Auditoriums, Boardrooms)',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    bestFor: 'Conferences, Product Launches, Award Ceremonies, AGMs & Expos',
    powerRequirement: 'Standard 220V 3.5kVA',
    equipment: [
      '4x Column Array Acoustic Speakers (Ultra-sleek aesthetic)',
      '1x Digital Mixer with Auto-Feedback Suppressors & USB Multi-track Recording',
      '4x Shure Podium & Wireless Lapel / Collar Mics',
      '2x Wireless Handheld Mics for Q&A sessions with runners',
      'Presentation Audio Interface for Video / PPT playback',
      'Senior Acoustic Engineer in formal attire on site'
    ],
    features: [
      'Zero audio squeals or feedback during high-profile CEO speeches',
      'Sleek unobtrusive black column design blends into corporate stages',
      'Direct stereo audio feed provided to event videographers / live streamers',
      'Backup microphones ready in standby'
    ]
  },
  {
    id: 'pkg-qawwali',
    name: 'Qawwali & Sufi Acoustic Setup',
    tagline: 'Warm acoustic harmonium warmth, crisp tabla transients & vocal separation',
    basePricePKR: 28000,
    marketPricePKR: 42000,
    discountNote: 'Traditional Night Rate (Save 33%)',
    capacityText: '150 - 600 Guests (Courtyards, Lawns, Heritage Venues)',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    bestFor: 'Qawwali Nights, Ghazal Evenings, Sufi Musical Gatherings',
    powerRequirement: '4kVA - 6kVA',
    equipment: [
      '4x Front-of-House Precision Cabinets + 2x Floor Stage Monitors',
      '2x Deep Bass Subwoofers for dholak punch without muddiness',
      '1x 16-Channel Low-Noise Preamp Console with Lexicon Reverbs',
      '6x Specialized Instrument & Vocal Microphones (Shure SM57/SM58/Beta)',
      'Warm Amber Stage Par Lighting & Ambient Floor Lanterns',
      'Specialist Live Acoustic Sound Engineer'
    ],
    features: [
      'Tailored reverb chambers for soul-stirring vocal echoes',
      'Dedicated stage monitor mixes so qawwals hear harmonium and sur clearly',
      'Floor stage microphone stands with custom velvet aesthetic covers',
      'Extended performance coverage (up to 5 hours)'
    ]
  },
  {
    id: 'pkg-concert',
    name: 'Mega Concert & Festival Rig',
    tagline: 'Massive outdoor SPL, full stage trussing & live band sound production',
    basePricePKR: 95000,
    marketPricePKR: 150000,
    discountNote: 'Full Production Value (Save 36%)',
    capacityText: '1,000 - 5,000+ Audience (Stadiums, Expo Center, University Grounds)',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80',
    bestFor: 'University Fests, Music Festivals, Rock/Pop Concerts, Political Rallies',
    powerRequirement: '20kVA - 30kVA (Generator compatible)',
    equipment: [
      '8x Flying Line Array Elements (Dual 10" / 12" drivers)',
      '6x Dual 18" High SPL Subwoofer Array',
      '1x 32-Channel Digital Stage Box & Mixing Console (Yamaha / Behringer X32)',
      'Full Drum Kit Mic Set + 6x Wireless Mics + IEM In-Ear Monitor system',
      'Heavy Duty Aluminum Goal-Post / Box Truss 30ft x 20ft',
      '8x Moving Head Beams + Atomic Strobes + Blinders + Foggers',
      'Complete Sound Engineering Crew (FOH Engineer, Stage Techs, Riggers)'
    ],
    features: [
      'Touring grade sound system approved for national artists and bands',
      '3D acoustic modeling for venue coverage optimization',
      'Full safety certified aluminum truss and rigging hardware',
      'Dual redundant mixing control and power backup'
    ]
  }
];

export const ADD_ONS: EquipmentAddOn[] = [
  {
    id: 'addon-dj',
    name: 'Pro Event DJ + Live Hype MC',
    category: 'DJ & Crew',
    pricePKR: 12000,
    description: 'Experienced Karachi DJ with extensive Desi, Bollywood, Punjabi, HipHop & EDM library with live mic mixing.',
    recommendedFor: 'Mehndi, Baraat, Farmhouse'
  },
  {
    id: 'addon-cold-pyro',
    name: '4x Cold Sparkular Pyro Machines',
    category: 'Special FX',
    pricePKR: 7500,
    description: 'Safe indoor non-flammable cold sparks shooting 3-4 meters high. Perfect for couple bridal entry & cake cutting.',
    recommendedFor: 'Wedding Entries & Concert Drops'
  },
  {
    id: 'addon-low-fog',
    name: 'Dancing on Clouds (Dry Ice Low Fog)',
    category: 'Special FX',
    pricePKR: 6500,
    description: 'Heavy low-lying white cloud effect hugging the floor for dreamy slow dances and grand bridal walking entrance.',
    recommendedFor: 'Baraat & Walima Couple Dance'
  },
  {
    id: 'addon-moving-heads',
    name: '4x 10R Beam Moving Head Lights',
    category: 'Lighting',
    pricePKR: 6000,
    description: 'High-intensity sharp beam searchlights with dynamic patterns, gobos, prism rotation, and sound sync.',
    recommendedFor: 'Dance Floors & Concerts'
  },
  {
    id: 'addon-stage-truss',
    name: 'Aluminum Stage Truss (20x10 ft Box/Arch)',
    category: 'Lighting',
    pricePKR: 9500,
    description: 'Heavy duty silver truss frame to suspend overhead lighting, sound arrays, and custom floral / LED backdrops.',
    recommendedFor: 'Grand Weddings & Stages'
  },
  {
    id: 'addon-extra-subs',
    name: '2x Extra Dual-18" Subwoofer Boost',
    category: 'Sound',
    pricePKR: 8500,
    description: 'Add extreme sub-bass rumble (30Hz-80Hz) to shake large outdoor lawns and open farmhouse spaces.',
    recommendedFor: 'Bass Lovers & Outdoor Lawns'
  },
  {
    id: 'addon-stage-monitors',
    name: '2x In-Ear / Floor Stage Monitors',
    category: 'Sound',
    pricePKR: 4000,
    description: 'Crystal clear feedback-free monitoring for live singers, dholak players, and speakers on stage.',
    recommendedFor: 'Live Singers & Qawwals'
  },
  {
    id: 'addon-sound-engineer',
    name: 'Dedicated Senior FOH Sound Engineer',
    category: 'DJ & Crew',
    pricePKR: 5000,
    description: 'Real-time live multi-track balancing, mic frequency adjustment, and zero-drop audio assurance throughout the event.',
    recommendedFor: 'Corporate & Live Bands'
  },
  {
    id: 'addon-silent-gen',
    name: 'Backup Generator Support (15kVA Silent)',
    category: 'Special FX',
    pricePKR: 11000,
    description: 'Zero blackout guarantee in Karachi. Includes fuel, wiring, and auto-changeover switch for continuous audio.',
    recommendedFor: 'Karachi Lawns & Farmhouses'
  }
];

export const KARACHI_AREAS: KarachiArea[] = [
  {
    id: 'dha',
    name: 'DHA (Phase 1 to Phase 8 & Creek)',
    shortName: 'DHA Karachi',
    zone: 'South',
    dispatchTimeMinutes: 25,
    setupTeam: 'Team Alpha (South Base)',
    deliveryRatePKR: 0, // Free Local Transit
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Creek Club Lawn', 'DHA Golf Club', 'Marina Club', 'Southend Club', 'Sunset Club Lawns', 'Beach View Club'],
    powerGridStability: 'Stable Grid',
    coverageNote: 'Direct priority dispatch for Golf Club, Creek Marina, DHA banquets, seaside marques & private lawns with ZERO transit surcharge.'
  },
  {
    id: 'clifton',
    name: 'Clifton (Blocks 1 to 9, Sea View, Bath Island)',
    shortName: 'Clifton',
    zone: 'South',
    dispatchTimeMinutes: 25,
    setupTeam: 'Team Alpha (South Base)',
    deliveryRatePKR: 0, // Free Local Transit
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Mohatta Palace Lawns', 'Pearl Continental (PC)', 'Beach Luxury Hotel', 'Marriott Karachi', 'Sea View Marquees'],
    powerGridStability: 'Stable Grid',
    coverageNote: 'Full service for beach marquees, 5-star hotel ballrooms, open-air gardens & rooftop gatherings.'
  },
  {
    id: 'pechs',
    name: 'PECHS / Tariq Road / SMCHS / Sindhi Muslim',
    shortName: 'PECHS & Tariq Rd',
    zone: 'East',
    dispatchTimeMinutes: 20,
    setupTeam: 'Team Alpha (Central Hub)',
    deliveryRatePKR: 800,
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Kashmir Lawn', 'Regent Plaza Ballrooms', 'Embassy Inn', 'Central Community Banquets', 'Tariq Road Marquees'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Instant central dispatch for family dholkis, community halls, and banquet lawns across Shahrah-e-Faisal and Tariq Road.'
  },
  {
    id: 'gulshan',
    name: 'Gulshan-e-Iqbal (Blocks 1 to 19 & Civic Center)',
    shortName: 'Gulshan-e-Iqbal',
    zone: 'East',
    dispatchTimeMinutes: 30,
    setupTeam: 'Team Bravo (Central Base)',
    deliveryRatePKR: 1000,
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Expo Center Karachi', 'Royal Palace Banquet', 'KDA Officers Club', 'Al-Buraq Banquet', 'Arena Club', 'Pavilion End Club'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Fast setup for banquet halls along Rashid Minhas, University Road, and Expo Center exhibitions & concerts.'
  },
  {
    id: 'nazimabad',
    name: 'North Nazimabad & Nazimabad (Hyderi, Five Star)',
    shortName: 'North Nazimabad',
    zone: 'Central',
    dispatchTimeMinutes: 35,
    setupTeam: 'Team Charlie (North Base)',
    deliveryRatePKR: 1000,
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['KDA Sports Complex Lawn', 'Hyderi Banquets', 'Usmania Banquet', 'North Vista Lawn', 'Sakhi Hassan Wedding Halls'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Rapid mobile dispatch for KDA lawns, Hyderi banquets, family dholkis, and rooftop mehndi setups.'
  },
  {
    id: 'johar',
    name: 'Gulistan-e-Johar & Scheme 33 (Safari Park Area)',
    shortName: 'Johar & Scheme 33',
    zone: 'East',
    dispatchTimeMinutes: 30,
    setupTeam: 'Team Bravo (East Hub)',
    deliveryRatePKR: 1200,
    standardSoundSetupRatePKR: 17500,
    djPartyRigRatePKR: 33000,
    weddingGrandRigRatePKR: 39000,
    generatorBackupRatePKR: 11500,
    popularVenues: ['Johar Mor Banquets', 'Millennium Marquee', 'Saadi Town Community Ground', 'Safari Park Perimeter Lawns'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Covering Johar Chowrangi marquees, Scheme 33 societies, and rooftop sound systems.'
  },
  {
    id: 'bahria',
    name: 'Bahria Town Karachi (Precincts 1 to 40+)',
    shortName: 'Bahria Town Karachi',
    zone: 'Malir / Highway',
    dispatchTimeMinutes: 50,
    setupTeam: 'Highway Mobile Unit',
    deliveryRatePKR: 2000,
    standardSoundSetupRatePKR: 19500,
    djPartyRigRatePKR: 36000,
    weddingGrandRigRatePKR: 44000,
    generatorBackupRatePKR: 12500,
    popularVenues: ['Danzoo Open Lawns', 'Grand Jamia Lawn', 'Precinct Villa Rooftops', 'Carnival Lawns', 'Golf City Marquee'],
    powerGridStability: 'Stable Grid',
    coverageNote: 'Equipped for large villa rooftops, Danzoo open-air festivals, and private residential sound setups with dedicated highway transport.'
  },
  {
    id: 'farmhouses',
    name: 'Super Highway & Gadap Farmhouses (Dua, Oasis, Malir)',
    shortName: 'Super Highway Farmhouses',
    zone: 'Malir / Highway',
    dispatchTimeMinutes: 50,
    setupTeam: 'Heavy Farmhouse Sound Rig Unit',
    deliveryRatePKR: 2500,
    standardSoundSetupRatePKR: 21000,
    djPartyRigRatePKR: 38000,
    weddingGrandRigRatePKR: 48000,
    generatorBackupRatePKR: 13000,
    popularVenues: ['Dua Farmhouse', 'Arabian Farmhouse', 'Oasis Resort Lawns', 'Al-Hadi Farmhouse', 'Country Club Farmhouses', 'Gadap Valley Poolside'],
    powerGridStability: 'Off-Grid (Gen Mandatory)',
    coverageNote: 'Specialized high-wattage bass rigs, long-throw outdoor arrays & heavy silent generators for overnight poolside party drops.'
  },
  {
    id: 'malir-cantt',
    name: 'Malir Cantt, Askari 4 & 5, Falcon Complex',
    shortName: 'Malir Cantt & Askari',
    zone: 'East',
    dispatchTimeMinutes: 35,
    setupTeam: 'Team Bravo (East Hub)',
    deliveryRatePKR: 1200,
    standardSoundSetupRatePKR: 17500,
    djPartyRigRatePKR: 33000,
    weddingGrandRigRatePKR: 39000,
    generatorBackupRatePKR: 11500,
    popularVenues: ['Falcon Complex Banquet', 'Askari 4 Community Center', 'Malir Cantt Officers Mess', 'Chinar Banquet Lawn', 'Askari 5 Hall'],
    powerGridStability: 'Stable Grid',
    coverageNote: 'CNIC security pass verified staff with swift gate clearance procedures for all armed forces & cantonment housing societies.'
  },
  {
    id: 'korangi',
    name: 'Korangi Creek / PAF Base / Industrial Estates',
    shortName: 'Korangi & Creek PAF',
    zone: 'Korangi',
    dispatchTimeMinutes: 35,
    setupTeam: 'Team Alpha (South Base)',
    deliveryRatePKR: 1200,
    standardSoundSetupRatePKR: 17500,
    djPartyRigRatePKR: 33000,
    weddingGrandRigRatePKR: 39000,
    generatorBackupRatePKR: 11500,
    popularVenues: ['PAF Officers Mess Korangi Creek', 'Creek Vistas Lawns', 'Korangi Club', 'Industrial AGM Lawns', 'Shah Faisal Banquets'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Corporate annual galas, industrial worker events, officer club ceremonies & large lawn acoustics.'
  },
  {
    id: 'fb-area',
    name: 'Federal B Area / Buffer Zone / Shadman',
    shortName: 'FB Area & Buffer Zone',
    zone: 'Central',
    dispatchTimeMinutes: 35,
    setupTeam: 'Team Charlie (North Base)',
    deliveryRatePKR: 1000,
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Taleem-o-Tarbiyat Lawn', 'Customs Club', 'UBL Sports Complex', 'Gulberg Community Banquets', 'Water Pump Halls'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Serving wedding banquets, family dholkis, qawwali nights & school/sports events across Central Karachi.'
  },
  {
    id: 'hawkesbay',
    name: 'Hawkesbay, Turtle Beach & French Beach Huts',
    shortName: 'Hawkesbay Beach Huts',
    zone: 'West',
    dispatchTimeMinutes: 55,
    setupTeam: 'Coastal Sound & Marine Unit',
    deliveryRatePKR: 2800,
    standardSoundSetupRatePKR: 22000,
    djPartyRigRatePKR: 40000,
    weddingGrandRigRatePKR: 50000,
    generatorBackupRatePKR: 14000,
    popularVenues: ['Turtle Beach Private Huts', 'French Beach Club Huts', 'Sandspit Coastal Lawns', 'Hawkesbay Beach Marquees'],
    powerGridStability: 'Off-Grid (Gen Mandatory)',
    coverageNote: 'Salt-air protected speaker enclosures, heavy waterproof cabling & heavy generator rigs for seaside rave nights and beach weddings.'
  },
  {
    id: 'saddar-old',
    name: 'Saddar, Garden, Soldier Bazaar & Old City',
    shortName: 'Saddar & Old City',
    zone: 'South',
    dispatchTimeMinutes: 25,
    setupTeam: 'Team Alpha (South Base)',
    deliveryRatePKR: 800,
    standardSoundSetupRatePKR: 16500,
    djPartyRigRatePKR: 32000,
    weddingGrandRigRatePKR: 38000,
    generatorBackupRatePKR: 11000,
    popularVenues: ['Karachi Parsi Institute (KPI) Lawn', 'YMCA Lawn', 'KMC Club Garden', 'Bohra Community Jamatkhana Lawns', 'Metropole Hall'],
    powerGridStability: 'Frequent Load Shedding (Gen Recommended)',
    coverageNote: 'Fast access to heritage grounds, community halls, church events & traditional downtown wedding gatherings.'
  }
];

export const EQUIPMENT_CATALOG: EquipmentSpec[] = [
  {
    id: 'eq-sub',
    name: 'Boss Earth-Shaker Dual 18" Subwoofers',
    category: 'Subwoofers & Bass',
    brand: 'RCF / Custom High-SPL Italian Drivers',
    specs: ['3,200W RMS / 6,400W Peak', 'Frequency: 28Hz - 120Hz', 'Max SPL: 142dB', 'Touring Birch Enclosure'],
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered specifically for deep bass resonance. Delivers the heavy chest-thumping sub bass required for modern desi remixes, EDM drops, and dhol vibrations.',
    punchline: 'Feel the bass in your bones without muddiness or distortion.'
  },
  {
    id: 'eq-line-array',
    name: 'JBL VRX / RCF Precision Line Array Modules',
    category: 'Speakers & Line Arrays',
    brand: 'JBL Pro / RCF Italy',
    specs: ['Constant Curvature Waveguide', 'High Frequency Neodymium Compression Drivers', '90° x 15° Dispersion', 'Flown or Ground-Stack Versatility'],
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    description: 'Ensures even sound pressure from the very front table to the last row 60 meters away. No loud screeching up front or missing speeches in the back.',
    punchline: 'Uniform studio-grade clarity across the entire venue.'
  },
  {
    id: 'eq-dj-decks',
    name: 'Pioneer DJ CDJ-3000 & DJM-900NXS2',
    category: 'DJ Consoles & Mixers',
    brand: 'Pioneer DJ',
    specs: ['96kHz/64-bit Audio Processing', 'Dual Waveform Touch Displays', 'Industry Club Standard', 'Instant Beat Sync & Scratch Jogs'],
    image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80',
    description: 'The golden standard of international nightclubs and electronic festivals, providing flawless transitions, acapella mashups, and live beat juggling.',
    punchline: 'Zero lag, pristine audio fidelity for our resident and guest DJs.'
  },
  {
    id: 'eq-lighting',
    name: '10R Beam Moving Heads & Cold Sparkulars',
    category: 'Stage & Effect Lighting',
    brand: 'Showtec / Beam Master Pro',
    specs: ['280W High Intensity Discharge Lamp', '14 Colors + 17 Gobo Patterns', 'DMX-512 Computer Controlled', 'Non-Toxic Cold Sparks Up to 12ft'],
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic aerial light beams that transform ordinary banquet halls and lawns into world-class concert stages, perfectly coordinated with the music tempo.',
    punchline: 'Cinematic visual energy for wedding entries and dance stages.'
  },
  {
    id: 'eq-mics',
    name: 'Shure Beta 58A / Sennheiser EW-D Wireless Systems',
    category: 'Microphones & Audio Rig',
    brand: 'Shure & Sennheiser',
    specs: ['Supercardioid Polar Pattern', 'Zero Dropout True-Diversity Receivers', 'Internal Shock Mounts (No handling noise)', 'Digital Encryption'],
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e2?auto=format&fit=crop&w=800&q=80',
    description: 'High gain before feedback makes speeches, ghazal vocals, and qawwali chants cut cleanly through the mix with warmth and high-end sparkle.',
    punchline: 'Every word, dua, and lyric heard crystal clear.'
  }
];

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: 'audio-desi',
    title: 'Desi Mehndi & Dhol Bass Kick',
    vibe: 'High Energy Dholak + Punjabi Bass Bounce',
    genre: 'Desi Wedding Mix',
    description: 'Hear how Boss Sound subwoofers handle punchy acoustic dhol kicks with zero distortion.',
    audioToneType: 'desi_dhol',
    bpm: 128
  },
  {
    id: 'audio-club',
    title: 'Farmhouse EDM & Deep Bass Drop',
    vibe: 'Heavy 35Hz Sub Bass & Synth Riffs',
    genre: 'Electronic / Dance',
    description: 'Test maximum dynamic range, low-end rumble, and crisp synthesizer highs.',
    audioToneType: 'club_bass',
    bpm: 130
  },
  {
    id: 'audio-qawwali',
    title: 'Sufi Qawwali Vocal & Harmonium Presence',
    vibe: 'Warm Acoustic Echo & Reverb Clarity',
    genre: 'Traditional Live Acoustic',
    description: 'Listen to the natural separation between harmonium notes and soaring vocal highs.',
    audioToneType: 'qawwali_vocal',
    bpm: 105
  },
  {
    id: 'audio-corp',
    title: 'Corporate Speech & Keynote Clarity',
    vibe: 'Ultra-Clean Speech Intelligibility',
    genre: 'Conference / Speech',
    description: 'Zero hiss, anti-feedback suppression test for VIP announcements and speeches.',
    audioToneType: 'corporate_speech',
    bpm: 90
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hamza & Ayesha Siddiqui',
    event: 'Mehndi & Barat Event (600 Guests)',
    venueArea: 'DHA Phase 8 Golf Club Lawn, Karachi',
    date: 'February 2026',
    rating: 5,
    review: 'Boss Sound System completely rocked our Mehndi night! The bass from their subwoofers had everyone on the dance floor until 2 AM. When we messaged them on WhatsApp at 0334 3538432, they replied within 5 minutes and delivered everything on time without a hitch.',
    verifiedBooking: true
  },
  {
    id: 'rev-2',
    author: 'Zubair Tariq',
    event: 'Farmhouse Pool & DJ Party (200 Guests)',
    venueArea: 'Super Highway Farmhouse, Karachi',
    date: 'January 2026',
    rating: 5,
    review: 'Booked the Farmhouse Party Beast package with cold pyros and Pioneer DJ setup. The sound power was massive out in the open air. The team handled generator power flawlessly. Definitely the best sound crew in Karachi!',
    verifiedBooking: true
  },
  {
    id: 'rev-3',
    author: 'Khurram Shehzad (HR Director)',
    event: 'Corporate Annual Gala & Awards',
    venueArea: 'Marriott Hotel Ballroom, Karachi',
    date: 'January 2026',
    rating: 5,
    review: 'We needed zero feedback and crystal-clear audio for our executive speeches and presentations. Boss Sound System provided sleek column speakers and wireless lapel mics. Extremely professional technicians in suits.',
    verifiedBooking: true
  },
  {
    id: 'rev-4',
    author: 'Syed Daniyal Ali',
    event: 'Grand Qawwali Night',
    venueArea: 'Gulshan-e-Iqbal KDA Lawn, Karachi',
    date: 'December 2025',
    rating: 5,
    review: 'The live sound balancing for the 8-member qawwali group was masterclass level. Harmonium and tabla were balanced to perfection. Highly recommend Boss Sound for any serious music gathering in Karachi.',
    verifiedBooking: true
  }
];

export const FAQS = [
  {
    q: 'How far in advance should we book Boss Sound System in Karachi?',
    a: 'For weekend wedding dates (Friday, Saturday, Sunday during peak season Nov-March), we recommend booking 2 to 4 weeks in advance. However, we also have mobile rapid-response crews available for same-day emergency sound rentals in Karachi across DHA, Gulshan, and Clifton via WhatsApp 0334 3538432.'
  },
  {
    q: 'Do you deliver to Super Highway and Malir Farmhouses?',
    a: 'Yes! We frequently cover farmhouse parties on Gadap Road, Super Highway, Hub River Road, and Hawkesbay. We bring specialized outdoor long-throw speaker systems and can provide backup silent generator support if needed.'
  },
  {
    q: 'Can we play our own music / connect our laptop or phone?',
    a: 'Absolutely! Our consoles support Bluetooth 5.0, 3.5mm Aux, USB, and professional DJ RCA/XLR inputs. You can play your custom Spotify / YouTube playlists or let our resident DJ manage the crowd vibe.'
  },
  {
    q: 'Are your Cold Pyro spark machines safe for indoor banquets?',
    a: 'Yes, 100% safe. Our Sparkular machines use non-hazardous composite powder producing cold sparks that do not burn skin, fabrics, or stage carpets, emitting zero fire smell or thick smoke.'
  },
  {
    q: 'How does payment and booking confirmation work?',
    a: 'You can reserve your date instantly by filling out the online booking form or sending a WhatsApp message to 0334 3538432. A small 20% advance secures your date with an official receipt, and the balance is settled on the event day after setup sound check.'
  }
];
