import { Router, Request, Response, NextFunction } from 'express';
import { GetAllUsersFilters } from '../../db/dal/types';

import * as usersController from '../controllers/users';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';

const userRouter = Router()
  .get('/', async (req: Request, res: Response) => {
    try {
      const filters: GetAllUsersFilters = req.query;
      const results = await usersController.getAll(filters);

      return res.status(200).json(results);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .get('/:id', async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const result = await usersController.getById(id);

      return res.status(200).json(result);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: CreateUserDTO = req.body;

     const results = await usersController.create(user);

      return res.status(200).json(results);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .patch('/:id', async (req: Request, res: Response) => {
    // todo
    try {
      const id: number = Number(req.params.id);
      const payload: UpdateUserDTO = req.body;

      const result = await usersController.update(id, payload);
      return res.status(201).json(result);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .delete('/:id', async (req: Request, res: Response) => {
    // todo
    try {
      const id: number = Number(req.params.id);
      const result = await usersController.deleteById(id);

      return res.status(200).json(result);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  });

export default userRouter;
