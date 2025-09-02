import { useCallback, useEffect } from "react";

export const useDarkMode = () => {
  const setDark = useCallback(() => {
    localStorage.setItem("darkmode", "1");
    document.documentElement.classList.add("dark");
  }, []);

  const setLight = () => {
    localStorage.setItem("darkmode", "0");
    document.documentElement.classList.remove("dark");
  };
  
  const isDark = useCallback(() => {
    const lastStatus = localStorage.getItem("darkmode");
    return Number(lastStatus);
  }, []);

  const initDarkmode = useCallback(() => {
    if (isDark()) setDark();
  }, [isDark, setDark]);

  useEffect(() => {
    initDarkmode();
  }, [initDarkmode]);

  return {
    setDark,
    setLight,
    isDark,
  };
};