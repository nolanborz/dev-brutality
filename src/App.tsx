import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

function App() {
  const [activeTab, setActiveTab] = useState<"about" | "work">("about");
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 pt-4">
        <h1 className="text-4xl font-bold">NOLAN BORZONI</h1>
      </header>

      <nav className="mb-8">
        <div className="flex gap-4">
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

      <main>
        {activeTab === "about" ? (
          <div>
            <div className="space-y-4">
              <Button>Shadcn Button with Public Sans</Button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>This is where your about me content will go.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Work</h2>
            <p>This is where your software development projects will go.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
