/// <reference types="react" />
import { ButtonProps } from '../Button/types';
export type DropdownItemProps = {
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;
export type DropdownMenuProps = {
    variant?: 'top' | 'right' | 'bottom' | 'left';
    action: React.ReactNode;
    button?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
export type DropdownDividerProps = React.HTMLAttributes<HTMLHRElement>;
export type DropdownActionProps = {
    split?: boolean;
} & ButtonProps;
