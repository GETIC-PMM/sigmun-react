/// <reference types="react" />
import * as react from 'react';
import { HTMLAttributes, HTMLAttributeAnchorTarget } from 'react';

type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type AlertProps = {
    type?: AlertType;
    enableClose?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type CompoundedComponent<T> = React.ForwardRefExoticComponent<T & React.RefAttributes<HTMLElement>>;

declare const Alert: CompoundedComponent<AlertProps>;

declare const useProgrammableAlert: () => readonly [CompoundedComponent<react.HTMLAttributes<HTMLDivElement>>, ({ message, type, duration, }: {
    message: string;
    type: AlertType;
    duration: number;
}) => void];

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    badgeFor?: 'button' | 'buttonDetail' | 'buttonPositioned' | 'icon' | 'text';
    bgPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

declare const Badge: CompoundedComponent<BadgeProps>;

type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
type ButtonProps = {
    btnType?: ButtonTypes;
    size?: 'sm' | 'lg' | 'md';
    disabled?: boolean;
    outlined?: boolean;
    active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

declare const Button: CompoundedComponent<ButtonProps>;

type ButtonGroupProps = {
    vertical?: boolean;
    inputGroup?: boolean;
    prependText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

declare const ButtonGroup: CompoundedComponent<ButtonGroupProps>;

type DropdownDividerProps = React.HTMLAttributes<HTMLHRElement>;

declare const Dropdown: {
    Menu: react.ForwardRefExoticComponent<{
        variant?: "top" | "right" | "bottom" | "left" | undefined;
        action: react.ReactNode;
        button?: react.ReactNode;
    } & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    Item: react.ForwardRefExoticComponent<{
        href: string;
    } & react.HTMLAttributes<HTMLLIElement> & react.RefAttributes<HTMLLIElement>>;
    Divider: react.ForwardRefExoticComponent<DropdownDividerProps & react.RefAttributes<HTMLHRElement>>;
    Action: react.ForwardRefExoticComponent<{
        split?: boolean | undefined;
    } & {
        btnType?: ButtonTypes | undefined;
        size?: "sm" | "lg" | "md" | undefined;
        disabled?: boolean | undefined;
        outlined?: boolean | undefined;
        active?: boolean | undefined;
    } & react.ButtonHTMLAttributes<HTMLButtonElement> & react.RefAttributes<HTMLButtonElement>>;
};

type ListGroupProps = HTMLAttributes<HTMLUListElement>;
type ListGroupItemProps = {
    active?: boolean;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
} & HTMLAttributes<HTMLLIElement>;
type ListGroupItemActionProps = Pick<ListGroupItemProps, "active" | "variant"> & HTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: HTMLAttributeAnchorTarget;
};

declare const ListGroup: {
    Container: CompoundedComponent<ListGroupProps>;
    Action: CompoundedComponent<ListGroupItemActionProps>;
    Item: CompoundedComponent<ListGroupItemProps>;
};

type BreadCrumbContainerProps = {
    divider?: string;
    disableDividers?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
type BreadCrumbItemProps = {
    isActive?: boolean;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;

declare const BreadCrumbContainer: CompoundedComponent<BreadCrumbContainerProps>;
declare const BreadCrumbItem: CompoundedComponent<BreadCrumbItemProps>;

export { Alert, Badge, BreadCrumbContainer, BreadCrumbItem, Button, ButtonGroup, Dropdown, ListGroup, useProgrammableAlert };
