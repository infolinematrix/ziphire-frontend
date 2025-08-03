"use server";

import { cookies } from "next/headers";
import createAxiosInstance from "./axios";

export const setAuthCookies = async (token: string, refreshToken: string) => {
  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
};

export const getAuthCookies = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;

  return { token, refreshToken };
};
export const isAuthenticated = async () => {
  const { token } = await getAuthCookies();
  return !!token; // Returns true if token exists, false otherwise
};
export const getToken = async () => {
  const { token } = await getAuthCookies();
  return token; // Returns the token or null if not set
};
export const getRefreshToken = async () => {
  const { refreshToken } = await getAuthCookies();
  return refreshToken; // Returns the refresh token or null if not set
};

export const logout = async () => {
  debugger
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("refreshToken");
  cookieStore.delete("currentUser");
  // Optionally redirect to login page or home page
  // window.location.href = '/auth/sign-in';
};

export const currentUser = async () => {
  const cookieStore = await cookies();
  const api = await createAxiosInstance();
  const res = await api.get("/users/me");

  if (res.status == 200) {
    cookieStore.set("currentUser", res.data, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 *365,
      path: "/",
    });
    return res.data;
  }

  return false;
};
