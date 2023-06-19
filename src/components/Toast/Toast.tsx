import sigmun from 'sigmun-hero'
import { forwardRef } from 'react'
import { CompoundedComponent } from '../../utils/types'
const useToast = () => {
  const InternalToastContainer: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  > = ({ className = '', children, id, ...props }, ref) => {
    return (
      <div
        ref={ref}
        id="alert-container"
        className={`toast-container position-fixed bottom-0 end-0 p-3 ${
          className ?? ''
        }`}
        {...props}
      >
        <div
          id={id}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {children}
        </div>
      </div>
    )
  }

  const InternalToastHeader: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  > = ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`toast-header ${className ?? ''}`} {...props}>
        {children}
      </div>
    )
  }

  const InternalToastBody: React.ForwardRefRenderFunction<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  > = ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`toast-body ${className ?? ''}`} {...props}>
        {children}
      </div>
    )
  }

  const ToastContainer = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(InternalToastContainer) as CompoundedComponent<
    React.HTMLAttributes<HTMLDivElement>
  >

  const ToastHeader = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(InternalToastHeader) as CompoundedComponent<
    React.HTMLAttributes<HTMLDivElement>
  >

  const ToastBody = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(InternalToastBody) as CompoundedComponent<
    React.HTMLAttributes<HTMLDivElement>
  >

  type showToastFunction = (
    id: string,
    autohide: boolean,
    delay: number,
    options: unknown,
  ) => void

  const Toast = Object.assign(ToastContainer, {
    Header: ToastHeader,
    Body: ToastBody,
  })

  const showToast = sigmun.functions.showToast as showToastFunction

  return [Toast, showToast] as const
}

export default useToast
