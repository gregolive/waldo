import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
