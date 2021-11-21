import * as utils from '/assets/js/utils/index.mjs';

const PostShowView = async ({ path }) => {
  const [content] = await Promise.all([utils.fetchContent(path)]);

  return marked(content);
};

export default PostShowView;
