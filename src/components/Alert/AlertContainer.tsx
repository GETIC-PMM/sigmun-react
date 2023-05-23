import { sigmun } from '../../../node_modules/sigmun-hero/dist/js/sigmun'
import { AlertType } from './types'
import { forwardRef } from 'react'

const useAlertContainer = () => {
  const AlertContainer = forwardRef(
    (props: React.HTMLAttributes<HTMLDivElement>) => {
      const { children, className } = props
      return (
        <div className={`alert-container ${className}`} {...props}>
          {children}
        </div>
      )
    },
  )

  const showAlert = (message: string, type: AlertType, duration: number) => {
    sigmun.functions.showAlert(message, type, 'body', duration)
  }

  return { AlertContainer, showAlert } as const
}

export default useAlertContainer
