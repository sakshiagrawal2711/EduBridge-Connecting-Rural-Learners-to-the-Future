import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

export default function BridgePage() {
  return (
    <ProtectedRoute featureName="Digital Bridge">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🌐</div>
              <h1 className="text-3xl font-bold">Bridging Digital Divide</h1>
              <p className="text-gray-600 mt-2">Offline-friendly content and local access points for rural learners</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Offline Learning Centers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Village Learning Hub - Rajgarh</div>
                      <div className="text-sm text-gray-600">Distance: 2.5 km</div>
                    </div>
                    <div className="text-green-600 text-sm">Open</div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Community Center - Dewas</div>
                      <div className="text-sm text-gray-600">Distance: 4.1 km</div>
                    </div>
                    <div className="text-green-600 text-sm">Open</div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Digital Kiosk - Ujjain</div>
                      <div className="text-sm text-gray-600">Distance: 8.2 km</div>
                    </div>
                    <div className="text-yellow-600 text-sm">Limited</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Low-Data Solutions</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">📱</div>
                    <div>
                      <div className="font-medium">SMS-based Learning</div>
                      <div className="text-sm text-gray-600">Daily lessons via text messages</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">📻</div>
                    <div>
                      <div className="font-medium">Radio Programs</div>
                      <div className="text-sm text-gray-600">Educational broadcasts in local language</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">💾</div>
                    <div>
                      <div className="font-medium">Offline Content</div>
                      <div className="text-sm text-gray-600">Downloadable materials for offline use</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Digital Inclusion Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Learning Centers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">15K+</div>
                    <div className="text-sm text-gray-600">Students Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Coverage Area</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Access Available</div>
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