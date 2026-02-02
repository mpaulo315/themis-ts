import { create } from "zustand";


type ThemeStore = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
    darkMode: false,
    setDarkMode: (value) => set({ darkMode: value }),
}));
