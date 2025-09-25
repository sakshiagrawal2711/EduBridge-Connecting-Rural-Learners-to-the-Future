import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

export default function ResearchPage() {
  return (
    <ProtectedRoute featureName="Research & Resource Sharing">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🔬</div>
              <h1 className="text-3xl font-bold">Research & Resource Sharing</h1>
              <p className="text-gray-600 mt-2">Collaborate and share findings with peers and researchers</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Latest Research Papers</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium mb-1">Impact of Digital Learning in Rural Areas</div>
                    <div className="text-sm text-gray-600 mb-2">by Dr. Amit Kumar • Published: Sept 2025</div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Education</span>
                      <span className="text-gray-500">156 downloads</span>
                      <button className="text-brand-600 hover:underline">Read</button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium mb-1">Technology Adoption in Village Schools</div>
                    <div className="text-sm text-gray-600 mb-2">by Prof. Sunita Devi • Published: Aug 2025</div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Technology</span>
                      <span className="text-gray-500">89 downloads</span>
                      <button className="text-brand-600 hover:underline">Read</button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="font-medium mb-1">Bridging Educational Gaps Through Innovation</div>
                    <div className="text-sm text-gray-600 mb-2">by Research Team • Published: July 2025</div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Innovation</span>
                      <span className="text-gray-500">203 downloads</span>
                      <button className="text-brand-600 hover:underline">Read</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Active Collaborations</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">👥</div>
                    <div>
                      <div className="font-medium">Rural Education Initiative</div>
                      <div className="text-sm text-gray-600">25+ researchers • 12 ongoing studies</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">🌱</div>
                    <div>
                      <div className="font-medium">Sustainability in Learning</div>
                      <div className="text-sm text-gray-600">18+ researchers • 8 active projects</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">💡</div>
                    <div>
                      <div className="font-medium">EdTech Innovation Lab</div>
                      <div className="text-sm text-gray-600">32+ researchers • 15 experiments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">Research Papers</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-green-600">75+</div>
                <div className="text-gray-600">Active Researchers</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-purple-600">35+</div>
                <div className="text-gray-600">Ongoing Projects</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Contribute to Research</h3>
                <p className="text-gray-600">Share your findings and collaborate with researchers worldwide</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700">
                  Submit Paper
                </button>
                <button className="px-6 py-2 border border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50">
                  Join Collaboration
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Browse Repository
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