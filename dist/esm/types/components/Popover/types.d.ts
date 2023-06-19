/// <reference types="react" />
import { OverlayTriggerProps } from "react-bootstrap";
export type PopoverProps = {
    placement: "auto" | "top" | "bottom" | "left" | "right";
    title?: string;
    children: React.ReactNode;
    buttonTitle: string;
    buttonVariant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
} & Omit<OverlayTriggerProps, "trigger" | "placement" | "children" | "overlay">;
