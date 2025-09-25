import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const translations = {
  en: {
    nav: { home: "Home", features: "Features", faqs: "FAQs", contact: "Contact", language: "Language" },
    features: { title: "Features", subtitle: "These features are in development — click any card to see the status.", open: "Open", comingSoon: "Coming soon", countdown: "Countdown", gotIt: "Got it" },
    contact: { title: "Contact", subtitle: "Have a question or want to collaborate? Send us a message.", send: "Send message" },
    study: { title: "Study Materials", subtitle: "Filter by class and subject, search, bookmark, or download.", class: "Class", subject: "Subject", sort: "Sort", sortClassAsc: "Class (Low → High)", sortClassDesc: "Class (High → Low)", sortTitle: "Title (A → Z)", search: "Search", view: "View", download: "Download" },
    hero: { subtitle: "Connecting Rural Learners to the Future", ctaExplore: "Explore Features", ctaFaqs: "Read FAQs" },
    timeline: { title: "Project Timeline", phase: "Phase", idea: "Idea", design: "Design", dev: "Development", review1: "Review 1", review2: "Review 2", final: "Final Submission" },
    faqs: {
      q1: "What is EduBridge?",
      a1: "EduBridge is a concept prototype aiming to connect rural learners with accessible education, mentorship, and career opportunities.",
      q2: "Is the platform available now?",
      a2: "This is a static prototype for now. Core features are under development and will be released in phases.",
      q3: "How will offline access work?",
      a3: "We plan to support low-bandwidth and offline-first content delivery through local access points and downloadable resources.",
      q4: "How can I contribute?",
      a4: "You can suggest improvements, share resources, or collaborate as a mentor. A formal contribution process will be announced."
    },
    footer: { text: "CSE241 – EduBridge | Capstone Project Review 2" }
  },
  hi: {
    nav: { home: "होम", features: "विशेषताएँ", faqs: "प्रश्न", contact: "संपर्क", language: "भाषा" },
    features: { title: "विशेषताएँ", subtitle: "ये सुविधाएँ निर्माण में हैं — स्थिति देखने के लिए किसी भी कार्ड पर क्लिक करें।", open: "खोलें", comingSoon: "जल्द आ रहा है", countdown: "काउंटडाउन", gotIt: "ठीक है" },
    contact: { title: "संपर्क", subtitle: "कोई प्रश्न है या सहयोग करना चाहते हैं? हमें संदेश भेजें।", send: "भेजें" },
    study: { title: "अध्ययन सामग्री", subtitle: "कक्षा और विषय के अनुसार फ़िल्टर करें, खोजें, बुकमार्क करें या डाउनलोड करें।", class: "कक्षा", subject: "विषय", sort: "क्रमबद्ध करें", sortClassAsc: "कक्षा (छोटे से बड़े)", sortClassDesc: "कक्षा (बड़े से छोटे)", sortTitle: "शीर्षक (A → Z)", search: "खोजें", view: "देखें", download: "डाउनलोड" },
    hero: { subtitle: "ग्रामीण शिक्षार्थियों को भविष्य से जोड़ना", ctaExplore: "विशेषताएँ देखें", ctaFaqs: "प्रश्न पढ़ें" },
    timeline: { title: "परियोजना समयरेखा", phase: "चरण", idea: "विचार", design: "डिज़ाइन", dev: "विकास", review1: "समीक्षा 1", review2: "समीक्षा 2", final: "अंतिम प्रस्तुति" },
    faqs: {
      q1: "EduBridge क्या है?",
      a1: "EduBridge एक कॉन्सेप्ट प्रोटोटाइप है जिसका उद्देश्य ग्रामीण शिक्षार्थियों को सुलभ शिक्षा, मार्गदर्शन और करियर अवसरों से जोड़ना है।",
      q2: "क्या प्लेटफ़ॉर्म अभी उपलब्ध है?",
      a2: "यह फिलहाल एक स्थिर प्रोटोटाइप है। मुख्य फीचर्स चरणों में जारी किए जाएंगे।",
      q3: "ऑफ़लाइन एक्सेस कैसे काम करेगा?",
      a3: "हम कम-बैंडविड्थ और ऑफ़लाइन-फर्स्ट कंटेंट को स्थानीय एक्सेस पॉइंट्स और डाउनलोड योग्य संसाधनों के माध्यम से सपोर्ट करने की योजना बना रहे हैं।",
      q4: "मैं योगदान कैसे कर सकता/सकती हूँ?",
      a4: "आप सुधार सुझा सकते हैं, संसाधन साझा कर सकते हैं या मेंटर के रूप में सहयोग कर सकते हैं। औपचारिक प्रक्रिया जल्द घोषित होगी।"
    },
    footer: { text: "CSE241 – EduBridge | कैपस्टोन प्रोजेक्ट रिव्यू 2" }
  },
  ta: { nav: { home: "முகப்பு", features: "அம்சங்கள்", faqs: "கேள்விகள்", contact: "தொடர்பு", language: "மொழி" } },
  te: { nav: { home: "హోమ్", features: "లక్షణాలు", faqs: "ప్రశ్నలు", contact: "సంప్రదించండి", language: "భాష" } },
  bn: { nav: { home: "হোম", features: "বৈশিষ্ট্য", faqs: "প্রশ্ন", contact: "যোগাযোগ", language: "ভাষা" } },
  mr: { nav: { home: "मुख्यपृष्ठ", features: "वैशिष्ट्ये", faqs: "प्रश्न", contact: "संपर्क", language: "भाषा" } },
  gu: { nav: { home: "મુખ્ય", features: "વિશેષતાઓ", faqs: "પ્રશ્નો", contact: "સંપર્ક", language: "ભાષા" } },
  kn: { nav: { home: "ಮುಖಪುಟ", features: "ವೈಶಿಷ್ಟ್ಯಗಳು", faqs: "ಪ್ರಶ್ನೆಗಳು", contact: "ಸಂಪರ್ಕಿಸಿ", language: "ಭಾಷೆ" } },
  ml: { nav: { home: "ഹോം", features: "സവിശേഷതകൾ", faqs: "ചോദ്യങ്ങൾ", contact: "ബന്ധപ്പെടുക", language: "ഭാഷ" } },
  pa: { nav: { home: "ਘਰ", features: "ਫੀਚਰ", faqs: "ਸਵਾਲ", contact: "ਸੰਪਰਕ", language: "ਭਾਸ਼ਾ" } },
  or: { nav: { home: "ମୁଖ୍ୟ", features: "ବିଶେଷତା", faqs: "ପ୍ରଶ୍ନ", contact: "ଯୋଗାଯୋଗ", language: "ଭାଷା" } }
};

const I18nContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("edubridge:lang") || "en");
  useEffect(() => { try { localStorage.setItem("edubridge:lang", lang); } catch {} }, [lang]);

  const t = (key) => {
    const d = translations[lang] || translations.en;
    const parts = key.split(".");
    let cur = d;
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p]; else { cur = null; break; }
    }
    if (typeof cur === "string") return cur;
    // Fallback to English
    const de = translations.en;
    let curE = de;
    for (const p of parts) {
      if (curE && typeof curE === "object" && p in curE) curE = curE[p]; else { curE = null; break; }
    }
    return typeof curE === "string" ? curE : key;
  };

  const value = useMemo(() => ({ lang, setLang, t, translations }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() { return useContext(I18nContext); }
