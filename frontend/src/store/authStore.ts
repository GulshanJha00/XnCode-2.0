import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  userId: string | null;
  setLoggedIn: (value: boolean, userId?: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userId: null,
      setLoggedIn: (value: boolean, userId?: string) => 
        set({ isLoggedIn: value, userId: userId || null }),
      logout: () => {
        localStorage.removeItem('userId');
        set({ isLoggedIn: false, userId: null });
      },
      initialize: () => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          set({ isLoggedIn: true, userId: storedUserId });
        }
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage
    }
  )
);