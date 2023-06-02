import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    btnType = 'primary',
    disabled = false,
    outlined = false,
    active = false,
    size,
    className,
    ...props
  },
  ref,
) => {
  return outlined ? (
    <button
      ref={ref}
      {...props}
      className={classList(`btn btn-outline-${btnType} ${className}`, {
        'disabled ': disabled,
        'btn-sm': size == 'sm',
        'btn-lg': size == 'lg',
        'active ': active,
      })}
    >
      {props.children}
    </button>
  ) : (
    <button
      {...props}
      type="button"
      className={classList(`btn btn-${btnType} ${className}`, {
        'disabled ': disabled,
        'btn-sm': size == 'sm',
        'btn-lg': size == 'lg',
        'active ': active,
      })}
    >
      {props.children}
    </button>
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  InternalButton,
) as CompoundedComponent<ButtonProps>

export default Button
