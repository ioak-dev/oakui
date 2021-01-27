import { css } from 'lit-element';
export const oakSelectModernStyles = css `
  .dropdown {
    list-style: none;
    position: relative;
    border: 1px solid #a2a4b2;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 250px;
    height: 40px;
    cursor: pointer;
    margin: 100px;
    padding: 0;
  }
  .dropdown__label {
    position: absolute;
    top: -9px;
    left: 15px;
    background: #fff;
    color: #444;
    font-size: 0.8em;
    font-family: Lato, sans-serif;
  }
  .dropdown__arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transition: transform 0.2s linear;
  }
  .dropdown__arrow.expanded {
    transform: rotate(-180deg);
  }
  .dropdown__list {
    width: 100%;
    position: absolute;
    left: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0px 3px 2px 0 #a2a4b2;
    transition: opacity 0.1s cubic-bezier(0, 0, 0.38, 0.9),
      max-height 0.5s cubic-bezier(0, 0, 0.38, 0.9);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  .dropdown__list-container {
    position: relative;
  }
  .dropdown ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .dropdown__list-item {
    font-family: Lato, sans-serif;
    color: #444444;
    padding: 10px 0px;
    padding-left: 15px;
    transition: background-color 0.1s linear, color 0.1s linear;
    color: #444444;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dropdown__list-item:hover,
  .dropdown__list-item:focus {
    background-color: #00c2ff;
    color: white;
  }
  #dropdown__selected {
    font-family: Lato, sans-serif;
    color: #444444;
    padding: 10px 0px;
    padding-left: 15px;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
  }
  #dropdown__selected:focus {
    outline: 1px solid #00c2ff;
  }
  .open {
    opacity: 1;
    overflow: auto;
    max-height: 15rem;
  }
`;
//# sourceMappingURL=index-styles.js.map