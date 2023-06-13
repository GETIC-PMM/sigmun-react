import React from 'react'
import { LabelProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalLabel: React.ForwardRefRenderFunction<
  HTMLLabelElement,
  LabelProps
> = ({ className = '', ...props }, ref) => {
  return (
    <label className={`form-label ${className ?? ''}`} ref={ref} {...props} />
  )
}

const Label = React.forwardRef(InternalLabel) as CompoundedComponent<LabelProps>

export default Label
