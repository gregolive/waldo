import { useParams } from 'react-router-dom';
import '../styles/Level.css';
import maps, { checkGuess } from '../helpers/helpers';

const Level = () => {
  const { mapId } = useParams();
  const map = maps.filter((m) => m.id === mapId)[0];

  const handleClick = (e) => {
    const characterId = checkGuess(e, map);
    if (characterId) {
      const target = map.characters.find((char) => char.id === characterId);
      target.found = true;
    }
  };

  return (
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
              {map.highScore} s  
            </span>
          </span>
        </header>

        <div className='LevelMain'>
          <div className='Characters'>
            {map.characters.map((char) =>
              <span key={char.id}>
                <span className={(char.found) ? 'Check Found' :'Check'}><i className='fa-solid fa-check'></i></span>
                <img src={char.img} alt='waldo' />
              </span>
            )}
          </div>

          <button type='button' className='MapButton' onClick={(e) => handleClick(e)}>
            <img src={map.img} alt={map.name} className='Map' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Level;
