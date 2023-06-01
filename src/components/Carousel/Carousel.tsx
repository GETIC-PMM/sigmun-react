import { forwardRef } from 'react'
import { CompoundedComponent } from '../../utils/types'

export type CarouselProps = React.HTMLAttributes<HTMLDivElement>

const InternalCarousel: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CarouselProps
> = ({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      id="owl-carousel1"
      className={`owl-carousel owl-theme ${className}`}
      {...props}
    />
  )
}

const Carousel = forwardRef(
  InternalCarousel,
) as CompoundedComponent<CarouselProps>

export default Carousel
