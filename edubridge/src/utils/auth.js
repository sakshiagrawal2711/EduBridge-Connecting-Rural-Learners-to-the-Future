import React from "react";
import { Link } from "react-router-dom";

// Auth utility functions
export function getAuthToken() {
  try {
    return localStorage.getItem("edubridge:authToken");
  } catch {
    return null;
  }
}

export function getAuthUser() {
  try {
    const user = localStorage.getItem("edubridge:user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  const token = getAuthToken();
  const user = getAuthUser();
  
  // Debug logging - remove this later
  console.log("Auth check:", { token: !!token, user: !!user, userObj: user });
  
  // Check for either token or user object
  return !!token || !!user;
}

export function logout() {
  try {
    localStorage.removeItem("edubridge:authToken");
    localStorage.removeItem("edubridge:user");
    window.location.href = "/";
  } catch {}
}

// Protected Route Component
export function ProtectedRoute({ children, featureName = "this feature" }) {
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to access {featureName}. Please sign in to continue.
          </p>
          
          <div className="space-y-3">
            <Link
              to="/login"
              className="block w-full bg-brand-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block w-full border border-brand-600 text-brand-700 py-3 px-4 rounded-lg font-medium hover:bg-brand-50 transition-colors"
            >
              Create Account
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return children;
}