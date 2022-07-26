import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: any,
  res: Response,
  _next: NextFunction,
): void => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).json({ message, status });
  if (status >= 500) {    
    console.error(err);
  } else {
    console.info({ message, status });
  }
};
