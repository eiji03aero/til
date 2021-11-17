import { css } from '../modules/emotion.mjs';
import * as SC from '../styles/constants.mjs';

export const MainLayout = ({ top, side, content }) => {
  return `
    <div data-elementname="MainLayout" class="${Styles.container}">
      <div class="${Styles.top}">
        ${top}
      </div>
      <div class="${Styles.body}">
        <aside data-elementname="MainLayout_side" class="${Styles.side}">
          ${side}
        </aside>
        <main class="${Styles.content}">
          ${content}
        </main>
      </div>
    </div>
  `;
};

const Styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
  top: css``,
  body: css`
    flex: 1;
    display: flex;
    min-height: 0;
  `,
  side: css`
    flex-shrink: 0;
    width: 320px;
    height: 100%;
    background: #ffffff;

    ${SC.MediaQueries.MobileAndBelow} {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      max-width: 80vw;
      height: 100%;
      transform: translateX(-100%);
      transition: transform 250ms;
      z-index: 1;
    }
  `,
  sideOpen: css`
    ${SC.MediaQueries.MobileAndBelow} {
      transform: translateX(0);
    }
  `,
  content: css`
    flex: 1;
    min-width: 0;
  `,
};

MainLayout.Styles = Styles;
console.log(SC.MediaQueries.MobileAndBelow)
