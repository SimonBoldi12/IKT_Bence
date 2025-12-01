/**
 * TÖBB JÁTÉKOS MEGJELENÍTÉSÉNEK PÉLDÁI
 * 
 * Ez a fájl bemutatja a különböző módokat a Players komponens
 * több játékossal történő meghívására.
 */

// ============================================
// 1. KÖNNYŰ MÓDSZER: useState-vel váltogatás
// ============================================
import { useState } from 'react';
import Players from './components/players/Players.jsx';

function ExampleApp1() {
    const [selectedPlayer, setSelectedPlayer] = useState('revesz');

    return (
        <div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <button onClick={() => setSelectedPlayer('revesz')}>Révész</button>
                <button onClick={() => setSelectedPlayer('kristof')}>Kristóf</button>
                <button onClick={() => setSelectedPlayer('frater')}>Fráter</button>
            </div>
            <Players playerKey={selectedPlayer} />
        </div>
    );
}


// ============================================
// 2. HALADÓ MÓDSZER: Összes játékos megjelenítése
// ============================================
import playersData from './data/playersData.json';

function ExampleApp2() {
    const playerKeys = Object.keys(playersData);

    return (
        <div>
            {playerKeys.map((playerKey) => (
                <div key={playerKey} style={{ marginBottom: '100px', borderBottom: '2px solid white' }}>
                    <Players playerKey={playerKey} />
                </div>
            ))}
        </div>
    );
}


// ============================================
// 3. GOMBOKKAL VÁLASZTHATÓ JÁTÉKOSOK
// ============================================
function ExampleApp3() {
    const [selectedPlayer, setSelectedPlayer] = useState('revesz');
    const playerKeys = Object.keys(playersData);

    return (
        <div>
            <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#222', position: 'sticky', top: 0 }}>
                <h2 style={{ color: 'white', margin: '0 0 15px 0' }}>Válassz egy játékost:</h2>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {playerKeys.map((playerKey) => (
                        <button
                            key={playerKey}
                            onClick={() => setSelectedPlayer(playerKey)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: selectedPlayer === playerKey ? 'rgb(77, 220, 125)' : '#444',
                                color: selectedPlayer === playerKey ? 'black' : 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '12pt',
                            }}
                        >
                            {playerKey.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
            <Players playerKey={selectedPlayer} />
        </div>
    );
}


// ============================================
// 4. RÁCS MEGJELENÍTÉS (Grid layout)
// ============================================
function ExampleApp4() {
    const playerKeys = Object.keys(playersData).slice(0, 4); // Első 4 játékos

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
            {playerKeys.map((playerKey) => (
                <div key={playerKey} style={{ border: '2px solid rgb(77, 220, 125)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Players playerKey={playerKey} />
                </div>
            ))}
        </div>
    );
}


// ============================================
// 5. KERESÉSI FUNKCIÓ
// ============================================
import { useMemo } from 'react';

function ExampleApp5() {
    const [searchTerm, setSearchTerm] = useState('');
    const playerKeys = Object.keys(playersData);

    const filteredPlayers = useMemo(() => {
        return playerKeys.filter((playerKey) => {
            const player = playersData[playerKey];
            return (
                player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                player.country.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [searchTerm, playerKeys]);

    return (
        <div>
            <div style={{ padding: '20px', backgroundColor: '#1a1a1a' }}>
                <input
                    type="text"
                    placeholder="Keress játékos, csapat vagy ország szerint..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '14pt',
                        borderRadius: '5px',
                        border: '2px solid rgb(77, 220, 125)',
                        backgroundColor: '#333',
                        color: 'white',
                    }}
                />
                <p style={{ color: 'white', marginTop: '10px' }}>Találatok: {filteredPlayers.length}</p>
            </div>
            {filteredPlayers.map((playerKey) => (
                <div key={playerKey} style={{ marginBottom: '50px', borderBottom: '2px solid rgb(77, 220, 125)' }}>
                    <Players playerKey={playerKey} />
                </div>
            ))}
        </div>
    );
}


// ============================================
// 6. TAB NAVIGÁCIÓ
// ============================================
function ExampleApp6() {
    const [activeTab, setActiveTab] = useState(0);
    const playerKeys = Object.keys(playersData);

    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: '#000', borderBottom: '3px solid rgb(77, 220, 125)' }}>
                {playerKeys.map((playerKey, index) => (
                    <button
                        key={playerKey}
                        onClick={() => setActiveTab(index)}
                        style={{
                            flex: 1,
                            padding: '15px',
                            backgroundColor: activeTab === index ? 'rgb(77, 220, 125)' : '#222',
                            color: activeTab === index ? 'black' : 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '12pt',
                        }}
                    >
                        {playerKey.toUpperCase()}
                    </button>
                ))}
            </div>
            <Players playerKey={playerKeys[activeTab]} />
        </div>
    );
}


// ============================================
// HOGYAN HASZNÁLD EZEKET?
// ============================================
/*
Az App.jsx-ben:

import ExampleApp1 from './examples/PlayerExamples.jsx';

// Majd az App komponensben:
function App() {
    return <ExampleApp1 />;  // vagy ExampleApp2, ExampleApp3 stb.
}

AZ ÖSSZES JÁTÉKOS HOZZÁADÁSA playersData.json-hez:

{
  "revesz": { ... },
  "kristof": {
    "name": "KRISTÓF",
    "promo": "POTM Premier League",
    "image": "kristof",
    "stats": { ... }
  },
  "frater": {
    "name": "FRÁTER",
    ...
  }
}

VALAMINT AZ imageMap FRISSÍTÉSE Players.jsx-ben:

const imageMap = {
    revesz: reveszImg,
    kristof: kristofImg,
    frater: fraterImg,
    // stb.
};
*/

export { ExampleApp1, ExampleApp2, ExampleApp3, ExampleApp4, ExampleApp5, ExampleApp6 };
