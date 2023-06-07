import React from 'react'
import { classList } from '../../utils'
import { InputProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ className, error = false, disabled = false, ...props }, ref) => {
  return (
    <input
      className={classList(`form-control ${className ?? ''}`, {
        'border-danger': error,
      })}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
}

const Input = React.forwardRef(InternalInput) as CompoundedComponent<InputProps>

export default Input
