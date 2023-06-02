import React from 'react';
declare const Menu: React.ForwardRefExoticComponent<{
    variant?: "top" | "right" | "bottom" | "left" | undefined;
    action: React.ReactNode;
    button?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Menu;
