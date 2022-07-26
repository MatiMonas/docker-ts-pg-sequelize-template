import { Op } from 'sequelize';
import Country from '../models/Country.model';
import { CountryInput, CountryOutput } from '../models/Country.model';
import { GetAllCountriesFilters } from './types';

export const create = async (payload: CountryInput): Promise<CountryOutput> => {
  const country = await Country.create(payload);
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
  payload: CountryInput,
): Promise<CountryOutput> => {
  const country = await Country.findByPk(id);

  if (!country) {
    throw new Error('Country not found');
  }

  const updatedCountry = await country.update(payload);
  return updatedCountry.toJSON() as CountryOutput;
};

export const getById = async (id: number): Promise<CountryOutput> => {
  const country = await Country.findByPk(id);

  if (!country) {
    throw new Error('Country not found');
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

  return countries.map((country) => country.toJSON()) as CountryOutput[];
};
