import React from 'react'
import { ModalProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalTitle: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalProps
> = ({ className, ...props }, ref) => {
  return <h1 ref={ref} className={`modal-title ${className}`} {...props} />
}

const Title = React.forwardRef(InternalTitle) as CompoundedComponent<ModalProps>

export default Title
