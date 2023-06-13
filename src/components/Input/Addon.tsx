import React from 'react'
import { AddonProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalAddon: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AddonProps
> = ({ className = '', ...props }, ref) => {
  return (
    <span
      className={`input-group-text ${className ?? ''}`}
      ref={ref}
      {...props}
    />
  )
}

const Addon = React.forwardRef(InternalAddon) as CompoundedComponent<AddonProps>

export default Addon
