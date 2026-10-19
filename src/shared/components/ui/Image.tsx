import { useState, useRef, useEffect } from "react";

interface ImageProps extends React.ComponentPropsWithRef<"img"> {
    ratio: number;
    color: string;
}

export function Image({ ratio, color, className, src, alt, ...props }: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        if (imageRef.current.complete) {
            setIsLoaded(true);
        }
    }, [src]);

    return (
        <div
            className="relative h-0 pb-(--padding-bottom) bg-(--bg-color) overflow-hidden"
            style={{ "--padding-bottom": `${ratio * 100}%`, "--bg-color": color } as React.CSSProperties}
        >
            <img
                ref={imageRef}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
                src={src}
                alt={alt}
                {...props}
            />
        </div>
    );
}
