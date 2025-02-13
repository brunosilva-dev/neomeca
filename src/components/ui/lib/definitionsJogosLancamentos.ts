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
      nome: "Game A",
      plataforma: "PC, PS5",
      categoria: "RPG",
      dia: "10",
      imagem: "../assets/agenda-jogos/spider-man-2.jfif",
    },
    {
      nome: "Game B",
      plataforma: "Xbox, Switch",
      categoria: "Ação",
      dia: "22",
      imagem: "../assets/agenda-jogos/spider-man-2.jfif",
    },
  ],
  Fevereiro: [
    {
      nome: "Game C",
      plataforma: "PC",
      categoria: "Estratégia",
      dia: "5",
      imagem: "../assets/agenda-jogos/spider-man-2.jfif",
    },
    {
      nome: "Game D",
      plataforma: "PS5, Xbox",
      categoria: "Corrida",
      dia: "18",
      imagem: "../assets/agenda-jogos/spider-man-2.jfif",
    },
  ],
});
