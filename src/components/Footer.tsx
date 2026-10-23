import React from 'react';
import { Shield, Lock, FileSpreadsheet } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A0F] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Trust Badges Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">30-Day Money-Back Guarantee</div>
              <div className="text-[11px] text-slate-400">Full refund if you do not gain strength in 30 days.</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Bank-Grade 256-Bit SSL</div>
              <div className="text-[11px] text-slate-400">Encrypted personal logs and safe local caching.</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-semibold text-white">Full CSV Data Portability</div>
              <div className="text-[11px] text-slate-400">Export your lifetime workout history anytime.</div>
            </div>
          </div>
        </div>

        {/* Footer Links & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-athletic font-extrabold text-white text-lg tracking-wider">
              APEXTRACK
            </span>
            <span className="text-slate-600">·</span>
            <span>Strength tracking platform built for lifters</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#method" className="hover:text-white transition-colors">
              Method
            </a>
            <a href="#benefits" className="hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Data Guarantee
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-900 text-center md:text-left text-[11px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            © {new Date().getFullYear()} ApexTrack Performance Technologies. All rights reserved.
          </div>
          <div>
            Questions or feedback? Reach our coaching team directly at team@apextrack.fit
          </div>
        </div>
      </div>
    </footer>
  );
};
