export default function manifest() {
  return {
    name: "OrKid Edutainment",
    short_name: "OrKid",
    description: "Fun Learning for Kids",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/Asset.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/Asset.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/Asset.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
