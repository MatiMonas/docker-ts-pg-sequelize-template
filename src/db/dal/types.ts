interface ListFilters {
  isDeleted?: boolean;
  includeDeleted?: boolean;
}

export interface GetAllCountriesFilters extends ListFilters{}
export interface GetAllUsersFilters extends ListFilters{
  countryId?: number;
  email?: string
}