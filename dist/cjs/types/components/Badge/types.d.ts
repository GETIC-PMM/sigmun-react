/// <reference types="react" />
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    badgeFor?: 'button' | 'buttonDetail' | 'buttonPositioned' | 'icon' | 'text';
    bgPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
