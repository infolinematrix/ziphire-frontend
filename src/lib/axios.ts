// lib/axios.ts
import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

const isServer = typeof window === 'undefined';

const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/v1', //process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  if (isServer) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || null;
    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error('Unauthorized');
        // Optionally: trigger redirect, clear cookies, etc.
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
