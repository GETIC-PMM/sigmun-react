export type AlertType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType
  enableClose?: boolean
}
