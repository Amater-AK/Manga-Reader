import { useTheme } from "../lib/theme";

export function Test() {
    const { theme } = useTheme();

    return <p>Current theme: {theme}</p>;
}
