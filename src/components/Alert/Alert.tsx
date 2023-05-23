import { forwardRef } from 'react'
import { classList } from '../../utils'
import { AlertProps } from './types'

const Alert = forwardRef(
  ({ enableClose = false, type = 'primary', ...props }: AlertProps) => {
    return (
      <div
        {...props}
        className={classList(`alert alert-${type}`, {
          'alert-dismissible fade show': enableClose,
        })}
        role="alert"
      >
        {props.children}
        {enableClose && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        )}
      </div>
    )
  },
)

export default Alert
