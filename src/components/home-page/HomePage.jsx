import styles from './HomePage.module.css';

function HomePage() {
    const players = [
        { src: './assets/Révész.png', link: './players/revesz.html' },
        { src: './assets/Kristóf.png' },
        { src: './assets/Fráter.png' },
        { src: './assets/Medve.png' },
        { src: './assets/Hensi.png' },
        { src: './assets/Balogh.png' },
        { src: './assets/Szabó (2).png' },
        { src: './assets/Rehó.png' },
        { src: './assets/rodri.png' },
        { src: './assets/han.png' },
        { src: './assets/bell.png' },
        { src: './assets/van.png' },
        { src: './assets/haal.png' },
        { src: './assets/hakimi.png' },
    ];

    return (
        <div className={styles.body}>
            <nav>
                <div className={styles.logo}>
                    <img src="./assets/futbin.png" alt="" />
                </div>
                <div className={styles.menu}>
                    <a href="">Players</a>
                    <a href="">Squad builder</a>
                    <a href="">SBCs</a>
                    <a href="">Market</a>
                    <a href="">Evolutions</a>
                </div>
                <button id="btn1">Log in</button>
            </nav>
            <div className={styles.container}>
                <div className={styles.keresosav}>
                    <div className={styles.kep}>
                        <img src="./assets/futbin (2).png" alt="" />
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
                    <a href="./players/revesz.html">
                    <img src="./assets/Révész.png" alt="" /></a>
                    <img src="./assets/Kristóf.png" alt="" />
                    <img src="./assets/Fráter.png" alt="" />
                    <img src="./assets/Medve.png" alt="" />
                    <img src="./assets/Hensi.png" alt="" />
                    <img src="./assets/Balogh.png" alt="" />
                    <img src="./assets/Szabó (2).png" alt="" />
                    <img src="./assets/Rehó.png" alt="" />
                    <img src="./assets/rodri.png" alt="" />
                    <img src="./assets/han.png" alt="" />
                    <img src="./assets/bell.png" alt="" />
                    <img src="./assets/van.png" alt="" />
                    <img src="./assets/haal.png" alt="" />
                    <img src="./assets/hakimi.png" alt="" />
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