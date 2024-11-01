import type { APIContext } from "astro";
import { getCollection, getEntry } from "astro:content";
import { getOgImage } from "../../components/OgImage.tsx";

export async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((articles) => ({
    params: {
      slug: articles.slug,
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

  const articles = await getEntry("articles", params.slug);
  if (!articles) {
    return {
      status: 404,
      body: "Not found",
    };
  }

  const { body } = await getOgImage({
    title: articles.data.title ?? "No title",
    category: "Articles",
  });
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "image/png",
    },
  });
}
