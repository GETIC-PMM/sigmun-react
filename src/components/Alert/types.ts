export type AlertType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type AlertProps = {
  type?: AlertType
  enableClose?: boolean
} & React.HTMLAttributes<HTMLDivElement>
