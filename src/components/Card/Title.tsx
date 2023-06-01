import React from 'react'
import { CardProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalCardTitle: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ className, ...props }, ref) => {
  return <div ref={ref} className={`card-title ${className}`} {...props} />
}

const CardTitle = React.forwardRef(
  InternalCardTitle,
) as CompoundedComponent<CardProps>

export default CardTitle
