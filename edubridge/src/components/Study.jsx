import React, { useEffect, useMemo, useState } from "react";

export default function Study() {
  const storageKey = "edubridge:study-materials";
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setItems((prev) => [
      { id: Date.now(), title: title.trim(), url: url.trim() || null },
      ...prev,
    ]);
    setTitle("");
    setUrl("");
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <section id="study" className="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Study Materials</h2>
        <p className="mt-2 text-sm text-gray-600">Save links or notes to learning resources.</p>

        <form onSubmit={addItem} className="mt-4 grid gap-3 sm:grid-cols-5 rounded-xl border border-gray-200 bg-white/80 p-4">
          <div className="sm:col-span-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title e.g., Algebra Basics"
              className="block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Optional link (https://...)"
              className="block w-full h-11 rounded-lg border border-gray-300 bg-white/70 px-3 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              type="url"
              pattern="https?://.*"
            />
          </div>
          <div className="sm:col-span-1">
            <button type="submit" className="h-11 w-full rounded-md bg-brand-600 text-white text-sm font-medium hover:bg-brand-700">Add</button>
          </div>
        </form>

        <div className="mt-5 grid gap-3">
          {items.length === 0 && (
            <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-sm text-gray-600">
              No materials yet. Add your first resource above.
            </div>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div>
                <div className="font-medium text-gray-900">{it.title}</div>
                {it.url && (
                  <a className="text-xs text-brand-700 hover:underline" href={it.url} target="_blank" rel="noreferrer">
                    {it.url}
                  </a>
                )}
              </div>
              <button onClick={() => removeItem(it.id)} className="text-xs rounded-md border border-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-50">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
