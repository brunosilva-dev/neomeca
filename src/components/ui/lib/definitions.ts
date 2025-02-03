//Menu Dropdown direto do campo
export type Link = {
  id: number;
  name: string;
  url: string;
  icon:
    | keyof typeof import("phosphor-react")
    | keyof typeof import("@coreui/icons")
    | keyof typeof import("@fortawesome/free-brands-svg-icons")
    | keyof typeof import("@fortawesome/react-fontawesome")
    | string;
  children?: Link[]; // Links para o dropdown
};

export const links: Link[] = [
  {
    id: 1,
    name: "Página Inicial",
    url: "/",
    icon: "House",
  },
  {
    id: 2,
    name: "Lançamentos",
    url: "/lancamentos",
    icon: "RocketLaunch",
    children: [
      {
        id: 21,
        name: "Playstation",
        url: "/lancamentos/playstation",
        icon: "faPlaystation",
      },
      {
        id: 22,
        name: "Xbox",
        url: "/lancamentos/xbox",
        icon: "faXbox",
      },
      {
        id: 23,
        name: "PC",
        url: "/lancamentos/pc",
        icon: "MouseSimple",
      },
      {
        id: 24,
        name: "Nintendo",
        url: "/lancamentos/nintendo",
        icon: "Sword",
      },
      {
        id: 25,
        name: "Steam",
        url: "/lancamentos/steam",
        icon: "faSteam",
      },
    ],
  },
  {
    id: 3,
    name: "Loja",
    url: "/loja",
    icon: "Storefront",
    children: [
      {
        id: 31,
        name: "jogos Steam",
        url: "/loja/steam",
        icon: "faSteam",
      },
      { id: 32, name: "Gift", url: "/gift", icon: "Gift" },
      { id: 33, name: "jogos PS5", url: "/loja/ps5", icon: "faPlaystation" },
      { id: 34, name: "jogos Xbox", url: "/loja/xbox", icon: "faXbox" },
      { id: 35, name: "jogos PC", url: "/loja/pc", icon: "Keyboard" },
      {
        id: 36,
        name: "jogos Nintendo",
        url: "/loja/nintendo",
        icon: "Sword",
      },
    ],
  },
  {
    id: 4,
    name: "Contéudo de Mídia",
    url: "/midia",
    icon: "Airplay",
    children: [
      {
        id: 41,
        name: "Youtube",
        url: "/midia/gift",
        icon: "faYoutube",
      },
      { id: 42, name: "Twitch", url: "/midia/twitch", icon: "faTwitch" },
      { id: 43, name: "Kick", url: "/midia/kick", icon: "faKickstarter" },
      {
        id: 44,
        name: "Instagram",
        url: "/midia/instagram",
        icon: "faInstagram",
      },
      {
        id: 45,
        name: "Facebook",
        url: "/midia/facebook",
        icon: "faFacebook",
      },
      { id: 46, name: "X", url: "/midia/x", icon: "faXTwitter" },
    ],
  },
  {
    id: 5,
    name: "Novidades",
    url: "/novidades",
    icon: "NewspaperClipping",
    children: [
      {
        id: 51,
        name: "Comunidade",
        url: "/novidades/comunidade",
        icon: "ChatsTeardrop",
      },
      { id: 52, name: "Eventos", url: "/novidades/eventos", icon: "Calendar" },
      {
        id: 53,
        name: "Parceiros",
        url: "/novidades/parceiros",
        icon: "Handshake",
      },
      {
        id: 54,
        name: "Votação",
        url: "/votacao",
        icon: "CheckSquare",
      },
      {
        id: 55,
        name: "Agenda de Jogos",
        url: "/agenda",
        icon: "MicrophoneStage",
      },
    ],
  },
];
