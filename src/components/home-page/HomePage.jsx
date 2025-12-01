import styles from './HomePage.module.css';
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

function HomePage() {
    const players = [
        { src: reveszImg, alt: 'Révész', link: '/players' },
        { src: kristofImg, alt: 'Kristóf' },
        { src: fraterImg, alt: 'Fráter' },
        { src: medveImg, alt: 'Medve' },
        { src: hensiImg, alt: 'Hensi' },
        { src: baloghImg, alt: 'Balogh' },
        { src: szaboImg, alt: 'Szabó' },
        { src: rehoImg, alt: 'Rehó' },
        { src: rodriImg, alt: 'Rodri' },
        { src: hanImg, alt: 'Han' },
        { src: bellImg, alt: 'Bell' },
        { src: vanImg, alt: 'Van' },
        { src: haalImg, alt: 'Haal' },
        { src: hakimiImg, alt: 'Hakimi' },
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
                        player.link ? (
                            <a key={index} href={player.link}>
                                <img src={player.src} alt={player.alt} />
                            </a>
                        ) : (
                            <img key={index} src={player.src} alt={player.alt} />
                        )
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