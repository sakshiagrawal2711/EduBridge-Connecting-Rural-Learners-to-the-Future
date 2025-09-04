// Simple API helper for calling the Spring backend
const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

export const endpoints = {
  login: "/api/auth/login",
  register: "/api/auth/register",
};

function getToken() {
  try {
    return localStorage.getItem("edubridge:authToken") || null;
  } catch {
    return null;
  }
}

export async function apiFetch(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const token = getToken();

  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const res = await fetch(url, { ...options, headers });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!res.ok) {
    const message =
      (data && (data.message || data.error)) ||
      res.statusText ||
      "Request failed";
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

function normalizeRole(role) {
  return typeof role === "string" ? role.toUpperCase() : role;
}

export async function loginApi({ email, password, role }) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", normalizeRole(role));

  return apiFetch(endpoints.login, {
    method: "POST",
    body: formData,
  });
}

export async function registerApi({ username, email, password, role }) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", normalizeRole(role));

  return apiFetch(endpoints.register, {
    method: "POST",
    body: formData,
  });
}
