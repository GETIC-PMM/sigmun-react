import React from 'react'
import { CardImgProps } from './types'
import { classList } from '../../utils'
import { CompoundedComponent } from '../../utils/types'

const InternalCardImg: React.ForwardRefRenderFunction<
  HTMLImageElement,
  CardImgProps
> = ({ className = '', position = 'top', ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={classList(`${className}`, {
        'card-fluid': position === 'fluid',
        [`card-img-${position}`]: position !== 'fluid',
      })}
      {...props}
    />
  )
}

const CardImg = React.forwardRef(
  InternalCardImg,
) as CompoundedComponent<CardImgProps>

export default CardImg
