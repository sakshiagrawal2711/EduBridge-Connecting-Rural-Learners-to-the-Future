import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageProvider";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#timeline", label: "Timeline" },
  { href: "#team", label: "Team" },
  { href: "#faqs", label: "FAQs" }
];

export default function Navbar({ minimal = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { t } = useI18n();

  const sectionIds = useMemo(() => (minimal ? [] : ["home", "features", "timeline", "team", "faqs"]), [minimal]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (minimal) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, minimal]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 ${
      scrolled ? "shadow-sm" : ""
    }`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-7 w-7 rounded-md bg-brand-500 text-white items-center justify-center text-sm">E</span>
          <span>EduBridge</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {minimal ? (
            <Link to="/" className="text-sm text-gray-700 hover:text-brand-600 transition-colors">{t('nav.home')}</Link>
          ) : (
            links.map((l) => {
              const id = l.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActive(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    isActive ? "text-brand-700 font-semibold" : "text-gray-700 hover:text-brand-600"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              );
            })
          )}
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {minimal ? (
              <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm text-gray-700 hover:text-brand-600">{t('nav.home')}</Link>
            ) : (
              links.map((l) => {
                const id = l.href.replace('#', '');
                const isActive = active === id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActive(id);
                      setOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`py-2 text-sm ${isActive ? "text-brand-700 font-semibold" : "text-gray-700 hover:text-brand-600"}`}
                  >
                    {t(`nav.${id}`)}
                  </a>
                );
              })
            )}
          </div>
        </div>
      )}
    </header>
  );
}
