import React, { useState, createContext, useContext, ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Language = "en" | "ja";
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <div>
      <Button
        variant="neutral"
        onClick={toggleLanguage}
        className="text-sm font-medium"
      >
        {language === "en" ? "日本語" : "English"}
      </Button>
    </div>
  );
};

export const TranslatedText: React.FC<{
  en: string;
  ja: string;
  className?: string;
}> = ({ en, ja, className = "" }) => {
  const { language } = useLanguage();

  return <div className={className}>{language === "en" ? en : ja}</div>;
};
