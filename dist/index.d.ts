/// <reference types="react" />
import * as react from 'react';
import { HTMLAttributes, HTMLAttributeAnchorTarget } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { OverlayTriggerProps } from 'react-bootstrap';

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

declare const Dropdown: react.ForwardRefExoticComponent<{
    variant?: "top" | "right" | "bottom" | "left" | undefined;
    action: react.ReactNode;
    button?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>> & {
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

declare const ListGroup: CompoundedComponent<ListGroupProps> & {
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

declare const BreadCrumb: CompoundedComponent<BreadCrumbContainerProps> & {
    Item: CompoundedComponent<BreadCrumbItemProps>;
};

type CardContainerProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
} & React.HTMLAttributes<HTMLDivElement>;
type CardProps = Omit<CardContainerProps, 'variant'>;
type CardImgProps = {
    position: 'top' | 'bottom' | 'fluid';
} & React.ImgHTMLAttributes<HTMLImageElement>;

declare const Card: CompoundedComponent<CardContainerProps> & {
    Body: CompoundedComponent<CardProps>;
    Footer: CompoundedComponent<CardProps>;
    Header: CompoundedComponent<CardProps>;
    Img: CompoundedComponent<CardImgProps>;
    Text: CompoundedComponent<CardProps>;
    Title: CompoundedComponent<CardProps>;
};

type ModalProps = React.HTMLAttributes<HTMLDivElement>;

declare const Modal: CompoundedComponent<ModalProps> & {
    Header: CompoundedComponent<ModalProps>;
    Body: CompoundedComponent<ModalProps>;
    Footer: CompoundedComponent<ModalProps>;
    Title: CompoundedComponent<ModalProps>;
};

type NavProps = {
    variant?: 'tabs' | 'pills' | 'vertical';
} & React.HTMLAttributes<HTMLUListElement>;
type NavItemProps = {
    active?: boolean;
    disabled?: boolean;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;

declare const Nav: CompoundedComponent<NavProps> & {
    Item: CompoundedComponent<NavItemProps>;
};

type NavbarProps = {
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    brandHref?: string;
    brand?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
type NavbarItemProps = {
    active?: boolean;
    disabled?: boolean;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;
type NavbarDropdownProps = {
    title: React.ReactNode;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;

declare const Navbar: CompoundedComponent<NavbarProps> & {
    Item: CompoundedComponent<NavbarItemProps>;
    Dropdown: CompoundedComponent<NavbarDropdownProps>;
};

type OffcanvasProps = React.HTMLAttributes<HTMLDivElement>;
type OffcanvasContainerProps = {
    placement?: 'start' | 'top';
} & OffcanvasProps;

declare const Offcanvas: CompoundedComponent<OffcanvasContainerProps> & {
    Header: CompoundedComponent<OffcanvasProps>;
    Body: CompoundedComponent<OffcanvasProps>;
    Title: CompoundedComponent<OffcanvasProps>;
};

type TooltipProps = {
    placement: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
    buttonTitle: string;
    buttonVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
} & Omit<OverlayTriggerProps, 'children' | 'overlay'>;

declare const MyTooltip: ({ placement, children, buttonTitle, buttonVariant, ...props }: TooltipProps) => react_jsx_runtime.JSX.Element;

declare const useToast: () => readonly [CompoundedComponent<react.HTMLAttributes<HTMLDivElement>> & {
    Header: CompoundedComponent<react.HTMLAttributes<HTMLDivElement>>;
    Body: CompoundedComponent<react.HTMLAttributes<HTMLDivElement>>;
}, (id: string, autohide: boolean, delay: number, options: unknown) => void];

type PopoverProps = {
    placement: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    children: React.ReactNode;
    buttonTitle: string;
    buttonVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
} & Omit<OverlayTriggerProps, 'trigger' | 'placement' | 'children' | 'overlay'>;

declare const MyPopover: ({ placement, title, children, buttonTitle, buttonVariant, ...props }: PopoverProps) => react_jsx_runtime.JSX.Element;

export { Alert, Badge, BreadCrumb, Button, ButtonGroup, Card, Dropdown, ListGroup, Modal, Nav, Navbar, Offcanvas, MyPopover as Popover, MyTooltip as Tooltip, useProgrammableAlert, useToast };
