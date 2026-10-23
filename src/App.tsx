/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemAgitateSolve } from './components/ProblemAgitateSolve';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { ObjectionFaq } from './components/ObjectionFaq';
import { ProofSection } from './components/ProofSection';
import { AuthorityBlock } from './components/AuthorityBlock';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState<boolean>(false);

  const handleOpenTrial = () => {
    setIsTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans">
      {/* Top Bar Contract */}
      <Navbar onOpenTrial={handleOpenTrial} />

      <main>
        {/* 1. ABOVE THE FOLD */}
        <HeroSection onOpenTrial={handleOpenTrial} />

        {/* 2. PROBLEM -> AGITATE -> SOLVE */}
        <ProblemAgitateSolve />

        {/* 3. BENEFITS (the "so that" chain) */}
        <BenefitsSection />

        {/* 4. HOW IT WORKS (3 steps) */}
        <HowItWorks />

        {/* 5. CLEAR PRICING */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 6. OBJECTION HANDLING / FAQ */}
        <ObjectionFaq />

        {/* 7. PROOF (HEAVY - Wall of Proof, Zero Carousels) */}
        <ProofSection />

        {/* 8. CREDIBILITY / AUTHORITY BLOCK */}
        <AuthorityBlock />

        {/* 9. FINAL CTA */}
        <FinalCta onOpenTrial={handleOpenTrial} />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Interactive Free Trial Modal */}
      <TrialModal isOpen={isTrialOpen} onClose={handleCloseTrial} />
    </div>
  );
}
