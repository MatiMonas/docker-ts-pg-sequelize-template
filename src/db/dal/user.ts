import { Op } from 'sequelize';
import User, { UserInput, UserOutput } from '../models/User';
import { GetAllUsersFilters } from './types';
import { CustomError } from '../../common/errors';

import { Country } from '../models';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const { name, email, countryId } = payload;

  const checkUser = await User.findOne({
    where: {
      email,
    },
  });

  console.log(checkUser);

  if (checkUser) {
    throw new CustomError('User already exists', 400);
  }

  const user = await User.create({
    name,
    email,
  });

  await user.$set('country', Number(countryId));

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
  const user = await User.findByPk(id, {
    // attributes: {
    //   exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    // },
    include: [
      {
        model: Country,     
        
      },
    ],
  }).catch((error) => console.log(error));


  if (!user) {
    throw new CustomError('User not found', 404);
  }
  return user;
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
