import { useParams } from 'react-router-dom';
import '../styles/Level.css';
import maps from '../helpers/helpers';

import waldo from '../img/characters/waldo.jpg';
import wilma from '../img/characters/wilma.jpg';
import wizard from '../img/characters/wizard.jpg';
import odlaw from '../img/characters/odlaw.jpg';

const Level = () => {
  const { mapId } = useParams();
  const map = maps.filter((m) => m.id === mapId)[0];

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
            <span>
              <span className='Check'><i className='fa-solid fa-check Found'></i></span>
              <img src={waldo} alt='waldo' />
            </span>
            <span>
              <span className='Check'><i className='fa-solid fa-check'></i></span>
              <img src={wilma} alt='wilma' />
            </span>
            <span>
              <span className='Check'><i className='fa-solid fa-check'></i></span>
              <img src={wizard} alt='wizard whitebeard' />
            </span>
            <span>
              <span className='Check'><i className='fa-solid fa-check'></i></span>
              <img src={odlaw} alt='odlaw' />
            </span>
          </div>

          <img src={map.img} alt={map.name} className='Map'/>
        </div>
      </div>
    </section>
  );
}

export default Level;
