import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import Level from './Level';
import Footer from './Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:levelName' element={<Level />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
