import React from "react";
import type { DropdownDividerProps } from "./types";

const InternalDropdownDivider: React.ForwardRefRenderFunction<
  HTMLHRElement,
  DropdownDividerProps
> = ({ className, ...props }, ref) => {
  return (
    <hr ref={ref} className={`dropdown-divider ${className}`} {...props} />
  );
};

const Divider = React.forwardRef(InternalDropdownDivider);

export default Divider;
