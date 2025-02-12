import { create } from 'zustand';

type AuthStore = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('token'),
  login: (token) => {
    localStorage.setItem('token', token);
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ isAuthenticated: false });
  },
}));