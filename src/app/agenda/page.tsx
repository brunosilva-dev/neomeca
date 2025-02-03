"use client";

import { games } from "@/components/ui/lib/definitionsAgendaJogos";
import styles from "./agenda.module.css";
import Link from "next/link";

export default function Agenda() {
  return (
    <div>
      <div className={styles.appAgendaJogos}>
        <header className={styles.headerAgendaJogos}>
          <h1>Agenda de Jogos</h1>
          <p>
            Nossa lista de jogos que queremos comprar, em andamento e
            finalizado.
          </p>
        </header>
        <div className={styles.galleryContainerAgendaJogos}>
          {Object.entries(games).map(([year, gameList]) => (
            <div key={year} className={styles.columnAgendaJogos}>
              <h2>{year}</h2>
              <div className={styles.galleryAgendaJogos}>
                {gameList.map((game) => (
                  <div key={game.id} className={styles.photoAgendaJogos}>
                    <Link href={game.url} target="_blank">
                      <img src={game.image} alt={game.name} />
                    </Link>
                    <p>{game.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
