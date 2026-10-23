import React from 'react';
import { AlertCircle, Flame, CheckCircle } from 'lucide-react';

export const ProblemAgitateSolve: React.FC = () => {
  return (
    <section id="method" className="py-20 bg-[#0C121D] border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
              The Real Cost of Guesswork
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-athletic font-bold uppercase tracking-tight text-white">
              Why Most Lifters Stall Out For Years
            </h2>
          </div>

          {/* Three Distinct Steps: Problem -> Agitate -> Solve */}
          <div className="space-y-6">
            {/* Step 1: PROBLEM */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#111722] border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 text-rose-400 text-xs font-mono-nums uppercase tracking-wider font-semibold mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                You leave the gym unsure if you actually got stronger today.
              </p>
            </div>

            {/* Step 2: AGITATE */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#111722] border border-amber-500/20 shadow-md">
              <div className="flex items-center gap-3 text-amber-400 text-xs font-mono-nums uppercase tracking-wider font-semibold mb-2">
                <Flame className="w-4 h-4" />
                <span>What It Costs You Right Now</span>
              </div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                You scribble numbers on notes apps or juggle messy spreadsheets. Next week you forget what weight you moved, repeat the same comfortable weights for months, and wonder why your physique and strength numbers stalled out. That is months of sweat wasted on zero measurable progress.
              </p>
            </div>

            {/* Step 3: SOLVE */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#111722] border border-emerald-500/30 shadow-md">
              <div className="flex items-center gap-3 text-emerald-400 text-xs font-mono-nums uppercase tracking-wider font-semibold mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>The Direct Fix</span>
              </div>
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                ApexTrack logs every set before your heart rate drops, flags your next target weight automatically, and graphs your exact progressive overload in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
