// lib/hooks/useUser.ts
"use client";

import { getToken, setCurrentUser } from "@/lib/auth";
import { UserType } from "@/types/user";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = await getToken();
        console.log("Fetching user with token:", token);

        const res = await fetch("http://localhost:8000/v1/users/me", {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();

        setUser(data || null); // based on API shape
        setCurrentUser(data);
      } catch (err: any) {
        setUser(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
