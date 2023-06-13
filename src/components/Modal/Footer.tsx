import React from 'react'
import { ModalProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalFooter: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalProps
> = ({ className, ...props }, ref) => {
  return <div ref={ref} className={`modal-footer ${className}`} {...props} />
}

const Footer = React.forwardRef(
  InternalFooter,
) as CompoundedComponent<ModalProps>

export default Footer
