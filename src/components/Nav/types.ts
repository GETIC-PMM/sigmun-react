export type NavProps = {
  variant?: 'tabs' | 'pills' | 'vertical'
} & React.HTMLAttributes<HTMLUListElement>

export type NavItemProps = {
  active?: boolean
  disabled?: boolean
  href: string
} & React.HTMLAttributes<HTMLLIElement>
