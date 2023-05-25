import { forwardRef } from 'react'
import { classList } from '../../utils'
import { ButtonGroupProps } from './types'

const ButtonGroup = forwardRef(
  ({
    vertical = false,
    inputGroup = false,
    prependText,
    ...props
  }: ButtonGroupProps) => {
    return inputGroup ? (
      <div className={classList(`input-group`)}>
        <div className="input-group-prepend">
          <div className="input-group-text" id="btnGroupAddon2">
            {prependText}
          </div>
        </div>
        {props.children}
      </div>
    ) : vertical ? (
      <div className={classList(`btn-group-vertical`)}>{props.children}</div>
    ) : (
      <div className={classList(`btn-group`)}>{props.children}</div>
    )
  },
)

export default ButtonGroup
