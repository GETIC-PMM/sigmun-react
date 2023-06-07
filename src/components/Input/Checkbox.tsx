import React from 'react'
import { RestInputProps } from './types'
import { createId } from '@paralleldrive/cuid2'
import { CompoundedComponent } from '../../utils/types'

const InternalCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RestInputProps
> = ({ className, label, ...props }, ref) => {
  const id = createId()
  return (
    <div className={`form-check ${className ?? ''}`}>
      <input
        className="form-check-input"
        type="checkbox"
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

const Checkbox = React.forwardRef(
  InternalCheckbox,
) as CompoundedComponent<RestInputProps>

export default Checkbox
