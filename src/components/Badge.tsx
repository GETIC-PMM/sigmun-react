import { forwardRef } from 'react'
import { classList } from '../utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  text?: boolean
  positioned?: boolean
  noContent?: boolean
  badgeFor?: 'button' | 'buttonDetail' | 'buttonPositioned' | 'icon' | 'text'
}

const Badge = forwardRef(
  ({
    text = false,
    type = 'primary',
    positioned = false,
    noContent = false,
    badgeFor,
    ...props
  }: BadgeProps) => {
    return (
      <span
        className={classList(` bg-${type}`, {
          'badge position-absolute top-0 start-100 translate-middle rounded-pill':
            badgeFor == 'buttonPositioned',
          'badge position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-2':
            badgeFor == 'buttonDetail',
          'position-absolute bottom-0 start-75 translate-middle p-1 bg-danger border border-light rounded-circle':
            badgeFor == 'icon',
          'badge sdsa': badgeFor == 'button' || badgeFor == 'text',
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
