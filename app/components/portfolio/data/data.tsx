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
    cover: "/arkone.png",
  },
  {
    name: "Atixis",
    artist: "Web fullstack",
    cover: "/kazap.png",
  },
  {
    name: "Tropicalswap",
    artist: "Web fullstack",
    cover: "/tropicalswap.png",
    link: "https://tropicalswap.exchange/",
  },
  {
    name: "La ferme de la Villeneuve",
    artist: "Web design",
    cover: "/lafermedelavilleneuve.png",
    link: "https://lafermedelavilleneuve.fr/"
  },
  {
    name: "Monark",
    artist: "Web fullstack",
    cover: "/monark.png",
    link: "https://monark.exchange/"
  },
];
