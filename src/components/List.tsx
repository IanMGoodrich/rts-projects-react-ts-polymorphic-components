import {type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

type ListItem<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

type ListProps<T extends ElementType> = {
  items: ListItem<T>[];
};

const List = <T extends ElementType = "div">({ items }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => {
        const { as, children, className, ...rest } = item;
        const Component = as as ElementType | undefined;
        return (
          <li key={index}>
            {Component ? (
              <Component className={className} {...rest}>
                {children}
              </Component>
            ) : (
              <>{children}</>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;