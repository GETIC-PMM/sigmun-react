import React from 'react'
import { CardProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalCardBody: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ className = '', ...props }, ref) => {
  return <div ref={ref} className={`card-body ${className}`} {...props} />
}

const CardBody = React.forwardRef(
  InternalCardBody,
) as CompoundedComponent<CardProps>

export default CardBody
