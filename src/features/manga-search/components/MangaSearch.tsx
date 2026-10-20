import { BsSearch, BsX } from "react-icons/bs";

import { Button } from "@/shared/components/ui/Button";

interface MangaSearchProps {
    onSubmit: (query: string) => void;
}

export function MangaSearch({ onSubmit }: MangaSearchProps) {
    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries()) as unknown as { search: string };

        onSubmit(data.search.trim());
    }

    function handleClear() {
        onSubmit("");
    }

    return (
        <form className="relative" onSubmit={handleSubmit}>
            <Button type="submit" intent="ghost" className="absolute top-px bottom-px left-px aspect-square">
                <BsSearch />
            </Button>

            <input
                type="text"
                id="search"
                name="search"
                className="w-full px-10 py-1 text-field-text bg-field-bg border border-field-border rounded-sm outline-none transition-all duration-300 placeholder:text-field-placeholder hover:border-field-border-hover active:border-field-border-hover focus-visible:border-field-border-focus focus-visible:shadow-field-ring"
                autoComplete="off"
                placeholder="Search by name"
            />

            <Button
                type="reset"
                intent="ghost"
                className="absolute top-px bottom-px right-px aspect-square"
                onClick={handleClear}
            >
                <BsX />
            </Button>
        </form>
    );
}
