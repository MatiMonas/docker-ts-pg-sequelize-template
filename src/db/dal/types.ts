interface ListFilters {
  isDeleted?: boolean;
  includeDeleted?: boolean;
}

export interface GetAllCountriesFilters extends ListFilters{
  name?: string;
}
export interface GetAllUsersFilters extends ListFilters{
  countryId?: number;
  email?: string
}