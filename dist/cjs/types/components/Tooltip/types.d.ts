/// <reference types="react" />
import { OverlayTriggerProps } from 'react-bootstrap';
export type TooltipProps = {
    placement: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
    buttonTitle: string;
    buttonVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
} & Omit<OverlayTriggerProps, 'children' | 'overlay'>;
