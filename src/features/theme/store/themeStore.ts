import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      colorScheme: 'light',
      toggleColorScheme: () =>
        set((state) => ({
          colorScheme: state.colorScheme === 'dark' ? 'light' : 'dark',
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
);