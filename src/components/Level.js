import { useParams } from 'react-router-dom';
import '../styles/Level.css';
import maps from '../helpers/helpers';

const Level = () => {
  const { mapId } = useParams();
  const map = maps.filter((m) => m.id === mapId)[0];

  return (
    <section className='Level'>
      <h2 className='Card Title'>{map.name}</h2>


    </section>
  );
}

export default Level;
