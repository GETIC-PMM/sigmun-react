/// <reference types="react" />
export type CardContainerProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
} & React.HTMLAttributes<HTMLDivElement>;
export type CardProps = Omit<CardContainerProps, 'variant'>;
export type CardImgProps = {
    position: 'top' | 'bottom' | 'fluid';
} & React.ImgHTMLAttributes<HTMLImageElement>;
