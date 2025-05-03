import { useCallback } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FormData } from '@/types/api';
import { formsService } from '@/services/api';

export const useForm = <T extends FormData>(schema: any) => {
  const form = useReactHookForm<T>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = useCallback(async (data: T) => {
    try {
      const response = await formsService.submit(data);
      return response;
    } catch (error) {
      console.error('Form submission error:', error);
      throw error;
    }
  }, []);

  return {
    form,
    onSubmit,
  };
}; 