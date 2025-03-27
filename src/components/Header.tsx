// import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  // const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="mb-8 pt-4 flex items-center justify-between border-b-2 border-black">
      <h1 className="text-6xl font-bold relative wiggle-on-hover">
        NOLAN BORZONI
      </h1>
    </header>
  );
};

export default Header;
