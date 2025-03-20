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

function App() {
  const [activeTab, setActiveTab] = useState<"about" | "work">("about");

  return (
    <ThemeProvider>
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
            <ThemeButton />
          </div>

          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <main>{activeTab === "about" ? <AboutMe /> : <MyWork />}</main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
