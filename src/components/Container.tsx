import { type ElementType, type ReactNode, type ComponentPropsWithoutRef } from 'react';

// Example of polymorphic component
// This allows the component to render as different HTML elements

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType> ({ as, children, ...props }:ContainerProps<C>){
  const Component = as || "div";
  return (
    <Component className="container" {...props}>
      {children}
    </Component>
  )
}