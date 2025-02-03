"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./votacao.module.css";
import { photos, Vote } from "@/components/ui/lib/definitionsVotacao";

export default function Votes() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [votes, setVotes] = useState<number[]>(new Array(10).fill(0));
  const [hasVoted, setHasVoted] = useState(false); // Controle do estado de voto

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await fetch("/api/vote");
        const result: Vote[] = await response.json(); // Tipando como array de Vote

        if (response.ok) {
          const updatedVotes = new Array(10).fill(0);
          result.forEach((vote) => {
            const index = photos.findIndex(
              (photo) => photo.id === vote.photo_id
            );
            if (index !== -1) {
              updatedVotes[index] = Number(vote.votes);
            }
          });
          setVotes(updatedVotes);
        } else {
          throw new Error("Erro ao carregar os votos.");
        }
      } catch (error) {
        console.error("Erro ao carregar os votos: ", error);
      }
    };

    fetchVotes();
  }, []); // A dependência continua sendo vazia

  const handleVote = async () => {
    if (selectedPhoto === null) {
      alert("Por favor, selecione uma foto antes de votar!");
      return;
    }

    setIsVoting(true);

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          photoId: photos[selectedPhoto - 1].id,
          photoAlt: photos[selectedPhoto - 1].alt,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erro ao registrar o voto.");
      }

      if (result.message.includes("já votou")) {
        alert(result.message);
      } else {
        setHasVoted(true);
        const newVotes = [...votes];
        newVotes[selectedPhoto - 1] += 1;
        setVotes(newVotes);
        alert(`Você votou no jogo - ${photos[selectedPhoto - 1].alt}`);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao registrar o voto. Tente novamente.");
    } finally {
      setIsVoting(false);
    }
  };

  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

  return (
    <div>
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>Qual jogo gostaria de ver em live?</h1>
          <p>
            {hasVoted
              ? "Você já votou! Não é mais possível votar novamente."
              : "Você tem 1 voto disponível"}
          </p>
        </div>
        <main className={styles.gallery}>
          {photos.map((photo, index) => {
            const votePercentage =
              totalVotes > 0 ? (votes[index] / totalVotes) * 100 : 0;
            return (
              <div
                key={photo.id}
                className={`${styles.photo} ${
                  selectedPhoto === photo.id ? styles.selected : ""
                }`}
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={150}
                  height={150}
                  className="photo"
                />
                <div className={styles.photoTextContainer}>
                  <p>{photo.alt}</p>
                </div>
                <p className={styles.percentual}>
                  {Math.round(votePercentage)}% - {votes[index]} votos
                </p>
                <div className={styles.voteBarContainer}>
                  <div
                    className={styles.voteBar}
                    style={{ width: `${votePercentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </main>
        <div className={styles.footer}>
          <button
            onClick={handleVote}
            className={styles.voteButton}
            disabled={isVoting || hasVoted}
          >
            {isVoting ? "Enviando..." : "Vote"}
          </button>
        </div>
      </div>
    </div>
  );
}
