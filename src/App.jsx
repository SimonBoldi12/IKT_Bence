import { useState } from 'react'
import './App.css'
import HomePage from './components/home-page/HomePage.jsx'
import Players from './components/players/Players.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedPlayer, setSelectedPlayer] = useState('revesz')

  const handlePlayerSelect = (playerKey) => {
    setSelectedPlayer(playerKey)
    setCurrentPage('player')
  }

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onPlayerSelect={handlePlayerSelect} />
      ) : (
        <>
          <nav style={styles.globalNav}>
            <div style={styles.navContainer}>
              <button onClick={() => setCurrentPage('home')} style={styles.homeBtn}>
                ← Vissza a főoldalra
              </button>
              <h2 style={styles.navTitle}>Játékos Profil</h2>
            </div>
          </nav>
          <Players playerKey={selectedPlayer} />
        </>
      )}
    </>
  )
}

const styles = {
  globalNav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: '#000',
    borderBottom: '3px solid rgb(77, 220, 125)',
    padding: '15px 0',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingX: '20px',
  },
  homeBtn: {
    backgroundColor: 'rgb(77, 220, 125)',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '12pt',
    cursor: 'pointer',
  },
  navTitle: {
    color: 'white',
    margin: 0,
  },
}

export default App
