import React, { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  return (
  <section id="contact" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('contact.title')}</h2>
        <p className="mt-2 text-sm text-gray-600">{t('contact.subtitle')}</p>

    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form));
              // Fake submit; integrate with a backend or Formspree later
              if (data.name && data.email && data.message) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus(null), 2500);
              } else {
                setStatus("error");
                setTimeout(() => setStatus(null), 2500);
              }
            }}
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-white/70 pl-10 h-11 text-sm shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus-visible:outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" fill="none"/><path d="m22 6-10 7L2 6"/></svg>
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-white/70 pl-10 h-11 text-sm shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus-visible:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute left-3 top-3 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="block w-full rounded-lg border border-gray-300 bg-white/70 pl-10 pt-3 min-h-[140px] text-sm shadow-sm transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus-visible:outline-none"
                  placeholder="How can we help?"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              >
                {t('contact.send')}
              </button>
            </div>
          </form>

          {status && (
            <div className="mt-4">
              {status === "success" ? (
                <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
                  Message sent! We'll get back to you soon.
                </div>
              ) : (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  Please check the form and try again.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
