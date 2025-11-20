import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = React.memo(function Button({
  variant = 'primary',
  size = 'md',
  loading,
  className,
  children,
  ariaLabel,
  ...rest
}) {
  const base = 'rounded-md font-semibold focus:outline-none transition duration-150 ease-in-out';
  const sizeClass = size === 'sm' ? 'px-3 py-2 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
  const variantClass = variant === 'primary'
    ? 'bg-primary text-white hover:bg-blue-700'
    : variant === 'secondary'
    ? 'bg-white text-primary border border-primary hover:bg-slate-50'
    : variant === 'ghost'
    ? 'bg-transparent text-primary hover:bg-slate-100'
    : 'bg-red-600 text-white hover:bg-red-700';
  return (
    <button
      type="button"
      aria-label={ariaLabel || typeof children === 'string' ? (children as string) : undefined}
      className={cn(base, sizeClass, variantClass, className)}
      disabled={rest.disabled || loading}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;