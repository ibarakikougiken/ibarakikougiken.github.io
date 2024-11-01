import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const news = await getCollection("news");
  return rss({
    title: "News",
    description: "茨城大学航空技術研究会 News",
    // https://docs.astro.build/ja/reference/api-reference/#contextsite
    site: context.site,
    items: news.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      link: `/news/${post.slug}`,
    })),
    customData: `<language>ja-JP</language>`,
  });
}
