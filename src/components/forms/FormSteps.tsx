import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface FormStepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepId: number) => void;
}

export const FormSteps: React.FC<FormStepsProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="relative">
      <div className="absolute left-0 top-4 h-0.5 w-full bg-gray-200">
        <div
          className="absolute h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div
              key={step.id}
              className={cn(
                'flex flex-col items-center',
                isCompleted && 'cursor-pointer'
              )}
              onClick={() => {
                if (isCompleted && onStepClick) {
                  onStepClick(step.id);
                }
              }}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full transition-all',
                  isCurrent &&
                    'bg-primary text-white ring-4 ring-primary/30',
                  isCompleted &&
                    'bg-primary text-white',
                  !isCurrent &&
                    !isCompleted &&
                    'bg-gray-200 text-gray-500'
                )}
              >
                {step.id + 1}
              </div>
              <div className="mt-2 text-center">
                <div
                  className={cn(
                    'text-sm font-medium',
                    isCurrent && 'text-primary',
                    !isCurrent && !isCompleted && 'text-gray-500'
                  )}
                >
                  {step.title}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 