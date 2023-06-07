import React from 'react'
import { RestInputProps } from './types'
import { createId } from '@paralleldrive/cuid2'
import { CompoundedComponent } from '../../utils/types'

const InternalSwitch: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RestInputProps
> = ({ className, label, ...props }, ref) => {
  const id = createId()
  return (
    <div className={`form-check form-switch ${className ?? ''}`}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        {...props}
        ref={ref}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

const Switch = React.forwardRef(
  InternalSwitch,
) as CompoundedComponent<RestInputProps>

export default Switch
