/// <reference types="react" />
export type NavbarProps = {
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    brandHref?: string;
    brand?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export type NavbarItemProps = {
    active?: boolean;
    disabled?: boolean;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;
export type NavbarDropdownProps = {
    title: React.ReactNode;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;
