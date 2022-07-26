import { Optional } from "sequelize/types";

interface ListProperties {
  name: string;
  email: string;
  countryId: number;
}
 
export type UpdateUserDTO = Optional<ListProperties, 'name' | 'countryId' | 'email' >
export type CreateUserDTO = ListProperties;

export type FilterUsersDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
  countryId?:number;
  email?:string;
};
