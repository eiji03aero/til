import { css } from '/assets/js/modules/emotion.mjs';

export const Overlay = () => {
  return `
    <div data-elementname="Overlay" class="${Styles.overlay}"></div>
  `;
};

const Styles = {
  overlay: css`
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--dark-transparent-32);
  `,
  open: css`
    display: block;
  `,
};

Overlay.Styles = Styles;
