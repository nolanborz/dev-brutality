import React from "react";

const Header: React.FC = () => {
  return (
    <header className="mb-8 pt-4 flex items-center justify-between border-b-2 border-black">
      <h1 className="text-6xl font-bold relative wiggle-on-hover">
        NOLAN BORZONI
      </h1>
      <div className="bg-cyan-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <span className="text-xl font-bold">Developer</span>
      </div>
    </header>
  );
};

export default Header;
