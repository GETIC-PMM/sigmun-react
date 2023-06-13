import React from 'react'
import { NavbarItemProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLLIElement,
  NavbarItemProps
> = (
  {
    className = '',
    children,
    href,
    active = false,
    disabled = false,
    ...props
  },
  ref,
) => {
  return (
    <li className={`nav-item ${className}`} ref={ref} {...props}>
      <a
        className={classList('nav-link', {
          active: active,
          disabled: disabled,
        })}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<NavbarItemProps>

export default Container
