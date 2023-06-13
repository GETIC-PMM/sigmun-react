import React from 'react'
import { ModalProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalProps
> = ({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={`modal fade ${className}`} {...props}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<ModalProps>

export default Container
