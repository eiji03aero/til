import { css } from '../modules/emotion.mjs';

export const SideMenu = () => {
  return `
    <div data-elementname="SideMenu" class="${Styles.sideMenu}"></div>
  `;
};

const Styles = {
  sideMenu: css`
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    border-right: 1px solid var(--pallete-gs-grey-light2);
    overflow-y: scroll;
  `,
};
