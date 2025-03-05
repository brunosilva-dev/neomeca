export interface Vote {
  photo_id: number;
  votes: number;
}

export const photos = [
  { id: 1, src: "/assets/cold-war.jpeg", alt: "Call Of Duty Cold War" },
  { id: 2, src: "/assets/dredge.jpeg", alt: "Dredge" },
  {
    id: 3,
    src: "/assets/kingdom-come-deliverance.jpeg",
    alt: "Kingdom Come Deliverance",
  },
  { id: 4, src: "/assets/little-nightmare.jpg", alt: "Little Nightmare" },
  { id: 5, src: "/assets/mafia-2.jpg", alt: "Mafia 2" },
  {
    id: 6,
    src: "/assets/gta-v.png",
    alt: "GTA V",
  },
  { id: 7, src: "/assets/sinking-city.jpeg", alt: "The Sinking City" },
  {
    id: 8,
    src: "/assets/wolfstein-ii.png",
    alt: "Wolfstein 2 - The New Colussus",
  },
  { id: 9, src: "/assets/the-witcher-3.jpeg", alt: "The Witcher 3" },
  {
    id: 10,
    src: "/assets/uncharted-4.avif",
    alt: "Uncharted 4 - A Thief End",
  },
];
