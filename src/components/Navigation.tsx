import React from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab: "about" | "work";
  setActiveTab: (tab: "about" | "work") => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="mb-4 flex-grow flex justify-center">
      <div className="flex gap-8">
        <Button
          variant={activeTab === "about" ? "default" : "neutral"}
          onClick={() => setActiveTab("about")}
          className="text-lg"
        >
          About Me
        </Button>
        <Button
          variant={activeTab === "work" ? "default" : "neutral"}
          onClick={() => setActiveTab("work")}
          className="text-lg"
        >
          My Work
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
