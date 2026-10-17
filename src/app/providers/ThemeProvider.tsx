import { useEffect, useCallback } from "react";

import { useStore } from "../store";

import { ThemeContext } from "@/shared/lib/theme";

import { THEMES, type Theme } from "@/shared/lib/theme";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const theme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);

    const applyTheme = useCallback((theme: Theme) => {
        const documentElem = document.documentElement;
        documentElem.classList.remove(THEMES.LIGHT, THEMES.DARK);

        let appliedTheme = theme;
        if (theme === THEMES.SYSTEM) {
            appliedTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? THEMES.LIGHT : THEMES.DARK;
        }

        documentElem.classList.add(appliedTheme);
    }, []);

    // При переключении темы через компонент
    useEffect(() => {
        applyTheme(theme);
    }, [theme, applyTheme]);

    // При переключении темы в системе
    useEffect(() => {
        function handleMediaChange() {
            if (theme !== THEMES.SYSTEM) return;

            applyTheme(theme);
        }

        const media = window.matchMedia("(prefers-color-scheme: light)");
        media.addEventListener("change", handleMediaChange);

        return () => media.removeEventListener("change", handleMediaChange);
    }, [theme, applyTheme]);

    return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
