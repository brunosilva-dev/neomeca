//Menu Dropdown direto do campo
export type Link = {
  id: number;
  name: string;
  url: string;
  icon?:
    | keyof typeof import("phosphor-react")
    | keyof typeof import("@coreui/icons")
    | keyof typeof import("@fortawesome/free-brands-svg-icons")
    | keyof typeof import("@fortawesome/react-fontawesome")
    | string;
  image?: string;
  children?: Link[]; // Links para o dropdown
};

export const links: Link[] = [
  {
    id: 1,
    name: "Página Inicial",
    url: "/",
    icon: "House",
    image: "../assets/icon/house.svg",
  },
  {
    id: 2,
    name: "Lançamentos",
    url: "/lancamentos",
    icon: "RocketLaunch",
    image: "../assets/icon/rocket-launch.svg",
    children: [
      {
        id: 21,
        name: "Playstation",
        url: "/lancamentos/playstation",
        icon: "faPlaystation",
        image: "../assets/icon/playstation-brands-solid.svg",
      },
      {
        id: 22,
        name: "Xbox",
        url: "/lancamentos/xbox",
        icon: "faXbox",
        image: "../assets/icon/xbox-brands-solid.svg",
      },
      {
        id: 23,
        name: "PC",
        url: "/lancamentos/pc",
        icon: "MouseSimple",
        image: "../assets/icon/mouse-simple.svg",
      },
      {
        id: 24,
        name: "Nintendo",
        url: "/lancamentos/nintendo",
        icon: "Sword",
        image: "../assets/icon/sword.svg",
      },
      {
        id: 25,
        name: "Steam",
        url: "/lancamentos/steam",
        icon: "faSteam",
        image: "../assets/icon/steam-brands-solid.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Loja",
    url: "/loja",
    icon: "Storefront",
    image: "../assets/icon/storefront.svg",
    children: [
      {
        id: 31,
        name: "jogos Steam",
        url: "/loja/steam",
        icon: "faSteam",
        image: "../assets/icon/steam-brands-solid.svg",
      },
      {
        id: 32,
        name: "Gift",
        url: "/gift",
        icon: "Gift",
        image: "../assets/icon/gift.svg",
      },
      {
        id: 33,
        name: "jogos PS5",
        url: "/loja/ps5",
        icon: "faPlaystation",
        image: "../assets/icon/playstation-brands-solid.svg",
      },
      {
        id: 34,
        name: "jogos Xbox",
        url: "/loja/xbox",
        icon: "faXbox",
        image: "../assets/icon/xbox-brands-solid.svg",
      },
      {
        id: 35,
        name: "jogos PC",
        url: "/loja/pc",
        icon: "Keyboard",
        image: "../assets/icon/keyboard.svg",
      },
      {
        id: 36,
        name: "jogos Nintendo",
        url: "/loja/nintendo",
        icon: "Sword",
        image: "../assets/icon/sword.svg",
      },
    ],
  },
  {
    id: 4,
    name: "Contéudo de Mídia",
    url: "/midia",
    icon: "Airplay",
    image: "../assets/icon/airplay.svg",
    children: [
      {
        id: 41,
        name: "Youtube",
        url: "https://www.youtube.com/@LivesNeoMeca",
        icon: "faYoutube",
        image: "../assets/icon/airplay.svg",
      },
      {
        id: 42,
        name: "Twitch",
        url: "https://www.twitch.tv/neomeca",
        icon: "faTwitch",
        image: "../assets/icon/twitch-brands-solid.svg",
      },
      {
        id: 43,
        name: "Kick",
        url: "https://kick.com/neomeca",
        icon: "faKickstarter",
        image: "../assets/icon/kickstarter-brands-solid.svg",
      },
      {
        id: 44,
        name: "Instagram",
        url: "https://www.instagram.com/neomeca/",
        icon: "faInstagram",
        image: "../assets/icon/instagram-brands-solid.svg",
      },
      {
        id: 45,
        name: "Facebook",
        url: "https://www.facebook.com/neomecaa",
        icon: "faFacebook",
        image: "../assets/icon/facebook-brands-solid.svg",
      },
      {
        id: 46,
        name: "X",
        url: "https://x.com/neomecaa",
        icon: "faXTwitter",
        image: "../assets/icon/x-logo.svg",
      },
    ],
  },
  {
    id: 5,
    name: "Novidades",
    url: "/novidades",
    icon: "NewspaperClipping",
    image: "../assets/icon/newspaper-clipping.svg",
    children: [
      {
        id: 51,
        name: "Comunidade",
        url: "/novidades/comunidade",
        icon: "ChatsTeardrop",
        image: "../assets/icon/chat-circle-dots.svg",
      },
      {
        id: 52,
        name: "Eventos",
        url: "/novidades/eventos",
        icon: "Calendar",
        image: "../assets/icon/calendar.svg",
      },
      {
        id: 53,
        name: "Parceiros",
        url: "/novidades/parceiros",
        icon: "Handshake",
        image: "../assets/icon/handshake.svg",
      },
      {
        id: 54,
        name: "Votação",
        url: "/votacao",
        icon: "CheckSquare",
        image: "../assets/icon/check-square.svg",
      },
      {
        id: 55,
        name: "Agenda de Jogos",
        url: "/agenda",
        icon: "MicrophoneStage",
        image: "../assets/icon/microphone-stage.svg",
      },
    ],
  },
];
