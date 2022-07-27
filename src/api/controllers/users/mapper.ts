import { User } from "../../interfaces";
import { UserOutput } from "../../../db/models/User";

export const toUser = (user: UserOutput): User => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    //@ts-ignore
    country: user.country,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt,
  };
}