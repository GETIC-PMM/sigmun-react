import React from 'react'
import { ListGroupProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLUListElement,
  ListGroupProps
> = ({ className, ...props }, ref) => {
  return <ul ref={ref} className={`list-group ${className}`} {...props} />
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<ListGroupProps>

export default Container
