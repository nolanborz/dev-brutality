import React, { ReactNode } from "react";

interface ConnectCardProps {
  title: string;
  bgColor: string;
  children: ReactNode;
}

const ConnectCard: React.FC<ConnectCardProps> = ({
  title,
  bgColor,
  children,
}) => {
  return (
    <div
      className={`${bgColor} border-2 border-black rounded-lg p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transform hover:-translate-y-1 transition-transform duration-300`}
    >
      <div className="text-xl font-bold mb-2">{title}</div>
      {children}
    </div>
  );
};

export default ConnectCard;
