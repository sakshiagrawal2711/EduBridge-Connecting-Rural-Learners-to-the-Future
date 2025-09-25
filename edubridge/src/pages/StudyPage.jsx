import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useI18n } from "../i18n/LanguageProvider";
import { ProtectedRoute } from "../utils/auth";

const dummy = [
  { id: 1, title: "Class 6 - Math: Fractions", subject: "Math", class: 6, url: "https://example.com/fractions.pdf" },
  { id: 2, title: "Class 8 - Science: Cells", subject: "Science", class: 8, url: "https://example.com/cells.pdf" },
  { id: 3, title: "Class 10 - English: Grammar", subject: "English", class: 10, url: "https://example.com/grammar.pdf" },
  { id: 4, title: "Class 7 - History: Harappan", subject: "History", class: 7, url: "https://example.com/harappan.pdf" },
  { id: 5, title: "Class 9 - Math: Algebra", subject: "Math", class: 9, url: "https://example.com/algebra.pdf" },
];

export default function StudyPage() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [cls, setCls] = useState("all");
  const [subject, setSubject] = useState("all");
  const [sortBy, setSortBy] = useState("class-asc");
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem("edubridge:bookmarks");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem("edubridge:bookmarks", JSON.stringify(bookmarks)); } catch {}
  }, [bookmarks]);

  const classes = useMemo(() => Array.from(new Set(dummy.map(d => d.class))).sort((a,b)=>a-b), []);
  const subjects = useMemo(() => Array.from(new Set(dummy.map(d => d.subject))).sort(), []);

  const filtered = useMemo(() => {
    let out = [...dummy];
    if (cls !== "all") out = out.filter(d => String(d.class) === String(cls));
    if (subject !== "all") out = out.filter(d => d.subject === subject);
    if (q.trim()) {
      const s = q.toLowerCase();
      out = out.filter(d => d.title.toLowerCase().includes(s));
    }
    switch (sortBy) {
      case "class-asc": out.sort((a,b)=>a.class-b.class); break;
      case "class-desc": out.sort((a,b)=>b.class-a.class); break;
      case "title": out.sort((a,b)=>a.title.localeCompare(b.title)); break;
      default: break;
    }
    return out;
  }, [q, cls, subject, sortBy]);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => prev.includes(id) ? prev.filter(i=>i!==id) : [...prev, id]);
  };

  return (
    <ProtectedRoute featureName="Study Materials">
      <Navbar minimal />
      <main className="pt-20">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t('study.title')}</h1>
                <p className="mt-1 text-sm text-gray-600">{t('study.subtitle')}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">{t('study.class')}</label>
                <select value={cls} onChange={(e)=>setCls(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200">
                  <option value="all">All</option>
                  {classes.map(c => <option key={c} value={c}>{`Class ${c}`}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">{t('study.subject')}</label>
                <select value={subject} onChange={(e)=>setSubject(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200">
                  <option value="all">All</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-700">{t('study.sort')}</label>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="mt-1 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200">
                  <option value="class-asc">{t('study.sortClassAsc')}</option>
                  <option value="class-desc">{t('study.sortClassDesc')}</option>
                  <option value="title">{t('study.sortTitle')}</option>
                </select>
              </div>
              <div className="sm:col-span-6">
                <label className="block text-xs font-medium text-gray-700">{t('study.search')}</label>
                <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder={t('study.search')} className="mt-1 block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d) => {
                const isBookmarked = bookmarks.includes(d.id);
                return (
                  <div key={d.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs text-gray-500">Class {d.class} • {d.subject}</div>
                        <h3 className="mt-1 font-semibold text-gray-900">{d.title}</h3>
                      </div>
                      <button onClick={() => toggleBookmark(d.id)} className={`h-9 w-9 inline-flex items-center justify-center rounded-md border ${isBookmarked ? 'bg-yellow-100 border-yellow-300 text-yellow-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`} title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}>
                        {isBookmarked ? '★' : '☆'}
                      </button>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                        {t('study.view')}
                      </a>
                      <a href={d.url} download className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                        {t('study.download')}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LanguageSwitcher />
    </ProtectedRoute>
  );
}
