function fetchManifest () {
  return window.fetch("/til/assets/manifest.json");
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
  var contentIframe = document.querySelector(".content");
  contentIframe.src = path;
}

function initializeSide (manifest) {
  var side = document.querySelector(".container__side");
  side.innerHTML = manifest.posts.map(renderSideItem).join("");
}

function initialize () {
  fetchManifest()
    .then((res) => {
      return res.json();
    })
    .then((manifest) => {
      initializeSide(manifest);
      navigateContent("/til/assets/welcome.html");
    });
}
