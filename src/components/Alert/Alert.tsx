import { forwardRef } from 'react'
import { classList } from '../../utils'
import { AlertProps } from './types'
import { CompoundedComponent } from '../../utils/types'
import 'sigmun-hero/style'

const InternalAlert: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AlertProps
> = ({ type = 'primary', enableClose = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
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
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  InternalAlert,
) as CompoundedComponent<AlertProps>

export default Alert
