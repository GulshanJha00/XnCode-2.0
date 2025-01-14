'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from "@/store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();

  interface LoginResponse {
    userId: string;
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Error logging in');
      } else {
        useAuthStore.getState().setLoggedIn(true, data.userId);
        localStorage.setItem('userId', data.userId);
        router.push('/home');
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please check your connection');
    } finally {
      setIsLoading(false);
    }
  };

  return  (
    <div className="min-h-screen bg-[#1A1C23] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-[#2A2E3A] rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left Side (Image Section) */}
        <div
          className="w-1/2 h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/Loginimg.jpg')" }}
        >
          {/* Overlay and text on image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center text-center">
            <div className="text-white space-y-4">
              <h1 className="text-4xl font-bold">Welcome Back, Developer!</h1>
              <p className="text-lg">Log in to access your account and continue your journey with us.</p>
            </div>
          </div>
        </div>
  
        {/* Right Side (Form Section) */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl mb-8 font-bold text-center text-white">
              Log In
            </h1>
          
          </div>
  
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
  
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
  
              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
            </div>
  
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-[#3A3F4B]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Forgot password?
              </Link>
            </div>
  
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Log In'
              )}
            </button>
  
            <p className="text-center text-gray-400 mt-6">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default LoginPage;