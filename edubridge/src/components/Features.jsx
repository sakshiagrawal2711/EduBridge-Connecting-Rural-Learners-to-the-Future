import React, { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

const items = [
  { key: "study", title: "Study Materials", desc: "Access curated resources.", icon: "📘", href: "/study" },
  { key: "mentor", title: "Mentor Access", desc: "Connect with mentors.", icon: "🧑‍🏫" },
  { key: "progress", title: "Monitoring Skill Progress", desc: "Track learning milestones and outcomes.", icon: "📈" },
  { key: "bridge", title: "Bridging Digital Divide", desc: "Offline-friendly content and local access points.", icon: "🌐" },
  { key: "finance", title: "Grants, Loans & Incentives Info", desc: "Discover funding opportunities and schemes.", icon: "💸" },
  { key: "career", title: "Employment & Career Support", desc: "Placement guidance and job-readiness tips.", icon: "🧭" },
  { key: "research", title: "Research & Resource Sharing", desc: "Collaborate and share findings with peers.", icon: "🔬" }
];

export default function Features() {
  const { t } = useI18n();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const [now, setNow] = useState(Date.now());

  // Set a common ETA to 3 months from initial render
  const eta = useMemo(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 3);
    return d.getTime();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const remaining = Math.max(0, eta - now);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return (
    <section id="features" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('features.title')}</h2>
          <p className="mt-2 text-gray-600 text-sm">{t('features.subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand-50 flex items-center justify-center text-lg">{it.icon}</div>
                <h3 className="font-semibold text-gray-900">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4">
                {it.href ? (
                  <a
                    href={it.href}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-md border border-brand-200 text-brand-700 hover:bg-brand-50 transition"
                  >
                    {t('features.open')}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setActiveTitle(it.title);
                      setModalOpen(true);
                    }}
                    className="text-xs px-3 py-1 rounded-md border border-brand-200 text-brand-700 hover:bg-brand-50 transition"
                    title={t('features.comingSoon')}
                  >
                    {t('features.comingSoon')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="cs-title" aria-describedby="cs-desc">
          <div className="absolute inset-0 bg-black/50" onClick={() => setModalOpen(false)} aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 id="cs-title" className="text-lg font-semibold text-gray-900">{t('features.comingSoon')}</h3>
                  <p id="cs-desc" className="mt-1 text-sm text-gray-600">
                    Stay tuned! <span className="font-medium">{activeTitle}</span> is scheduled to arrive in:
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="shrink-0 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
                <span className="text-sm font-medium text-gray-700">{t('features.countdown')}</span>
                <div className="flex items-center gap-3 text-sm font-semibold text-brand-700">
                  <span>{String(days).padStart(2, '0')}d</span>
                  <span>{String(hours).padStart(2, '0')}h</span>
                  <span>{String(minutes).padStart(2, '0')}m</span>
                  <span>{String(seconds).padStart(2, '0')}s</span>
                </div>
              </div>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setModalOpen(false)}
                  className="inline-flex items-center rounded-md bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700"
                >
                  {t('features.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
