import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props<T extends React.ElementType> = {
  children?: ReactNode;
  className?: string;
  as?: T;
};

export const Container = <T extends React.ElementType = 'div'>({
  children,
  className,
  as,
}: Props<T>) => {
  const Component = as || 'div';
  return (
    <Component className={cn('container mx-auto px-5', className)}>
      {children}
    </Component>
  );
};
