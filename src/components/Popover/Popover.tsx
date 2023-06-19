import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { PopoverProps } from "./types";

const MyPopover: React.ForwardRefRenderFunction<HTMLElement, PopoverProps> = ({
  placement,
  title,
  children,
  buttonTitle,
  buttonVariant,
  ...props
}) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          {title && <Popover.Header as="h3">{title}</Popover.Header>}
          <Popover.Body>{children}</Popover.Body>
        </Popover>
      }
      {...props}
    >
      <Button variant={buttonVariant}>{buttonTitle}</Button>
    </OverlayTrigger>
  );
};

export default MyPopover;
