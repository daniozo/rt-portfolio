import React, { createContext, useState, ReactNode } from "react";

interface LangContextType {
  lang: string;
  toggleLang: () => void;
}

export const LangContext = createContext<LangContextType | undefined>(
  undefined
);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState("fr");

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  const contextValue: LangContextType = {
    lang,
    toggleLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};
