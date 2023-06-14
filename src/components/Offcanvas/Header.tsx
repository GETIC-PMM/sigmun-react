import React from 'react'
import { OffcanvasProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalHeader: React.ForwardRefRenderFunction<
  HTMLDivElement,
  OffcanvasProps
> = ({ className = '', ...props }, ref) => {
  return (
    <div className={`offcanvas-header ${className}`} ref={ref} {...props} />
  )
}

const Header = React.forwardRef(
  InternalHeader,
) as CompoundedComponent<OffcanvasProps>

export default Header
