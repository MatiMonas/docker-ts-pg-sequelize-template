import { GetAllUsersFilters } from '../dal/types';
import { UserOutput, UserInput } from '../models/Users.model';
import * as userDal from '../dal/user';

export const create = (payload: UserInput): Promise<UserOutput> => {
  const checkUser = userDal.findOrCreate(payload);
  return checkUser;
};

export const update = (id: number, payload: UserInput): Promise<UserOutput> => {
  return userDal.update(id, payload);
};

export const getById = (id: number): Promise<UserOutput> => {
  return userDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return userDal.deleteById(id);
};

export const getAll = (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
  return userDal.getAll(filters);
};
