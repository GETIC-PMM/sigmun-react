import React from 'react'
import { ListGroupItemProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalItem: React.ForwardRefRenderFunction<
  HTMLLIElement,
  ListGroupItemProps
> = ({ className = '', active = false, variant, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={classList(`list-group-item ${className}`, {
        active: active,
        [`list-group-item-${variant}`]: !!variant,
      })}
      {...props}
    />
  )
}

const Item = React.forwardRef(
  InternalItem,
) as CompoundedComponent<ListGroupItemProps>

export default Item
