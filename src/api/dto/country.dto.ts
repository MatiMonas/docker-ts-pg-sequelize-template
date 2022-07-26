interface ListProperties {
  name: string;
}

export type UpdateCountryDTO = ListProperties;
export type CreateCountryDTO = ListProperties;

export type FilterCountriesDTO = {
  isDeleted?: boolean;
  includeDeleted?: boolean;
};
