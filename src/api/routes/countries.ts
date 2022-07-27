import { Router, Request, Response, NextFunction } from 'express';
import { GetAllCountriesFilters } from '../../db/dal/types';

import * as countriesController from '../controllers/countries';
import { CreateCountryDTO, UpdateCountryDTO } from '../dto/country.dto';

const countryRouter = Router()
  .get('/', async (req: Request, res: Response) => {
    try {
      const filters: GetAllCountriesFilters = req.query;
      const results = await countriesController.getAll(filters);

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
      const result = await countriesController.getById(id);

      return res.status(200).json(result);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const country: CreateCountryDTO = req.body;
      const results = await countriesController.create(country);

      return res.status(200).json(results);
    } catch (err: any) {
       next(err);
    }
  })

  .post(
    '/bulkCreate',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const country: CreateCountryDTO[] = req.body;
        const results = await countriesController.bulkCreate(country);

        return res.status(200).json(results);
      } catch (err: any) {
        return res
          .status(err.status)
          .json({ message: err.message, status: err.status });
      }
    },
  )

  .patch('/:id', async (req: Request, res: Response) => {
    // todo
    try {
      const id: number = Number(req.params.id);
      const payload: UpdateCountryDTO = req.body;

      const result = await countriesController.update(id, payload);
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
      const result = await countriesController.deleteById(id);

      return res.status(200).json(result);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  });

export default countryRouter;
