export type Agenda = {
  id: number;
  name: string;
  url: string;
  image: string;
  alt?: string;
};

const generateSequentialIds = (
  categories: Record<string, Omit<Agenda, "id">[]>
): Record<string, Agenda[]> => {
  let idCounter = 1;

  return Object.fromEntries(
    Object.entries(categories).map(([category, items]) => [
      category,
      items.map((item) => ({ ...item, id: idCounter++ })),
    ])
  );
};

export const games = generateSequentialIds({
  // JOGOS INDICADOS PELO PUBLICO
  Indicações: [
    {
      name: "kingdom Come Deliverance 2",
      url: "https://www.youtube.com/watch?v=7ynJN-HejlY",
      image: "../assets/agenda-jogos/kingdom-come-deliverance-2.avif",
      alt: "Jogo kingdom Come Deliverance 2",
    },
  ],
  // JOGOS DESEJADOS
  Desejados: [
    {
      name: "kingdom Come Deliverance 2",
      url: "https://www.youtube.com/watch?v=7ynJN-HejlY",
      image: "../assets/agenda-jogos/kingdom-come-deliverance-2.avif",
      alt: "Jogo kingdom Come Deliverance 2",
    },
  ],
  // JOGOS COMPRADOS
  Comprados: [
    {
      name: "Hitman Blood Money",
      url: "https://www.youtube.com/watch?v=PbslIiOPL9g",
      image: "../assets/agenda-jogos/hitman-blood-money.jpg",
      alt: "Jogo Hitman Blood Money",
    },
    {
      name: "Kingdom Come Deliverance",
      url: "https://www.youtube.com/watch?v=t4SI06Gl9gA",
      image: "../assets/agenda-jogos/kingdom-come-deliverance.avif",
      alt: "Jogo Kingdom Come Deliverance",
    },
    {
      name: "Mad Max",
      url: "https://www.youtube.com/watch?v=94r4A0-eCt0",
      image: "../assets/agenda-jogos/mad-max.avif",
      alt: "Jogo Mad Max",
    },
    {
      name: "Murdered Soul Suspect",
      url: "https://www.youtube.com/watch?v=d3ACdOWzpfA&pp=ygUqbXVyZGVyZWQgc291bCBzdXNwZWN0IHRyYWlsZXIgZW0gcG9ydHVndWVz",
      image: "../assets/agenda-jogos/murdered-soul-suspect.avif",
      alt: "Jogo Murdered Soul Suspect",
    },
    {
      name: "Shadows of Doubt",
      url: "https://www.youtube.com/watch?v=JHZXZEPaZL8",
      image: "../assets/agenda-jogos/shadows-of-doubt.jfif",
      alt: "Jogo Shadows of Doubt",
    },
    {
      name: "The Sinking City",
      url: "https://www.youtube.com/watch?v=iXhw7OcPw8Y",
      image: "../assets/agenda-jogos/sinking-city.avif",
      alt: "Jogo The Sinking City",
    },
  ],
  // JOGOS EM LIVE
  Live: [
    {
      name: "Battlefield 1",
      url: "https://www.youtube.com/@LivesNeoMeca/streams",
      image: "../assets/agenda-jogos/battlefield1.jpg",
      alt: "Jogo Battlefield 1",
    },
    {
      name: "The Last Of Us",
      url: "https://www.youtube.com/@LivesNeoMeca/streams",
      image: "../assets/agenda-jogos/TheLastOfUs.jfif",
      alt: "Jogo The Last Of Us",
    },
  ],
  // JOGOS PAUSADOS
  Pausados: [
    {
      name: "A Plague Tale: Innocence",
      url: "https://www.youtube.com/watch?v=9eegxMa0UrU&list=PL-LIHCsmnfdC5_wzF6u7YN9mDAk_u7M5V",
      image: "../assets/agenda-jogos/a-plague-tale-innocence-neomeca.jpeg",
      alt: "Jogo A Plague Tale: Innocence",
    },
    {
      name: "The Division",
      url: "https://www.youtube.com/watch?v=oxwdsCr9KN0&list=PL-LIHCsmnfdBtHOopf2SbTNboFwMue8lT",
      image: "../assets/agenda-jogos/the-division-neomeca.jpeg",
      alt: "Jogo The Division",
    },
    {
      name: "Hogwarts Legacy",
      url: "https://www.youtube.com/watch?v=JGqZ2p2bOXE&list=PL-LIHCsmnfdC0soED4zuTHak78ckDF2dx",
      image: "../assets/agenda-jogos/HogwartsLegacy.jpeg",
      alt: "Jogo Hogwarts Legacy",
    },
    {
      name: "Ghost Recon Breakpoint",
      url: "https://www.youtube.com/watch?v=00eYpPVvq6s&list=PL-LIHCsmnfdCZWGc286_foJNXmc1QAq6l",
      image: "../assets/agenda-jogos/GhostReconBreakpoint.jpeg",
      alt: "Jogo Ghost Recon Breakpoint",
    },
    {
      name: "Ghost Recon Wildlands",
      url: "https://www.youtube.com/watch?v=yMY6ssxb_FM&list=PL-LIHCsmnfdC0D8bgDFTsWo-zOoZS3JvE",
      image: "../assets/agenda-jogos/GhostReconWildlands.jfif",
      alt: "Jogo Ghost Recon Wildlands",
    },
    {
      name: "Star Wars Jedi Fallen Order",
      url: "https://www.youtube.com/watch?v=FLSuByP-JVU&list=PL-LIHCsmnfdBuSW12-hWLnE1czWJo_VtE",
      image: "../assets/agenda-jogos/StarWarsJediFallenOrder.jpeg",
      alt: "Jogo Star Wars Jedi Fallen Order",
    },
    {
      name: "Ghostwire - Tokyo",
      url: "https://www.youtube.com/watch?v=ShtnBBfTCuI&list=PL-LIHCsmnfdBW_j5HnWnGl1jqt_-dw2Pk",
      image: "../assets/agenda-jogos/GhostwireTokyo.jfif",
      alt: "Jogo Ghostwire - Tokyo",
    },
    {
      name: "Wolfenstein 2 - The New Colossus",
      url: "https://www.youtube.com/watch?v=_FbG5m72pl0&list=PL-LIHCsmnfdBuTo2-jR3QqcKsc22VK-To",
      image: "../assets/agenda-jogos/Wolfenstein2TheNewColossus.jpeg",
      alt: "Jogo Wolfenstein 2 - The New Colossus",
    },
    {
      name: "Kena Bridge Of Spirits",
      url: "https://www.youtube.com/watch?v=MpL8P05T3DQ&list=PL-LIHCsmnfdBlemAf0S1xEIHDOzbL84_9",
      image: "../assets/agenda-jogos/KenaBridgeOfSpirits.avif",
      alt: "Jogo Kena Bridge Of Spirits",
    },
    {
      name: "Final Fantasy XV",
      url: "https://www.youtube.com/watch?v=wFpnu-wlQGo&list=PL-LIHCsmnfdBpNAHO-vSTWcGn9IOfO5Ei",
      image: "../assets/agenda-jogos/FinalFantasyXV.jpg",
      alt: "Jogo Final Fantasy XV",
    },
    {
      name: "No Man's Sky",
      url: "https://www.youtube.com/watch?v=9fltkM4RZD0&list=PL-LIHCsmnfdCdUpdQkdrRioGubXULzhEd",
      image: "../assets/agenda-jogos/NoMansSky.avif",
      alt: "Jogo No Man's Sky",
    },
    {
      name: "Black Myth: Wukong",
      url: "https://www.youtube.com/watch?v=y8uMlNhTFPA&list=PL-LIHCsmnfdAdcF3Hlw7lHx-kjvXfeyTN",
      image: "../assets/agenda-jogos/BlackMythWukong.jpg",
      alt: "Jogo Black Myth: Wukong",
    },
    {
      name: "Quantum Break",
      url: "https://www.youtube.com/watch?v=fqQ6XiSOMKU&list=PL-LIHCsmnfdAQhqOZVcXT8k89uyp8a8md",
      image: "../assets/agenda-jogos/QuantumBreak.jfif",
      alt: "Jogo Quantum Break",
    },
    {
      name: "S.T.A.L.K.E.R 2",
      url: "https://www.youtube.com/watch?v=_eNoOXnR51U&list=PL-LIHCsmnfdDcKVN-VqAQsKQmOEeV9E9k",
      image: "../assets/agenda-jogos/STALKER2.jpg",
      alt: "Jogo S.T.A.L.K.E.R 2",
    },
    {
      name: "Enigma do Medo",
      url: "https://www.youtube.com/watch?v=qCDZiTK2b90&list=PL-LIHCsmnfdDxo0AkfMfn092GtRc7Ze8e",
      image: "../assets/agenda-jogos/EnigmaDoMedo.jpeg",
      alt: "Jogo Enigma do Medo",
    },
  ],
  Zerados: [
    {
      name: "Call Of Duty MW Remastered",
      url: "https://www.youtube.com/watch?v=sxovgAY8dxk&list=PL-LIHCsmnfdDJ7auiprqmbVyXH3nzhlKd",
      image: "../assets/agenda-jogos/call-of-duty-remastered-neomeca.jpeg",
      alt: "Jogo de Guerra Call Of Duty MW Remastered",
    },
    {
      name: "Battlefield 4",
      url: "https://www.youtube.com/watch?v=9NkiE58NBq4&list=PL-LIHCsmnfdAIq6egaAxQY-iI96SqNpDF",
      image: "../assets/agenda-jogos/Battlefield-4.avif",
      alt: "Jogo de Guerra Battlefild 4",
    },
    {
      name: "Beyond Two Souls",
      url: "https://www.youtube.com/watch?v=qdbFujtfDYQ&list=PL-LIHCsmnfdCjrlAu8hSsAWWd_WfTo-KR",
      image: "../assets/agenda-jogos/Beyond-Two-Souls.jpeg",
      alt: "Jogo Beyond Two Souls",
    },
    {
      name: "Call Of Duty Modern Warfare",
      url: "https://www.youtube.com/watch?v=6jVuEJxvT-Q&list=PL-LIHCsmnfdC2qjR6JzrdD7B7X9sYP31c",
      image: "../assets/agenda-jogos/CallOfDutyModernWarfare.jpeg",
      alt: "Jogo Call Of Duty Modern Warfare",
    },
    {
      name: "Call Of Duty MW 2 Remastered",
      url: "https://www.youtube.com/watch?v=AN2ODCjbLM8&list=PL-LIHCsmnfdDsiRS8gqqtmHXk7F-iAYIi",
      image:
        "../assets/agenda-jogos/CallOfDuty-Modern-Warfare-2-Remastered.avif",
      alt: "Jogo Call Of Duty MW 2 Remastered",
    },
    {
      name: "Call Of Duty Modern Warfare 3",
      url: "https://www.youtube.com/watch?v=IthbLlnCKU4&list=PL-LIHCsmnfdBeDfTk2ccDxs0ExdMjGEa4",
      image: "../assets/agenda-jogos/CallOfDutyModernWarfare3.avif",
      alt: "Jogo Call Of Duty Modern Warfare 3",
    },
    {
      name: "Call Of Duty Vanguard",
      url: "https://www.youtube.com/watch?v=3DBhUSjghFA&list=PL-LIHCsmnfdC9lCuLEiD4AYzeRKvaZ2_C",
      image: "../assets/agenda-jogos/CallOfDutyVanguard.avif",
      alt: "Jogo Call Of Duty Vanguard",
    },
    {
      name: "Call Of Duty WWII",
      url: "https://www.youtube.com/watch?v=bOweqcgsqmo&list=PL-LIHCsmnfdChVPNypTDaHebJW9Iq4We8",
      image: "../assets/agenda-jogos/CallOfDutyWWII.jpeg",
      alt: "Jogo Call Of Duty WWII",
    },
    {
      name: "Call Of Duty Black Ops 6",
      url: "https://www.youtube.com/watch?v=O2rhDEL4qjQ&list=PL-LIHCsmnfdA73O5-4znnX3_ciPwS5Dd4",
      image: "../assets/agenda-jogos/CODBLACKOPS6.jfif",
      alt: "Jogo Call Of Duty Black Ops 6",
    },
    {
      name: "Cyberpunk 2077",
      url: "https://www.youtube.com/watch?v=k32mCpJ4up8&list=PL-LIHCsmnfdDtMk5uRjY4cG_0WnJKztIX",
      image: "../assets/agenda-jogos/Cyberpunk2077.avif",
      alt: "Jogo Cyberpunk 2077",
    },
    {
      name: "Detroit Become Human",
      url: "https://www.youtube.com/watch?v=XxYdkDhroyU&list=PL-LIHCsmnfdBCtdY7ZEXu0GG-CdWpVvEP",
      image: "../assets/agenda-jogos/DetroitBecomeHuman.avif",
      alt: "Jogo Detroit Become Human",
    },
    {
      name: "Erica",
      url: "https://www.youtube.com/watch?v=mbAhVS6q8dQ&list=PL-LIHCsmnfdC-_9U_4STRqlV_rTL9DQe1",
      image: "../assets/agenda-jogos/Erica.avif",
      alt: "Jogo Erica",
    },
    {
      name: "Firewatch",
      url: "https://www.youtube.com/watch?v=VuVvJ5q3lVs&list=PL-LIHCsmnfdDDpSEG94n39fl9qOFEFw3t",
      image: "../assets/agenda-jogos/Firewatch.avif",
      alt: "Jogo Firewatch",
    },
    {
      name: "GTA IV",
      url: "https://www.youtube.com/watch?v=BXvtp_kKydg&list=PL-LIHCsmnfdAAWMCGyq8IOz8VGKzkg61x",
      image: "../assets/agenda-jogos/GTAIV.jfif",
      alt: "Jogo GTA IV",
    },
    {
      name: "GTA V",
      url: "https://www.youtube.com/watch?v=qgJWEko7mog&list=PL-LIHCsmnfdCvZ5OmFfOMLWkjUMBJhnit",
      image: "../assets/agenda-jogos/GTAV.avif",
      alt: "GTA V",
    },
    {
      name: "Heavy Rain",
      url: "https://www.youtube.com/watch?v=CQGpYjQiDrI&list=PL-LIHCsmnfdC2dUkz9rJvnhcEc8Hggv5-",
      image: "../assets/agenda-jogos/HeavyRain.jpeg",
      alt: "Heavy Rain",
    },
    {
      name: "Indiana Jones e o Grande Circulo",
      url: "https://www.youtube.com/watch?v=oLLMJTO008s&list=PL-LIHCsmnfdCOcqZK1-w507HgS1wTBC2D",
      image: "../assets/agenda-jogos/IndianaJoneseoGrandeCirculo.avif",
      alt: "Indiana Jones e o Grande Circulo",
    },
    {
      name: "L.A. Noire",
      url: "https://www.youtube.com/watch?v=zE8DhnD1LPM&list=PL-LIHCsmnfdCbFswpNjfb2uq9nBIR08W0",
      image: "../assets/agenda-jogos/LANoire.avif",
      alt: "Jogo L.A. Noire",
    },
    {
      name: "Mafia Definitive Edition",
      url: "https://www.youtube.com/watch?v=NoT8PxO6n3c&list=PL-LIHCsmnfdAuj-ZLTXwCE-pPLRI-6WGX",
      image: "../assets/agenda-jogos/Mafia1.jfif",
      alt: "Jogo Mafia Definitive Edition",
    },
    {
      name: "Max Payne 3",
      url: "https://www.youtube.com/watch?v=DSdDI9abPno&list=PL-LIHCsmnfdA3tpifErZcc7d14KoBrdAK",
      image: "../assets/agenda-jogos/MaxPayne3.jpg",
      alt: "Jogo Max Payne 3",
    },
    {
      name: "Nobody Wants To Die",
      url: "https://www.youtube.com/watch?v=EZO1vD1rndw&list=PL-LIHCsmnfdAfgcIBOLm37SPFKDDw2yEe",
      image: "../assets/agenda-jogos/NobodyWantsToDie.avif",
      alt: "Jogo Nobody Wants To Die",
    },
    {
      name: "Red Dead Redemption 2",
      url: "https://www.youtube.com/watch?v=y16j9cgpB4g&list=PL-LIHCsmnfdCLqCWK6FbtKyD7jCV80WSa",
      image: "../assets/agenda-jogos/RedDeadRedemption2.avif",
      alt: "Jogo Red Dead Redemption 2",
    },
    {
      name: "Shadow Of The Colossus",
      url: "https://www.youtube.com/watch?v=AUXR2Y-h1Ik&list=PL-LIHCsmnfdCLIWeVootVTiury4qST3Hv",
      image: "../assets/agenda-jogos/ShadowOfTheColossus.avif",
      alt: "Jogo Shadow Of The Colossus",
    },
    {
      name: "Tchia",
      url: "https://www.youtube.com/watch?v=D3wNhUOVpLE&list=PL-LIHCsmnfdC1meeW3ciEl3nIbN0PwDTj",
      image: "../assets/agenda-jogos/Tchia.avif",
      alt: "Jogo Tchia",
    },
    {
      name: "The Order 1886",
      url: "https://www.youtube.com/watch?v=eST-ZbcwYEk&list=PL-LIHCsmnfdDVvma3GOYz78ZDNPSzT6_M",
      image: "../assets/agenda-jogos/TheOrder1886.avif",
      alt: "The Order 1886",
    },
  ],
});
