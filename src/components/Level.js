import { useParams } from 'react-router-dom';
import '../styles/Level.css';

const Level = () => {
  const { levelName } = useParams();

  return (
    <section className='Level'>
      <h2 className='Card Title'>{levelName}</h2>


    </section>
  );
}

export default Level;
