import { useState, useEffect } from 'react';

export function usePlayerRating(playerKey) {
    const [rating, setRating] = useState(null);
    const [liked, setLiked] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    
    useEffect(() => {
        const storageKey = 'playerRatings';
        const stored = localStorage.getItem(storageKey);
        const ratings = stored ? JSON.parse(stored) : {};

        if (ratings[playerKey]) {
            setRating(ratings[playerKey].rating || 0);
            setLiked(ratings[playerKey].liked);
        } else {
            setRating(0);
            setLiked(null);
        }
        setIsLoaded(true);
    }, [playerKey]);

    
    const handleLike = () => {
        const storageKey = 'playerRatings';
        const stored = localStorage.getItem(storageKey);
        const ratings = stored ? JSON.parse(stored) : {};

       
        if (liked === true) {
            ratings[playerKey] = { rating: 0, liked: null };
            setLiked(null);
            setRating(0);
        } else {
            
            ratings[playerKey] = { rating: 1, liked: true };
            setLiked(true);
            setRating(1);
        }

        localStorage.setItem(storageKey, JSON.stringify(ratings));
    };

    const handleDislike = () => {
        const storageKey = 'playerRatings';
        const stored = localStorage.getItem(storageKey);
        const ratings = stored ? JSON.parse(stored) : {};

        if (liked === false) {
            ratings[playerKey] = { rating: 0, liked: null };
            setLiked(null);
            setRating(0);
        } else {

            ratings[playerKey] = { rating: 1, liked: false };
            setLiked(false);
            setRating(1);
        }

        localStorage.setItem(storageKey, JSON.stringify(ratings));
    };

    return {
        rating,
        liked,
        isLoaded,
        handleLike,
        handleDislike,
    };
}
