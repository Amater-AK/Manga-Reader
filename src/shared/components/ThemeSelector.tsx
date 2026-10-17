import { useTheme } from "../lib/theme";

import { THEMES } from "../lib/theme";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <p>Current: {theme}</p>
            <button onClick={() => setTheme(THEMES.LIGHT)}>Light</button>
            <button onClick={() => setTheme(THEMES.DARK)}>Dark</button>
        </>
    );
}
