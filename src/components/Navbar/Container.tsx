import React from 'react'
import { NavbarProps } from './types'
import { createId } from '@paralleldrive/cuid2'
import { CompoundedComponent } from '../../utils/types'

const InternalContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  NavbarProps
> = (
  { className = '', variant = 'light', brand, brandHref, children, ...props },
  ref,
) => {
  const internalId = createId()
  return (
    <nav
      ref={ref}
      className={`navbar navbar-expand-lg ${
        variant !== 'light' && 'navbar-dark'
      } bg-${variant} ${className}`}
      {...props}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href={brandHref ?? '#'}>
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${internalId}`}
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={internalId}>
          <ul className="navbar-nav">{children}</ul>
        </div>
      </div>
    </nav>
  )
}

const Container = React.forwardRef(
  InternalContainer,
) as CompoundedComponent<NavbarProps>

export default Container
