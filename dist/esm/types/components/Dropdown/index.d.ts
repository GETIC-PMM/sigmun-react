/// <reference types="react" />
declare const Dropdown: import("react").ForwardRefExoticComponent<{
    variant?: "top" | "right" | "bottom" | "left" | undefined;
    action: import("react").ReactNode;
    button?: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>> & {
    Item: import("react").ForwardRefExoticComponent<{
        href: string;
    } & import("react").HTMLAttributes<HTMLLIElement> & import("react").RefAttributes<HTMLLIElement>>;
    Divider: import("react").ForwardRefExoticComponent<import("./types").DropdownDividerProps & import("react").RefAttributes<HTMLHRElement>>;
    Action: import("react").ForwardRefExoticComponent<{
        split?: boolean | undefined;
    } & {
        btnType?: import("../Button/types").ButtonTypes | undefined;
        size?: "sm" | "lg" | "md" | undefined;
        disabled?: boolean | undefined;
        outlined?: boolean | undefined;
        active?: boolean | undefined;
    } & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
};
export default Dropdown;
