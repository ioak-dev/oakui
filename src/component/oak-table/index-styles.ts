import {css} from 'lit-element';

export const oakTableStyles = css`
  .oak-table__paginate {
    padding: 12px 10px;
  }

  .oak-table__paginate--dense {
    padding: 10px 6px;
  }

  .oak-table__datagrid {
    overflow: auto;
  }

  .oak-table__datagrid--nav-top.oak-table__datagrid--fill-global {
    border-top: 1px solid var(--color-global-darker);
  }
  .oak-table__datagrid--nav-bottom.oak-table__datagrid--fill-global {
    border-bottom: 1px solid var(--color-global-darker);
  }

  .oak-table__datagrid--nav-top.oak-table__datagrid--fill-container {
    border-top: 1px solid var(--color-container-darker);
  }
  .oak-table__datagrid--nav-bottom.oak-table__datagrid--fill-container {
    border-bottom: 1px solid var(--color-container-darker);
  }

  .oak-table__datagrid--nav-top.oak-table__datagrid--fill-surface {
    border-top: 1px solid var(--color-surface-darker);
  }
  .oak-table__datagrid--nav-bottom.oak-table__datagrid--fill-surface {
    border-bottom: 1px solid var(--color-surface-darker);
  }

  .oak-table__datagrid--nav-top.oak-table__datagrid--fill-float {
    border-top: 1px solid var(--color-float-darker);
  }
  .oak-table__datagrid--nav-bottom.oak-table__datagrid--fill-float {
    border-bottom: 1px solid var(--color-float-darker);
  }
`;
