import React from "react";

const LanguageBadge: React.FC = () => {
  return (
    <div
      className="fixed right-6 top-20 z-50 transform rotate-3 wiggle-on-hover"
      style={{ transformOrigin: "center" }}
    >
      <div className="bg-blue-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 rounded-lg">
        <span className="text-lg font-bold">日本語 OK, JLPT N2</span>
      </div>
    </div>
  );
};

export default LanguageBadge;
