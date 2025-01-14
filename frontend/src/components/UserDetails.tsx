'use client';
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  
}

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { isLoggedIn, userId, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // First check if user is logged in
        if (!isLoggedIn || !userId) {
          router.push('/login');
          return;
        }

        const response = await fetch(`/api/getUserDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          // If unauthorized, clear auth state and redirect to login
          if (response.status === 401) {
            logout();
            router.push('/login');
            throw new Error("Session expired. Please login again.");
          }
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [isLoggedIn, userId, router, logout]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-400" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-400" style={{ animationDelay: "0.4s" }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <h2 className="text-2xl font-semibold">Hi, {user.name}</h2>
      <span className="text-2xl" role="img" aria-label="alien">👽</span>
    </div>
  );
};

export default UserDetails;