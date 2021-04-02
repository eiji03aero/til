import * as C from './components/index.js'
import * as P from './pages/MainPage.js';

function fetchData () {
  return window.fetch("/assets/data.json")
    .then((res) => res.json());
}

function fetchContent (path) {
  return window.fetch(path)
    .then((res) => res.text());
}

function navigateContent (path) {
  var contentElement = document.querySelector(".c-content");
  return fetchContent(path)
    .then((content) => {
      contentElement.innerText = content;
    });
}

function navigateToHome () {
  navigateContent("/assets/welcome.md");
}

var Elements = {
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
  var side = document.querySelector(".c-side-menu");
  var sideItemsMarkup = data.posts
    .slice()
    .sort((a,b) => b.timestamp - a.timestamp)
    .map((post) => C.SideMenuItem({ post }))
    .join("");
  side.innerHTML = sideItemsMarkup;
}

export function initialize () {
  var appElement = document.getElementById("app");
  appElement.innerHTML = P.MainPage();

  fetchData()
    .then((data) => {
      initializeSide(data);
      navigateToHome();
    });
}

window.app = {
  navigateContent,
  navigateToHome,
  openMenu,
  closeMenu
};
