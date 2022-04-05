import { useState, useEffect } from 'react';
import '../styles/Home.css';
import MapIcon from './MapIcon';

const Home = () => {
  const [maps, setMaps] = useState([]);

  // Fetch all map data on mount
  useEffect(() => {
    const mapUrl = 'http://localhost:3001/api/v1/maps';

    fetch(mapUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(data => setMaps(data));
  }, []);

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
