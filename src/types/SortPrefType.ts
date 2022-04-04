export interface SortPref {
  sortBy: string;
  sortDirection: SortDirection;
}

export enum SortDirection {
  ascending,
  descending,
}
