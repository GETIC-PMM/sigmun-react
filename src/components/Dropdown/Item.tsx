import React from 'react'
import { DropdownItemProps } from './types'

const InternalDropdownItem: React.ForwardRefRenderFunction<
  HTMLLIElement,
  DropdownItemProps
> = ({ href, children, ...props }, ref) => {
  return (
    <li ref={ref} {...props}>
      <a className="dropdown-item" href={href}>
        {children}
      </a>
    </li>
  )
}

const Item = React.forwardRef(InternalDropdownItem)

export default Item
