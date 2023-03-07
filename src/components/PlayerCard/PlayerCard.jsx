import styles from './PlayerCard.module.css'

function PlayerCard({ playerData }) {
    return <button className={styles.container}>
        <h4 className={styles.playerName}>{playerData.name}</h4>
        <img className={styles.playerImage} src={playerData.image} alt='player-img' ali />
        <p className ={styles.playerDescription}>{playerData.description}</p>
    </button>
}

export default PlayerCard;