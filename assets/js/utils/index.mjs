export const fetchContent = async (path) => {
  const res = await window.fetch(path);
  return res.text();
};

export const buildLinkAttributes = (path) => {
  return `href="${path}" onclick="window.app.handleNavigation(event, '${path}')"`;
};
