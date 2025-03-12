// components/AboutMe.tsx
import React from "react";
import myImage from "@/assets/nolan.png";

const AboutMe: React.FC = () => {
  return (
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
            Hi, I'm Nolan! I'm a software developer living in Hokkaido, Japan. I
            moved from my home of Utah, USA, to Japan 3 years ago via the JET
            Program to teach English, and have spent the last 12 months learning
            Web Development. I spent most of my learning completing the Odin
            Project, an open source full-stack development curriculum for Ruby
            on Rails and React. Since finishing the bootcamp, I've began
            building my own applications while searching for a full-time
            position.
          </p>
          <p className="mb-4 text-lg font-medium">
            My technical skills include JavaScript, Ruby, Ruby on Rails, React,
            TypeScript, and Vite (how I built this website). I'm particularly
            interested in creating websites and experiences users of all
            abilities can navigate through effortlessly.
          </p>
          <p className="mb-4 text-lg font-medium">
            When I'm not coding, you can find me reading about Ancient Rome,
            playing basketball, or spending time with my wonderful wife.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
