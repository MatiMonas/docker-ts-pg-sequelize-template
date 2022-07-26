import { Country } from "../../interfaces";
import { CountryOutput } from "../../../db/models/Country.model";

export const toCountry = (country: CountryOutput): Country => {
  return {
    id: country.id,
    name: country.name,
    createdAt: country.createdAt,
    updatedAt: country.updatedAt,
    deletedAt: country.deletedAt,
  };
}