import React from 'react'
import { InputGroupProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalInputGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InputGroupProps
> = ({ className, ...props }, ref) => {
  return (
    <div className={`input-group ${className ?? ''}}`} ref={ref} {...props} />
  )
}

const InputGroup = React.forwardRef(
  InternalInputGroup,
) as CompoundedComponent<InputGroupProps>

export default InputGroup
