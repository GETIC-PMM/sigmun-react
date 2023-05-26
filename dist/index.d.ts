/// <reference types="react" />
import * as react from 'react';

type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type AlertProps = {
    type?: AlertType;
    enableClose?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type CompoundedComponent<T> = React.ForwardRefExoticComponent<T & React.RefAttributes<HTMLElement>>;

declare const Alert: CompoundedComponent<AlertProps>;

declare const useProgrammableAlert: () => readonly [CompoundedComponent<react.HTMLAttributes<HTMLDivElement>>, (message: string, type: AlertType, duration: number) => void];

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    badgeFor?: 'button' | 'buttonDetail' | 'buttonPositioned' | 'icon' | 'text';
    bgPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

declare const Badge: CompoundedComponent<BadgeProps>;

type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
type ButtonProps = {
    btnType?: ButtonTypes;
    size?: 'sm' | 'lg';
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

export { Alert, Badge, BreadCrumbContainer, BreadCrumbItem, Button, ButtonGroup, useProgrammableAlert };
