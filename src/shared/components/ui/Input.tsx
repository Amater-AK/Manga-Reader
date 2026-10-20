export function Input(props: React.ComponentProps<"input">) {
    return (
        <input
            className="w-full px-2 py-1 text-field-text bg-field-bg border border-field-border rounded-sm outline-none transition-all duration-300 placeholder:text-field-placeholder hover:border-field-border-hover active:border-field-border-hover focus-visible:border-field-border-focus focus-visible:shadow-field-ring"
            {...props}
        />
    );
}
