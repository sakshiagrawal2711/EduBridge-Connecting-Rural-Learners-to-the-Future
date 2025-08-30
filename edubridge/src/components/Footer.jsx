import React from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600">
        {t('footer.text') || 'CSE241 – EduBridge | Capstone Project Review 2'}
      </div>
    </footer>
  );
}
