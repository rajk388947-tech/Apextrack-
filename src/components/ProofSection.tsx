import React from 'react';
import { Star, CheckCircle, Trophy, TrendingUp } from 'lucide-react';
import { Testimonial } from '../types';
import lifterProgressShowcase from '../assets/images/lifter_progress_showcase_1792660987676.jpg';

export const ProofSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'David Reynolds',
      role: 'Competitive Powerlifter (USAPL 83kg)',
      location: 'Denver, CO',
      gainStat: '+35 lbs on Bench Press',
      timeframe: '16 weeks',
      quote:
        'Bench went from 215 lbs to 250 lbs in 16 weeks. The auto-overload pacing stopped me from jumping weight too early and stalling out. When you follow the numbers instead of your ego, you stop hurting your elbows.',
      metricLabel: 'Bench Press',
      metricValue: '215 → 250 lbs',
      verifiedLifter: true,
    },
    {
      id: 't2',
      name: 'Elena Morales',
      role: 'Cross-Training & Hypertrophy',
      location: 'Austin, TX',
      gainStat: 'Cut 14 mins per workout',
      timeframe: 'Ongoing',
      quote:
        'Cut 14 minutes off my workout time because I am not doing plate math or scrolling for old workout notes. I tap my set, check my rest countdown, and move straight to the next round.',
      metricLabel: 'Session Time Saved',
      metricValue: '14 mins / day',
      verifiedLifter: true,
    },
    {
      id: 't3',
      name: 'Marcus Thorne',
      role: 'Garage Gym Lifter (12 Years Experience)',
      location: 'Columbus, OH',
      gainStat: '+50 lbs Deadlift PR',
      timeframe: '6 months',
      quote:
        'I have lifted for 12 years and thought my beginner gains were permanently in the rearview mirror. This is the first log that forced consistent small increments that actually added up to a 50 lb deadlift PR.',
      metricLabel: 'Deadlift PR',
      metricValue: '405 → 455 lbs',
      verifiedLifter: true,
    },
    {
      id: 't4',
      name: 'Sarah Kowalski',
      role: 'Strength Athlete',
      location: 'Chicago, IL',
      gainStat: 'First 315 lb Squat',
      timeframe: '20 weeks',
      quote:
        'Squatted 315 lbs for the first time last Saturday. The RPE-based weight increments kept my knees feeling good throughout the block without junk volume frying my recovery.',
      metricLabel: 'Squat Single',
      metricValue: '275 → 315 lbs',
      verifiedLifter: true,
    },
    {
      id: 't5',
      name: 'Jason Bradley',
      role: 'Software Engineer & Lifter',
      location: 'Seattle, WA',
      gainStat: 'Zero Missed Workouts in 9 Months',
      timeframe: '36 weeks',
      quote:
        'Knowing the exact target before I walked through the gym door removed all decision fatigue after an 8-hour workday. I just execute what the screen tells me to load.',
      metricLabel: 'Consistency Rate',
      metricValue: '98.4%',
      verifiedLifter: true,
    },
    {
      id: 't6',
      name: 'Dr. Ryan Chen',
      role: 'Doctor of Physical Therapy & Lifter',
      location: 'San Diego, CA',
      gainStat: 'Evidence-Based Overload',
      timeframe: '1 Year Clinical Use',
      quote:
        'Progressive mechanical tension is the single validated driver of hypertrophy and tendon remodeling. ApexTrack enforces that discipline without gimmicks or marketing distractions.',
      metricLabel: 'Injury-Free Weeks',
      metricValue: '52 straight weeks',
      verifiedLifter: true,
    },
  ];

  return (
    <section id="proof" className="py-20 bg-[#090D14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Review Volume Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
              <Trophy className="w-4 h-4" />
              <span>Wall of Real Lifter Proof</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-athletic font-extrabold uppercase tracking-tight text-white">
              Real Numbers From Real Barbells
            </h2>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white font-mono-nums">4.9 / 5</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">3,840 verified lifter logs</span>
          </div>
        </div>

        {/* Featured Progress Spotlight */}
        <div className="mb-12 rounded-2xl bg-[#111722] border border-slate-800 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative">
            <img
              src={lifterProgressShowcase}
              alt="Lifter checking workout metrics on phone in gym"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = '/images/lifter_progress_showcase_1792660987676.jpg';
              }}
              className="w-full h-64 lg:h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-nums text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Featured Log Case Study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                "Added 35 lbs to my deadlift in 90 days without grinding through bad reps."
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                When you track RPE alongside incremental 5 lb jumps, you stop blowing out your lower back on bad recovery days. You load the bar with full confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 font-mono-nums">
              <div>
                <span className="text-xs text-slate-400">Deadlift 1RM</span>
                <div className="text-xl font-bold text-white">405 → 440 lbs</div>
              </div>
              <div>
                <span className="text-xs text-slate-400">Weekly Consistency</span>
                <div className="text-xl font-bold text-emerald-400">100%</div>
              </div>
              <div>
                <span className="text-xs text-slate-400">Duration</span>
                <div className="text-xl font-bold text-white">12 Weeks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy Proof Wall (No Carousel: Edge-to-Edge Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl bg-[#111722] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5"
            >
              <div>
                {/* Metric Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono-nums font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{t.gainStat}</span>
                  </div>
                  <span className="text-[11px] font-mono-nums text-slate-400">{t.timeframe}</span>
                </div>

                <div className="flex text-amber-400 mt-3 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    {t.verifiedLifter && (
                      <span title="Verified Lifter">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                </div>
                <div className="text-right font-mono-nums">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">{t.metricLabel}</span>
                  <span className="text-xs font-bold text-emerald-300">{t.metricValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
