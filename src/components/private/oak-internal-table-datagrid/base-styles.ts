import {css} from 'lit-element';

export const oakInternalTableDatagridBaseStyles = css`
  .oak-internal-table-datagrid {
    overflow-x: auto;
    overflow-y: visible;
  }
  .oak-internal-table-datagrid table thead tr,
  .oak-internal-table-datagrid table tbody tr {
    height: 54px;
  }
  .oak-internal-table-datagrid table thead tr th,
  .oak-internal-table-datagrid table tbody tr td {
    padding: 0 16px;
  }
  .oak-internal-table-datagrid--dense table thead tr,
  .oak-internal-table-datagrid--dense table tbody tr {
    height: auto;
  }
  .oak-internal-table-datagrid--dense table thead tr th,
  .oak-internal-table-datagrid--dense table tbody tr td {
    padding: 6px 24px 6px 16px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    white-space: nowrap;
  }
  table thead tr th {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }
  table thead tr th span {
    display: flex;
    align-items: center;
  }
  .oak-internal-table-datagrid--fill-none table tbody tr {
    border-top: 1px solid var(--color-global-darker);
  }
  .oak-internal-table-datagrid--fill-container table tbody tr {
    border-top: 1px solid var(--color-container-darker);
  }
  .oak-internal-table-datagrid--fill-surface table tbody tr {
    border-top: 1px solid var(--color-surface-darker);
  }
  .oak-internal-table-datagrid--fill-float table tbody tr {
    border-top: 1px solid var(--color-float-darker);
  }

  .oak-internal-table-datagrid--fill-none table tbody tr:hover,
  .oak-internal-table-datagrid--fill-none table tbody tr:hover td {
    background-color: var(--color-global-darker);
  }
  .oak-internal-table-datagrid--fill-container table tbody tr:hover,
  .oak-internal-table-datagrid--fill-container table tbody tr:hover td {
    background-color: var(--color-container-darker);
  }
  .oak-internal-table-datagrid--fill-surface table tbody tr:hover,
  .oak-internal-table-datagrid--fill-surface table tbody tr:hover td {
    background-color: var(--color-surface-darker);
  }
  .oak-internal-table-datagrid--fill-float table tbody tr:hover,
  .oak-internal-table-datagrid--fill-float table tbody tr:hover td {
    background-color: var(--color-float-darker);
  }
`;
