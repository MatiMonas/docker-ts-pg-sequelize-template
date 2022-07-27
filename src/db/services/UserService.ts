import { GetAllUsersFilters } from '../dal/types';
import { UserOutput, UserInput } from '../models/User';
import * as userDal from '../dal/user';

export const create = (payload: UserInput): Promise<UserOutput> => {
  const checkUser = userDal.create(payload);
  return checkUser;
};

export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
  return userDal.update(id, payload);
};

export const getById = (id: number): any => {
  try {
    return userDal.getById(id);
    
  } catch (error) {
    console.log(error);
    
  }
};

export const deleteById = (id: number): Promise<boolean> => {
  return userDal.deleteById(id);
};

export const getAll = (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
  return userDal.getAll(filters);
};
