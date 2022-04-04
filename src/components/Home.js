import '../styles/Home.css';
import MapIcon from './MapIcon';
import maps from '../helpers/helpers';

const Home = () => {
  return (
    <section className='Home'>
      <h2 className='Card TitleCard'>Choose a map to start!</h2>

      <div className='MapGrid'>
        {maps.map((m) => 
          <MapIcon map={m} key={m.id} />
        )}
      </div>
    </section>
  )
};

export default Home;
