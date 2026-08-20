import React from 'react';
import { REVIEWS } from '../data/bossData';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-500 font-bold">
              07 / VERIFIED TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9] font-heading">
            PROVEN ON KARACHI’S <span className="text-stroke-white hover:text-white transition-colors">DANCEFLOORS</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-2xl font-normal leading-relaxed">
            Real feedback from Karachi families, corporate planners, club promoters, and wedding couples who rely on Boss Sound System.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 bg-[#111111] border border-white/10 hover:border-orange-500/50 transition-all flex flex-col justify-between space-y-6 text-left shadow-xl"
            >
              <div>
                {/* Rating stars and quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic font-normal">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Venue Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black uppercase text-white flex items-center gap-1.5 font-heading">
                    <span>{rev.author}</span>
                    {rev.verifiedBooking && (
                      <CheckCircle className="w-3.5 h-3.5 text-orange-500" title="Verified Karachi Booking" />
                    )}
                  </div>
                  <div className="text-xs text-orange-400 font-mono font-bold uppercase mt-0.5">
                    {rev.event}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    📍 {rev.venueArea}
                  </div>
                </div>

                <div className="text-[11px] text-neutral-500 font-mono">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary banner */}
        <div className="mt-12 p-6 bg-[#111111] border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center gap-6 sm:gap-0">
          <div>
            <div className="text-3xl font-black text-orange-500 font-heading">4.9 / 5.0</div>
            <div className="text-[10px] text-neutral-400 uppercase font-mono font-bold tracking-wider mt-1">Average Event Rating</div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-white/10"></div>
          <div>
            <div className="text-3xl font-black text-white font-heading">2,800+</div>
            <div className="text-[10px] text-neutral-400 uppercase font-mono font-bold tracking-wider mt-1">Karachi Events Powered</div>
          </div>
          <div className="hidden sm:block h-10 w-px bg-white/10"></div>
          <div>
            <div className="text-3xl font-black text-orange-500 font-heading">100%</div>
            <div className="text-[10px] text-neutral-400 uppercase font-mono font-bold tracking-wider mt-1">Punctual Soundcheck</div>
          </div>
        </div>

      </div>
    </section>
  );
};

