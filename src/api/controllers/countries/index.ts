import * as countryService from '../../../db/services/CountryService';
import { CreateCountryDTO, FilterCountriesDTO, UpdateCountryDTO } from '../../dto/country.dto';

import { Country } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateCountryDTO): Promise<Country> => {
  return mapper.toCountry(await countryService.create(payload));
};

export const update = async (
  id: number,
  payload: UpdateCountryDTO,
): Promise<Country> => {
  return mapper.toCountry(await countryService.update(id, payload));
};

export const getById = async (id: number): Promise<Country> => {
  return mapper.toCountry(await countryService.getById(id));
};

export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await countryService.deleteById(id);

  return isDeleted;
};

export const getAll = async (
  filters: FilterCountriesDTO,
): Promise<Country[]> => {
  return (await countryService.getAll(filters)).map(mapper.toCountry);
};
