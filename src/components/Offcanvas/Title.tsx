import React from 'react'
import { OffcanvasProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalTitle: React.ForwardRefRenderFunction<
  HTMLDivElement,
  OffcanvasProps
> = ({ className = '', ...props }, ref) => {
  return <div className={`offcanvas-title ${className}`} ref={ref} {...props} />
}

const Title = React.forwardRef(
  InternalTitle,
) as CompoundedComponent<OffcanvasProps>

export default Title
