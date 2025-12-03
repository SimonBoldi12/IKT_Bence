import styles from './Players.module.css';
import futbinLogo from '../../assets/futbin.png';
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
import hungaryImg from '../../assets/hungary.png';
import premImg from '../../assets/prem.png';
import mancityImg from '../../assets/mancity.png';
import likeSvg from '../../assets/like-svgrepo-com.svg';
import dislikeSvg from '../../assets/dislike-svgrepo-com.svg';
import commentSvg from '../../assets/comment-svgrepo-com.svg';
import windowsImg from '../../assets/windows.png';
import coinImg from '../../assets/coin.png';
import starSvg from '../../assets/star-svgrepo-com.svg';
import incisiveImg from '../../assets/incisive.png';
import tikitakaImg from '../../assets/tikitaka.png';
import pressprovenImg from '../../assets/pressproven.png';
import powershotImg from '../../assets/powershot.png';
import personSvg from '../../assets/person-svgrepo-com.svg';
import personActiveSvg from '../../assets/person-svgrepo-com (1).svg';
import playersData from '../../data/playersData.json';


const imageMap = {
    revesz: reveszImg,
    kristof: kristofImg,
    frater: fraterImg,
    medve: medveImg,
    hensi: hensiImg,
    balogh: baloghImg,
    szabo: szaboImg,
    reho: rehoImg,
    rodri: rodriImg,
    han: hanImg,
    bell: bellImg,
    van: vanImg,
    haal: haalImg,
    hakimi: hakimiImg,
};

