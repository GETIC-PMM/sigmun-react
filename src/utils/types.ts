export type CompoundedComponent<T> = React.ForwardRefExoticComponent<
  T & React.RefAttributes<HTMLElement>
>
