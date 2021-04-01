import * as C from './components/index.js'
import * as L from './layouts/index.js'

function fetchManifest () {
  return window.fetch("/assets/manifest.json")
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

function initializeSide (manifest) {
  var side = document.querySelector(".c-side-menu");
  var sideItemsMarkup = manifest.posts
    .slice()
    .sort((a,b) => b.timestamp - a.timestamp)
    .map((post) => C.SideMenuItem({ post }))
    .join("");
  side.innerHTML = sideItemsMarkup;
}

export function initialize () {
  var appElement = document.getElementById("app");
  appElement.innerHTML = L.MainLayout({
    top: C.TopNav(),
    side: C.SideMenu(),
    content: C.Content(),
  });

  fetchManifest()
    .then((manifest) => {
      initializeSide(manifest);
      navigateToHome();
    });
}

window.app = {
  navigateContent,
  navigateToHome,
};
