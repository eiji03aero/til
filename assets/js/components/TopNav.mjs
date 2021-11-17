import { css, cx } from '../modules/emotion.mjs';

export const TopNav = () => {
  return `
    <nav data-elementname="TopNav" class="${Styles.container}">
      <div class="${cx(Styles.content, 'uk-container uk-container-expand')}">
        <a
          class="${cx(Styles.menuLink, Styles.iconLink)}"
          href="#"
          onclick="app.openMenu()"
        >
          <i uk-icon="menu"></i>
        </a>

        <a class="${Styles.homeLink}" href="#" onclick="app.navigateToHome()">
          <i class="${Styles.homeLogo}" uk-icon="uikit"></i>
          til | eiji03aero
        </a>
        <div class="${Styles.tools}">
          <a class="${
            Styles.iconLink
          }" href="https://github.com/eiji03aero/til" uk-icon="github-alt"></a>
          <a class="${
            Styles.iconLink
          }" href="https://www.linkedin.com/in/eiji-osakabe-a3baa9125/" uk-icon="linkedin"></a>
        </div>
      </div>
    </nav>
  `;
};

const Styles = {
  container: css`
    background: linear-gradient(
      to right,
      var(--pallete-blue-base),
      var(--pallete-blue-light1)
    );
  `,
  content: css`
    display: flex;
    align-items: center;
    height: 48px;
  `,
  menuLink: css`
    display: none;
    margin-right: 16px;

    @media only screen and (max-width: 768px) {
      display: block;
    }
  `,
  homeLink: css`
    display: flex;
    align-items: center;
    color: var(--pallete-gs-white);
  `,
  homeLogo: css`
    margin-right: 16px;

    svg {
      width: 24px;
      height: 24px;
      fill: var(--pallete-gs-white);
    }
  `,
  tools: css`
    margin-left: auto;

    & > * + * {
      margin-left: 8px;
    }
  `,
  iconLink: css`
    svg {
      width: 24px;
      height: 24px;
      fill: var(--pallete-gs-white);
    }
  `,
};
