import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "../translations.json";

const LanguageContext = createContext(null);

function resolveTranslation(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem("language");
    return storedLanguage === "en" ? "en" : "am";
  });

  useEffect(() => {
    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const toggleLanguage = () => {
      setLanguage((currentLanguage) =>
        currentLanguage === "am" ? "en" : "am",
      );
    };

    return {
      language,
      setLanguage,
      toggleLanguage,
      translations,
      copy: translations[language],
      t: (path) => resolveTranslation(translations[language], path) ?? path,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
