import { useState, useEffect } from 'react';
import './Home.css';
import MapIcon from './MapIcon';
import Loading from '../Loading/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [maps, setMaps] = useState([]);

  // Fetch all map data on mount and turn off loading
  useEffect(() => {
    const mapUrl = 'http://localhost:3001/api/v3/maps';

    fetch(mapUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setMaps(data));

    setLoading(false);
  }, []);

  const homeScreen = (
    <section className='Home'>
      <h2 className='Card TitleCard'>Choose a map to start!</h2>

      <div className='MapGrid'>
        {maps.map((map) => 
          <MapIcon map={map} key={map.id} />
        )}
      </div>
    </section>
  );

  return ((loading) ? <Loading /> : homeScreen);
};

export default Home;
