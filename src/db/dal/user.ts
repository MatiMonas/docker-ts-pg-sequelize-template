import { Op } from 'sequelize';
import User, { UserInput, UserOutput } from '../models/Users.model';
import { GetAllUsersFilters } from './types';
import { CustomError } from '../../common/errors';

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
    throw new CustomError('User with that email already exists', 400);
  }

  return user.toJSON() as UserOutput;
};

export const update = async (
  id: number,
  payload: Partial<UserInput>,
): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }

  const checkUser = await User.findOne({
    where: {
      email: {
        [Op.eq]: payload.email,
      },
    },
  });

  if (checkUser) {
    throw new CustomError('User with that email already exists', 400);
  }

  const updatedUser = await user.update(payload);
  return updatedUser.toJSON() as UserOutput;
};

export const getById = async (id: number): Promise<UserOutput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new CustomError('User not found', 404);
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
  const users = await User.findAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
      ...(filters?.userId && { userId: filters.userId }),
      ...(filters?.email && { email: filters.email }),
      ...(filters?.name && { name: filters.name }),
    },
  });

  if (!users.length) {
    throw new CustomError('User/s not found', 404);
  }

  return users.map((user) => user.toJSON()) as UserOutput[];
};
