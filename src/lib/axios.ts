import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.urbannestrealty.in/v1";

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: add auth token if available in localStorage/cookies
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      try {
        const token = window.localStorage.getItem("urbannest_auth_token");
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch {
        // Ignore storage access errors in private browsing/sandboxed environments
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor: standard error normalization
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Server returned an error code outside 2xx
      console.warn(`[API Error] ${error.response.status}: ${error.response.statusText}`, error.response.data);
    } else if (error.request) {
      // Request made but no response received
      console.error("[API Network Error] No response received from server");
    } else {
      console.error("[API Setup Error]", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;

