import React from "react";
import styles from "../../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Faça uma caminhadinha de pelomenos 50 minutos cada.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <p>
            Inicie um ciclo
            <br />
            para receber desafios a<br />
            serem completados
          </p>

          <div className={styles.wrapperExplanation}>
            <img src="icons/level-up.svg" alt="Level Up" />
            <p>
              Complete-os e ganhe
              <br />
              experiência e avance de leve.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
