import React from 'react'
import { CardContainerProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardContainerProps
> = ({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classList(`card ${className}`, {
        [`text-bg-${variant}`]: !!variant,
      })}
      {...props}
    />
  )
}

const Card = React.forwardRef(
  InternalCard,
) as CompoundedComponent<CardContainerProps>

export default Card
