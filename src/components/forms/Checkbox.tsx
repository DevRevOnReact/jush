import React from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { ErrorMessage } from '@/components/common/ErrorMessage';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <input
          id={name}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...register(name)}
          {...props}
        />
        <label
          htmlFor={name}
          className="ml-2 block text-sm text-gray-700"
        >
          {label}
        </label>
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}; 