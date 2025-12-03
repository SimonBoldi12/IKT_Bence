import styles from './HomePage.module.css';
import PlayerCard from './PlayerCard.jsx';
import futbinLogo from '../../assets/futbin.png';
import futbinLogo2 from '../../assets/futbin (2).png';
import reveszImg from '../../assets/Révész.png';
import kristofImg from '../../assets/Kristóf.png';
import fraterImg from '../../assets/Fráter.png';
import medveImg from '../../assets/Medve.png';
import hensiImg from '../../assets/Hensi.png';
import baloghImg from '../../assets/Balogh.png';
import szaboImg from '../../assets/Szabó (2).png';
import rehoImg from '../../assets/Rehó.png';
import rodriImg from '../../assets/rodri.png';
import hanImg from '../../assets/han.png';
import bellImg from '../../assets/bell.png';
import vanImg from '../../assets/van.png';
import haalImg from '../../assets/haal.png';
import hakimiImg from '../../assets/hakimi.png';

function HomePage({ onPlayerSelect }) {
    const players = [
        { src: reveszImg, alt: 'Révész', key: 'revesz' },
        { src: kristofImg, alt: 'Kristóf', key: 'kristof' },
        { src: fraterImg, alt: 'Fráter', key: 'frater' },
        { src: medveImg, alt: 'Medve', key: 'medve' },
        { src: hensiImg, alt: 'Hensi', key: 'hensi' },
        { src: baloghImg, alt: 'Balogh', key: 'balogh' },
        { src: szaboImg, alt: 'Szabó', key: 'szabo' },
        { src: rehoImg, alt: 'Rehó', key: 'reho' },
        { src: rodriImg, alt: 'Rodri', key: 'rodri' },
        { src: hanImg, alt: 'Han', key: 'han' },
        { src: bellImg, alt: 'Bell', key: 'bell' },
        { src: vanImg, alt: 'Van', key: 'van' },
        { src: haalImg, alt: 'Haal', key: 'haal' },
        { src: hakimiImg, alt: 'Hakimi', key: 'hakimi' },
    ];

    return (
        <div className={styles.body}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src={futbinLogo} alt="Futbin Logo" />
                </div>
                <div className={styles.menu}>
                    <a href="">Players</a>
                    <a href="">Squad builder</a>
                    <a href="">SBCs</a>
                    <a href="">Market</a>
                    <a href="">Evolutions</a>
                </div>
                <button className={styles.btn1}>Log in</button>
            </nav>
            <div className={styles.container}>
                <div className={styles.keresosav}>
                    <div className={styles.kep}>
                        <img src={futbinLogo2} alt="Futbin Logo 2" />
                    </div>
                    <input id="kereses" type="text" placeholder="Search for EA FC26 player..." />
                </div>
                <div className={styles.keresesek}>
                    <p>Popular</p>
                    <p>Latest promo</p>
                    <p>New players</p>
                    <p>Latest SBCs</p>
                    <p>Evolutions</p>
                    <p>Cheapest by rating</p>
                </div>
                <div className={styles.kartyak}>
                    {players.map((player, index) => (
                        <PlayerCard
                            key={index}
                            player={player}
                            onPlayerSelect={onPlayerSelect}
                        />
                    ))}
                </div>
                <div className={styles.popular}>
                    <a href="https://www.futbin.com/popular" target="_blank" rel="noopener noreferrer">
                        All popular players
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;