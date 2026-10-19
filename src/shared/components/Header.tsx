import { Logo } from "./Logo";
import { ThemeSelector } from "./ThemeSelector";

export function Header() {
    return (
        <header className="mb-2 bg-bg-tertiary shadow-sm">
            <div className="wrapper flex justify-between items-center gap-6 py-2">
                <Logo />

                <ThemeSelector />
            </div>
        </header>
    );
}
