import * as userService from '../../../db/services/UserService';
import { CreateUserDTO, FilterUsersDTO, UpdateUserDTO } from '../../dto/user.dto';

import { User } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateUserDTO): Promise<User> => {
  return mapper.toUser(await userService.create(payload));
};

export const update = async (
  id: number,
  payload: UpdateUserDTO,
): Promise<User> => {
  return mapper.toUser(await userService.update(id, payload));
};

export const getById = async (id: number): Promise<User> => {
  return mapper.toUser(await userService.getById(id));
};

export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await userService.deleteById(id);

  return isDeleted;
};

export const getAll = async (
  filters: FilterUsersDTO,
): Promise<User[]> => {
  return (await userService.getAll(filters)).map(mapper.toUser);
};
