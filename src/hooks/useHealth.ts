import { useQuery } from '@tanstack/react-query';
import { healthService } from '@/services/api';

export const useHealth = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: healthService.check,
  });
}; 