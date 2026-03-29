export type ApiResponse<T> = {
  status: 'success' | 'error';
  code: string;
  data: T;
}