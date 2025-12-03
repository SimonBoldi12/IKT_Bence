import { usePlayerRating } from '../../hooks/usePlayerRating.jsx';
import styles from './PlayerCard.module.css';
import playersData from '../../data/playersData.json';

function PlayerCard({ player, onPlayerSelect }) {
    const { rating, liked } = usePlayerRating(player.key);
    const playerData = playersData[player.key];
    const baseLikes = playerData?.likes || 0;
    const baseDislikes = playerData?.dislikes || 0;

    const currentLikes = liked === true ? baseLikes + rating : baseLikes;
    const currentDislikes = liked === false ? baseDislikes + rating : baseDislikes;

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardContainer}>
                <button
                    onClick={() => onPlayerSelect && onPlayerSelect(player.key)}
                    className={styles.cardButton}
                >
                    <img src={player.src} alt={player.alt} className={styles.cardImage} />
                </button>
            </div>
            <div className={styles.ratingContainer}>
                <div className={styles.ratingBadge}>
                    🔥 <span>{baseLikes + baseDislikes + rating}</span>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
