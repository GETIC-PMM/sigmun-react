import React from 'react'
import { CardProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalCardFooter: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ className = '', ...props }, ref) => {
  return <div ref={ref} className={`card-footer ${className}`} {...props} />
}

const CardFooter = React.forwardRef(
  InternalCardFooter,
) as CompoundedComponent<CardProps>

export default CardFooter
