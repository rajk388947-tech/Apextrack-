import React from 'react';
import { Zap, TrendingUp, Clock, Calculator, Download } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Two-Tap Set Logging',
      statement: 'Two-tap set logging, so that you spend your gym time lifting instead of staring at your phone screen.',
      detail: 'Big tactile buttons you can press with chalked fingers without typing out small numbers.',
    },
    {
      icon: TrendingUp,
      title: 'Automated Overload Engine',
      statement: 'Automated progressive overload calculation, so that you know the exact weight and rep target before you touch the bar.',
      detail: 'Calculates the optimal 2.5 lb to 5 lb bump based on your last set RPE and fatigue index.',
    },
    {
      icon: Clock,
      title: 'Smart Rest Intervals',
      statement: 'Rest interval timers that sync with your target RPE, so that you hit every heavy set with recovered central nervous power.',
      detail: 'Auto-starts the second you tap completed and notifies you with quiet haptic vibration.',
    },
    {
      icon: Calculator,
      title: 'Barbell Plate Calculator',
      statement: 'Offline plate math and barbell calculator, so that you never misload a collar during a heavy squat attempt.',
      detail: 'Instantly visualizes 45, 35, 25, 10, 5, and 2.5 lb plates for Olympic or standard bars.',
    },
    {
      icon: Download,
      title: 'Zero Data Lock-in',
      statement: 'One-click data export to CSV and JSON, so that your training logs remain yours forever, even if you stop your subscription.',
      detail: 'Full sovereignty over your workout history. Download your raw logs whenever you want.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-[#090D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
            Outcome-First Training
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-athletic font-extrabold uppercase tracking-tight text-white">
            Built For Results, Not Screen Time
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Every feature exists to eliminate gym hesitation and force measurable physical progression.
          </p>
        </div>

        {/* Benefits Grid (5 items to break rule-of-three cliches) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const isMarquee = index === 0;
            return (
              <div
                key={item.title}
                className={`p-6 sm:p-7 rounded-xl bg-[#111722] border transition-all ${
                  isMarquee
                    ? 'md:col-span-2 lg:col-span-2 border-emerald-500/40 bg-gradient-to-br from-[#111722] to-[#14202c]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base font-semibold text-emerald-300 leading-snug mb-3">
                  {item.statement}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
