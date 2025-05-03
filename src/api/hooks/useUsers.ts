import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../client';

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface CreateUserDto {
  username: string;
  password: string;
}

export const useUsers = () => {
  const queryClient = useQueryClient();

  const createUser = useMutation({
    mutationFn: async (userData: CreateUserDto) => {
      const { data } = await apiClient.post<User>('/users', userData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const getUser = (id: number) => {
    return useQuery({
      queryKey: ['users', id],
      queryFn: async () => {
        const { data } = await apiClient.get<User>(`/users/${id}`);
        return data;
      },
    });
  };

  return {
    createUser,
    getUser,
  };
}; 