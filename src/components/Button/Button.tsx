import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonProps } from './types'

const Button = forwardRef(
  ({
    btnType = 'primary',
    disabled = false,
    outlined = false,
    active = false,
    size,
    ...props
  }: ButtonProps) => {
    return outlined ? (
      <button
        {...props}
        className={classList(`btn btn-outline-${btnType}`, {
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
        className={classList(`btn btn-${btnType}`, {
          'disabled ': disabled,
          'btn-sm': size == 'sm',
          'btn-lg': size == 'lg',
          'active ': active,
        })}
      >
        {props.children}
      </button>
    )
  },
)

export default Button
