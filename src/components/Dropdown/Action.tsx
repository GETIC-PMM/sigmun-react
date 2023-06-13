import React from 'react'
import { DropdownActionProps } from './types'
import { classList } from '../../utils'
import Button from '../Button'

const InternalDropdownAction: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  DropdownActionProps
> = ({ className = '', split = false, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={classList(`dropdown-toggle ${className}`, {
        'dropdown-toggle-split': split,
      })}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      {...props}
    />
  )
}

const Item = React.forwardRef(InternalDropdownAction)

export default Item
