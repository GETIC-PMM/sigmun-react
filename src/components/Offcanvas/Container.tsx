import React from 'react'
import { classList } from '../../utils'
import { OffcanvasContainerProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  OffcanvasContainerProps
> = ({ className = '', placement = 'start', ...props }, ref) => {
  return (
    <div
      className={classList(`offcanvas ${className}`, {
        'offcanvas-start': placement === 'start',
        'offcanvas-top': placement === 'top',
      })}
      tabIndex={-1}
      ref={ref}
      {...props}
    />
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<OffcanvasContainerProps>

export default Container
