import axios from 'axios';
import { API_BASE_URL, API_CONFIG } from '@/config/api';
import type { HealthCheckResponse, FormData, ApiResponse } from '@/types/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  ...API_CONFIG,
});

export const healthService = {
  check: async (): Promise<HealthCheckResponse> => {
    const response = await apiClient.get<HealthCheckResponse>('/api/health');
    return response.data;
  },
};

export const formsService = {
  submit: async (data: FormData): Promise<ApiResponse<FormData>> => {
    const response = await apiClient.post<ApiResponse<FormData>>('/api/forms', data);
    return response.data;
  },
  get: async (id: string): Promise<ApiResponse<FormData>> => {
    const response = await apiClient.get<ApiResponse<FormData>>(`/api/forms/${id}`);
    return response.data;
  },
}; 