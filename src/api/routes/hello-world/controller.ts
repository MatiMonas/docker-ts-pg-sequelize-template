import { Request, Response, NextFunction} from 'express'

export function helloWorld(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.json({message: 'Hello World!'});
  } catch (err) {
    next(err);
  }
}
