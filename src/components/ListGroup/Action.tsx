import React from 'react'
import { classList } from '../../utils'
import { ListGroupItemActionProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalItem: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  ListGroupItemActionProps
> = ({ className = '', active = false, variant, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={classList(
        `list-group-item list-group-item-action ${className}`,
        {
          active: active,
          [`list-group-item-${variant}`]: !!variant,
        },
      )}
      {...props}
    />
  )
}

const Item = React.forwardRef(
  InternalItem,
) as CompoundedComponent<ListGroupItemActionProps>

export default Item
