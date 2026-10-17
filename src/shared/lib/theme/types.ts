export const THEMES = {
    SYSTEM: "system",
    LIGHT: "light",
    DARK: "dark",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
