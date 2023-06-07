import React from 'react'
import { createId } from '@paralleldrive/cuid2'
import { RestInputProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalSlider: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RestInputProps
> = ({ className, label, ...props }, ref) => {
  const id = createId()
  return (
    <div className={`${className ?? ''}`}>
      <input className="form-range" type="range" id={id} {...props} ref={ref} />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

const Slider = React.forwardRef(
  InternalSlider,
) as CompoundedComponent<RestInputProps>

export default Slider
