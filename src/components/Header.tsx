import React, { useState } from "react";

const Header: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="mb-8 pt-4 flex items-center justify-between border-b-2 border-black">
      <h1 className="text-6xl font-bold relative wiggle-on-hover">
        NOLAN BORZONI
      </h1>
      <div
        className="relative bg-cyan-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-xl font-bold">日本語 OK!</span>

        {showTooltip && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] p-2 rounded z-10">
            <div className="text-sm font-medium">
              JLPT N2合格
              <div className="text-xs mt-1 text-gray-700">１月２０２３年</div>
            </div>
            {/* Little arrow pointing up */}
            <div className="absolute -top-2 left-8 transform -translate-y-full">
              <div className="border-l-8 border-r-8 border-b-8 border-b-black border-l-transparent border-r-transparent h-0 w-0"></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
