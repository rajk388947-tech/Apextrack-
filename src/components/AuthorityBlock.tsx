import React from 'react';
import { Award, CheckCircle2, Dumbbell } from 'lucide-react';
import coachAuthorityPortrait from '../assets/images/coach_authority_portrait_1792660986603.jpg';

export const AuthorityBlock: React.FC = () => {
  return (
    <section className="py-20 bg-[#0C121D] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111722] border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Portrait Column */}
          <div className="md:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-lg aspect-square">
              <img
                src={coachAuthorityPortrait}
                alt="Coach Marcus Vance, CSCS"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/images/coach_authority_portrait_1792660986603.jpg';
                }}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-3 text-center md:text-left">
              <div className="text-base font-bold text-white">Marcus Vance, CSCS</div>
              <div className="text-xs text-emerald-400 font-mono-nums">Head Coach & Founder</div>
            </div>
          </div>

          {/* Bio & Credibility Details */}
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Coaching Authority</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-athletic font-extrabold uppercase text-white leading-tight">
              Built by Coaches Who Actually Load Barbells
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              After fourteen years training collegiate athletes and competitive powerlifters, I watched hundreds of dedicated trainees stall out simply because they never applied systematic weight jumps. They relied on feeling instead of math.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We engineered ApexTrack to strip away all fitness gimmicks. No bloated social feeds, no 3D cartoon avatars, and no fake hype. Just clean, reliable progressive overload logic that guarantees you put more weight on the bar every month.
            </p>

            {/* Credential Checkpoints */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CSCS Certified (NSCA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14 Years Collegiate Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tested on 48,200 Active Trainees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Corporate Venture Capital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
