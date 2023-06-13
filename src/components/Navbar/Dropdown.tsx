import React from 'react'
import { NavbarDropdownProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLLIElement,
  NavbarDropdownProps
> = ({ className = '', children, title, href, ...props }, ref) => {
  return (
    <li className={`nav-item dropdown ${className}`} ref={ref} {...props}>
      <a
        className="nav-link dropdown-toggle"
        href={href}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </a>
      <ul className="dropdown-menu">{children}</ul>
    </li>
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<NavbarDropdownProps>

export default Container
