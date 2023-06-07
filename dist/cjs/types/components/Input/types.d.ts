/// <reference types="react" />
export type InputProps = {
    disabled?: boolean;
    error?: boolean;
    type: 'text' | 'password' | 'email' | 'number' | 'date';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
export type InputGroupProps = React.HTMLAttributes<HTMLDivElement>;
export type AddonProps = React.HTMLAttributes<HTMLSpanElement>;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type RestInputProps = {
    label?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'>;
