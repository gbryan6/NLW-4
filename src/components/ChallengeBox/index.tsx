import React from "react";
import styles from "../../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <p>
            Inicie um ciclo<br/> 
            para receber desafios a<br/> 
            serem completados
        </p>

        <div className={styles.wrapperExplanation}>
          <img src="icons/level-up.svg" alt="Level Up" />
          <p>Complete-os e ganhe<br />
            experiência e avance de leve.</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeBox;
