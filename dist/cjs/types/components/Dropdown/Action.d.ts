import React from 'react';
declare const Item: React.ForwardRefExoticComponent<{
    split?: boolean | undefined;
} & {
    btnType?: import("../Button/types").ButtonTypes | undefined;
    size?: "sm" | "lg" | "md" | undefined;
    disabled?: boolean | undefined;
    outlined?: boolean | undefined;
    active?: boolean | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Item;
