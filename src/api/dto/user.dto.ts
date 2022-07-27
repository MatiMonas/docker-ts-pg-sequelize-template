import { Optional } from "sequelize/types";
import { User } from "../interfaces";

interface ListProperties {
  name: string;
  email: string;
  countryId: number;
}
 
export type UpdateUserDTO = ListProperties & Partial<Optional<User, "id">>;
export type CreateUserDTO = ListProperties;

export type FilterUsersDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
  countryId?:number;
  email?:string;
};
