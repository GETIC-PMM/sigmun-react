/// <reference types="react" />
export type BreadCrumbContainerProps = {
    divider?: string;
    disableDividers?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export type BreadCrumbItemProps = {
    isActive?: boolean;
    href: string;
} & React.HTMLAttributes<HTMLLIElement>;
