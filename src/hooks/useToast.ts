import { useToast as useToastUI } from '@/components/ui/use-toast';

export interface ToastProps {
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}

export const useToast = () => {
  const { toast } = useToastUI();

  return {
    toast: ({
      title,
      description,
      variant = 'default',
      duration = 5000,
    }: ToastProps) => {
      toast({
        title,
        description,
        variant,
        duration,
      });
    },
  };
}; 