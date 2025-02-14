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
      dia: "01",
      imagem: "../assets/lancamentos/the-legend-of-cyber-cowboy.jpg",
    },
    {
      nome: "Donkey Kong Country™ Returns",
      plataforma: "Nintendo Switch",
      categoria: "Ação",
      dia: "16",
      imagem: "../assets/lancamentos/donkey-kong-country-returns.jpg",
    },
    {
      nome: "Dynasty Warriors: Origins",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Ação, Luta",
      dia: "17",
      imagem: "../assets/lancamentos/dynasty-warriors-origins.avif",
    },
    {
      nome: "Sniper Elite: Resistance",
      plataforma: "PS5, PS4, Xbox Series X|S, Xbox One, PC",
      categoria: "Ação, Guerra",
      dia: "28",
      imagem: "../assets/lancamentos/sniper-elite-resistence.webp",
    },
    {
      nome: "Marvel’s Spider-Man 2",
      plataforma: "PC",
      categoria: "Ação, Aventura, Luta",
      dia: "30",
      imagem: "../assets/lancamentos/spider-man-2.jfif",
    },
  ],
  Fevereiro: [
    {
      nome: "Kingdom Come: Deliverance 2",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Época, Estratégia, Luta, Aventura",
      dia: "11",
      imagem: "../assets/lancamentos/kingdom-come-deliverance-2.avif",
    },
    {
      nome: "Civilization 7",
      plataforma: "PC",
      categoria: "Construção, Estratégia, RPG",
      dia: "11",
      imagem: "../assets/lancamentos/civilization-7.jpg",
    },
    {
      nome: "Avowed",
      plataforma: "Xbox Series X|S, PC",
      categoria: "Aventura, Luta",
      dia: "18",
      imagem: "../assets/lancamentos/avowed.webp",
    },
    {
      nome: "Lost Records: Bloom & Rage Tape 1",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Aventura",
      dia: "18",
      imagem: "../assets/lancamentos/lost-records.jfif",
    },
    {
      nome: "Monster Hunter Wilds",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Aventura, Luta, Tiro",
      dia: "28",
      imagem: "../assets/lancamentos/monster-hunter-wilds.webp",
    },
  ],
  Março: [
    {
      nome: "Two Point Museum",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Casual, Simulação, Estratégia, Construção",
      dia: "04",
      imagem: "../assets/lancamentos/two-point-museum.jfif",
    },
    {
      nome: "WWE 2K25",
      plataforma: "PS5, PS4, Xbox Series X|S, Xbox One, PC",
      categoria: "Simulação, Desporto, Wrestling, Realista, PvP",
      dia: "[Antecipado - 07] e [Oficial - 14]",
      imagem: "../assets/lancamentos/wwe-2k25.jpg",
    },
    {
      nome: "Lost Records: Bloom & Rage Tape 2",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Aventura",
      dia: "18",
      imagem: "../assets/lancamentos/lost-records.jfif",
    },
    {
      nome: "Assassin’s Creed Shadows",
      plataforma: "PS5, Xbox Series X/S, PC",
      categoria: "Aventura, Luta, Ação, Tiro",
      dia: "18",
      imagem: "../assets/lancamentos/assassins-creed-shadows.jpg",
    },
    {
      nome: "Atomfall",
      plataforma: "PS5, PS4, Xbox Series X|S, Xbox One, PC",
      categoria: "Aventura, Sobrevivencia, Tiro",
      dia: "27",
      imagem: "../assets/lancamentos/atomfall.jpg",
    },
  ],
  Abril: [
    {
      nome: "The Last of Us Part II: Remastered",
      plataforma: "PC (Steam e Epic Store)",
      categoria: "Ação, Terror, Tiro, Luta, Boa Trama",
      dia: "3",
      imagem: "../assets/lancamentos/the-last-of-us-part-2-remastered-pc.avif",
    },
    {
      nome: "South of Midnight",
      plataforma: "Xbox Series X|S, PC",
      categoria: "Ação, Aventura, Fantasia, Mágica, Boa Trama",
      dia: "8",
      imagem: "../assets/lancamentos/south-of-midnight.jfif",
    },
    {
      nome: "Koira",
      plataforma: "Switch, PC",
      categoria: "Ação, Aventura, Fantasia, Mágica, Boa Trama",
      dia: "17",
      imagem: "../assets/lancamentos/koira.jfif",
    },
    {
      nome: "Fatal Fury: City of the Wolves",
      plataforma: "PS5, PS4, Xbox Series X|S, PC",
      categoria: "Ação, Luta",
      dia: "21",
      imagem: "../assets/lancamentos/fatal-fury-city-of-the-wolves.jpg",
    },
    {
      nome: "Clair Obscur: Expedition 33",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Ação, RPG",
      dia: "24",
      imagem: "../assets/lancamentos/clair-obscur-expedition-33.jpg",
    },
  ],
  Maio: [
    {
      nome: "Doom: The Dark Ages",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Ação, Tiro em Primeira Pessoa (FPS), Demônios",
      dia: "15",
      imagem: "../assets/lancamentos/doom-the-dark-ages.jpg",
    },
    {
      nome: "Capcom Fighting Collection 2",
      plataforma: "PS4, Xbox One, Switch, PC",
      categoria: "Luta",
      dia: "16",
      imagem: "../assets/lancamentos/capcom-fighting-collection-2.jfif",
    },
    {
      nome: "RoadCraft",
      plataforma: "PS5, Xbox Series X|S, PC",
      categoria: "Simulação, Construção, Aventura, Direção, 3D",
      dia: "20",
      imagem: "../assets/lancamentos/roadcraft.jpg",
    },
  ],
});
