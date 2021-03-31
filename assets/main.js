function fetchManifest () {
  return window.fetch("/assets/manifest.json")
    .then((res) => res.json());
}

function fetchContent (path) {
  return window.fetch(path)
    .then((res) => res.text());
}

function renderSideItem (post) {
  return `
    <div class="side-item">
      <a href="#" onclick="navigateContent('${post.path}')">
        ${post.title}
      </a>
    </div>
  `;
}

function navigateContent (path) {
  var contentElement = document.querySelector(".content");
  return fetchContent(path)
    .then((content) => {
      contentElement.innerText = content;
    });
}

function initializeSide (manifest) {
  var side = document.querySelector(".container__side");
  var sideItemsMarkup = manifest.posts
    .slice()
    .sort((a,b) => b.timestamp - a.timestamp)
    .map(renderSideItem)
    .join("");
  side.innerHTML = sideItemsMarkup;
}

function initialize () {
  fetchManifest()
    .then((manifest) => {
      initializeSide(manifest);
      navigateContent("/assets/welcome.md");
    });
}
