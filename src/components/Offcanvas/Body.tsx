import React from 'react'
import { OffcanvasProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalBody: React.ForwardRefRenderFunction<
  HTMLDivElement,
  OffcanvasProps
> = ({ className = '', ...props }, ref) => {
  return <div className={`offcanvas-body ${className}`} ref={ref} {...props} />
}

const Body = React.forwardRef(
  InternalBody,
) as CompoundedComponent<OffcanvasProps>

export default Body
