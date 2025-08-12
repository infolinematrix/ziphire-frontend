"use server";

import { cookies } from "next/headers";
import createAxiosInstance from "./axios";
import z, { email } from "zod";

// export const handleLogin = async (credentials: any) => {
//   // 1. Authenticate and get tokens
//   debugger;
//   const { token, refreshToken } = await loginAndGetToken({
//     email: credentials.email,
//     password: credentials.password,
//   });

//   // 2. Set auth cookies
//   await setAuthCookies(token, refreshToken);

//   // 3. Call the me function to fetch user data and set the currentUser cookie
//   await me();

//   // 4. Return success or error status
//   return { success: true };
// };

// export const loginAndGetToken = async (credentials: any) => {
//   try {
//     const api = await createAxiosInstance();
//     const res = await api.post("/v1/users/login", credentials);

//     if (res.status === 200) {
//       return {
//         token: res.data.access_token,
//         refreshToken: res.data.refresh_token,
//       };
//     } else {
//       throw new Error("Invalid email or password");
//     }
//   } catch (error) {
//     throw new Error("Login failed. Please check your credentials.");
//   }
// };

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
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("refreshToken");
  cookieStore.delete("currentUser");

  // Optionally redirect to login page or home page
  // window.location.href = '/auth/sign-in';
};

export const currentUser = async () => {
  const cookieStore = await cookies();
  const rawUser = cookieStore.get("currentUser")?.value;
  let user = null;

  try {
    if (rawUser) {
      user = JSON.parse(rawUser);
    }
  } catch (error) {
    console.error("Error parsing currentUser cookie:", error);
  }

  return { user };
};

export const setCurrentUser = async (user: any) => {
  const cookieStore = await cookies();

  cookieStore.set("currentUser", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
};

export const me = async () => {
  try {
    const token = await getToken(); // Get the token from your existing auth utility
    if (!token) {
      console.error("No authentication token found.");
      return false;
    }

    const api = await createAxiosInstance();
    const res = await api.get("/users/me");

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }

  // Return false on any failure
  return false;
};
