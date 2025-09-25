import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/LanguageProvider";
import { isAuthenticated, getAuthUser, logout } from "../utils/auth";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ minimal = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { t } = useI18n();

  const isLoggedIn = isAuthenticated();
  const user = getAuthUser();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      window.location.reload();
    }
  };

  const sectionIds = useMemo(
    () => (minimal ? [] : ["home", "features", "faqs", "contact"]),
    [minimal]
  );

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
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-semibold text-gray-900"
        >
          <span className="inline-flex h-7 w-7 rounded-md bg-brand-500 text-white items-center justify-center text-sm">
            E
          </span>
          <span>EduBridge</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {minimal ? (
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-brand-600 transition-colors"
            >
              {t("nav.home")}
            </Link>
          ) : (
            links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActive(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-brand-700 font-semibold"
                      : "text-gray-700 hover:text-brand-600"
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              );
            })
          )}

          {/* ✅ if logged in, show welcome + logout */}
          {!minimal && user ? (
            <div className="ml-4 flex items-center gap-3">
              <span className="text-sm text-gray-700">
                👋 Welcome, <b>{user.username}</b>
              </span>
              <button
                onClick={handleLogout}
                className="text-sm inline-flex items-center h-8 px-3 rounded-md border border-red-600 text-red-700 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          ) : (
            !minimal && (
              <div className="ml-4 flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-sm inline-flex items-center h-8 px-3 rounded-md border border-brand-600 text-brand-700 hover:bg-brand-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm inline-flex items-center h-8 px-3 rounded-md border border-brand-600 text-brand-700 hover:bg-brand-50"
                >
                  Sign up
                </Link>
              </div>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
