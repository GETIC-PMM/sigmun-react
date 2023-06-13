import React from 'react'
import { NavProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLUListElement,
  NavProps
> = ({ className = '', variant, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={classList(`nav ${className}`, {
        [`nav-${variant}`]: variant !== undefined && variant !== 'vertical',
        'flex-column': variant === 'vertical',
      })}
      {...props}
    />
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<NavProps>

export default Container
