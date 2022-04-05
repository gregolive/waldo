import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Level.css';
import { checkGuess } from '../helpers/helpers';

const Level = () => {
  const { mapSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState({});
  const [characters, setCharacters] = useState([]);
  console.log(map);

  // Fetch map data for selected level
  useEffect(() => {
    const mapUrl = `http://localhost:3001/api/v2/maps/${mapSlug}`;
  
    fetch(mapUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setMap(data));
  }, [mapSlug]);

  // Fetch character data when map updates and turn off loading
  useEffect(() => {
    const characterUrl = `http://localhost:3001/api/v2/characters/${map.id}`;
  
    fetch(characterUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setCharacters(data));

    setLoading(false);
  }, [map]);

  const handleClick = (e) => {
    const characterId = checkGuess(e, map);
    if (characterId) {
      const target = map.characters.find((char) => char.id === characterId);
      target.found = true;
    }
  };

  return (
    <>
      {(loading) ?
      null :
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
              {(characters) ? characters.map((character) =>
                <span key={character.id}>
                  <span className={(false) ? 'Check Found' :'Check'}><i className='fa-solid fa-check'></i></span>
                  <img src={require(`../img/characters/${character.slug}.jpg`)} alt={character.name} />
                </span>
              ) : null}
            </div>

            <button type='button' className='MapButton' onClick={(e) => handleClick(e)}>
              {(Object.keys(map).length > 0) ? <img src={require(`../img/maps/${map.slug}.jpeg`)} alt={map.name} className='Map' /> : null}
            </button>
          </div>
        </div>
      </section>
      }
    </>
  );
}

export default Level;
