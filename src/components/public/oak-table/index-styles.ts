import {css} from 'lit-element';

export const oakTableStyles = css`
  .oak-table__datagrid--nav-top.oak-table__datagrid--fill-none {
    border-top: 1px solid var(--color-global-darker);
  }
  .oak-table__datagrid--nav-bottom.oak-table__datagrid--fill-none {
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
