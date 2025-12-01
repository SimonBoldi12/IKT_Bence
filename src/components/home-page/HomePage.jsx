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
        <div>
            <nav>
                <div className="logo">
                    <img src="./assets/futbin.png" alt="" />
                </div>
                <div className="menu">
                    <a href="">Players</a>
                    <a href="">Squad builder</a>
                    <a href="">SBCs</a>
                    <a href="">Market</a>
                    <a href="">Evolutions</a>
                </div>
                <button id="btn1">Log in</button>
            </nav>
            <div className="container">
                <div className="keresosav">
                    <div className="kep">
                        <img src="./assets/futbin (2).png" alt="" />
                    </div>
                    <input id="kereses" type="text" placeholder="Search for EA FC26 player..." />
                </div>
                <div className="keresesek">
                    <p>Popular</p>
                    <p>Latest promo</p>
                    <p>New players</p>
                    <p>Latest SBCs</p>
                    <p>Evolutions</p>
                    <p>Cheapest by rating</p>
                </div>
                <div className="kartyak">
                    {players.map((player, index) => (
                        player.link ? (
                            <a key={index} href={player.link}>
                                <img src={player.src} alt="" />
                            </a>
                        ) : (
                            <img key={index} src={player.src} alt="" />
                        )
                    ))}
                </div>
                <div className="popular">
                    <a href="https://www.futbin.com/popular" target="_blank" rel="noopener noreferrer">
                        All popular players
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;