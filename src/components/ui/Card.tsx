import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, className, children }) => {
  return (
    <section className={cn('rounded-md shadow bg-white p-4', className)}>
      {title && (<h3 className="text-lg font-semibold mb-2">{title}</h3>)}
      <div>{children}</div>
    </section>
  );
};

export default Card;