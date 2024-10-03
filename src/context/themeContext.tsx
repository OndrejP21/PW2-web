"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
  Color = "color",
}

interface ThemeType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

const defaultTheme: ThemeType = { theme: Theme.Dark, changeTheme(theme) {} };

const ThemeContext = createContext<ThemeType>(defaultTheme);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme.theme);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
