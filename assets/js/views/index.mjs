import * as utils from '/assets/js/utils/index.mjs';

const IndexView = async () => {
  const [articlesIndex] = await Promise.all([
    utils.fetchContent('/ARTICLE_INDEX.md'),
  ]);

  return `
    <h1>Welcome to my til!</h1>
    <p>
      You can browse through posts by clicking the links in sidebar.
    </p>

    ${marked(articlesIndex)}
  `;
};

export default IndexView;
