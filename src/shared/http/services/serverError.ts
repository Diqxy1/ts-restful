import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line
export default function serverError(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  // eslint-disable-next-line
  console.log(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
