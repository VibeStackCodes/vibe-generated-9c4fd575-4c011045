import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...rest }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={cn(
          'border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary',
          error ? 'border-red-500' : 'border-gray-300'
        )}
        {...rest}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default Input;