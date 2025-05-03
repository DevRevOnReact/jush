import { useState } from 'react';
import { SPECIAL_STEPS } from '@/config/form-steps';
import type { FormValues } from '@/lib/validations/form';
import type { FormContextType } from '@/types/form';

export function useFormSteps(): FormContextType {
  const [currentStep, setCurrentStep] = useState<number>(SPECIAL_STEPS.WELCOME);
  const [formData, setFormData] = useState<Partial<FormValues>>({});

  const updateFormData = (data: Partial<FormValues>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setCurrentStep(SPECIAL_STEPS.WELCOME);
    setFormData({});
  };

  return {
    currentStep,
    setCurrentStep: (step: number) => setCurrentStep(step),
    formData,
    updateFormData,
    resetForm,
  };
} 