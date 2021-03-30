const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const readline = require('readline');

const rootDir = path.resolve(__dirname, "../");
const pageRootDir = "/til";
const githubPath = "https://github.com/eiji03aero/til/blob/main";

const RegExps = {
  CommentOutBegin: new RegExp("^<!--$"),
  CommentOutEnd: new RegExp("^-->$"),
  TitleLine: new RegExp("^# "),
};

const parsePost = async (postPath) => {
  const fileStream = fs.createReadStream(postPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const parsed = {
    tags: [],
    title: "",
  };

  const state = {
    parsed: {
      json: false,
      title: false,
    },
    parsing: "default",
    jsonBuf: [],
  };

  for await (const line of rl) {
    if (RegExps.CommentOutBegin.test(line)) {
      state.parsing = "json";
      continue;
    }
    else if (RegExps.CommentOutEnd.test(line)) {
      state.parsing = "default";
      state.parsed.json = true;
      const json = JSON.parse(state.jsonBuf.join(""));
      if (Array.isArray(json.tags)) {
        parsed.tags = json.tags;
      }
      continue;
    }

    if (state.parsing === "json") {
      state.jsonBuf.push(line);
    }
    else if (RegExps.TitleLine.test(line)) {
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

(async () => {
  const postsDir = path.resolve(rootDir, "posts");
  const postFileNames = await fsPromises.readdir(postsDir)

  const tags = new Set();
  const posts = [];

  for (const name of postFileNames) {
    const postPath = path.resolve(rootDir, "posts", name);
    const parsed = await parsePost(postPath);
    parsed.tags.forEach((t) => tags.add(t));
    posts.push({
      title: parsed.title,
      tags: parsed.tags,
      path: `${githubPath}/posts/${name}`,
    });
  }

  const manifestPath = path.resolve(rootDir, "assets/manifest.json");
  const manifest = {
    tags: Array.from(tags),
    posts,
  };
  await fsPromises.writeFile(manifestPath, JSON.stringify(manifest));
})();
