import React from 'react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#090D14]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="text-xl font-athletic font-extrabold tracking-wider text-white whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors">
          APEXTRACK
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#method" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Method
          </a>
          <a href="#benefits" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Benefits
          </a>
          <a href="#proof" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Proof
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Pricing
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onOpenTrial}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-emerald-500/20 active:scale-[0.98]"
          >
            <span className="hidden sm:inline">Start Free 14-Day Trial (Takes 60 Seconds)</span>
            <span className="sm:hidden">Start Free Trial</span>
          </button>
        </div>
      </div>
    </header>
  );
};
