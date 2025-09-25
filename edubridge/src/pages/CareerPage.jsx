import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

export default function CareerPage() {
  return (
    <ProtectedRoute featureName="Career Support">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🧭</div>
              <h1 className="text-3xl font-bold">Employment & Career Support</h1>
              <p className="text-gray-600 mt-2">Placement guidance and job-readiness tips for rural students</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-green-600">2,500+</div>
                <div className="text-gray-600">Job Placements</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-purple-600">₹3.2L</div>
                <div className="text-gray-600">Avg. Starting Salary</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Latest Job Opportunities</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Junior Software Developer</div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                    </div>
                    <div className="text-sm text-gray-600">TechCorp India • Remote/Hybrid</div>
                    <div className="text-sm font-medium text-brand-600">₹2.5-4 LPA</div>
                    <button className="mt-2 text-xs text-brand-600 hover:underline">Apply Now</button>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Data Entry Specialist</div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Urgent</span>
                    </div>
                    <div className="text-sm text-gray-600">Digital Solutions • Work from Home</div>
                    <div className="text-sm font-medium text-brand-600">₹1.8-2.5 LPA</div>
                    <button className="mt-2 text-xs text-brand-600 hover:underline">Apply Now</button>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">Customer Support Executive</div>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Featured</span>
                    </div>
                    <div className="text-sm text-gray-600">CallCenter Plus • Flexible Hours</div>
                    <div className="text-sm font-medium text-brand-600">₹2-3 LPA</div>
                    <button className="mt-2 text-xs text-brand-600 hover:underline">Apply Now</button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Career Development</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">📝</div>
                    <div>
                      <div className="font-medium">Resume Building</div>
                      <div className="text-sm text-gray-600">Professional templates and guidance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">🎯</div>
                    <div>
                      <div className="font-medium">Interview Preparation</div>
                      <div className="text-sm text-gray-600">Mock interviews and tips</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">💼</div>
                    <div>
                      <div className="font-medium">Skill Assessment</div>
                      <div className="text-sm text-gray-600">Test your job readiness</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">🤝</div>
                    <div>
                      <div className="font-medium">Networking Events</div>
                      <div className="text-sm text-gray-600">Connect with industry professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Launch Your Career?</h3>
              <p className="text-gray-600 mb-6">Join thousands of rural students who found their dream jobs through EduBridge</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
                  Upload Resume
                </button>
                <button className="px-6 py-2 border border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50">
                  Browse Jobs
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ProtectedRoute>
  );
}