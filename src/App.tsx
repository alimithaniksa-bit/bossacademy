import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudioTestBar } from './components/AudioTestBar';
import { PackageCardGrid } from './components/PackageCardGrid';
import { EquipmentShowcase } from './components/EquipmentShowcase';
import { BookingWizard } from './components/BookingWizard';
import { KarachiCoverageChecker } from './components/KarachiCoverageChecker';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { WhatsAppChatFloat } from './components/WhatsAppChatFloat';
import { MobileBottomDock } from './components/MobileBottomDock';
import { BookingReceiptModal } from './components/BookingReceiptModal';
import { Footer } from './components/Footer';
import { BookingReceipt } from './types';

export default function App() {
  const [selectedPackageForCalculator, setSelectedPackageForCalculator] = useState<string>('pkg-mehndi');
  const [activeReceipt, setActiveReceipt] = useState<BookingReceipt | null>(null);

  const scrollToCalculator = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageForCalculator(packageId);
    }
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAudioDemo = () => {
    const element = document.getElementById('audio-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans flex flex-col selection:bg-orange-500 selection:text-black pb-14 lg:pb-0">
      
      {/* Persistent Navigation Header */}
      <Header
        onOpenBooking={() => scrollToCalculator()}
        onOpenAudioTest={scrollToAudioDemo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => scrollToCalculator()}
          onOpenAudioTest={scrollToAudioDemo}
        />

        {/* Live Audio & Frequency Test Deck */}
        <AudioTestBar
          onSelectForBooking={(genre) => scrollToCalculator()}
        />

        {/* Curated Sound & DJ Packages Grid */}
        <PackageCardGrid
          onSelectPackageForBooking={(pkgId) => scrollToCalculator(pkgId)}
        />

        {/* Physical Sound Hardware & Pioneer Consoles Showcase */}
        <EquipmentShowcase />

        {/* Interactive Instant Quote Calculator & Booking Wizard */}
        <BookingWizard
          initialPackageId={selectedPackageForCalculator}
          onBookingSuccess={(receipt) => setActiveReceipt(receipt)}
        />

        {/* Karachi Area Delivery & Dispatch Checker */}
        <KarachiCoverageChecker />

        {/* Real Karachi Client Reviews & Proof */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => scrollToCalculator()} />

      {/* Mobile Fixed Quick Action Dock (Call, WhatsApp, Reserve) */}
      <MobileBottomDock onOpenBooking={() => scrollToCalculator()} />

      {/* Floating 1-Click WhatsApp Live Support Drawer */}
      <WhatsAppChatFloat />

      {/* Booking Receipt / Voucher Slip Modal */}
      <BookingReceiptModal
        receipt={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

    </div>
  );
}
