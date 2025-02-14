export type Jogo = {
  id: number;
  nome: string;
  plataforma: string;
  categoria: string;
  dia: string;
  imagem: string;
};

const generateSequentialIds = (
  categories: Record<string, Omit<Jogo, "id">[]>
): Record<string, Jogo[]> => {
  let idCounter = 1;

  return Object.fromEntries(
    Object.entries(categories).map(([category, items]) => [
      category,
      items.map((item) => ({ ...item, id: idCounter++ })),
    ])
  );
};

export const jogos = generateSequentialIds({
  Janeiro: [
    {
      nome: "The Legend of Cyber Cowboy",
      plataforma: "PS5, PS4, Xbox Series X|S, Xbox One, Switch, PC",
      categoria: "Roguelike de Ação, SHMUP com Visão Superior, 2D",
      dia: "01/01/2025",
      imagem: "../assets/lancamentos/the-legend-of-cyber-cowboy.jpg",
    },
    {
      nome: "Donkey Kong Country™ Returns",
      plataforma: "Nintendo Switch",
      categoria: "Ação",
      dia: "16/01/2025",
      imagem: "../assets/lancamentos/donkey-kong-country-returns.jpg",
    },
    {
      nome: "Dynasty Warriors: Origins",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Ação, Luta",
      dia: "17/01/2025",
      imagem: "../assets/lancamentos/dynasty-warriors-origins.avif",
    },
    {
      nome: "Sniper Elite: Resistance",
      plataforma: "PS5, PS4, Xbox Series X|S, Xbox One, PC",
      categoria: "Ação, Guerra",
      dia: "28/01/2025",
      imagem: "../assets/lancamentos/sniper-elite-resistence.webp",
    },
    {
      nome: "Marvel’s Spider-Man 2",
      plataforma: "PC",
      categoria: "Ação, Aventura, Luta",
      dia: "30/01/2025",
      imagem: "../assets/lancamentos/spider-man-2.jfif",
    },
  ],
  Fevereiro: [
    {
      nome: "Kingdom Come: Deliverance 2",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Época, Estratégia, Luta, Aventura",
      dia: "11/02/2025",
      imagem: "../assets/lancamentos/kingdom-come-deliverance-2.avif",
    },
    {
      nome: "Avowed",
      plataforma: "Xbox Series X|S, PC",
      categoria: "Aventura, Luta",
      dia: "18/02/2025",
      imagem: "../assets/lancamentos/avowed.webp",
    },
    {
      nome: "Lost Records: Bloom & Rage Tape 1",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Aventura",
      dia: "18/02/2025",
      imagem: "../assets/lancamentos/lost-records.jfif",
    },
    {
      nome: "Monster Hunter Wilds",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Aventura, Luta, Tiro",
      dia: "28/02/2025",
      imagem: "../assets/lancamentos/monster-hunter-wilds.webp",
    },
  ],
});
