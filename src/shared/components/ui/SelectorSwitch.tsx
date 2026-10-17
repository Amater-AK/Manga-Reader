import { useState, createContext, useContext } from "react";

interface SelectorSwitchContext {
    selectedOption: string;
    selectOption: (option: string) => void;
}

const SelectorSwitchContext = createContext<SelectorSwitchContext>({
    selectedOption: "",
    selectOption: () => {},
});

interface SelectorSwitchProps {
    children: React.ReactNode;
    initial: string;
    className: string;
    onChange: (selectedOption: string) => void;
}

export function SelectorSwitch({ children, initial, className, onChange }: SelectorSwitchProps) {
    const [selectedOption, setSelectedOption] = useState<string>(initial);

    function handleSelect(option: string) {
        setSelectedOption(option);
        onChange(option);
    }

    return (
        <SelectorSwitchContext value={{ selectedOption, selectOption: handleSelect }}>
            <div className={className}>{children}</div>
        </SelectorSwitchContext>
    );
}

interface SelectorSwitchOptionProps {
    children: React.ReactNode;
    id: string;
    value: string;
    title?: string;
    className: string | ((isSelected: boolean) => string);
}

function SelectorSwitchOption({ children, id, value, title, className }: SelectorSwitchOptionProps) {
    const { selectedOption, selectOption } = useSelectorSwitch();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        selectOption(value);
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

function useSelectorSwitch() {
    const ctx = useContext(SelectorSwitchContext);

    if (!ctx) {
        throw new Error("SelectorSwitch.Option child elements must be used within a parent SelectorSwitch component.");
    }

    return ctx;
}

SelectorSwitch.Option = SelectorSwitchOption;