function Players({ playerKey = 'revesz' }) {
    const {
        name,
        promo,
        title,
        country,
        league,
        team,
        image,
        trend,
        trendValue,
        price,
        likes,
        dislikes,
        comments,
        skills,
        weakFoot,
        height,
        heightImperial,
        foot,
        age,
        position,
        role,
        stats,
    } = playersData[playerKey] || playersData.revesz;

    return (
        <div className={styles.body}>
            <nav className={styles.nav}>
                <div className={styles.logo2}>
                    <img src={futbinLogo} alt="Futbin Logo" />
                    <input type="text" className={styles.kereses2} placeholder="Search for EA FC26 player..." />
                </div>
                <div className={styles.menu}>
                    <a href="/">Players</a>
                    <a href="">Squad builder</a>
                    <a href="">SBCs</a>
                    <a href="">Market</a>
                    <a href="">Evolutions</a>
                </div>
                <button className={styles.btn1}>Log in</button>
            </nav>
            <div className={styles.container}>
                <div className={styles.playerName}>
                    <h1>{name} - {promo} {title}</h1>
                    <p>EA FC 26 - {country} - {team} - {league}</p>
                </div>
                <div className={styles.adatsor}>
                    <div className={styles.adatok}>
                        <p>Summary</p>
                        <p>Stats</p>
                        <p>Market</p>
                        <p>Evolution</p>
                    </div>
                    <div className={styles.ertekeles}>
                        <div className={styles.sor}>
                            <img src={likeSvg} alt="Like" />
                            <p>{likes}</p>
                        </div>
                        <div className={styles.sor}>
                            <img src={dislikeSvg} alt="Dislike" />
                            <p>{dislikes}</p>
                        </div>
                        <div className={styles.sor}>
                            <img src={commentSvg} alt="Comment" />
                            <p>Comments ({comments})</p>
                        </div>
                    </div>
                </div>
                <div className={styles.kartyakep}>
                    <img src={imageMap[image]} alt={name} />
                    <div className={styles.price}>
                        <img src={windowsImg} alt="Windows" className={styles.windows} />
                        <p>Trend: <span className={styles.zold}>{trend} ({trendValue})</span></p>
                        <div className={styles.ar}>
                            <p><span className={styles.arNagy}>{price}</span></p>
                            <img src={coinImg} alt="Coin" />
                        </div>
                        <div className={styles.ar}>
                            <p>{price}</p>
                            <img src={coinImg} alt="Coin" />
                        </div>
                        <div className={styles.ar}>
                            <p>{price}</p>
                            <img src={coinImg} alt="Coin" />
                        </div>
                        <div className={styles.frissit}>
                            <p>PRICE UPDATED: 6 MINS AGO</p>
                            <hr />
                            <span className={styles.kicsi}>
                                <p>PRICE RANGE:</p>
                                <p>350,000 - {price}</p>
                            </span>
                        </div>
                    </div>
                    <div className={styles.statisztika}>
                        <div className={styles.csapat}>
                            <div className={styles.stat}>
                                <img src={hungaryImg} alt={country} />
                                <p>{country}</p>
                            </div>
                            <div className={styles.stat}>
                                <img src={premImg} alt={league} />
                                <p>{league}</p>
                            </div>
                            <div className={styles.stat}>
                                <img src={mancityImg} alt={team} />
                                <p>{team}</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.skills}>
                            <div className={styles.stat}>
                                <p>SKILLS <span className={styles.feher}>{skills}</span></p>
                                <img src={starSvg} alt="Star" />
                            </div>
                            <div className={styles.stat}>
                                <p>WEAK FOOT <span className={styles.feher}>{weakFoot}</span></p>
                                <img src={starSvg} alt="Star" />
                            </div>
                            <div className={styles.stat}>
                                <p>HEIGHT</p>
                                <p><span className={styles.feher}>{height} | {heightImperial}</span></p>
                            </div>
                            <div className={styles.stat}>
                                <p>FOOT</p>
                                <p><span className={styles.feher}>{foot}</span></p>
                            </div>
                            <div className={styles.stat}>
                                <p>AGE</p>
                                <p><span className={styles.feher}>{age}</span></p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.playstyles}>
                            <div className={styles.stat}>
                                <img src={incisiveImg} alt="Incisive Pass" />
                                <p>Incisive Pass</p>
                            </div>
                            <div className={styles.stat}>
                                <img src={tikitakaImg} alt="Tiki Taka" />
                                <p>Tiki Taka</p>
                            </div>
                            <div className={styles.stat}>
                                <img src={pressprovenImg} alt="Press Proven" />
                                <p>Press Proven</p>
                            </div>
                            <div className={styles.stat}>
                                <img src={powershotImg} alt="Power Shot" />
                                <p>Power Shot</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.roles}>
                            <p>{position} <span className={styles.vilZold}>{role}</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.specialAdatok}>
                    <div className={styles.ratings}>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Pace</span>
                                <span className={styles.number}>{stats.pace}</span>
                            </div>
                            <progress value={stats.pace} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span className={styles.szurke}>Acceleration</span>
                                <span className={styles.number}>{stats.paceAcceleration}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span className={styles.szurke}>Sprint Speed</span>
                                <span>{stats.paceSprint}</span>
                            </div>
                        </div>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Shooting</span>
                                <span className={styles.number}>{stats.shooting}</span>
                            </div>
                            <progress value={stats.shooting} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span className={styles.szurke}>Att. Position</span>
                                <span className={styles.szurke}>{stats.shootingPosition}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Finishing</span>
                                <span>{stats.finishing}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Shot Power</span>
                                <span>{stats.shotPower}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Long Shots</span>
                                <span>{stats.longShots}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Volleys</span>
                                <span>{stats.volleys}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Penalties</span>
                                <span>{stats.penalties}</span>
                            </div>
                        </div>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Passing</span>
                                <span className={styles.number}>{stats.passing}</span>
                            </div>
                            <progress value={stats.passing} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span>Vision</span>
                                <span>{stats.vision}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Crossing</span>
                                <span>{stats.crossing}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>FK Acc.</span>
                                <span>{stats.fkAcc}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Short Pass</span>
                                <span>{stats.shortPass}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Long Pass</span>
                                <span>{stats.longPass}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Curve</span>
                                <span>{stats.curve}</span>
                            </div>
                        </div>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Dribbling</span>
                                <span className={styles.number}>{stats.dribbling}</span>
                            </div>
                            <progress value={stats.dribbling} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span>Agility</span>
                                <span>{stats.agility}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Balance</span>
                                <span>{stats.balance}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Reactions</span>
                                <span>{stats.reactions}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Ball Control</span>
                                <span>{stats.ballControl}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Dribbling</span>
                                <span>{stats.dribbling2}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Composure</span>
                                <span>{stats.composure}</span>
                            </div>
                        </div>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Defending</span>
                                <span className={styles.piros}>{stats.defending}</span>
                            </div>
                            <progress className={styles.pirosProgress} value={stats.defending} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span>Interceptions</span>
                                <span className={styles.piros}>{stats.interceptions}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Heading Acc.</span>
                                <span className={styles.piros}>{stats.headingAcc}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Def. Aware</span>
                                <span className={styles.piros}>{stats.defAware}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Stand Tackle</span>
                                <span className={styles.piros}>{stats.standTackle}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Slide Tackle</span>
                                <span className={styles.piros}>{stats.slideTackle}</span>
                            </div>
                        </div>
                        <div className={styles.ratingcollumn}>
                            <div className={styles.ratecim}>
                                <span className={styles.cim}>Physical</span>
                                <span className={styles.number}>{stats.physical}</span>
                            </div>
                            <progress value={stats.physical} max="100"> 32% </progress>
                            <div className={styles.ratesor}>
                                <span>Jumping</span>
                                <span>{stats.jumping}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Stamina</span>
                                <span>{stats.stamina}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Strength</span>
                                <span>{stats.strength}</span>
                            </div>
                            <div className={styles.ratesor}>
                                <span>Aggression</span>
                                <span className={styles.piros}>{stats.aggression}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chem}>
                        <h1 className={styles.title}>AcceleRATE & Chemistry</h1>
                        <p className={styles.exp}>EXPLOSIVE</p>

                        <div className={styles.nationteam}>
                            <div className={styles.persons}>
                                <div className={styles.team}>
                                    <img src="../assets/mancity.png" alt=""/>
                                    <div className={styles.ketto}>
                                        <img src="../assets/person-svgrepo-com (1).svg" alt=""/>
                                        <img src="../assets/person-svgrepo-com.svg" alt=""/>
                                    </div>
                                    <div className={styles.jatekosNev}>
                                        <p>Révész</p>
                                        <p className={styles.feher}>CAM</p>
                                    </div>
                                    <div className={styles.kemia}>
                                        <div className={styles.felirat}>
                                            <p>Basic</p>
                                            <p>4/7</p>
                                        </div>
                                        <div className={styles.progressbar}>
                                            <div className={styles.progress}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p id="top" className={styles.top}>Top 3 community voted</p>

                        <div className={styles.top_harom}>
                            <div className={styles.topok}>
                                <div className={styles.sor_elso}>
                                    {/* svg */}
                                </div>
                                <progress id="file" value="72" max="100"></progress>
                                <p>59%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Players;
