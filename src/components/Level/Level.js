import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { checkGuess, getCircleStyle } from '../../helpers/helpers';
import './Level.css';
import Loading from '../Loading/Loading';
import Timer from './Timer';

const Level = () => {
  const { mapSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState({});
  const [characters, setCharacters] = useState([]);
  const [found, setFound] = useState([]);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Fetch map data for selected level
  useEffect(() => {
    const mapUrl = `http://localhost:3001/api/v2/maps/${mapSlug}`;
  
    fetch(mapUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setMap(data));
  }, [mapSlug]);

  // When map updates fetch characters and turn off loading
  useEffect(() => {
    const characterUrl = `http://localhost:3001/api/v2/characters/${map.id}`;
  
    fetch(characterUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setCharacters(data));

    setLoading(false);
  }, [map]);

  // Update timer every second until gameOver
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => { setTime(time + 1) }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameOver, time]);

  // Check for gameover when a character is found
  useEffect(() => {
    if (found.length < 4) { return; }
    setGameOver(true);
  }, [found]);

  const handleSuccessfulClick = (character) => {
    setFound(found.concat({
      slug: character.slug,
      style: getCircleStyle(character),
    }));
  };

  const handleClick = (e) => {
    const character = checkGuess(e, characters);
    if (character && !found.includes((found) => found.slug === character.slug)) {
      handleSuccessfulClick(character);
      console.log('new')
    }
  };

  const levelScreen = (
    <section className='Level'>
      <div className='Card LevelCard'>
        <header className='LevelHeader'>
          <span>
            Difficulty:
            &#160;
            <span className='Bubble Difficulty'>
              {[...Array(map.difficulty)].map((d, i) => <i className='fa-solid fa-star' key={i}></i>)}
            </span>
          </span>

          <h2>{map.name}</h2>

          <span>
            High score:
            &#160;
            <span className='Bubble HighScore'>
              45 s  
            </span>
          </span>
        </header>

        <div className='LevelMain'>
          <div className='Characters'>
            <Timer time={time} />
            {(characters) ? characters.map((character) =>
              <span key={character.id}>
                <span className={(found.includes(character.slug)) ? 'Check Found' :'Check'}><i className='fa-solid fa-check'></i></span>
                <img src={require(`../../img/characters/${character.slug}.jpg`)} alt={character.name} />
              </span>
            ) : null}
          </div>

          <button type='button' className='MapButton' onClick={(e) => handleClick(e)}>
            {found.map((found) =>
              <img src={require('../../img/circle.png')} alt='' className='Circle' style={found.style} key={found.slug} />
            )}
            {(Object.keys(map).length > 0) ? <img src={require(`../../img/maps/${map.slug}.jpeg`)} alt={map.name} className='Map' /> : null}
          </button>
        </div>
      </div>
    </section>
  );

  return ((loading) ? <Loading /> : levelScreen);
}

export default Level;
