import { AxiosError } from 'axios';

export type SuccessResponse<T> = {
  type: 'success';
  data: T;
  status: number;
};

export type ErrorResponse = {
  type: 'error';
  error: {
    message: string;
    status?: number;
  };
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
