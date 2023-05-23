import { forwardRef } from 'react'

export type BreadCrumbContainerProps = {
  divider?: React.ReactNode
  disableDividers?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const BreadCrumbContainer = forwardRef(
  ({
    divider = '/',
    disableDividers = false,
    children,
    ...props
  }: BreadCrumbContainerProps) => {
    return (
      <nav
        style={
          {
            '--bs-breadcrumb-divider': `${
              disableDividers ? `''` : `"${divider}"`
            }`,
          } as React.CSSProperties
        }
        aria-label="breadcrumb"
        {...props}
      >
        <ol className="breadcrumb">{children}</ol>
      </nav>
    )
  },
)

export type BreadCrumbItemProps = {
  isActive?: boolean
  href: string
} & React.HTMLAttributes<HTMLLIElement>

export const BreadCrumbItem = forwardRef(
  ({ isActive = false, href, children, ...props }: BreadCrumbItemProps) => {
    return (
      <li {...props} className={`breadcrumb-item ${isActive ? 'active' : ''}`}>
        {!isActive ? <a href={href}>{children}</a> : children}
      </li>
    )
  },
)
