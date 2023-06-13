import React from 'react'
import { ModalProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalBody: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalProps
> = ({ className, ...props }, ref) => {
  return <div ref={ref} className={`modal-body ${className}`} {...props} />
}

const Body = React.forwardRef(InternalBody) as CompoundedComponent<ModalProps>

export default Body
