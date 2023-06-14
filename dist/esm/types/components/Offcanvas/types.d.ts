/// <reference types="react" />
export type OffcanvasProps = React.HTMLAttributes<HTMLDivElement>;
export type OffcanvasContainerProps = {
    placement?: 'start' | 'top';
} & OffcanvasProps;
