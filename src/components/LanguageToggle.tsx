import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
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
  const { t } = useTranslation();

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
        {t("navButtons.languageButton")}
      </Button>
    </div>
  );
};

// This component is now deprecated since we're using i18next
// But keeping it for backward compatibility
export const TranslatedText: React.FC<{
  en: string;
  ja: string;
  className?: string;
}> = ({ en, ja, className = "" }) => {
  const { language } = useLanguage();

  return <div className={className}>{language === "en" ? en : ja}</div>;
};

// New component that uses i18next
export const I18nText: React.FC<{
  textKey: string;
  className?: string;
}> = ({ textKey, className = "" }) => {
  const { t } = useTranslation();

  return <div className={className}>{t(textKey)}</div>;
};
