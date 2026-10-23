import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export const ObjectionFaq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Why not just use Apple Notes or a free paper notebook?',
      answer:
        'Paper notebooks get soaked in gym sweat, torn up in your gym bag, and never calculate weekly volume or progressive overload percentages. Apple Notes forces you to type out numbers on a keyboard with trembling hands between sets. ApexTrack lets you tap two big buttons, view your previous load immediately, and know your next weight jump before you touch the bar.',
    },
    {
      id: 'faq-2',
      question: 'Do I have to enter my credit card for the free trial?',
      answer:
        'No. You start your trial with just an email address and a password. We do not ask for billing information until you decide to keep your training dashboard on day 14. If you decide not to continue, you never get billed a single cent.',
    },
    {
      id: 'faq-3',
      question: 'Will this work if my gym is in a basement with zero cell reception?',
      answer:
        'Yes. ApexTrack stores everything directly on your device storage first. You can log all your sets completely offline in any concrete basement gym. Your data syncs to the cloud the moment you reconnect to Wi-Fi or cellular service.',
    },
    {
      id: 'faq-4',
      question: 'Can I import my existing workouts from Strong, Hevy, or a spreadsheet?',
      answer:
        'Yes. ApexTrack includes a dedicated CSV import tool. You can upload your historical workouts in three clicks so that you keep your entire multi-year lifting history without starting from scratch.',
    },
    {
      id: 'faq-5',
      question: 'Is this only for powerlifters, or does it work for hypertrophy and bodybuilding too?',
      answer:
        'It works for anyone who needs progressive resistance. Hypertrophy requires mechanical tension and progressive volume over time just as much as powerlifting. You can track RPE, rep-in-reserve, drop sets, and rest times across any bodybuilding routine.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#0C121D] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono-nums text-emerald-400 uppercase tracking-widest">
            Straight Answers
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-athletic font-extrabold uppercase tracking-tight text-white">
            Common Questions From Lifters
          </h2>
          <p className="mt-3 text-base text-slate-300">
            No evasive corporate jargon. Here is how ApexTrack actually runs in the weight room.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#111722] border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
