import { ThemeProvider } from "./providers/ThemeProvider";

import { Test } from "@/shared/components/Test";

import { ThemeSelector } from "@/shared/components/ThemeSelector";

export function App() {
    return (
        <ThemeProvider>
            <p className="text-amber-500">Hello</p>

            <p className="text-text-primary">Test text</p>

            <Test />

            <ThemeSelector />
        </ThemeProvider>
    );
}
