import { GetAllCountriesFilters } from '../dal/types';
import { CountryOutput, CountryInput } from '../models/Country';
import * as countryDal from '../dal/country';

export const create = (payload: CountryInput): Promise<CountryOutput> => {
  return countryDal.create(payload);
};

export const bulkCreate = (
  payload: CountryInput[],
): Promise<CountryOutput | any> => {
  return countryDal.bulkCreate(payload);
};

export const update = (
  id: number,
  payload: Partial<CountryInput>,
): Promise<CountryOutput> => {
  return countryDal.update(id, payload);
};

export const getById = (id: number): Promise<CountryOutput> => {
  return countryDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return countryDal.deleteById(id);
};

export const getAll = (
  filters: GetAllCountriesFilters,
): Promise<CountryOutput[]> => {
  return countryDal.getAll(filters);
};
