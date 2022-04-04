import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/MapIcon.css';

const MapIcon = ({ name, img, difficulty, highScore }) => {
  return (
    <Link to='ski-slopes' className='Card MapIcon'>
      <img src={img} alt={name}/>

      <div className='MapInfo'>
        <span>
          Difficulty:
          &#160;
          <span className='Bubble Difficulty'>
            {[...Array(difficulty)].map((d, i) => <i className='fa-solid fa-magnifying-glass' key={i}></i>)}
          </span>
        </span>

        <span>
          High score:
          &#160;
          <span className='Bubble HighScore'>
            {highScore} s  
          </span>
        </span>
      </div>

      <h3>{ name }</h3>
    </Link>
  );
};

export default MapIcon;
