import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

export default function FinancePage() {
  return (
    <ProtectedRoute featureName="Financial Information">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💸</div>
              <h1 className="text-3xl font-bold">Grants, Loans & Incentives</h1>
              <p className="text-gray-600 mt-2">Discover funding opportunities and government schemes for education</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">🎓</div>
                  <h3 className="font-semibold">Education Scholarships</h3>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">₹2,50,000</div>
                <div className="text-sm text-gray-600">Available funding</div>
              </div>
              <div className="bg-white rounded-xl border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">🏦</div>
                  <h3 className="font-semibold">Education Loans</h3>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">4.5%</div>
                <div className="text-sm text-gray-600">Starting interest rate</div>
              </div>
              <div className="bg-white rounded-xl border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">🏛️</div>
                  <h3 className="font-semibold">Govt. Schemes</h3>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Active programs</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Popular Schemes</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium">PM Scholarship Scheme</div>
                    <div className="text-sm text-gray-600 mt-1">Up to ₹25,000 for undergraduate studies</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      <button className="text-xs text-brand-600 hover:underline">Apply Now</button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium">Merit-cum-Means Scholarship</div>
                    <div className="text-sm text-gray-600 mt-1">Need-based financial assistance</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      <button className="text-xs text-brand-600 hover:underline">Apply Now</button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium">Digital India Scholarship</div>
                    <div className="text-sm text-gray-600 mt-1">For rural students pursuing tech education</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Deadline: Dec 31</span>
                      <button className="text-xs text-brand-600 hover:underline">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
                    <select className="w-full h-10 border border-gray-300 rounded-md px-3">
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>Diploma</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Family Income (Annual)</label>
                    <select className="w-full h-10 border border-gray-300 rounded-md px-3">
                      <option>Below ₹1 Lakh</option>
                      <option>₹1-2 Lakh</option>
                      <option>₹2-5 Lakh</option>
                      <option>Above ₹5 Lakh</option>
                    </select>
                  </div>
                  <button className="w-full bg-brand-600 text-white py-2 rounded-md hover:bg-brand-700">
                    Find Eligible Schemes
                  </button>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Estimated Benefits</div>
                    <div className="text-lg font-bold text-green-600">₹45,000 - ₹85,000</div>
                    <div className="text-xs text-green-600">Based on your profile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}