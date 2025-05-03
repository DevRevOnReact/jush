export interface HealthCheckResponse {
  status: 'ok' | 'error';
  message?: string;
}

export interface FormData {
  // Add your form data types here
  id?: string;
  [key: string]: any;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
} 