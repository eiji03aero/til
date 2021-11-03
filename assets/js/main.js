import * as C from './components/index.js'
import * as P from './pages/MainPage.js';
import RoutesConfig from './routes-config.js';

async function fetchData () {
  const res = await window.fetch("/assets/data.json")
  return res.json();
}

async function fetchContent (path) {
  const res =  await window.fetch(path)
  return res.text()
}

function fetchContents (paths) {
  return Promise.all(paths.map(fetchContent))
}

async function navigateContent (path) {
  const contentElement = document.querySelector(".c-content");
  const maybeRouteConfig = RoutesConfig[path];
  const filePaths = maybeRouteConfig
    ? maybeRouteConfig.contents
    : [path]

  const contents = await fetchContents(filePaths)
  const content = contents.join('\n');
  contentElement.innerHTML = marked(content);
}

function navigateToHome () {
  navigateContent("/assets/welcome.md");
}

const Elements = {
  acquire (query) {
    return document.querySelector(query);
  },
  get overlay () { return this.acquire(".c-overlay"); },
  get sideMenu () { return this.acquire(".c-side-menu"); },
  get layoutSide () { return this.acquire(".l-main__side"); },
};

function openMenu () {
  const { overlay, layoutSide } = Elements;
  overlay.classList.add('c-overlay--open');
  overlay.onclick = closeMenu;
  layoutSide.classList.add('l-main__side--open');
}

function closeMenu () {
  const { overlay, layoutSide } = Elements;
  overlay.classList.remove('c-overlay--open');
  overlay.onclick = null;
  layoutSide.classList.remove('l-main__side--open');
}

function initializeSide (data) {
  const side = document.querySelector(".c-side-menu");
  const sideItemsMarkup = data.posts
    .slice()
    .sort((a,b) => b.timestamp - a.timestamp)
    .map((post) => C.SideMenuItem({ post }))
    .join("");
  side.innerHTML = sideItemsMarkup;
}

export async function initialize () {
  const appElement = document.getElementById("app");
  appElement.innerHTML = P.MainPage();

  const data = await fetchData()
  initializeSide(data);
  navigateToHome();
}

window.app = {
  navigateContent,
  navigateToHome,
  openMenu,
  closeMenu
};
