import '../styles/Home.css';
import MapIcon from './MapIcon';

const Home = ({ maps }) => {
  return (
    <section className='Home'>
      <h2 className='Card TitleCard'>Choose a map to start!</h2>

      <div className='MapGrid'>
        {maps.map((map) => 
          <MapIcon map={map} key={map.id} />
        )}
      </div>
    </section>
  )
};

export default Home;
