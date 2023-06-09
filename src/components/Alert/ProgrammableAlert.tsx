import sigmun from 'sigmun-hero'
import { CompoundedComponent } from '../../utils/types'
import { AlertType } from './types'
import { forwardRef } from 'react'
const useProgrammableAlert = () => {
  const InternalAlertContainer: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  > = ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        id="alert-container"
        className={`alert-container ${className ?? ''}`}
        {...props}
      >
        {children}
      </div>
    )
  }

  const AlertContainer = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(InternalAlertContainer) as CompoundedComponent<
    React.HTMLAttributes<HTMLDivElement>
  >

  const showAlert = ({
    message,
    type,
    duration,
  }: {
    message: string
    type: AlertType
    duration: number
  }) => {
    sigmun.functions.showAlert(message, type, '#alert-container', duration)
  }

  return [AlertContainer, showAlert] as const
}

export default useProgrammableAlert
