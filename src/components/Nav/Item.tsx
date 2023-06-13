import React from 'react'
import { NavItemProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalItem: React.ForwardRefRenderFunction<
  HTMLLIElement,
  NavItemProps
> = ({ className = '', disabled = false, active = false, ...props }, ref) => {
  return (
    <li ref={ref} className={`nav-item ${className}`} {...props}>
      <a
        className={classList('nav-link', {
          disabled: disabled,
          active: active,
        })}
        href="#"
      >
        {props.children}
      </a>
    </li>
  )
}

const Item = React.forwardRef(InternalItem) as CompoundedComponent<NavItemProps>

export default Item
