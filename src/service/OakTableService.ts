import {PaginatePref} from '../types/PaginatePrefType';
import {SortDirection, SortPref} from '../types/SortPrefType';
import {TableHeader} from '../types/TableHeaderType';
import {isEmptyOrSpaces, match} from '../_internal/utils/StringUtils';

function compare(
  a: any,
  b: any,
  sortPref: SortPref,
  header: TableHeader[]
): number {
  const headerMap: any = {};
  header.forEach((element: TableHeader) => {
    headerMap[element.name] = element;
  });
  const {sortBy} = sortPref;
  const {sortDirection} = sortPref;
  const headerElement = headerMap[sortBy];
  if (!headerElement?.dtype || headerElement?.dtype === 'text') {
    if (sortDirection === SortDirection.ascending) {
      return a[sortPref.sortBy]?.toLowerCase() >
        b[sortPref.sortBy]?.toLowerCase()
        ? 1
        : -1;
    }
    return a[sortPref.sortBy]?.toLowerCase() < b[sortPref.sortBy]?.toLowerCase()
      ? 1
      : -1;

    // } else if (headerElement.dtype === 'number') {
  }
  if (sortDirection === SortDirection.ascending) {
    return a[sortPref.sortBy] - b[sortPref.sortBy] > 0 ? 1 : -1;
  }
  return a[sortPref.sortBy] - b[sortPref.sortBy] < 0 ? 1 : -1;
}

export function getPage(
  data: any[],
  header: TableHeader[],
  paginationPref: PaginatePref,
  sortPref?: SortPref
) {
  let filteredResults = data;
  if (!isEmptyOrSpaces(paginationPref.searchText)) {
    filteredResults = data.filter((item: any) => {
      let outcome = false;
      header.forEach((headerItem: TableHeader) => {
        if (match(item[headerItem.name], paginationPref.searchText)) {
          outcome = true;
        }
      });
      return outcome;
    });
  }
  if (sortPref && sortPref.sortBy) {
    filteredResults = filteredResults
      .slice()
      .sort((a: any, b: any) => compare(a, b, sortPref, header));
  }

  const totalRows = filteredResults.length;

  filteredResults = filteredResults.slice(
    (paginationPref.pageNo - 1) * paginationPref.rowsPerPage,
    paginationPref.pageNo * paginationPref.rowsPerPage
  );

  return {totalRows, filteredResults};
}
