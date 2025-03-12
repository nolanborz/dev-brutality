// App.tsx
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState<"about" | "work">("about");

  return (
    <div
      className="min-h-screen border-8 border-black"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div
        className="min-h-screen m-4 p-4"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <Header />

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <main>{activeTab === "about" ? <AboutMe /> : <MyWork />}</main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
