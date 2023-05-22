import { forwardRef } from 'react'
import { classList } from '../utils'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  enableClose?: boolean
}

const Alert = forwardRef(
  ({ enableClose = false, type = 'primary', ...props }: AlertProps) => {
    return (
      <div
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
