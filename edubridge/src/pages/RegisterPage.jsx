import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { registerApi } from "../services/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const res = await registerApi({ name, email, password, role });
      if (res?.token) {
        localStorage.setItem("edubridge:authToken", res.token);
      }
      if (res?.user) {
        localStorage.setItem("edubridge:user", JSON.stringify(res.user));
      }
      window.location.href = "/";
    } catch (err) {
      setError(err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar minimal />
      <main className="pt-24 pb-24 px-4">
        <div className="mx-auto max-w-md bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-1">Create account</h1>
          <p className="text-sm text-gray-600 mb-6">Join EduBridge to access study materials and more.</p>
          {error && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">{error}</div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full h-11 rounded-md border border-gray-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500">
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Create a strong password" />
            </div>
            <button type="submit" disabled={loading} className="w-full h-11 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700 disabled:opacity-60">
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">Already have an account? <a className="text-brand-700 font-medium hover:underline" href="/login">Sign in</a></p>
        </div>
      </main>
    </>
  );
}
