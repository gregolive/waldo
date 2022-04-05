import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Level from './Level';
import Footer from './Footer';

const apiUrl = 'http://localhost:3001/api/v1/maps';

function App() {
  const [maps, setMaps] = useState([]);

  const getMaps = () => {
    fetch(apiUrl, {mode: 'cors'})
    .then(response => response.json())
    .then(mapData => setMaps(mapData))
  };

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={<Home maps={maps} />} />
        <Route path='/:mapSlug' element={<Level maps={maps} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
