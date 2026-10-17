import { useTheme } from "../lib/theme";

import { SelectorSwitch } from "./ui/SelectorSwitch";

import { THEMES, type Theme } from "../lib/theme";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    function handleSelect(selectedTheme: string) {
        setTheme(selectedTheme as Theme);
    }

    function classNames(isSelected: boolean) {
        return `${isSelected ? "" : "text-stone-300"}`;
    }

    return (
        <SelectorSwitch className="flex gap-2" initial={THEMES.SYSTEM} onChange={handleSelect}>
            <SelectorSwitch.Option className={classNames} id={`theme#${THEMES.SYSTEM}`} value={THEMES.SYSTEM}>
                System
            </SelectorSwitch.Option>
            <SelectorSwitch.Option className={classNames} id={`theme#${THEMES.LIGHT}`} value={THEMES.LIGHT}>
                Light
            </SelectorSwitch.Option>
            <SelectorSwitch.Option className={classNames} id={`theme#${THEMES.DARK}`} value={THEMES.DARK}>
                Dark
            </SelectorSwitch.Option>
        </SelectorSwitch>
    );
}
