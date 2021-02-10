export function compare(
  a: any,
  b: any,
  paginationPref: any,
  headerMap: any
): number {
  const {sortField} = paginationPref;
  const {sortAsc} = paginationPref;
  const headerElement = headerMap[sortField];
  if (!headerElement?.dtype || headerElement?.dtype === 'text') {
    if (sortAsc) {
      return a[paginationPref.sortField] > b[paginationPref.sortField]
        ? 1
        : a[paginationPref.sortField] < b[paginationPref.sortField]
        ? -1
        : 0;
    }
    return a[paginationPref.sortField] < b[paginationPref.sortField]
      ? 1
      : a[paginationPref.sortField] > b[paginationPref.sortField]
      ? -1
      : 0;

    // } else if (headerElement.dtype === 'number') {
  }
  if (sortAsc) {
    return a[paginationPref.sortField] - b[paginationPref.sortField] > 0
      ? 1
      : a[paginationPref.sortField] - b[paginationPref.sortField] < 0
      ? -1
      : 0;
  }
  return a[paginationPref.sortField] - b[paginationPref.sortField] < 0
    ? 1
    : a[paginationPref.sortField] - b[paginationPref.sortField] > 0
    ? -1
    : 0;
}
