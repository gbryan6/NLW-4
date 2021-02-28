import styles from "../../styles/components/Profile.module.css"

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
        <img src="https://github.com/gbryan6.png" alt="Foto de Perfil"/>
        <div>
            <strong>Gabriel Bryan</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
            Level 1
            </p>
        </div>
    </div>
  );
}

export default Profile;