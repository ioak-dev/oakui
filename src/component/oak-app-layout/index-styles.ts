import {css} from 'lit-element';

export const oakAppLayoutStyles = css`
  .backdrop-fade {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
  .oak-app-layout {
    height: 100%;
  }

  .oak-app-layout__sidebar {
    z-index: 60;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: var(--oak-app-layout-sidebar-width);
    margin-left: calc(0px - var(--oak-app-layout-sidebar-width));
    transition: margin-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .oak-app-layout--topbar-variant-static .oak-app-layout__sidebar {
    top: var(--oak-app-layout-topbar-height);
  }
  .oak-app-layout--sidebar-state-open .oak-app-layout__sidebar {
    margin-left: 0px;
  }

  .oak-app-layout__topbar {
    z-index: 40;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--oak-app-layout-topbar-height);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    transition: padding-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .oak-app-layout__topbar--nosidebar {
    grid-template-columns: 1fr;
  }
  .oak-app-layout__topbar--notopbar {
    display: none;
  }
  .oak-app-layout--sidebar-state-open .oak-app-layout__topbar {
    padding-left: calc(10px + var(--oak-app-layout-sidebar-width));
  }
  .oak-app-layout--sidebar-state-open.oak-app-layout--topbar-variant-static
    .oak-app-layout__topbar,
  .oak-app-layout--sidebar-state-open.oak-app-layout--sidebar-variant-over
    .oak-app-layout__topbar {
    padding-left: 10px;
  }

  .oak-app-layout__main {
    /* z-index: 30; */
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    padding-top: var(--oak-app-layout-topbar-height);
    padding-left: 0;
    transition: padding-left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .oak-app-layout__main.oak-app-layout__main--notopbar {
    padding-top: 0;
  }

  /* set custom color fills */
  .oak-app-layout__topbar--color-custom {
    background-color: var(--oak-app-layout-topbar-bg);
    color: var(--oak-app-layout-topbar-fg);
  }
  .oak-app-layout__sidebar--color-custom {
    background-color: var(--oak-app-layout-sidebar-bg);
    color: var(--oak-app-layout-sidebar-fg);
  }

  .oak-app-layout--sidebar-state-open .oak-app-layout__main {
    padding-left: var(--oak-app-layout-sidebar-width);
  }
  .oak-app-layout--sidebar-state-open.oak-app-layout--sidebar-variant-over
    .oak-app-layout__main {
    padding-left: 0;
  }

  button {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    user-select: none;
    background: none;
    border-radius: var(--global-border-radius);
    border-color: transparent;
    border-width: 1px;
    cursor: pointer;
    padding: 0;
  }
  button:focus {
    /* outline: none;
    border-color: var(--oak-userinput-outline-border-color);
    box-shadow: var(--oak-global-outline-box-shadow); */
    outline-style: var(--oak-global-outline-style);
    outline-width: var(--oak-global-outline-width);
    outline-offset: var(--oak-global-outline-offset);
    outline-color: var(--oak-global-outline-color);
  }

  .oak-app-layout__expand-icon {
    width: 24px;
    fill: var(--color-1);
    transform: scaleX(-1);
  }
  .oak-app-layout--sidebar-state-open .oak-app-layout__expand-icon {
    width: 24px;
    fill: var(--color-1);
    transform: scaleX(1);
  }

  .oak-app-layout--topbar-variant-static .backdrop-fade {
    z-index: 40;
  }
  .oak-app-layout--topbar-variant-static .oak-app-layout__sidebar {
    z-index: 50;
  }
  .oak-app-layout--topbar-variant-static .oak-app-layout__topbar {
    z-index: 60;
  }
`;
