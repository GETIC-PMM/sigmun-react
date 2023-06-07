import { forwardRef } from 'react'
import { CompoundedComponent } from '../../utils/types'
import { BreadCrumbContainerProps, BreadCrumbItemProps } from './types'

export const InternalBreadCrumbContainer: React.ForwardRefRenderFunction<
  HTMLElement,
  BreadCrumbContainerProps
> = ({ divider = '/', disableDividers = false, children, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      style={
        {
          '--bs-breadcrumb-divider': `${
            disableDividers
              ? `''`
              : divider.startsWith('url')
              ? `${divider}`
              : `"${divider}"`
          }`,
        } as React.CSSProperties
      }
      aria-label="breadcrumb"
      {...props}
    >
      <ol className="breadcrumb">{children}</ol>
    </nav>
  )
}

const InternalBreadCrumbItem: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BreadCrumbItemProps
> = ({ isActive = false, href, children, className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      {...props}
      className={`breadcrumb-item ${className ?? ''} ${
        isActive ? 'active' : ''
      }`}
    >
      {!isActive ? <a href={href}>{children}</a> : children}
    </li>
  )
}

const BreadCrumbContainer = forwardRef<HTMLElement, BreadCrumbContainerProps>(
  InternalBreadCrumbContainer,
) as CompoundedComponent<BreadCrumbContainerProps>

const BreadCrumbItem = forwardRef<HTMLLIElement, BreadCrumbItemProps>(
  InternalBreadCrumbItem,
) as CompoundedComponent<BreadCrumbItemProps>

const BreadCrumb = Object.assign(BreadCrumbContainer, {
  Item: BreadCrumbItem,
})

export default BreadCrumb
