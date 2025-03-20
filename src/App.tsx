// App.tsx
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./components/ThemeButton";
import { LanguageProvider, LanguageToggle } from "./components/LanguageToggle";

function App() {
  const [activeTab, setActiveTab] = useState<"about" | "work">("about");

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div
          className="min-h-screen border-8 transition-colors duration-300"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="min-h-screen m-4 p-4 transition-colors duration-300"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="flex justify-between items-center">
              <Header />
              <div className="flex gap-2">
                <LanguageToggle />
                <ThemeButton />
              </div>
            </div>

            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            <main>{activeTab === "about" ? <AboutMe /> : <MyWork />}</main>

            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
