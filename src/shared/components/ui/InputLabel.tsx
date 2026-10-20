export function InputLabel({ children, ...props }: React.ComponentProps<"label">) {
    return (
        <label {...props} className="shrink-0 block text-sm font-semibold text-text-secondary cursor-pointer">
            {children}
        </label>
    );
}
