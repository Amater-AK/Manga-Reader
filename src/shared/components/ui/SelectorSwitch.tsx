import { useState, createContext, useContext } from "react";

interface SelectorSwitchContext<T> {
    selectedOption: T;
    selectOption: (option: T) => void;
}

const SelectorSwitchContext = createContext<unknown>(null);

interface SelectorSwitchProps<T> {
    children: React.ReactNode;
    initial: T;
    className: string;
    onChange: (selectedOption: T) => void;
}

export function SelectorSwitch<T>({ children, initial, className, onChange }: SelectorSwitchProps<T>) {
    const [selectedOption, setSelectedOption] = useState<T>(initial);

    function handleSelect(option: T) {
        setSelectedOption(option);
        onChange(option);
    }

    return (
        <SelectorSwitchContext value={{ selectedOption, selectOption: handleSelect }}>
            <div className={className}>{children}</div>
        </SelectorSwitchContext>
    );
}

interface SelectorSwitchOptionProps<T> {
    children: React.ReactNode;
    id: string;
    value: T;
    title?: string;
    className: string | ((isSelected: boolean) => string);
}

function SelectorSwitchOption<T extends string | number>({
    children,
    id,
    value,
    title,
    className,
}: SelectorSwitchOptionProps<T>) {
    const { selectedOption, selectOption } = useSelectorSwitch<T>();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        selectOption(value as unknown as T);
    }

    const isSelected = selectedOption === value;

    return (
        <>
            <input type="radio" className="hidden" id={id} value={value} checked={isSelected} onChange={handleChange} />
            <label
                htmlFor={id}
                className={`${typeof className === "function" ? className(isSelected) : className}`}
                title={title}
            >
                {children}
            </label>
        </>
    );
}

function useSelectorSwitch<T>() {
    const ctx = useContext(SelectorSwitchContext);

    if (!ctx) {
        throw new Error("SelectorSwitch.Option child elements must be used within a parent SelectorSwitch component.");
    }

    return ctx as SelectorSwitchContext<T>;
}

SelectorSwitch.Option = SelectorSwitchOption;
