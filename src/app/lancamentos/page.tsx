"use client";

import { useState } from "react";
import styles from "./lancamento.module.css";
import { jogos } from "@/components/ui/lib/definitionsJogosLancamentos";

// Dados dos jogos (exemplo)

export default function GamesLaunch() {
  const [selectedMonth, setSelectedMonth] = useState("Janeiro"); // Mês inicial

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lançamento de Jogos 2025</h1>

      {/* Barra de Meses */}
      <div className={styles.monthsBar}>
        {Object.keys(jogos).map((month) => (
          <button
            className={styles.monthButton}
            key={month}
            onClick={() => setSelectedMonth(month)}
            data-active={selectedMonth === month}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Lista de Jogos */}
      <div className={styles.gamesContainer}>
        {jogos[selectedMonth].map((game, index) => (
          <div className={styles.gameCard} key={index}>
            <img
              src={game.imagem}
              alt={game.nome}
              className={styles.gameImage}
            />{" "}
            {/* Adicionando a imagem */}
            <h2 className={styles.gameTitle}>{game.nome}</h2>
            <p className={styles.gameInfo}>🎮 Plataforma: {game.plataforma}</p>
            <p className={styles.gameInfo}>📌 Categoria: {game.categoria}</p>
            <p className={styles.gameInfo}>
              📅 Lançamento: {game.dia} de {selectedMonth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
