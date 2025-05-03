import React from 'react';
import { Button } from '@/components/common/Button';

interface FormStepProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
  isLoading?: boolean;
}

export const FormStep: React.FC<FormStepProps> = ({
  title,
  description,
  children,
  onNext,
  onBack,
  isLastStep = false,
  isLoading = false,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>

      <div className="space-y-6">{children}</div>

      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          disabled={isLoading}
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}; 