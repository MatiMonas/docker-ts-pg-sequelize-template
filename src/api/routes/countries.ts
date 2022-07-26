import { Router, Request, Response } from 'express';
import { GetAllCountriesFilters } from '../../db/dal/types';

import * as controller from '../controllers/countries';
import { CreateCountryDTO, UpdateCountryDTO } from '../dto/country.dto';

const countryRouter = Router()
  .get('/', async (req: Request, res: Response) => {
    try {
      const filters: GetAllCountriesFilters = req.query;
      const results = await controller.getAll(filters);

      return res.status(200).json(results);
    } catch (err) {
      return res.json(err);
    }
  })

  .post('/', async (req: Request, res: Response) => {
    try {
      const country: CreateCountryDTO = req.body;
      const results = await controller.create(country);

      return res.status(200).json(results);
    } catch (err: any) {
      return res
        .status(err.status)
        .json({ message: err.message, status: err.status });
    }
  })

  .patch('/:id', async (req: Request, res: Response) => {
    // todo

  })

  .delete('/:id', async (req: Request, res: Response) => {
    // todo
  })

  
export default countryRouter;
