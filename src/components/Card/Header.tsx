import React from 'react'
import { CardProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalCardHeader: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ className = '', ...props }, ref) => {
  return <div ref={ref} className={`card-header ${className}`} {...props} />
}

const CardHeader = React.forwardRef(
  InternalCardHeader,
) as CompoundedComponent<CardProps>

export default CardHeader
