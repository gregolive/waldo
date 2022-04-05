import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/MapIcon.css';

const MapIcon = ({ map }) => {
  return (
    <Link to={map.id} className='Card MapIcon'>
      <img src={map.img} alt={map.name}/>

      <div className='MapInfo'>
        <span>
          Difficulty:
          &#160;
          <span className='Bubble Difficulty'>
            {[...Array(map.difficulty)].map((d, i) => <i className='fa-solid fa-star' key={i}></i>)}
          </span>
        </span>

        <span>
          High score:
          &#160;
          <span className='Bubble HighScore'>
            {map.highScore} s  
          </span>
        </span>
      </div>

      <h3>{map.name}</h3>
    </Link>
  );
};

export default MapIcon;
