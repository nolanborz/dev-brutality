import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Star27 from "@/components/stars/s27";
import Star26 from "@/components/stars/s26";
import Star39 from "@/components/stars/s39";

import myImage from "@/assets/nolan.png";

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
    <div
      className="min-h-screen border-8 border-black"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div
        className="min-h-screen m-4 p-4"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <header className="mb-8 pt-4 flex items-center justify-between border-b-2 border-black">
          <h1 className="text-6xl font-bold relative wiggle-on-hover">
            NOLAN BORZONI
          </h1>
          <div className="bg-cyan-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-xl font-bold">Developer</span>
          </div>
        </header>
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
        <main>
          {activeTab === "about" ? (
            <div>
              <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={myImage}
                    alt="Nolan"
                    className="w-80 h-auto rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div
                  className="flex-1 p-6 bg-gray-50 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] text-left"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ccc 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  <p className="mb-4 text-lg font-medium">
                    Hi, I'm Nolan! I'm a software developer living in Hokkaido,
                    Japan. I moved to Japan 3 years ago via the JET Program to
                    teach English, and have spent the last 12 months learning
                    Web Development. I spent most of my learning completing the
                    Odin Project, an open source full stack development
                    curriculum for Ruby on Rails and React. Since finishing the
                    bootcamp, I've began building my own applications in
                    preparation for full time employment.
                  </p>
                  <p className="mb-4 text-lg font-medium">
                    My technical skills include JavaScript, Ruby, Ruby on Rails,
                    some React, and some Vue (which is how I built this
                    website). I'm particularly interested in user interface
                    design and creating websites users of all kinds love.
                  </p>
                  <p className="mb-4 text-lg font-medium">
                    When I'm not coding, you can find me reading about Ancient
                    Rome, playing Yu-gi-oh!, going on a nice run, or spending
                    time with my wonderful wife.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Work</h2>
              <p>This is where your software development projects will go.</p>
            </div>
          )}
        </main>
        <footer className="mt-16">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-12 left-10 transform rotate-12">
              <div className="w-16 h-16 bg-pink-300 border-2 border-black rounded-full"></div>
            </div>
            <div className="absolute -top-8 right-16 transform -rotate-6">
              <div className="w-12 h-12 bg-yellow-300 border-2 border-black rounded-md"></div>
            </div>

            {/* Main footer container */}
            <div className="relative bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl font-extrabold mb-6">Let's Connect!</h2>

              {/* Contact grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email section */}
                <div className="bg-cyan-200 border-2 border-black rounded-lg p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Email Me</h3>
                  <p className="font-medium">nolan@example.com</p>
                </div>

                {/* Social links */}
                <div className="bg-emerald-200 border-2 border-black rounded-lg p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Social</h3>
                  <ul className="flex flex-col space-y-2">
                    <li className="font-medium">
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                        GitHub
                      </a>
                    </li>
                    <li className="font-medium">
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                        LinkedIn
                      </a>
                    </li>
                    <li className="font-medium">
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <span className="inline-block w-6 h-6 bg-black rounded-full"></span>
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Location */}
                <div className="bg-yellow-200 border-2 border-black rounded-lg p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="font-medium">Hokkaido, Japan</p>
                  <p className="font-medium text-sm mt-2">
                    Currently available for remote work
                  </p>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-10 text-center">
                <p className="inline-block bg-gray-100 border-2 border-black px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform rotate-1">
                  <span className="font-bold">© 2025 Nolan Borzoni</span> • Made
                  with 💻 in Japan
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
