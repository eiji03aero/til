import * as events from '/assets/js/events.mjs';

const StylesheetUrls = [
  'https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/css/uikit.min.css',
];

const Modules = [
  [
    'https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit.min.js',
    'https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit-icons.min.js',
  ],
  'https://cdn.jsdelivr.net/npm/marked@3.0.7/marked.min.js',
  'https://cdn.jsdelivr.net/npm/@emotion/css@11.5.0/dist/emotion-css.umd.min.js',
];

function loadStylesheetByTag(url) {
  return new Promise((res) => {
    const linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = url;
    linkTag.type = 'text/css';
    linkTag.media = 'screen';

    linkTag.onload = res;
    document.head.appendChild(linkTag);
  });
}

function loadScriptByTag(url) {
  return new Promise((res) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = res;
    document.head.appendChild(scriptTag);
  });
}

async function loadScriptsByTagSequentially(urls) {
  for (const url of urls) {
    await loadScriptByTag(url);
  }
}

function loadScripts(modules) {
  return modules.reduce((accum, cur) => {
    if (Array.isArray(cur)) {
      accum.push(loadScriptsByTagSequentially(cur));
    } else {
      accum.push(loadScriptByTag(cur));
    }
    return accum;
  }, []);
}

document.addEventListener('DOMContentLoaded', async () => {
  const loadPromises = []
    .concat(StylesheetUrls.map(loadStylesheetByTag))
    .concat(loadScripts(Modules));

  await Promise.all(loadPromises);

  events.fireEvent(events.Events.ModulesInitialized);
});
