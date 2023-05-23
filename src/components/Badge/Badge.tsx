import { forwardRef } from 'react'
import { classList } from '../../utils'
import { BadgeProps } from './types'

const Badge = forwardRef(
  ({ type = 'primary', badgeFor, ...props }: BadgeProps) => {
    return (
      <span
        className={classList(` bg-${type}`, {
          'badge position-absolute top-0 start-100 translate-middle rounded-pill':
            badgeFor == 'buttonPositioned',
          'badge position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-2':
            badgeFor == 'buttonDetail',
          'position-absolute bottom-0 start-75 translate-middle p-1 bg-danger border border-light rounded-circle':
            badgeFor == 'icon',
          'mx-1': badgeFor == 'button',
          'badge ': badgeFor == 'button' || badgeFor == 'text',
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
  },
)

export default Badge
