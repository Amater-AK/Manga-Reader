import { type AppSliceCreator } from "@/app/store/types";

import { THEMES, type Theme } from "../lib/theme";

export interface ThemeSlice {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const createThemeSlice: AppSliceCreator<ThemeSlice> = (set) => ({
    theme: THEMES.SYSTEM,

    setTheme: (theme: Theme) =>
        set((state) => {
            state.theme = theme;
        }),
});
