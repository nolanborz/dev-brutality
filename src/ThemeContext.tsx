import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface Theme {
  main: string;
  bg: string;
  border: string;
  text: string;
  accent: string;
}

const themes: Theme[] = [
  {
    main: "#ffdc58",
    bg: "#fef2e8",
    border: "#000",
    text: "#000",
    accent: "#ff8c00",
  },
  {
    main: "#90be6d",
    bg: "#f8f9fa",
    border: "#2d3142",
    text: "#2d3142",
    accent: "#f94144",
  },
  // Neon Mint
  {
    main: "#39ff14",
    bg: "#e8fef8",
    border: "#222",
    text: "#222",
    accent: "#ff36ab",
  },
  // Bubblegum Pop
  {
    main: "#ff70a6",
    bg: "#fff0f5",
    border: "#333",
    text: "#333",
    accent: "#70d6ff",
  },
  // Retro Computing
  {
    main: "#58c7f3",
    bg: "#f0f7ff",
    border: "#111",
    text: "#111",
    accent: "#ff9e58",
  },
  // Sunset Boulevard
  {
    main: "#ff9e58",
    bg: "#fff4ea",
    border: "#2d2d2d",
    text: "#2d2d2d",
    accent: "#c270ff",
  },
  // Primary Blue
  {
    main: "#3b82f6",
    bg: "#f0f7ff",
    border: "#1e1e1e",
    text: "#1e1e1e",
    accent: "#f0c808",
  },
  // Coral Reef
  {
    main: "#ff6b6b",
    bg: "#fff8f8",
    border: "#252525",
    text: "#252525",
    accent: "#4ecdc4",
  },
];

interface ThemeContextType {
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState<number>(0);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[themeIndex];

    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [themeIndex]);

  const cycleTheme = (): void => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider value={{ cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
