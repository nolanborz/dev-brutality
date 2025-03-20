import React from "react";
import { useTheme } from "../ThemeContext";

const ThemeButton: React.FC = () => {
  const { cycleTheme } = useTheme();

  return (
    <button
      onClick={cycleTheme}
      className="px-2 py-1 rounded-md font-semibold transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: "var(--main)",
        color: "var(--text)",
        border: "2px solid var(--border)",
      }}
    >
      Change Theme
    </button>
  );
};

export default ThemeButton;
