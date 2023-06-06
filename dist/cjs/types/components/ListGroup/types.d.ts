import { HTMLAttributeAnchorTarget, HTMLAttributes } from "react";
export type ListGroupProps = HTMLAttributes<HTMLUListElement>;
export type ListGroupItemProps = {
    active?: boolean;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
} & HTMLAttributes<HTMLLIElement>;
export type ListGroupItemActionProps = Pick<ListGroupItemProps, "active" | "variant"> & HTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: HTMLAttributeAnchorTarget;
};
