import { sigmun } from 'sigmun-hero/dist/js/sigmun'
import { AlertType } from './types'

const useAlertContainer = () => {
  const AlertContainer = () => {
    return <div className="alert-container"></div>
  }

  const showAlert = (message: string, type: AlertType, duration: number) => {
    sigmun.functions.showAlert(message, type, 'body', duration)
  }

  return { AlertContainer, showAlert } as const
}

export default useAlertContainer
