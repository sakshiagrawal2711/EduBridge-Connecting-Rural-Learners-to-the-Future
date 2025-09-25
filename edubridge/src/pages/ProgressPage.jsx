import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProtectedRoute } from "../utils/auth";

export default function ProgressPage() {
  return (
    <ProtectedRoute featureName="Progress Monitoring">
      <Navbar minimal />
      <main className="pt-20 pb-12">
        <section className="section">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📈</div>
              <h1 className="text-3xl font-bold">Skill Progress Monitoring</h1>
              <p className="text-gray-600 mt-2">Track your learning milestones and academic outcomes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-brand-600">85%</div>
                <div className="text-gray-600">Overall Progress</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-gray-600">Completed Modules</div>
              </div>
              <div className="bg-white rounded-xl border p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">A-</div>
                <div className="text-gray-600">Current Grade</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Subject Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Mathematics</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Science</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border p-6">
                <h3 className="font-semibold text-lg mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="text-green-600">🏆</div>
                    <div>
                      <div className="font-medium">Quiz Master</div>
                      <div className="text-sm text-gray-600">Scored 95% in Math Quiz</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="text-blue-600">📚</div>
                    <div>
                      <div className="font-medium">Study Streak</div>
                      <div className="text-sm text-gray-600">7 days consecutive learning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="text-purple-600">⭐</div>
                    <div>
                      <div className="font-medium">Top Performer</div>
                      <div className="text-sm text-gray-600">Ranked #3 in class</div>
                    </div>
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