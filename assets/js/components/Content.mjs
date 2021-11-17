import { css } from '../modules/emotion.mjs';

export const Content = () => {
  return `
    <div data-elementname="Content" class="${Styles.content}"></div>
  `;
};

const Styles = {
  content: css`
    width: 100%;
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
  `
};
