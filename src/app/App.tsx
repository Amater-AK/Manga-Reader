import { ThemeProvider } from "./providers/ThemeProvider";

import { ThemeSelector } from "@/shared/components/ThemeSelector";

export function App() {
    return (
        <ThemeProvider>
            <p className="text-amber-500">Hello</p>

            <p className="text-text-primary">Test text</p>

            <ThemeSelector />
        </ThemeProvider>
    );
}
