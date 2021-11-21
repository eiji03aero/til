import { css, cx } from '/assets/js/modules/emotion.mjs';

import * as SC from '/assets/js/styles/constants.mjs';
import * as utils from '/assets/js/utils/index.mjs';

const NotFoundView = async () => {
  const [aaNotFound, aaDwait] = await Promise.all([
    utils.fetchContent('/assets/aa/404-not-found.txt'),
    utils.fetchContent('/assets/aa/dwait-featured.txt'),
  ]);

  return `
    <pre class="${cx(Styles.preArea, Styles.title)}">${aaNotFound}</pre>
    <pre class="${cx(Styles.preArea, Styles.dwait)}">${aaDwait}</pre>
  `;
};

const Styles = {
  preArea: css`
    margin: 0;
    border: none;
    text-align: center;

    ${SC.MediaQueries.MobileAndBelow} {
      padding: 0;
    }
  `,
  title: css`
    font-size: 1rem;

    ${SC.MediaQueries.MobileAndBelow} {
      font-size: calc(100vw / 80);
    }
  `,
  dwait: css`
    font-size: 0.2rem;

    ${SC.MediaQueries.MobileAndBelow} {
      font-size: calc(100vw / 360);
    }
  `,
};

export default NotFoundView;
