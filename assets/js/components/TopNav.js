export const TopNav = () => {
  return `
    <nav class="c-top-nav">
      <div class="c-top-nav__content uk-container uk-container-expand">
        <a class="c-top-nav__icon-link c-top-nav__menu-link" href="#" onclick="app.openMenu()">
          <i uk-icon="menu"></i>
        </a>

        <a class="c-top-nav__home-link" href="#" onclick="app.navigateToHome()">
          <i class="c-top-nav__home-logo" uk-icon="uikit"></i>
          til | eiji03aero
        </a>
        <div class="c-top-nav__tools">
          <a class="c-top-nav__icon-link" href="https://github.com/eiji03aero/til" uk-icon="github-alt"></a>
        </div>
      </div>
    </nav>
  `;
};
