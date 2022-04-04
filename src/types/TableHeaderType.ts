export interface TableHeader {
  name: string;
  datatype: TableCellDatatype;
}

export enum TableCellDatatype {
  text,
  number,
  date,
}
