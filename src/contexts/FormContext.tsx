"use client";

import React, { createContext, useContext } from 'react';
import { useFormSteps } from '@/hooks/useFormSteps';
import type { FormContextType } from '@/types/form';

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const formSteps = useFormSteps();

  return (
    <FormContext.Provider value={formSteps}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
