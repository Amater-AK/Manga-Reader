interface Props extends React.ComponentProps<"button"> {
    intent: "primary" | "secondary" | "ghost";
    isOnlyIcon?: boolean;
    isWide?: boolean;
}

export function Button({ children, className, intent, isOnlyIcon, isWide, ...props }: Props) {
    return (
        <button
            className={`button ${`button--${intent}`} ${isOnlyIcon ? "button--only-icon" : ""} ${isWide ? "button--wide" : ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
