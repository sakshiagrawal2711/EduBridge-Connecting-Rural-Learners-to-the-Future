import React, { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" }
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useI18n();

  return (
    <>
      {/* Simple in-app language switcher - no external scripts */}
      {/* Floating switcher */}
      <div className="fixed bottom-4 right-4 z-[60]">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span role="img" aria-label="language">🌐</span>
            <span>Language</span>
          </button>
          {open && (
            <div
              role="menu"
              className="absolute bottom-12 right-0 w-48 rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
            >
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`w-full rounded-md px-2 py-2 text-left text-sm hover:bg-gray-50 ${lang === l.code ? 'text-brand-700 font-medium' : 'text-gray-700'}`}
                  role="menuitem"
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
