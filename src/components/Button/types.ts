export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

export type ButtonProps = {
  btnType?: ButtonTypes
  size?: 'sm' | 'lg'
  disabled?: boolean
  outlined?: boolean
  active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>
