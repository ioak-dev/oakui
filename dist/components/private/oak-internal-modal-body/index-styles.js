import { css } from 'lit-element';
export const oakInternalModalBodyStyles = css `
  .oak-internal-modal-body {
    padding: 30px 20px 10px 20px;
    max-height: calc(70vh - 80px - 60px);
    overflow-y: auto;
    display: block;
  }
  @media (max-width: 767px) {
    .oak-internal-modal-body {
      padding: 0 10px;
    }
  }
`;
//# sourceMappingURL=index-styles.js.map