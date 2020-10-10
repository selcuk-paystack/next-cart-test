export type SuccessResponse<T> = {
  type: 'success';
  data: T;
  status: number;
};

export type ErrorResponse = {
  type: 'error';
  status?: number;
  error: {
    message: string;
  };
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
