import { Op } from 'sequelize';
import User, { UserInput, UserOutput } from '../models/Users.model';
import { GetAllUsersFilters } from './types';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const user = await User.create(payload);
  return user.toJSON() as UserOutput;
};

export const findOrCreate = async (payload: UserInput): Promise<UserOutput> => {
  const [user, created] = await User.findOrCreate({
    where: {
      email: payload.email,
    },
  });

  if (created) {
    throw new Error('User with that email already exists');
  }

  return user.toJSON() as UserOutput;
};

export const update = async (
  id: number,
  payload: UserInput,
): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }

  const updatedUser = await user.update(payload);
  return updatedUser.toJSON() as UserOutput;
};

export const getById = async (id: number): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }
  return user.toJSON() as UserOutput;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedUser = await User.destroy({
    where: { id },
  });

  return !!deletedUser;
};

export const getAll = async (
  filters?: GetAllUsersFilters,
): Promise<UserOutput[]> => {
  const countries = await User.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
      ...(filters?.countryId && { countryId: filters.countryId }),
      ...(filters?.email && { email: filters.email }),
    },
  });

  return countries.map((user) => user.toJSON()) as UserOutput[];
};
