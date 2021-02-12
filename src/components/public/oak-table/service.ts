import {isEmptyOrSpaces, match} from '../../../utils/StringUtils';

export function compare(
  a: any,
  b: any,
  paginationPref: any,
  header: any
): number {
  const headerMap: any = {};
  header.forEach((element: any) => {
    headerMap[element.key] = element;
  });
  const {sortBy} = paginationPref;
  const {sortAsc} = paginationPref;
  const headerElement = headerMap[sortBy];
  if (!headerElement?.dtype || headerElement?.dtype === 'text') {
    if (sortAsc) {
      return a[paginationPref.sortBy]?.toLowerCase() >
        b[paginationPref.sortBy]?.toLowerCase()
        ? 1
        : -1;
    }
    return a[paginationPref.sortBy]?.toLowerCase() <
      b[paginationPref.sortBy]?.toLowerCase()
      ? 1
      : -1;

    // } else if (headerElement.dtype === 'number') {
  }
  if (sortAsc) {
    return a[paginationPref.sortBy] - b[paginationPref.sortBy] > 0 ? 1 : -1;
  }
  return a[paginationPref.sortBy] - b[paginationPref.sortBy] < 0 ? 1 : -1;
}

export function paginate(data: any, header: any, paginationPref: any) {
  let filteredResults = data;
  if (!isEmptyOrSpaces(paginationPref.searchText)) {
    filteredResults = data.filter((item: any) => {
      let outcome = false;
      header.forEach((headerItem: any) => {
        let value = item[headerItem.name];
        if (headerItem.dtype === 'input_select') {
          value = headerItem.elements.find((item: any) => item.key === value)
            ?.value;
        }
        if (match(value, paginationPref.searchText)) {
          outcome = true;
        }
      });
      return outcome;
    });
  }
  if (paginationPref.sortBy) {
    filteredResults = filteredResults
      .slice()
      .sort((a: any, b: any) => compare(a, b, paginationPref, header));
  }

  filteredResults = filteredResults.slice(
    (paginationPref.pageNo - 1) * paginationPref.rowsPerPage,
    paginationPref.pageNo * paginationPref.rowsPerPage
  );

  return filteredResults;
}
