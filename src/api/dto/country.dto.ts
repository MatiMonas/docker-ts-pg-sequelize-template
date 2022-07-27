import { Optional } from "sequelize/types";
import { Country } from "../interfaces";

interface ListProperties {
  name: string;
}

export type UpdateCountryDTO = ListProperties & Partial<Optional<Country, "id">>;
export type CreateCountryDTO = ListProperties;

export type FilterCountriesDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
};
