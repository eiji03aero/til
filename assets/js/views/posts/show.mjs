import * as utils from '/assets/js/utils/index.mjs';

const parsePath = (path) => {
  const postPath = path.match(/\/pages(.*)/)[1];
  return { postPath };
};

const PostShowView = async ({ path }) => {
  const { postPath } = parsePath(path);
  const [content] = await Promise.all([utils.fetchContent(postPath)]);

  return marked(content);
};

export default PostShowView;
