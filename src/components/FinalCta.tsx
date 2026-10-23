import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#090D14] to-[#0D1420] border-t border-slate-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
        <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
          Stop Guessing Your Lifts
        </span>

        <h2 className="text-4xl sm:text-6xl font-athletic font-extrabold uppercase tracking-tight text-white leading-tight">
          Ready To Add Weight To Your Bar?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Start logging your workouts with true progressive overload in under two minutes. No spreadsheets, no lost notebooks, and zero credit card required.
        </p>

        {/* Primary Action Button (Identical to top) */}
        <div className="pt-2 flex flex-col items-center">
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-9 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 active:scale-[0.98] group"
          >
            <span>Start Free 14-Day Trial (Takes 60 Seconds)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Identical Risk Reversal Microcopy */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-slate-400">
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
    </section>
  );
};
