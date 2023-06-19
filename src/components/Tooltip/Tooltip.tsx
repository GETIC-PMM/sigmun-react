import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { TooltipProps } from './types'

const MyTooltip: React.ForwardRefRenderFunction<HTMLElement, TooltipProps> = ({
  placement,
  children,
  buttonTitle,
  buttonVariant = 'primary',
  ...props
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip id={`tooltip-${placement}`}>{children}</Tooltip>}
      {...props}
    >
      <Button variant={buttonVariant}>{buttonTitle}</Button>
    </OverlayTrigger>
  )
}

export default MyTooltip
