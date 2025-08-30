import React, { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useI18n();
  const images = [
    {
      url: "https://www.globalgiving.org/pfil/61919/pict_large.jpg",
      alt: "Image1"
    },
    {
      url: "https://www.brookings.edu/wp-content/uploads/2021/08/CUE_ed-tech_ADB-blog.jpg?quality=75&w=1500",
      alt: "Image2"
    },
    {
      url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1KKQUr.img?w=768&h=432&m=6&x=210&y=48&s=243&d=45",
      alt: "Image3"
    },
    {
      url: "https://www.aljazeera.com/wp-content/uploads/2024/08/An-Online-session-on-Coding-being-attended-by-students-at-Sajhe-1724823929.jpeg?resize=1920%2C1080",
      alt: "Image4"
    },
    {
      url: "https://images.yourstory.com/cs/wordpress/2018/03/Untitled-design-31.png?fm=png&auto=format&blur=500",
      alt: "Image5"
    }
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [paused, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  return (
    <section id="home" className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">EduBridge</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">{t('hero.subtitle') || 'Connecting Rural Learners to the Future'}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-600 text-white text-sm hover:bg-brand-700"
            >
              {t('hero.ctaExplore') || 'Explore Features'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#faqs"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-brand-300 text-brand-700 text-sm hover:bg-brand-50"
            >
              {t('hero.ctaFaqs') || 'Read FAQs'}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-100 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-200 blur-2xl" />
          <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div
              className="relative w-full h-48 md:h-64 overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].clientX)}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0);
                if (Math.abs(dx) > 40) {
                  setIndex((i) => (dx < 0 ? (i + 1) % images.length : (i - 1 + images.length) % images.length));
                }
                touchStartX.current = null;
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 w-4 rounded-full transition ${
                      i === index ? "bg-white/90" : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
