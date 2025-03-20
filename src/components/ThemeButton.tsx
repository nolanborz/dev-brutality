import React from "react";
import { useTheme } from "../ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeButton: React.FC = () => {
  const { cycleTheme } = useTheme();

  return (
    <Button
      variant="default"
      onClick={cycleTheme}
      className="px-2 py-1 rounded-md font-semibold transition-all duration-300 ease-in-out"
    >
      Change Theme
    </Button>
  );
};

export default ThemeButton;
