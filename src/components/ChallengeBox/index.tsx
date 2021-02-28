import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "../../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button onClick={resetChallenge} type="button" className={styles.challengeFailedButton}>
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
