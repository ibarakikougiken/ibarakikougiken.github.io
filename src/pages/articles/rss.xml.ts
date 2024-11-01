import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const articles = await getCollection("articles");
  return rss({
    title: "Posts",
    description: "茨城大学航空技術研究会の投稿",
    // https://docs.astro.build/ja/reference/api-reference/#contextsite
    site: context.site,
    items: articles.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      link: `/news/${post.slug}`,
    })),
    customData: `<language>ja-JP</language>`,
  });
}
