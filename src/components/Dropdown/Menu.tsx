import { DropdownMenuProps } from './types'
import { classList } from '../../utils'
import React from 'react'
import ButtonGroup from '../ButtonGroup'

const InternalDropdownMenu: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownMenuProps
> = ({ variant: position, children, className, action, button, ...props }) => {
  return (
    <ButtonGroup
      className={classList(`${className}`, {
        dropup: position === 'top',
        dropstart: position === 'left',
        dropend: position === 'right',
      })}
      {...props}
    >
      {position !== 'left' && button}
      {position !== 'left' && action}

      {position === 'left' && button}

      <ul className="dropdown-menu">{children}</ul>

      {position === 'left' && action}
    </ButtonGroup>
  )
}

const Menu = React.forwardRef(InternalDropdownMenu)

export default Menu
