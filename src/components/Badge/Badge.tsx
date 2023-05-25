import { forwardRef } from 'react'
import { classList } from '../../utils'
import { BadgeProps } from './types'
import { CompoundedComponent } from '../../utils/types'

const InternalBadge: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BadgeProps
> = (
  { type = 'primary', badgeFor, bgPosition = 'top-right', ...props },
  ref,
) => {
  const canBePositioned =
    badgeFor == 'buttonDetail' || badgeFor == 'buttonPositioned'

  return (
    <span
      ref={ref}
      {...props}
      className={classList(` bg-${type}`, {
        'badge position-absolute translate-middle rounded-pill':
          badgeFor == 'buttonPositioned',
        'badge position-absolute translate-middle border border-light rounded-circle p-2':
          badgeFor == 'buttonDetail',
        'position-absolute bottom-0 start-75 translate-middle p-1 border border-light rounded-circle':
          badgeFor == 'icon',
        'mx-1': badgeFor == 'button',
        'badge ': badgeFor == 'button' || badgeFor == 'text',
        'top-0 start-0': bgPosition == 'top-left' && canBePositioned,
        'top-0 start-100': bgPosition == 'top-right' && canBePositioned,
        'top-100 start-0': bgPosition == 'bottom-left' && canBePositioned,
        'top-100 start-100': bgPosition == 'bottom-right' && canBePositioned,
      })}
    >
      <span
        className={classList({
          'visually-hidden': badgeFor == 'buttonDetail' || badgeFor == 'icon',
        })}
      >
        {props.children}
      </span>
    </span>
  )
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  InternalBadge,
) as CompoundedComponent<BadgeProps>

export default Badge
