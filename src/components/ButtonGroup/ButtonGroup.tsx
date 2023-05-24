import { forwardRef } from 'react'
import { classList } from '../../utils'

const ButtonGroup = forwardRef(
  ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={classList(`btn-group`)}>{props.children}</div>
  },
)

export default ButtonGroup
