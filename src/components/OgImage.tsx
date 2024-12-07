import { ImageResponse } from "@vercel/og";

export async function getOgImage(params: {
  title: string;
  category: string;
}): Promise<Response> {
  const { title, category } = params;
  return new ImageResponse(
    (
      <div
        lang="ja-JP"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/ibarakikougiken/ibarakikougiken.github.io/refs/heads/main/src/assets/images/favicon.png"
            alt="茨城大学航空技術研究会"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
            }}
          />
          <span style={{ fontSize: "2rem", fontWeight: 400, color: "black" }}>
            茨城大学航空技術研究会
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            maxWidth: "90%",
            maxHeight: "60%",
          }}
        >
          <span
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              color: "black",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </span>
        </div>

        <span
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            fontSize: "2rem",
            fontWeight: 400,
            color: "black",
          }}
        >
          https://ibarakikougiken.github.io/
        </span>

        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2rem", fontWeight: 400, color: "black" }}>
            {category}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
