// lib/axios.ts
import axios, { AxiosInstance } from "axios";

// Do NOT import next/headers here directly — only import conditionally on server
const isServer = typeof window === "undefined";

export const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/v1",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  if (isServer) {
    // Use dynamic import to avoid breaking in Client context
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    // Optional: Add client-side token from localStorage or cookie (if needed)
    const token =
      typeof window !== "undefined"
        ? document.cookie
            .split("; ")
            .find((row) => row.startsWith("token="))
            ?.split("=")[1]
        : null;

    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }

  // Attach error interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized");
        // Optional: redirect to login or clear cookies
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
