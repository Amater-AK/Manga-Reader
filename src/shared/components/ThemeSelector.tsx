import { useTheme } from "../lib/theme";

import { SelectorSwitch } from "./ui/SelectorSwitch";

import { THEMES, type Theme } from "../lib/theme";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    function handleSelect(selectedTheme: Theme) {
        setTheme(selectedTheme);
    }

    function getClassNames(isSelected: boolean) {
        return `${isSelected ? "" : "text-stone-300"}`;
    }

    return (
        <SelectorSwitch<Theme> className="flex gap-2" initial={theme} onChange={handleSelect}>
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.SYSTEM}`} value={THEMES.SYSTEM}>
                System
            </SelectorSwitch.Option>
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.LIGHT}`} value={THEMES.LIGHT}>
                Light
            </SelectorSwitch.Option>
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.DARK}`} value={THEMES.DARK}>
                Dark
            </SelectorSwitch.Option>
        </SelectorSwitch>
    );
}
