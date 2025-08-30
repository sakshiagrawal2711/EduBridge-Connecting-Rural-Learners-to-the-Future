import React from "react";
import { useI18n } from "../i18n/LanguageProvider";

const phases = ["timeline.idea", "timeline.design", "timeline.dev", "timeline.review1", "timeline.review2", "timeline.final"];

export default function Timeline() {
  const { t } = useI18n();
  return (
    <section id="timeline" className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">{t('timeline.title') || 'Project Timeline'}</h2>

        {/* Mobile: vertical */}
        <ol className="md:hidden relative border-l border-gray-200 pl-4">
      {phases.map((p, i) => (
            <li key={p} className="mb-8 ml-2">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand-500"></div>
        <h3 className="font-semibold">{t(p)}</h3>
        <p className="text-sm text-gray-600">{t('timeline.phase')} {i + 1}</p>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"></div>
            <div className="grid grid-cols-6 gap-4">
              {phases.map((p, i) => (
                <div key={p} className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white border-2 border-brand-500 grid place-items-center shadow-sm">
                      <span className="text-xs font-semibold text-brand-700">{i + 1}</span>
                    </div>
                  </div>
                  <div className="mt-3 font-semibold">{t(p)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
