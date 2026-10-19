import { useTheme } from "../lib/theme";

import { BsBack, BsSunFill, BsMoonFill } from "react-icons/bs";

import { SelectorSwitch } from "./ui/SelectorSwitch";

import { THEMES, type Theme } from "../lib/theme";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    function handleSelect(selectedTheme: Theme) {
        setTheme(selectedTheme);
    }

    function getClassNames(isSelected: boolean) {
        const classes = [
            "p-1 cursor-pointer rounded-sm transition-colors duration-300",
            `${isSelected ? "text-action-primary-text bg-action-primary-bg-hover" : "hover:bg-action-secondary-bg-hover active:bg-action-secondary-bg-hover"}`,
        ];

        return classes.join(" ");
    }

    return (
        <SelectorSwitch<Theme>
            className="flex gap-1 p-0.5 text-lg bg-surface-sunken border border-border-strong rounded-sm"
            initial={theme}
            onChange={handleSelect}
        >
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.SYSTEM}`} value={THEMES.SYSTEM}>
                <BsBack />
            </SelectorSwitch.Option>
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.LIGHT}`} value={THEMES.LIGHT}>
                <BsSunFill />
            </SelectorSwitch.Option>
            <SelectorSwitch.Option<Theme> className={getClassNames} id={`theme#${THEMES.DARK}`} value={THEMES.DARK}>
                <BsMoonFill />
            </SelectorSwitch.Option>
        </SelectorSwitch>
    );
}
