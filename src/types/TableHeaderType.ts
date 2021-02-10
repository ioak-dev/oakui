export interface TableHeaderType {
  name: string;
  label: string;
  dtype?: 'text' | 'date' | 'number';
  elements?: any;
}
