import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenTrial }) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-20 bg-[#090D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
            Simple Transparent Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-athletic font-extrabold uppercase tracking-tight text-white">
            Honest Pricing, Zero Fine Print
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Start completely free for 14 days without giving us a credit card. Keep your logs forever even if you cancel.
          </p>

          {/* Interactive Billing Segmented Control */}
          <div className="mt-6 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 transition-colors ${
                !isAnnual
                  ? 'bg-slate-800 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing ($12/mo)
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isAnnual
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Annual Billing ($8/mo, saves 33%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: 14-Day Free Trial */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#111722] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono-nums text-slate-400 uppercase tracking-wider mb-2">
                <span>Free Trial</span>
                <span className="text-emerald-400 font-bold">14 Days Free</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1 mb-4">
                <span className="text-4xl font-athletic font-extrabold text-white">$0</span>
                <span className="text-sm text-slate-400">for two full weeks</span>
              </div>
              <p className="text-sm text-slate-300 mb-6">
                Test every feature in your gym. No credit card required up front.
              </p>

              <div className="space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited workout logs and set tracking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated progressive overload suggestions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Offline mode in basement gyms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CSV and JSON raw data export</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-6 rounded-lg font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
              >
                <span>Start Free 14-Day Trial (Takes 60 Seconds)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2 text-center text-xs text-slate-400">
                No credit card required
              </div>
            </div>
          </div>

          {/* Card 2: Full Membership */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141d2c] to-[#101622] border-2 border-emerald-500/40 relative shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono-nums text-emerald-400 uppercase tracking-wider mb-2">
                <span className="font-bold">Full Membership</span>
                <span className="bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  {isAnnual ? 'Best Value' : 'Flexible'}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-1 mb-4">
                <span className="text-4xl font-athletic font-extrabold text-white">
                  ${isAnnual ? '8' : '12'}
                </span>
                <span className="text-sm text-slate-400">/ month</span>
                {isAnnual && (
                  <span className="text-xs font-mono-nums text-slate-400 ml-2">
                    (billed $96 annually)
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300 mb-6">
                Complete strength tracking for dedicated lifters who refuse to plateau.
              </p>

              <div className="space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All features from the 14-day free trial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Multi-year strength and PR analytics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom exercise library and warm-up sets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct priority strength coach support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenTrial}
                className="w-full py-3.5 px-6 rounded-lg font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>Start Free 14-Day Trial (Takes 60 Seconds)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2 text-center text-xs text-slate-400">
                Cancel in one tap · Keep your logs forever
              </div>
            </div>
          </div>
        </div>

        {/* Risk Reversal Guarantee Callout */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Our 30-Day Strength Guarantee: </strong>
            If you do not see measurable strength progression on your compound lifts within your first month, send us a one-line email and we refund every dollar immediately. No interrogation, no hurdles.
          </div>
        </div>
      </div>
    </section>
  );
};
