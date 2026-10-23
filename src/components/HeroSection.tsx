import React from 'react';
import { Star, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { InteractiveTrackerPreview } from './InteractiveTrackerPreview';
import heroLifterAthlete from '../assets/images/hero_lifter_athlete_1792660986404.jpg';

interface HeroProps {
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenTrial }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#090D14]">
      {/* Subtle background glow effect (no cyan/magenta neon, clean emerald/titanium ambiance) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Direct Value */}
          <div className="lg:col-span-6 space-y-6">
            {/* Social Proof Line 1 */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5</span>
              <span className="text-slate-500">·</span>
              <span>3,840 verified strength reviews</span>
            </div>

            {/* Benefit-Driven Headline (7 words) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-athletic font-extrabold uppercase tracking-tight text-white leading-[1.05] text-balance">
              Add Weight To Your Bar Every Month
            </h1>

            {/* Subheadline: How + USP */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Log your sets in two taps, calculate progressive overload automatically, and follow programs built on exercise science instead of random influencer routines.
            </p>

            {/* Second Specific Social Proof Stat */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono-nums">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>48,200 active lifters logged 2.4M sets this year</span>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 space-y-3">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] group"
              >
                <span>Start Free 14-Day Trial (Takes 60 Seconds)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Risk-Reversal Microcopy Directly Under CTA */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cancel in one tap
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Keep your logs forever
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual + Live Tracker Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={heroLifterAthlete}
                alt="Strength lifter chalking hands before heavy barbell lift"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero_lifter_athlete_1792660986404.jpg';
                }}
                className="w-full h-56 sm:h-64 object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/60 to-transparent" />
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-white">Barbell precision built for heavy training</span>
                <span className="font-mono-nums text-emerald-400">Tested on 2.4M sets</span>
              </div>
            </div>

            {/* Embedded interactive workout logger */}
            <InteractiveTrackerPreview onOpenTrial={onOpenTrial} compact={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
