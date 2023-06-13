import React from 'react'
import { ModalProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalHeader: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalProps
> = ({ className = '', ...props }, ref) => {
  return <div ref={ref} className={`modal-header ${className}`} {...props} />
}

const Header = React.forwardRef(
  InternalHeader,
) as CompoundedComponent<ModalProps>

export default Header
