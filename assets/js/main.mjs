import { getRoute } from '/assets/js/config/routes.mjs';

import * as C from '/assets/js/components/index.mjs';
import * as L from '/assets/js/layouts/index.mjs';
import * as P from '/assets/js/pages/index.mjs';

import './styles/injectGlobal.mjs';

async function fetchData() {
  const res = await window.fetch('/assets/data.json');
  return res.json();
}

async function navigateContent(path) {
  const { Content } = Elements;
  const route = getRoute(path);
  const routeView = await import(route.path);
  const content = await routeView.default({ path });

  Content.innerHTML = content;
  Content.scrollTop = 0;
}

async function handleNavigation(event, path) {
  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    return;
  }

  event.preventDefault();
  navigateContent(path);
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

  navigateContent(window.location.pathname);
}

window.app = {
  navigateContent,
  handleNavigation,
  openMenu,
  closeMenu,
};
