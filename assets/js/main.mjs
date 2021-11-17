import * as C from './components/index.mjs';
import * as L from './layouts/index.mjs';
import * as P from './pages/MainPage.mjs';
import RoutesConfig from './config/routes.mjs';

import './styles/injectGlobal.mjs';

async function fetchData() {
  const res = await window.fetch('/assets/data.json');
  return res.json();
}

async function fetchContent(path) {
  const res = await window.fetch(path);
  return res.text();
}

function fetchContents(paths) {
  return Promise.all(paths.map(fetchContent));
}

async function navigateContent(path) {
  const { Content } = Elements;
  const maybeRouteConfig = RoutesConfig[path];
  const filePaths = maybeRouteConfig ? maybeRouteConfig.contents : [path];

  const contents = await fetchContents(filePaths);
  const content = contents.join('\n');
  Content.innerHTML = marked(content);
}

function navigateToHome() {
  navigateContent('/assets/welcome.md');
}

const Elements = {
  get App() {
    return document.querySelector('#app');
  },
  queryByElementName(name) {
    return document.querySelector(`[data-elementname="${name}"]`);
  },
  get Content() {
    return this.queryByElementName('Content');
  },
  get Overlay() {
    return this.queryByElementName('Overlay');
  },
  get SideMenu() {
    return this.queryByElementName('SideMenu');
  },
  get MainLayoutSide() {
    return this.queryByElementName('MainLayout_side');
  },
};

function openMenu() {
  const { Overlay, MainLayoutSide } = Elements;
  Overlay.classList.add(C.Overlay.Styles.open);
  Overlay.onclick = closeMenu;
  MainLayoutSide.classList.add(L.MainLayout.Styles.sideOpen);
}

function closeMenu() {
  const { Overlay, MainLayoutSide } = Elements;
  Overlay.classList.remove(C.Overlay.Styles.open);
  Overlay.onclick = null;
  MainLayoutSide.classList.remove(L.MainLayout.Styles.sideOpen);
}

function initializeSide(data) {
  const { SideMenu } = Elements;
  const sideItemsMarkup = data.posts
    .slice()
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((post) => C.SideMenuItem({ post }))
    .join('');
  SideMenu.innerHTML = sideItemsMarkup;
}

export async function initialize() {
  const { App } = Elements;
  App.innerHTML = P.MainPage();

  const data = await fetchData();
  initializeSide(data);
  navigateToHome();
}

window.app = {
  navigateContent,
  navigateToHome,
  openMenu,
  closeMenu,
};
