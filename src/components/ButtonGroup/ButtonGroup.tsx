import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonGroupProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalButtonGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ButtonGroupProps
> = (
  {
    vertical = false,
    inputGroup = false,
    prependText,
    className = '',
    ...props
  },
  ref,
) => {
  return inputGroup ? (
    <div ref={ref} {...props} className={classList(`input-group ${className}`)}>
      <div className="input-group-prepend">
        <div className="input-group-text" id="btnGroupAddon2">
          {prependText}
        </div>
      </div>
      {props.children}
    </div>
  ) : vertical ? (
    <div {...props} className={classList(`btn-group-vertical ${className}`)}>
      {props.children}
    </div>
  ) : (
    <div {...props} className={classList(`btn-group ${className}`)}>
      {props.children}
    </div>
  )
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  InternalButtonGroup,
) as CompoundedComponent<ButtonGroupProps>

export default ButtonGroup
