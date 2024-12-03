export interface Album {
  name: string;
  artist: string;
  cover: string;
  link?: string;
}

export const madeForYouAlbums: Album[] = [
  {
    name: "Arkone",
    artist: "Web fullstack",
    cover: "/arkone.webp",
  },
  {
    name: "Atixis",
    artist: "Web fullstack",
    cover: "/kazap.webp",
  },
  {
    name: "Tropicalswap",
    artist: "Web fullstack",
    cover: "/tropicalswap.webp",
    link: "https://tropicalswap.exchange/",
  },
  {
    name: "La ferme de la Villeneuve",
    artist: "Web design",
    cover: "/lafermedelavilleneuve.webp",
    link: "https://lafermedelavilleneuve.fr/"
  },
  {
    name: "Monark",
    artist: "Web fullstack",
    cover: "/monark.webp",
    link: "https://monark.exchange/"
  },
];
