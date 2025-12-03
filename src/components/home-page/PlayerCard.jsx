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

    // Pick the larger value to display; tie -> likes wins (green)
    const displayValue = Math.max(currentLikes, currentDislikes);
    const isLikeHigher = currentLikes >= currentDislikes;
    const badgeClass = isLikeHigher ? styles.like : styles.dislike;

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
                <div className={`${styles.ratingBadge} ${badgeClass}`}>
                    <span className={styles.fire}>🔥</span>
                    <span className={styles.ratingNumber}>{displayValue}</span>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
