import crypto from "crypto";
import fs from "fs";

type Command = "article" | "news" | "help";

switch (process.argv[2] as Command) {
  case "article":
    createArticle();
    break;
  case "news":
    createNews();
    break;
  case "help":
    help();
    break;
  default:
    help();
    break;
}

function help() {
  const text = `
Usage: yarn new <command>
Commands:
	article: Create a new article
	news: Create a new news
`;
  console.log(text);
}

function slug(): string {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = 16;
  return Array.from(crypto.randomFillSync(new Uint8Array(len)))
    .map((n) => str[n % str.length])
    .join("");
}

function date() {
  return new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");
}

function createArticle() {
  const post_dir = "src/content/articles";
  const slugified = slug();
  const path = `${post_dir}/${slugified}.md`;
  const d = date();
  const post_template = `---
title: "新しい記事"
publishedAt: ${d}
updatedAt: ${d}
tags: [""]
isDraft: true
---
`;
  fs.writeFileSync(path, post_template);
  console.log(`Created new post at ${path}`);
}

function createNews() {
  const news_dir = "src/content/news";
  const slugified = slug();
  const path = `${news_dir}/${slugified}.md`;
  const d = date();
  const news_template = `---
title: "新しいお知らせ"
publishedAt: ${d}
updatedAt: ${d}
tags: [""]
---
`;
  fs.writeFileSync(path, news_template);
  console.log(`Created new news at ${path}`);
}
