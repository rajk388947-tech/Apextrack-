import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [goal, setGoal] = useState<string>('strength');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address for your workout logs.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#111722] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-nums text-emerald-400 uppercase tracking-widest mb-1">
              <Dumbbell className="w-4 h-4" />
              <span>14-Day Free Access</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Your Free 14-Day Trial
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Instant setup. No credit card required. Keep all your exported workout logs forever.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Goal Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  What is your primary training focus right now?
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'strength', label: 'Raw Strength & PRs' },
                    { id: 'hypertrophy', label: 'Hypertrophy & Muscle' },
                    { id: 'powerlifting', label: 'Powerlifting Meet' },
                    { id: 'general', label: 'Garage Gym / General' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setGoal(item.id)}
                      className={`p-2.5 rounded-lg border text-left transition-colors font-medium ${
                        goal === item.id
                          ? 'bg-emerald-500/20 border-emerald-400 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Your First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-400"
                />
                {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
              </div>

              {/* Single Primary Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                <span>Start Free 14-Day Trial (Takes 60 Seconds)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Risk Reversal Microcopy */}
              <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero card required. Instant access code emailed immediately.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              You are ready to log, {name || 'Lifter'}!
            </h3>

            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your 14-day pass is active for <strong className="text-emerald-300">{email}</strong>. We just generated your customized progressive overload template for{' '}
              <span className="font-semibold text-white uppercase">{goal}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between font-mono-nums">
                <span className="text-slate-400">Account Status:</span>
                <span className="text-emerald-400 font-bold">14-Day Pass Active</span>
              </div>
              <div className="flex justify-between font-mono-nums">
                <span className="text-slate-400">Offline Caching:</span>
                <span className="text-white">Enabled</span>
              </div>
              <div className="flex justify-between font-mono-nums">
                <span className="text-slate-400">Progressive Overload Target:</span>
                <span className="text-white">+5 lbs next session</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-6 rounded-lg font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              Continue to Training Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
