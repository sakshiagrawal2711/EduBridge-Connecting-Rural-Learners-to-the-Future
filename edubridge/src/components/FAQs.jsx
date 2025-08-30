import React, { useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

const faqs = [
  { q: "faqs.q1", a: "faqs.a1" },
  { q: "faqs.q2", a: "faqs.a2" },
  { q: "faqs.q3", a: "faqs.a3" },
  { q: "faqs.q4", a: "faqs.a4" }
];

export default function FAQs() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  // Open from hash like #faq-2
  useEffect(() => {
    const hash = window.location.hash;
    const match = /#faq-(\d+)/.exec(hash);
    if (match) {
      const idx = parseInt(match[1], 10);
      if (!Number.isNaN(idx) && idx >= 0 && idx < faqs.length) setOpen(idx);
    }
  }, []);

  return (
    <section id="faqs" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{t('nav.faqs')}</h2>
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} id={`faq-${idx}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gray-50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpen((o) => (o === idx ? -1 : idx))}
                >
                  <span className="font-medium text-gray-900">{t(item.q)}</span>
                  <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  className="px-4 text-sm text-gray-700 overflow-hidden transition-[max-height,opacity] duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-4">{t(item.a)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
