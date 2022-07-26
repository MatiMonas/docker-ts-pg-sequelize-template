import { Op } from 'sequelize';
import { CustomError } from '../../common/errors';
import Country from '../models/Country.model';
import { CountryInput, CountryOutput } from '../models/Country.model';
import { GetAllCountriesFilters } from './types';

export const create = async (payload: CountryInput): Promise<CountryOutput> => {
  const checkCountry = await Country.findOne({
    where: {
      name: {
        [Op.eq]: payload.name,
      },
    },
  })
  
  if(checkCountry) {
    throw new CustomError('Country already exists', 400);
  }

  const country = await Country.create(payload);1
  return country.toJSON() as CountryOutput;
};

export const findOrCreate = async (
  payload: CountryInput,
): Promise<CountryOutput> => {
  const [country] = await Country.findOrCreate({
    where: {
      name: payload.name,
    },
  });
  return country.toJSON() as CountryOutput;
};

export const update = async (
  id: number,
  payload: Partial<CountryInput>,
): Promise<CountryOutput> => {
  const country = await Country.findByPk(id);

  if (!country) {
    throw new CustomError('Country not found', 404);
  }

  const updatedCountry = await country.update(payload);
  return updatedCountry.toJSON() as CountryOutput;
};

export const getById = async (id: number): Promise<CountryOutput> => {
  const country = await Country.findByPk(id);

  if (!country) {
    throw new CustomError('Country not found', 404);

  }
  return country.toJSON() as CountryOutput;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedCountry = await Country.destroy({
    where: { id },
  });

  return !!deletedCountry;
};

export const getAll = async (filters?: GetAllCountriesFilters): Promise<CountryOutput[]> => {
  const countries = await Country.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });

  if(!countries) {
    throw new CustomError('No conuntries found', 404);
  }
  
  return countries.map((country) => country.toJSON()) as CountryOutput[];
};
