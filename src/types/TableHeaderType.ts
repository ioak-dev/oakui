export interface TableHeaderType {
  name: string;
  label: string;
  dtype?:
    | 'text'
    | 'date'
    | 'number'
    | 'input'
    | 'input_text'
    | 'input_textarea'
    | 'input_select'
    | 'input_number';
  elements?: any;
}
