import React from "react";
import { useI18n } from "../i18n/LanguageProvider";

const groups = [
  {
    title: "Team Members",
    people: ["Member A", "Member B", "Member C", "Member D"]
  },
  {
    title: "Guide",
    people: ["Guide Name"]
  }
];

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-800 grid place-items-center text-sm font-semibold" title={name}>
      {initials}
    </div>
  );
}

export default function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">{t('nav.team')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow">
              <h3 className="font-semibold text-gray-900">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.people.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Avatar name={p} />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
