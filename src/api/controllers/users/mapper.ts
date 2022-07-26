import { User } from "../../interfaces";
import { UserOutput } from "../../../db/models/Users.model";

export const toUser = (user: UserOutput): User => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt,
  };
}