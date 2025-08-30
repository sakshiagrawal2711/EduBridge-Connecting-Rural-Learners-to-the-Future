import React, { useEffect, useState } from "react";

export default function Mentor() {
  const storageKey = "edubridge:mentor-requests";
  const [requests, setRequests] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(requests));
    } catch {}
  }, [requests]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !topic.trim()) return;
    setRequests((prev) => [
      { id: Date.now(), name: name.trim(), topic: topic.trim(), notes: notes.trim() || null, status: "Pending" },
      ...prev,
    ]);
    setName("");
    setTopic("");
    setNotes("");
  };

  const remove = (id) => setRequests((p) => p.filter((r) => r.id !== id));
  const mark = (id, status) => setRequests((p) => p.map((r) => (r.id === id ? { ...r, status } : r)));

  return (
    <section id="mentor" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Mentor Access</h2>
        <p className="mt-2 text-sm text-gray-600">Request guidance from mentors. We’ll match and track requests locally.</p>

        <form onSubmit={submit} className="mt-4 grid gap-3 sm:grid-cols-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="sm:col-span-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Topic e.g., Spoken English"
              className="block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes (optional)"
              className="block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div className="sm:col-span-6">
            <button type="submit" className="h-11 rounded-md bg-brand-600 px-4 text-white text-sm font-medium hover:bg-brand-700">Request mentor</button>
          </div>
        </form>

        <div className="mt-5 grid gap-3">
          {requests.length === 0 && (
            <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-600">
              No requests yet. Submit your first mentor request above.
            </div>
          )}
          {requests.map((r) => (
            <div key={r.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-gray-600">{r.name}</div>
                  <div className="font-medium text-gray-900">{r.topic}</div>
                  {r.notes && <div className="text-xs text-gray-600">{r.notes}</div>}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    r.status === "Pending" ? "bg-yellow-100 text-yellow-800" : r.status === "Matched" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                  }`}>
                    {r.status}
                  </span>
                  <button onClick={() => mark(r.id, "Matched")} className="text-xs rounded-md border border-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-50">Mark matched</button>
                  <button onClick={() => remove(r.id)} className="text-xs rounded-md border border-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-50">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
