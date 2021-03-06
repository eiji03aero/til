const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const readline = require('readline');

const rootDir = path.resolve(__dirname, '../');

const RegExps = {
  CommentOutBegin: new RegExp('^<!--$'),
  CommentOutEnd: new RegExp('^-->$'),
  TitleLine: new RegExp('^# '),
};

const parsePost = async (postPath) => {
  const fileStream = fs.createReadStream(postPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const parsed = {
    tags: [],
    title: '',
  };

  const state = {
    parsed: {
      json: false,
      title: false,
    },
    parsing: 'default',
    jsonBuf: [],
  };

  for await (const line of rl) {
    if (RegExps.CommentOutBegin.test(line)) {
      state.parsing = 'json';
      continue;
    } else if (RegExps.CommentOutEnd.test(line)) {
      state.parsing = 'default';
      state.parsed.json = true;
      const json = JSON.parse(state.jsonBuf.join(''));
      if (Array.isArray(json.tags)) {
        parsed.tags = json.tags;
      }
      continue;
    }

    if (state.parsing === 'json') {
      state.jsonBuf.push(line);
    } else if (RegExps.TitleLine.test(line)) {
      parsed.title = line.slice(2);
      state.parsed.title = true;
    }

    const done = Object.values(state.parsed).every(Boolean);
    if (done) {
      break;
    }
  }

  return parsed;
};

const parseTimestamp = (timestamp) => {
  const p = String(timestamp).match(/.{2}/g);
  return `${p[0]}${p[1]}-${p[2]}-${p[3]} ${p[4]}:${p[5]}:${p[6]}`;
};

(async () => {
  const postsDir = path.resolve(rootDir, 'posts');
  const postFileNames = await fsPromises.readdir(postsDir);

  const tags = new Set();
  const posts = [];

  for (const name of postFileNames) {
    const postPath = path.resolve(rootDir, 'posts', name);
    const timestamp = Number(name.split('.')[0]);

    const parsed = await parsePost(postPath);
    parsed.tags.forEach((t) => tags.add(t));
    posts.push({
      title: parsed.title,
      tags: parsed.tags,
      path: `/pages/posts/${name}`,
      timestamp,
      createdAt: parseTimestamp(timestamp),
    });
  }

  const filePath = path.resolve(rootDir, 'assets/data.json');
  const data = {
    tags: Array.from(tags),
    posts,
  };
  await fsPromises.writeFile(filePath, JSON.stringify(data));
})();
