import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonGroupProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalButtonGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ButtonGroupProps
> = ({ vertical = false, inputGroup = false, prependText, ...props }, ref) => {
  return inputGroup ? (
    <div ref={ref} {...props} className={classList(`input-group`)}>
      <div className="input-group-prepend">
        <div className="input-group-text" id="btnGroupAddon2">
          {prependText}
        </div>
      </div>
      {props.children}
    </div>
  ) : vertical ? (
    <div {...props} className={classList(`btn-group-vertical`)}>
      {props.children}
    </div>
  ) : (
    <div {...props} className={classList(`btn-group`)}>
      {props.children}
    </div>
  )
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  InternalButtonGroup,
) as CompoundedComponent<ButtonGroupProps>

export default ButtonGroup
