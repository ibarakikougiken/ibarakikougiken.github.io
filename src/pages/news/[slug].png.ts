import type { APIContext } from "astro";
import { getCollection, getEntry } from "astro:content";
import { getOgImage } from "../../components/OgImage.tsx";
export async function getStaticPaths() {
  const news = await getCollection("news");

  return news.map((news) => ({
    params: {
      slug: news.slug,
    },
  }));
}

export async function GET({ params }: APIContext) {
  if (!params.slug) {
    return {
      status: 404,
      body: "Not found",
    };
  }

  const news = await getEntry("news", params.slug);
  if (!news) {
    return {
      status: 404,
      body: "Not found",
    };
  }

  const { body } = await getOgImage({
    title: news.data.title ?? "No title",
    category: "News",
  });
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "image/png",
    },
  });
}
