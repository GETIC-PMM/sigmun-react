import React from 'react'
import { CardProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalCardText: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ className, ...props }, ref) => {
  return <div ref={ref} className={`card-text ${className}`} {...props} />
}

const CardText = React.forwardRef(
  InternalCardText,
) as CompoundedComponent<CardProps>

export default CardText
