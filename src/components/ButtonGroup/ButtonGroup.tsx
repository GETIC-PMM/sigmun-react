import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonGroupProps } from './types'

const ButtonGroup = forwardRef(
  ({ vertical = false, ...props }: ButtonGroupProps) => {
    return vertical ? (
      <div className={classList(`btn-group-vertical`)}>{props.children}</div>
    ) : (
      <div className={classList(`btn-group`)}>{props.children}</div>
    )
  },
)

export default ButtonGroup
