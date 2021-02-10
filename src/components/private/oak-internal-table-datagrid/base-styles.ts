import {css} from 'lit-element';

export const oakInternalTableDatagridBaseStyles = css`
  .oak-internal-table-datagrid {
    --row-height: 54px;
    --table-cell-padding: 16px;
    overflow-x: auto;
    overflow-y: visible;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    white-space: nowrap;
  }
  table thead tr {
    height: var(--row-height);
  }
  table thead tr th {
    padding: 0 var(--table-cell-padding);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }
  table thead tr th span {
    display: flex;
    align-items: center;
  }
  table tbody tr {
    height: var(--row-height);
    border-top: 1px solid var(--global-border-color);
  }
  table tbody tr td {
    padding: 0 var(--table-cell-padding);
  }
`;
