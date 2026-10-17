import { createContext } from "react";

import { type ThemeContextProps, THEMES } from "./types";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: THEMES.SYSTEM,
    setTheme: () => {},
});
