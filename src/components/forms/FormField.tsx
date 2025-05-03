import React from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { ErrorMessage } from '@/components/common/ErrorMessage';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  description?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  description,
  className,
  type = 'text',
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
      <input
        id={name}
        type={type}
        className={cn(
          'block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...register(name)}
        {...props}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}; 