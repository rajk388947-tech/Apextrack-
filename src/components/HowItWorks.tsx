import React from 'react';
import { Layers, CheckCircle2, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Layers,
      title: 'Pick Your Split',
      description: 'Select a proven strength split or import your custom routines in seconds. Your past weights and preferred increments load instantly.',
    },
    {
      number: '02',
      icon: CheckCircle2,
      title: 'Log in Two Taps',
      description: 'Between sets, tap to log your completed weight and reps. No fiddly keyboard typing or endless menus while your chalk is drying.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Follow Your Overload',
      description: 'ApexTrack calculates your exact weight jump for the next session. You walk in next week with a precise number, not a guess.',
    },
  ];

  return (
    <section className="py-20 bg-[#0C121D] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
            Three Simple Steps
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-athletic font-extrabold uppercase tracking-tight text-white">
            How It Works in Your Gym
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Zero setup headache. Start your workout in under two minutes from right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 sm:p-7 rounded-xl bg-[#111722] border border-slate-800 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-nums font-bold text-2xl text-emerald-400/80">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
